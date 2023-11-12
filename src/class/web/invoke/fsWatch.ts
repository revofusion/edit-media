export interface WatchOptions {
  recursive?: boolean;
}

export interface DebouncedWatchOptions extends WatchOptions {
  delayMs?: number;
}

export type RawEvent = {
  type: RawEventKind;
  paths: string[];
  attrs: unknown;
};

type RawEventKind =
  | "any "
  | {
      access?: unknown;
    }
  | {
      create?: unknown;
    }
  | {
      modify?: unknown;
    }
  | {
      remove?: unknown;
    }
  | "other";


export async function watchImmediate(
  _paths: string | string[],
  _cb: (event: RawEvent) => void,
  _options: WatchOptions = {},
): Promise<any> {
  // const interval = setInterval(() => {
  //   for (const path of paths) {
      
  //   }
  // }, 5000)


  return async function () {};
}