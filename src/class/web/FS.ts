import { configure, registerBackend } from '@browserfs/core';
import { promises as fs, getMount } from '../../../node_modules/@browserfs/core/dist/emulation';
import { FileSystemAccessFileSystem, } from './FSAccess';
registerBackend(FileSystemAccessFileSystem as any);

export  class EasyFileAccess {
  sep: string = '/'

  constructor(handle: FileSystemHandle, sep: string) {
    configure({
      fs: "FileSystemAccess",
      options: { handle }
    }, function (e: any) {
      if (e) {
        throw e;
      }
    })
    this.sep = sep
  }

  /**
   * PATH FUNCTIONS
   */
  isAbsolute = (name: string): boolean => {
    return name.startsWith(this.sep);
  };

  // Replace path.dirname
  dirname = (name: string): string => {
    return name.substring(0, name.lastIndexOf(this.sep)) || this.sep;
  };

  // Replace path.join
  pathJoin = (...parts: string[]): string => {
    return parts.join(this.sep).replace(new RegExp(`${this.sep}{2,}`, 'g'), this.sep);
  };

  /**
   * FS
   */

  getFile = async (path: string): Promise<File> => {
    const handles = (getMount('/') as any)._handles
    const hasFile = handles.has(path)
    if (!hasFile) {
      throw new Error(`File ${path} does not exist in file system`)
    }
    return await handles.get(path).getFile()
  }

  abs = (name = ".", base = '/') => {
    name = name;
    base = base;

    // Absolute paths do not need more absolutism
    if (this.isAbsolute(name)) return name;

    // We are off-base here; recover the viable base option
    if (!base || typeof base !== "string") {
      base = '/'
    }

    // Return the file/folder within the base
    return this.join(base, name);
  };

  cat = async (name: string):Promise<string> => {
    name = await this.abs(name);
    return await fs.readFile(name, "utf-8")
  };

  dir =  (name: string):string => {
    name = this.abs(name);
    if (name === '/'){
      return this.dirname(name);
    }
    if (name.endsWith('/')){
      name = name.slice(0,name.length-1)
    }
    return this.dirname(name);
  };

  exists = async (name:string) :Promise<boolean>=> {
    name = await this.abs(name);
    if (!await fs.exists(name) as boolean){
      return false
    }

    const isDir = (await this.stat(name)).isDirectory();
    if (name.endsWith('/') !== isDir) {
      return false;
    }

    return true
  };

  join = (...parts: string[]):string => this.abs(this.pathJoin(...parts));

  list = async (dir:string): Promise<string[]> => {
    dir = await this.abs(dir);
    const files = await fs.readdir(dir);
    const promises = files.map(async (file) => {
      const full_path = this.abs(file, dir)
      const file_name = full_path.split(this.sep).pop()
      if (file_name.startsWith('.')) {
        return null
      }

      const stats = await this.stat(full_path)
      if (stats.isDirectory()){
        return this.join(full_path, this.sep)
      } else if (stats.isFile()) {
        return full_path
      } else {
        return null
      }
    })
    const result = await Promise.all(promises)
    return result.filter(_ => !!_);
  };

  mkdir = async (name:string) => {
    name = await this.abs(name);

    // Create a recursive list of paths to create, from the highest to the lowest
    const list = name
      .split(this.sep)
      .map((_, i, all) => all.slice(0, i + 1).join(this.sep)).map(
        p=>{return this.pathJoin(p, this.sep)}
      )
      .filter(Boolean);

    // Build each nested path sequentially
    for (let path of list) {
      if (await this.exists(path)) continue;
      await fs.mkdir(path)
    }
    return name;
  };

  move = async (src:string, dst:string) => {
    if ((src.endsWith('/') && dst.endsWith('/')) || (!src.endsWith('/') && !dst.endsWith('/'))){
    } else{
      throw new Error('Only rename file to file or folder to folder')
    }
    try {
      src = await this.abs(src);
      dst = await this.abs(dst);
      await this.mkdir(this.dir(dst));
      await fs.rename(src, dst);
      return dst;
    } catch (error) {
      throw error
    }
  };

  remove = async (name:string) => {
    name = await this.abs(name);
    if (name === "/") throw new Error("Cannot remove the root folder `/`");
    if (!(await this.exists(name))) return name;

    if ((await this.stat(name)).isDirectory()) {
      // Remove all content recursively
      await Promise.all((await this.list(name)).map(this.remove))
      await fs.rmdir(name)
    } else {
      await fs.unlink(name)
    }
    return name;
  };

  stat = async (name:string) => {
    name = await this.abs(name);
    return await fs.stat(name);
  };

  write = async (name:string, body = "") => {
    name = await this.abs(name);
    await this.mkdir(this.dir(name));
    await fs.writeFile(name, body, "utf-8");
    return name;
  };

  writeBuffer = async (name:string, body: Uint8Array) => {
    name = await this.abs(name);
    await this.mkdir(this.dir(name));
    await fs.writeFile(name, body);
    return name;
  };

  add = async (full_path: string)=>{
    if (full_path.endsWith('/')) {
      await this.mkdir(full_path)
    } else{
      await this.write(full_path, '')
    }
  }

  add_for = async (par: string, child: string) => {
    var part1
    if (par.endsWith('/')){
      part1 = par
    }else{
      part1 = this.dir(par)
    }
    
    await this.add(this.pathJoin(part1, child))
  }
}
