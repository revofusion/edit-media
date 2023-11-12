import { getFileMetadata } from "@os/invoke/ffprobe";
import { FfprobeResponse } from "@formatters/ffprobeStreams";
import { path } from '@os/Path'

interface MediaData { src: string, path: string, name: string, metadata?: FfprobeResponse, file?: File }
    
export class Media {
    public src: string;
    public path: string;
    public name: string;
    public metadata?: FfprobeResponse;
    public file?: File

    constructor (
        mediaData: MediaData
    ) {
        this.src = mediaData.src;
        this.path = mediaData.path;
        this.name = mediaData.name;
        this.metadata = mediaData.metadata;
        this.file = mediaData.file;
    }

    get extension() {
        return this.name.split('.').pop()
    }

    get directory() {
        const pathSplit = this.path.split(path.sep)
        pathSplit.pop()
        return pathSplit.join(path.sep)
    }

    get nameWithoutExtension() {
        return this.name.split('.')[0]
    }

    nameWithNewExtension(extension: string, timestamp: boolean = false): string {
        if (timestamp) {
            return `${this.nameWithoutExtension}-${+new Date()}.${extension}`
        } else {
            return `${this.nameWithoutExtension}.${extension}`
        }
    }

    async setMetadata() {
        const fileMetadata = await getFileMetadata(this)
        if (!fileMetadata) {
            throw new Error('Could not get metadata')
        }
        this.metadata = fileMetadata
    }

    static async fromPath(_path: string): Promise<Media | undefined> {
        const { src, file } = await path.convertFileSrc(_path)
        return new Media({
            path: _path,
            src,
            file,
            name: _path.split(path.sep).pop(),
        })
    }

    static async fromPathSafe(_path: string): Promise<Media | undefined> {
        if (await path.isDir(_path)) {
            throw new Error('Is a directory')
        }

        return await Media.fromPath(_path)
    }

    static async fromPathWithMetadata (_path: string): Promise<Media | undefined> {
        const media = await Media.fromPathSafe(_path)
        await media.setMetadata()
        return media
    }


    static async fromFile (file: File): Promise<Media | undefined> {
        const media = new Media({
            file,
            path: file.webkitRelativePath,
            src: URL.createObjectURL(file),
            name: file.name
        })
        await media.setMetadata()
        return media
    }
}
