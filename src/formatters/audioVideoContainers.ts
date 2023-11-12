export interface AudioVideoContainer {
    key: string;
    label: string;
    type: 'audio' | 'video'
}

export const audioVideoContainers: AudioVideoContainer[] = [
    {"key": "mp4", "label": "MP4", "type": "video"},
    {"key": "mkv", "label": "MKV", "type": "video"},
    {"key": "webm", "label": "WebM", "type": "video"},
    {"key": "mpg", "label": "MPG", "type": "video"},
    {"key": "avi", "label": "AVI", "type": "video"},
    {"key": "ogv", "label": "OGV", "type": "video"},
    {"key": "flv", "label": "FLV", "type": "video"},
    {"key": "mov", "label": "MOV", "type": "video"},
    {"key": "wmv", "label": "WMV", "type": "video"},
    {"key": "m2ts", "label": "M2TS", "type": "video"},
    {"key": "ts", "label": "TS", "type": "video"},
    {"key": "3gp", "label": "3GP", "type": "video"},
    {"key": "mxf", "label": "MXF", "type": "video"},
    {"key": "vob", "label": "VOB", "type": "video"},
    {"key": "mp3", "label": "MP3", "type": "audio"},
    {"key": "m4a", "label": "M4A", "type": "audio"},
    {"key": "ogg", "label": "OGG", "type": "audio"},
    {"key": "flac", "label": "FLAC", "type": "audio"},
    {"key": "wav", "label": "WAV", "type": "audio"},
    {"key": "aac", "label": "AAC", "type": "audio"},
    {"key": "ac3", "label": "AC3", "type": "audio"},
    {"key": "ec3", "label": "EAC3", "type": "audio"},
    {"key": "opus", "label": "OPUS", "type": "audio"},
    {"key": "wma", "label": "WMA", "type": "audio"},
    {"key": "alac", "label": "ALAC", "type": "audio"}
]

export const audioVideoContainersByKeys: { [key: string]: AudioVideoContainer } = audioVideoContainers.reduce((acc, container) => {
    acc[container.key] = container;
    return acc;
}, {});

export const videoContainers: AudioVideoContainer[] = audioVideoContainers.filter(_ => _.type === 'video');
export const audioContainers: AudioVideoContainer[] = audioVideoContainers.filter(_ => _.type === 'audio');