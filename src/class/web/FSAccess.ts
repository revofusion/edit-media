import { basename, dirname, join } from '@browserfs/core/emulation/path.js';
import { ApiError, ErrorCode } from '@browserfs/core/ApiError.js';
import { Cred } from '@browserfs/core/cred.js';
import { FileFlag, PreloadFile } from '@browserfs/core/file.js';
import { BaseFileSystem, FileSystemMetadata } from '@browserfs/core/filesystem.js';
import { Stats, FileType } from '@browserfs/core/stats.js';
import { CreateBackend, type BackendOptions } from '@browserfs/core/backends/backend.js';

declare global {
	interface FileSystemDirectoryHandle {
		[Symbol.iterator](): IterableIterator<[string, FileSystemHandle]>;
		entries(): IterableIterator<[string, FileSystemHandle]>;
		keys(): IterableIterator<string>;
		values(): IterableIterator<FileSystemHandle>;
	}
}

interface FileSystemAccessFileSystemOptions {
	handle: FileSystemDirectoryHandle;
}

const handleError = (path = '', error: Error) => {
	if (error.name === 'NotFoundError') {
		throw ApiError.ENOENT(path);
	}

	throw error as ApiError;
};

export class FileSystemAccessFile extends PreloadFile<FileSystemAccessFileSystem> {
	constructor(_fs: FileSystemAccessFileSystem, _path: string, _flag: FileFlag, _stat: Stats, contents?: Uint8Array) {
		super(_fs, _path, _flag, _stat, contents);
	}

	public async sync(): Promise<void> {
		if (this.isDirty()) {
			await this._fs._sync(this.getPath(), this.getBuffer(), this.getStats(), Cred.Root);
			this.resetDirty();
		}
	}

	public async close(): Promise<void> {
		await this.sync();
	}
}

export class FileSystemAccessFileSystem extends BaseFileSystem {
	public static readonly Name = 'FileSystemAccess';

	public static Create = CreateBackend.bind(this);

	public static readonly Options: BackendOptions = {};

	public static isAvailable(): boolean {
		return typeof FileSystemHandle === 'function';
	}

	private _handles: Map<string, FileSystemHandle> = new Map();

	public constructor({ handle }: FileSystemAccessFileSystemOptions) {
		super();
		this._handles.set('/', handle);
	}

	public get metadata(): FileSystemMetadata {
		return {
			...super.metadata,
			name: FileSystemAccessFileSystem.Name,
		};
	}

	public async _sync(p: string, data: Uint8Array, stats: Stats, cred: Cred): Promise<void> {
		const currentStats = await this.stat(p, cred);
		if (stats.mtime !== currentStats!.mtime) {
			await this.writeFile(p, data, FileFlag.getFileFlag('w'), currentStats!.mode, cred);
		}
	}

	public async rename(oldPath: string, newPath: string, cred: Cred): Promise<void> {
		try {
			const handle = await this.getHandle(oldPath);
			if (handle instanceof FileSystemDirectoryHandle) {
				const files = await this.readdir(oldPath, cred);

				await this.mkdir(newPath, 'wx', cred);
				if (files.length === 0) {
					await this.unlink(oldPath, cred);
				} else {
					for (const file of files) {
						await this.rename(join(oldPath, file), join(newPath, file), cred);
						await this.unlink(oldPath, cred);
					}
				}
			}
			if (handle instanceof FileSystemFileHandle) {
				const oldFile = await handle.getFile(),
					destFolder = await this.getHandle(dirname(newPath));
				if (destFolder instanceof FileSystemDirectoryHandle) {
					const newFile = await destFolder.getFileHandle(basename(newPath), { create: true });
					const writable = await newFile.createWritable();
					const buffer = await oldFile.arrayBuffer();
					await writable.write(buffer);

					writable.close();
					await this.unlink(oldPath, cred);
				}
			}
		} catch (err) {
			handleError(oldPath, err);
		}
	}

	public async getFile(path: string): Promise<File> {
		const handle = await this.getHandle(path);
		if (handle instanceof FileSystemFileHandle) {
			return await handle.getFile();
		}
		throw new Error(`No file found at path: ${path}`);
	}

	public async writeFile(fname: string, data: any, _flag: FileFlag, _mode: number, _cred: Cred): Promise<void> {
		const handle = await this.getHandle(dirname(fname));
		if (handle instanceof FileSystemDirectoryHandle) {
			const file = await handle.getFileHandle(basename(fname), { create: true });
			const writable = await file.createWritable();
			await writable.write(data);
			await writable.close();
			//return createFile ? this.newFile(fname, flag, data) : undefined;
		}
	}

