export interface FileEntry {
    path: string;
    /**
     * Name of the directory/file
     * can be null if the path terminates with `..`
     */
    name?: string;
    /** Children of this entry if it's a directory; null otherwise */
    children?: FileEntry[];
}

export interface IPath {
    sep: string;
    defaultFontPath: string;
    videoDir: string;
    getDefaultFontPath(): Promise<string>;
    createDir(dir: string, recursive?: boolean): Promise<void>;
    readDir(dir: string, recursive?: boolean): Promise<FileEntry[]>;
    exists(path: string): Promise<boolean>;
    isFile(path: string): Promise<boolean>;
    isDir(path: string): Promise<boolean>;
    getVideoDir(): Promise<string>;
    editMediaDownloadDir(): Promise<string>;
    editMediaOutputDir(): Promise<string>;
    editMediaOutputSubfolderDir(subfolder: string): Promise<string>;
    openDirectory(): Promise<{ directory: string, label: string } | null>
    convertFileSrc(path: string): Promise<{ src: string, file?: File }>
}