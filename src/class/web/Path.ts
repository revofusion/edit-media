import { FileEntry, IPath } from '@class/types/Path';
import { EasyFileAccess } from './FS'

let fs: EasyFileAccess

declare global {
    interface Window {
        showDirectoryPicker: any;
    }
}

class Path implements IPath {
    public sep: string = '/';
    public defaultFontPath: string;
    public videoDir: string;

    async getDefaultFontPath() {
        if (!this.defaultFontPath) {
            this.defaultFontPath = "resources/Arial.ttf"
        }
        return this.defaultFontPath
    }

    async convertFileSrc(_path: string): Promise<{ src: string, file?: File }> {
        const file = await fs.getFile(_path)
        return {
            src: URL.createObjectURL(file),
            file
        }
    }

    async createDir(dir: string, recursive: boolean = true) {
        const exists = await fs.exists(dir + '/')
        if (exists) {
            return
        }

        if (recursive) {
            await fs.mkdir(dir);
        } else {
            // NOTE still recursive
            await fs.mkdir(dir);
        }
    }

    async readDir(dir: string, recursive: boolean = true): Promise<FileEntry[]> {
        const rawResults = await fs.list(dir)

        const results: FileEntry[] = rawResults
            .map(file => {
                const path = file
                const splitPath = path.split(this.sep)
                const name = splitPath[splitPath.length - 1] ? splitPath.pop() : splitPath[splitPath.length - 2]
                return { path, name }
            })
            // Remove dotfiles
            .filter(_ => !_.name || !_.name[0].startsWith('.'));
    
        if (recursive) {
            for (let i = 0; i < results.length; i++) {
                const stat = await fs.stat(results[i].path);
                if (stat && stat.isDirectory()) {
                    const nestedFiles = await this.readDir(results[i].path, true);
                    results[i].children = nestedFiles;
                }
            }
        }
    
        return results;
    }

    async exists(path: string) {
        return await fs.exists(path);
    }

    async isFile(path: string) {
        const stats = await fs.stat(path);
        return stats.isFile();
    }

    async isDir(path: string) {
        const stats = await fs.stat(path);
        return stats.isDirectory();
    }

    async writeFile(path: string, file: Uint8Array) {
        await fs.writeBuffer(path, file)
    }

    async getVideoDir() {
        return `/Movies`
    }

    async editMediaDownloadDir() {
        const downloadsDirectoryPath = [await this.getVideoDir(), 'EditMedia-Downloads'].join(this.sep)
        await this.createDir(downloadsDirectoryPath)
        return downloadsDirectoryPath
    }

    async editMediaOutputDir() {
        const outputsDirectoryPath = [await this.getVideoDir(), 'EditMedia-Outputs'].join(this.sep)
        await this.createDir(outputsDirectoryPath)
        return outputsDirectoryPath
    }

    async editMediaOutputSubfolderDir(subfolder: string) {
        const outputsSubfolderDirectoryPath = [await this.getVideoDir(), 'EditMedia-Outputs', subfolder].join(this.sep)
        await this.createDir(outputsSubfolderDirectoryPath)
        return outputsSubfolderDirectoryPath
    }

    /**
     * Open
     */
    async openDirectory() {
        const handle = await window.showDirectoryPicker({
            mode: 'readwrite',
        });

        if (handle.kind === 'directory') {
            fs = new EasyFileAccess(handle, this.sep)

            return {
                directory: '/',
                label: handle.name
            }
        } else {
            return null
        }
    }
}

export const path = new Path()
