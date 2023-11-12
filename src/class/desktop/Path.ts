import { IPath } from "@class/types/Path";
import { resolveResource, sep, videoDir,} from "@tauri-apps/api/path";
import { createDir, exists, metadata, readDir } from "@tauri-apps/plugin-fs";
import { open } from '@tauri-apps/plugin-dialog';
import { convertFileSrc } from "@tauri-apps/api/primitives";

class Path implements IPath {
    public sep: string = sep();
    public defaultFontPath: string;
    public videoDir: string;

    async getDefaultFontPath() {
        if (!this.defaultFontPath) {
            this.defaultFontPath = await resolveResource("resources/Arial.ttf")
        }
        return this.defaultFontPath
    }

    async convertFileSrc(path: string) {
        return {
            src: convertFileSrc(path)
        }
    }

    async createDir(dir: string, recursive: boolean = true) {
        return createDir(dir, { recursive })
    }

    async readDir(dir: string, recursive: boolean = true) {
        return readDir(dir, { recursive })
    }

    async exists(path: string) {
        return exists(path)
    }

    async isFile(path: string) {
        const fileName = path.split(this.sep).pop()
        return fileName.includes('.')
    }

    async isDir(path: string) {
        const { isDir } = await metadata(path)
        return isDir
    }

    async getVideoDir() {
        if (!this.videoDir) {
            this.videoDir = await videoDir()
        }
        return this.videoDir
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
     * OPEN
     */
    async openDirectory() {
        // Open a selection dialog for directories
        const selected = await open({
            directory: true,
            multiple: false,
            // defaultPath: await appDataDir(),
        });

        return {
            directory: selected,
            label: selected.split(this.sep).pop()
        }
    }
}

export const path = new Path()
