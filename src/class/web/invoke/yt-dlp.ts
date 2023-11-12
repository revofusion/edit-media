import { Command } from "@tauri-apps/plugin-shell"
import { invoke } from "@tauri-apps/api/primitives"
import { showInFinder } from "./showInFinder"
import * as Sentry from "@sentry/browser";
import { platform } from '@tauri-apps/plugin-os';

export const getAllFormats = async (url: string): Promise<VideoData | null> => {
  const args = [
    '--dump-json', url
  ]

  const sidecar = Command.sidecar('bin/ytdlp/ytdlp', args)

  const { stdout, stderr } = await sidecar.execute()

  const parsed = JSON.parse(stdout)

  try {
    return parsed
  } catch (e) {
    console.error(e)
    Sentry.captureException({
      error: e,
      args,
      stdout,
      stderr
    })
    return null
  }
}

export const downloadFormat = async (url: string, directory: string, format?: string): Promise<{ error: string }> => {
  let ffmpegPath: string = await invoke('ffmpeg_path')

  const platformName = await platform();
  if (platformName === 'windows') {
    ffmpegPath += '.exe'
  }

  const args = [
    '-P', directory,
    '--ffmpeg-location', ffmpegPath,
    '-o', "%(extractor)s-%(uploader)s-%(title).30B-%(resolution)s-%(tbr)s-[%(id)s].%(ext)s",
    url
  ]

  if (format) {
    args.unshift('-f', format)
  } else {
    args.unshift('--recode-video', 'mp4')
  }

  const sidecar = Command.sidecar('bin/ytdlp/ytdlp', args)

  const { stderr } = await sidecar.execute()

  if (!stderr) {
    await showInFinder(directory)
  }

  return {
    error: stderr
  }
}



type Thumbnail = {
  url: string;
  preference: number;
  id: string;
};

type Version = {
  version: string;
  current_git_head: null | string;
  release_git_head: string;
  repository: string;
};

export type VideoData = {
  _filename: string;
  _format_sort_fields: string[];
  _has_drm: null;
  _type: "video";
  _version: Version;
  abr: number;
  acodec: string;
  age_limit: number;
  aspect_ratio: number;
  asr: number;
  audio_channels: number;
  automatic_captions: Record<string, any[]>;
  availability: string;
  average_rating: null;
  categories: string[];
  channel: string;
  channel_follower_count: number;
  channel_id: string;
  channel_url: string;
  chapters: null;
  comment_count: number;
  description: string;
  display_id: string;
  duration: number;
  duration_string: string;
  dynamic_range: string;
  epoch: number;
  ext: string;
  extractor: string;
  extractor_key: string;
  filename: string;
  filesize_approx: number;
  format: string;
  format_id: string;
  format_note: string;
  formats: any[]; // The specific type for Object was not provided, so I'm using any[] here.
  fps: number;
  fulltitle: string;
  heatmap: null;
  height: number;
  id: string;
  is_live: boolean;
  language: string;
  like_count: number;
  live_status: string;
  original_url: string;
  playable_in_embed: boolean;
  playlist: null;
  playlist_index: null;
  protocol: string;
  release_timestamp: null;
  requested_formats: any[]; // The specific type for Object was not provided, so I'm using any[] here.
  requested_subtitles: null;
  resolution: string;
  stretched_ratio: null;
  subtitles: Record<string, any[]>;
  tags: string[];
  tbr: number;
  thumbnail: string;
  thumbnails: Thumbnail[];
  title: string;
  upload_date: string;
  uploader: string;
  uploader_id: string;
  uploader_url: string;
  url?: string;
  vbr: number;
  vcodec: string;
  view_count: number;
  was_live: boolean;
  webpage_url: string;
  webpage_url_basename: string;
  webpage_url_domain: string;
  width: number;
};