	public async createFile(p: string, flag: FileFlag, mode: number, cred: Cred): Promise<FileSystemAccessFile> {
		await this.writeFile(p, new Uint8Array(), flag, mode, cred);
		return this.openFile(p, flag, cred);
	}

	public async stat(path: string, _: Cred): Promise<Stats> {
		const handle = await this.getHandle(path);
		if (!handle) {
			throw ApiError.FileError(ErrorCode.EINVAL, path);
		}
		if (handle instanceof FileSystemDirectoryHandle) {
			return new Stats(FileType.DIRECTORY, 4096);
		}
		if (handle instanceof FileSystemFileHandle) {
			const { lastModified, size } = await handle.getFile();
			return new Stats(FileType.FILE, size, undefined, undefined, lastModified);
		}
	}

	public async exists(p: string, _: Cred): Promise<boolean> {
		try {
			await this.getHandle(p);
			return true;
		} catch (e) {
			return false;
		}
	}

	public async openFile(path: string, flags: FileFlag, _: Cred): Promise<FileSystemAccessFile> {
		const handle = await this.getHandle(path);
		if (handle instanceof FileSystemFileHandle) {
			const file = await handle.getFile();
			const buffer = await file.arrayBuffer();
			return this.newFile(path, flags, buffer, file.size, file.lastModified);
		}
	}

	public async unlink(path: string, _cred: Cred): Promise<void> {
		const handle = await this.getHandle(dirname(path));
		if (handle instanceof FileSystemDirectoryHandle) {
			try {
				await handle.removeEntry(basename(path), { recursive: true });
			} catch (e) {
				handleError(path, e);
			}
		}
	}

	public async rmdir(path: string, cred: Cred): Promise<void> {
		return this.unlink(path, cred);
	}

	public async mkdir(p: string, mode: any, cred: Cred): Promise<void> {
		const overwrite = mode && mode.flag && mode.flag.includes('w') && !mode.flag.includes('x');

        const exists = await this.exists(p, cred)
		if (exists && !overwrite) {
			throw ApiError.EEXIST(p);
		}

		const handle = await this.getHandle(dirname(p));
		if (handle instanceof FileSystemDirectoryHandle) {
			await handle.getDirectoryHandle(basename(p), { create: true });
		}
	}

	public async readdir(path: string, _cred: Cred): Promise<string[]> {
		const handle = await this.getHandle(path);
		if (!(handle instanceof FileSystemDirectoryHandle)) {
			throw ApiError.ENOTDIR(path);
		}
		const _keys: string[] = [];
		for await (const key of handle.keys()) {
			_keys.push(join(path, key));
		}
		return _keys;
	}

	private newFile(path: string, flag: FileFlag, data: ArrayBuffer, size?: number, lastModified?: number): FileSystemAccessFile {
		return new FileSystemAccessFile(this, path, flag, new Stats(FileType.FILE, size || 0, undefined, undefined, lastModified || new Date().getTime()), new Uint8Array(data));
	}

    private async getHandle(path: string): Promise<FileSystemHandle> {
        if (this._handles.has(path)) {
            return this._handles.get(path);
        }
    
        let walkedPath = '/';
        const pathParts = path.split('/').slice(1);
    
        for (const pathPart of pathParts) {
            try {
                const parentHandle = this._handles.get(walkedPath) as FileSystemDirectoryHandle;
                walkedPath = join(walkedPath, pathPart)
                if (this._handles.has(walkedPath)) {
                    continue
                }

                const childHandle = await this.getHandleFromDirectory(parentHandle, pathPart)
                this._handles.set(walkedPath, childHandle);
            } catch (error) {
                this.handleErrorBasedOnErrorType(walkedPath, error);
            }
        }
    
        return this._handles.get(path);
    }
    
    private async getHandleFromDirectory(handle: FileSystemDirectoryHandle, pathPart: string): Promise<FileSystemHandle> {
        try {
            return await handle.getDirectoryHandle(pathPart);
        } catch (error) {
            if (error.name === 'TypeMismatchError') {
                return await handle.getFileHandle(pathPart);
            }
            throw error;
        }
    }
    
    private handleErrorBasedOnErrorType(walkingPath: string, error: Error): void {
        if (error.message === 'Name is not allowed.') {
            throw new ApiError(ErrorCode.ENOENT, error.message, walkingPath);
        } else {
            handleError(walkingPath, error);
        }
    }
}