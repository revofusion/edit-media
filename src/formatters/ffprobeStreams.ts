export interface Tags {
    handler_name: string;
    language:     string;
}

export interface AudioStream {
    avg_frame_rate:   string;
    bit_rate:         string;
    bits_per_sample:  number;
    channel_layout:   string;
    channels:         number;
    codec_long_name:  string;
    codec_name:       string;
    codec_tag:        string;
    codec_tag_string: string;
    codec_time_base:  string;
    codec_type:       'audio' | string;
    disposition:      any;
    duration:         string;
    duration_ts:      number;
    index:            number;
    max_bit_rate:     string;
    nb_frames:        string;
    profile:          string;
    r_frame_rate:     string;
    sample_fmt:       string;
    sample_rate:      string;
    start_pts:        number;
    start_time:       string;
    tags:             any;
    time_base:        string;
}

export interface VideoStream {
    avg_frame_rate:      string;
    bit_rate:         string | number;
    bits_per_raw_sample: string;
    chroma_location:     string;
    codec_long_name:     string;
    codec_name:          string;
    codec_tag:           string;
    codec_tag_string:    string;
    codec_time_base?:     string;
    codec_type:          'video' | string;
    coded_height?:        number;
    coded_width?:         number;
    color_primaries:     string;
    color_range:         string;
    color_space?:         string;
    color_transfer?:      string;
    disposition:         any;
    duration:            string;
    duration_ts:         number;
    has_b_frames:        number;
    height:              number;
    index:               number;
    is_avc:              string;
    level:               number;
    nal_length_size:     string;
    nb_frames:           string;
    pix_fmt:             string;
    profile:             string;
    r_frame_rate:        string;
    refs:                number;
    start_pts:           number;
    start_time:          string;
    tags:                any;
    time_base:           string;
    width:               number;
}

export interface Format {
    bit_rate:         string;
    duration:         string;
    filename:         string;
    format_long_name: string;
    format_name:      string;
    nb_programs:      number;
    nb_streams:       number;
    probe_score:      number;
    size:             string;
    start_time:       string;
    tags?:             {
        compatible_brands: string;
        encoder:           string;
        major_brand:       string;
        minor_version:     string;
    } | any;
}

export interface FfprobeRawResponse {
    format: Format
    streams: (AudioStream | VideoStream)[]
}

export const processFfprobeRaw = (raw: FfprobeRawResponse): FfprobeResponse => {
    return {
        format: raw.format,
        audioStreams: raw.streams.filter(_ => _.codec_type === 'audio') as AudioStream[],
        videoStreams: raw.streams.filter(_ => _.codec_type === 'video') as VideoStream[],
    }
}

export interface FfprobeResponse {
    format: Format
    videoStreams: VideoStream[]
    audioStreams: AudioStream[]
}