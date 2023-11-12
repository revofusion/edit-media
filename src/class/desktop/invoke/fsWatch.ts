import { invoke } from "@tauri-apps/api/primitives";
import { UnlistenFn } from "@tauri-apps/api/event";
import { Channel } from "@os/Channel";

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

export type DebouncedEvent =
  | { kind: "any"; path: string }
  | { kind: "AnyContinous"; path: string };

async function unwatch(id: number): Promise<void> {
  await invoke("plugin:fs|unwatch", { id });
}

export async function watch(
  paths: string | string[],
  cb: (event: DebouncedEvent) => void,
  options: DebouncedWatchOptions = {},
): Promise<UnlistenFn> {
  const opts = {
    recursive: false,
    delayMs: 2000,
    ...options,
  };
  let watchPaths;
  if (typeof paths === "string") {
    watchPaths = [paths];
  } else {
    watchPaths = paths;
  }

  const id = window.crypto.getRandomValues(new Uint32Array(1))[0];

  let isActive = true
  const onEvent = new Channel()
  onEvent.onmessage = (event: DebouncedEvent) => {
    if (isActive) {
      cb(event)
    }
  }

  await invoke("plugin:fs|watch", {
    id,
    paths: watchPaths,
    options: opts,
    onEvent
  });

  return async () => {
    isActive = false
    await unwatch(id);
  };
}

export async function watchImmediate(
  paths: string | string[],
  cb: (event: RawEvent) => void,
  options: WatchOptions = {},
): Promise<UnlistenFn> {
  const opts = {
    recursive: false,
    ...options,
    delayMs: null,
  };
  let watchPaths;
  if (typeof paths === "string") {
    watchPaths = [paths];
  } else {
    watchPaths = paths;
  }

  const id = window.crypto.getRandomValues(new Uint32Array(1))[0];

  let isActive = true
  const onEvent = new Channel()
  onEvent.onmessage = (event: RawEvent) => {
    if (isActive) {
      cb(event)
    }
  }
  await invoke("plugin:fs|watch", {
    id,
    paths: watchPaths,
    options: opts,
    onEvent: onEvent
  });

  return async function () {
    isActive = false
    await unwatch(id);
  };
}