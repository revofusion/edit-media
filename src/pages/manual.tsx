import { Accordion, Badge, Button, Label, RangeSlider, TextInput, ToggleSwitch } from "flowbite-react";
import { useState, type FC, useReducer, useRef, useEffect } from "react";
import * as Sentry from "@sentry/browser";
import ReactPlayer from 'react-player'
import _ from 'lodash'
import classNames from "classnames";
import { BiSolidVideos } from "react-icons/bi";
import { useLocation } from "react-router-dom";

import { useDropStore } from "@stores/drop";
import { useConfigStore } from "@stores/config";
import { formatSeconds } from "@helpers/formatSeconds";
import superbytes from "@helpers/superbytes";
import { Media } from "@class/Media";
import { useFfmpeg } from "@class/hooks/useFfmpeg";
import isAudio from "@helpers/isAudio";
import isVideo from "@helpers/isVideo";

import OpenPage from "@components/Chat/OpenPage";
import FileTree from "@components/Chat/FileTree";
import AudioChannelSelector from "@components/Manual/AudioChannelSelector";
import { DragAndDrop } from "@components/DragAndDrop";
import LoadingCircle from "@components/LoadingCircle";
import AudioDecoderCodecSelector from "@components/Manual/AudioDecoderCodecs";
import TuneSelector from "@components/Manual/TuneSelector";
import PixelFormatSelector from "@components/Manual/PixelFormatSelector";
import PresetSelector from "@components/Manual/PresetSelector";
import ResolutionSelector from "@components/Manual/ResolutionSelector";
import VideoDecoderCodecSelector from "@components/Manual/VideoDecoderCodecSelector";
import { Container } from "@components/website/Container";
import AudioVideoFormatSelector from "@components/Manual/AudioVideoFormatSelector";
import AudioPlayer from "@components/AudioPlayer";

import { path } from "@os/Path";
import { showInFinder } from "@os/invoke/showInFinder";

import { AudioVideoContainer, audioVideoContainers } from "@formatters/audioVideoContainers";
import { VideoResolution, videoResolutions } from "@formatters/videoResolutions";
import { Codec, audioCodecs, videoCodecs } from "@formatters/codecs";
import { PixelFormat, pixelFormats } from "@formatters/pix";
import { Preset } from "@formatters/presets";
import { Tune, tunes } from "@formatters/tunes";
import { AudioChannel, audioChannels } from "@formatters/audioChannels";

export type SetContainer = { type: 'container'; payload: AudioVideoContainer };
export type SetResolution = { type: 'resolution', payload: VideoResolution };
type SetResolutionHeight = { type: 'resolution_height', payload: string };
type SetResolutionWidth = { type: 'resolution_width', payload: string };
export type SetClipStart = { type: 'clip_start', payload: string };
export type SetClipEnd = { type: 'clip_end', payload: string };
export type SetAudioBitRate = { type: 'audio_bitrate', payload: number };
export type SetVideoBitRate = { type: 'video_bitrate', payload: number };
export type SetVideoBitRateMin = { type: 'video_bitrate_min', payload: number };
export type SetVideoBitRateMax = { type: 'video_bitrate_max', payload: number };
export type SetBufferSize = { type: 'buffer_size', payload: number };
export type SetVideoDecoderCodec = { type: 'video_decoder_codec', payload: Codec };
export type SetAudioDecoderCodec = { type: 'audio_decoder_codec', payload: Codec };
export type SetPixelFormat = { type: 'pixel_format', payload: PixelFormat };
export type SetFastStart = { type: 'faststart', payload: boolean };
export type SetFrameRate = { type: 'framerate', payload: number };
export type SetPreset = { type: 'preset', payload: Preset };
export type SetTune = { type: 'tune', payload: Tune };
export type SetSpeed = { type: 'speed', payload: string };
export type SetDeband = { type: 'deband', payload: boolean };
export type SetDeflicker = { type: 'deflicker', payload: boolean };
export type SetDeshake = { type: 'deshake', payload: boolean };
export type SetDejudder = { type: 'dejudder', payload: boolean };
export type SetCrf = { type: 'crf', payload: number };
export type SetContrast = { type: 'vcontrast', payload: number };
export type SetBrightness = { type: 'brightness', payload: number };
export type SetSaturation = { type: 'saturation', payload: number };
export type SetGamma = { type: 'gamma', payload: number };
export type SetAudioContrast = { type: 'acontrast', payload: number };
export type SetAudioChannel = { type: 'audiochannel', payload: AudioChannel };
export type SetVolume = { type: 'volume', payload: string };
export type SetDefault = { type: 'default', payload: null };

export type AppActions = SetContainer | SetResolution | SetResolutionHeight | SetResolutionWidth | SetClipStart | SetClipEnd |
                         SetVideoDecoderCodec | SetAudioDecoderCodec | SetVideoBitRate | SetAudioBitRate |
                         SetVideoBitRateMin | SetVideoBitRateMax | SetBufferSize | SetPixelFormat | SetFastStart |
                         SetFrameRate | SetPreset | SetTune | SetSpeed | SetDeband | SetDeflicker | SetDeshake | SetDejudder |
                         SetCrf | SetContrast | SetBrightness | SetSaturation | SetGamma | SetAudioContrast |
                         SetAudioChannel | SetVolume | SetDefault ;

export interface Options {
  container: AudioVideoContainer,
  resolution: VideoResolution,
  videoDecoderCodec: Codec
  audioDecoderCodec: Codec,
  pixelFormat: PixelFormat
  preset: Preset
  tune: Tune
  audioChannel: AudioChannel
  clip: {
    start: string,
    end: string
  },
  audioBitrate: number
  videoBitrate: number
  videoBitrateMin: number
  videoBitrateMax: number
  bufferSize: number
  crf: number
  faststart: boolean
  frameRate: number
  speed: string
  deband: boolean
  deflicker: boolean
  deshake: boolean
  dejudder: boolean
  videoContrast: number
  brightness: number
  saturation: number
  gamma: number
  audioContrast: number
  volume: string
}

const defaultOptions = () => ({
  container: audioVideoContainers[0],
  resolution: videoResolutions[0],
  videoDecoderCodec: videoCodecs[0],
  audioDecoderCodec: audioCodecs[0],
  pixelFormat: pixelFormats[0],
  audioChannel: audioChannels[0],
  preset: {
    key: "medium",
    label: "Medium"
  },
  tune: tunes[0],
  audioBitrate: 0,
  videoBitrate: 0,
  videoBitrateMin: 0,
  videoBitrateMax: 0,
  bufferSize: 0,
  crf: 0,
  clip: {
    start: '00:00:00.000',
    end: '00:00:00.000'
  },
  faststart: true,
  frameRate: 0,
  speed: '1',
  deband: false,
  dejudder: false,
  deflicker: false,
  deshake: false,
  videoContrast: 1,
  brightness: 0,
  saturation: 1,
  gamma: 1,
  audioContrast: 0.33,
  volume: '1'
})

function optionsReducer(state: Options, action: AppActions) {
  let newEvent = {...state}

  if (action.type === 'container') {
    newEvent.container = action.payload
  } else if (action.type === 'resolution') {
    newEvent.resolution = action.payload
  } else if (action.type === 'resolution_width') {
    newEvent.resolution.width = action.payload
  } else if (action.type === 'resolution_height') {
    newEvent.resolution.height = action.payload
  } else if (action.type === 'clip_start') {
    newEvent.clip.start = action.payload
  } else if (action.type === 'clip_end') {
    newEvent.clip.end = action.payload
  } else if (action.type === 'video_decoder_codec') {
    newEvent.videoDecoderCodec = action.payload
  } else if (action.type === 'audio_decoder_codec') {
    newEvent.audioDecoderCodec = action.payload
  } else if (action.type === 'audio_bitrate') {
    newEvent.audioBitrate = action.payload
  } else if (action.type === 'video_bitrate') {
    newEvent.videoBitrate = action.payload
  } else if (action.type === 'video_bitrate_min') {
    newEvent.videoBitrateMin = action.payload
  } else if (action.type === 'video_bitrate_max') {
    newEvent.videoBitrateMax = action.payload
  } else if (action.type === 'buffer_size') {
    newEvent.bufferSize = action.payload
  } else if (action.type === 'crf') {
    newEvent.crf = action.payload
  } else if (action.type === 'pixel_format') {
    newEvent.pixelFormat = action.payload
  } else if (action.type === 'faststart') {
    newEvent.faststart = action.payload
  } else if (action.type === 'framerate') {
    newEvent.frameRate = action.payload
  } else if (action.type === 'preset') {
    newEvent.preset = action.payload
  } else if (action.type === 'tune') {
    newEvent.tune = action.payload
  } else if (action.type === 'speed') {
    newEvent.speed = action.payload
  } else if (action.type === 'deband') {
    newEvent.deband = action.payload
  } else if (action.type === 'deflicker') {
    newEvent.deflicker = action.payload
  } else if (action.type === 'deshake') {
    newEvent.deshake = action.payload
  } else if (action.type === 'dejudder') {
    newEvent.dejudder = action.payload
  } else if (action.type === 'vcontrast') {
    newEvent.videoContrast = action.payload
  } else if (action.type === 'brightness') {
    newEvent.brightness = action.payload
  } else if (action.type === 'saturation') {
    newEvent.saturation = action.payload
  } else if (action.type === 'gamma') {
    newEvent.gamma = action.payload
  } else if (action.type === 'acontrast') {
    newEvent.audioContrast = action.payload
  } else if (action.type === 'audiochannel') {
    newEvent.audioChannel = action.payload
  } else if (action.type === 'volume') {
    newEvent.volume = action.payload
  } else if (action.type === 'default') {
    newEvent = defaultOptions()
  } else {
    throw new Error('Unknown action: ' + (action as any).type);
  }

  return newEvent
}

const ManualPage: FC = function () {
  const configStore = useConfigStore()
  const dropStore = useDropStore()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const videoRef = useRef(null as ReactPlayer | null)
  const { progress, processFfmpegCommand, resetFfmpeg } = useFfmpeg()
  const [options, setOptions] = useReducer(optionsReducer, defaultOptions())
  const location = useLocation()

  const input: Media | null = dropStore.advancedInputs.length ? dropStore.advancedInputs[0] : null
  const hasInputAndOutputVideo = input?.metadata.videoStreams.length && options.container.type === 'video'
  const hasInputAndOutputAudio = input?.metadata.audioStreams.length

  useEffect(() => {
    setOptions({ type: "default", payload: null })

    if(input?.metadata.audioStreams.length) {
      const { bit_rate, start_time, duration } = input.metadata.audioStreams[0]

      if (bit_rate) {
        setOptions({ type: 'audio_bitrate', payload: +bit_rate })
      }
      if (start_time) {
        setOptions({ type: 'clip_start', payload: formatSeconds(start_time, 'HH:mm:ss.SSS') })
      }
      if (duration) {
        setOptions({ type: 'clip_end', payload: formatSeconds(duration, 'HH:mm:ss.SSS') })
      }
    }

    if(input?.metadata.videoStreams.length) {
      const { width, height, duration, start_time, bit_rate, pix_fmt } = input.metadata.videoStreams[0]

      const equivalent = videoResolutions.find(_ => +_.width === width && +_.height === height)
      setOptions({
        type: 'resolution',
        payload: equivalent || {
          ...videoResolutions[0],
          width: String(width),
          height: String(height)
        }
      })

      if (start_time) {
        setOptions({ type: 'clip_start', payload: formatSeconds(start_time, 'HH:mm:ss.SSS') })
      }
      if (duration) {
        setOptions({ type: 'clip_end', payload: formatSeconds(duration, 'HH:mm:ss.SSS') })
      }
      if (bit_rate) {
        setOptions({ type: 'video_bitrate', payload: +bit_rate })
      }

      if (pix_fmt) {
        const pixelFormat = pixelFormats.find(_ => _.key === pix_fmt)
        if (pixelFormat) {
          setOptions({ type: 'pixel_format', payload: pixelFormat })
        }
      }
    }
  }, [dropStore.advancedInputs])

  /**
   * EARLY RETURNS
   */
  if (!configStore.directory) {
    return (
      <OpenPage />
    )
  }

  /**
   * FUNCTIONS
   */
  const execute = async () => {
    if (loading || !input) {
      return
    }

    setLoading(true)
    setError('')
    resetFfmpeg()

    const onError = (e: { message: string, errors?: string[] }) => {
      console.error(e)
      setLoading(false)

      const errorMessage = e.errors?.length ? e.errors[0] : e.message
      setError(errorMessage.split(']').pop().replace(/ FFmpeg/ig, '').replace(/container/g, 'format'))
      Sentry.captureException(e);
    }

    try {
      // Create command
      const command = ['-i', input.metadata.format.filename]

      // Hold filters for contructing complex filters later
      const videoFilters: string[] = [];
      const audioFilters: string[] = [];

      // VIDEO: TODO handle multiple video streams
      if (hasInputAndOutputVideo) {
        const { width, height, duration, start_time, bit_rate, pix_fmt } = input.metadata.videoStreams[0]

        /**
         * Not Filters
         */
        // Codec
        if (options.videoDecoderCodec.key !== 'auto') {
          command.push('-c:v', options.videoDecoderCodec.key)
        }

        // Start and end
        if (options.clip.start && options.clip.start !== formatSeconds(start_time, 'HH:mm:ss.SSS')) {
          command.push('-ss', options.clip.start)
        }
        if (options.clip.end && options.clip.end !== formatSeconds(duration, 'HH:mm:ss.SSS')) {
          command.push('-to', options.clip.end)
        }

        // Bitrate
        if (options.videoBitrate && options.videoBitrate !== +bit_rate) {
          command.push('-b:v', String(options.videoBitrate))
        }
        if (options.videoBitrateMin) {
          command.push('-minrate', String(options.videoBitrateMin))
        }
        if (options.videoBitrateMax) {
          command.push('-maxrate', String(options.videoBitrateMax))
        }
        if (options.bufferSize) {
          command.push('-bufsize', String(options.bufferSize))
        }
        if (options.crf) {
          command.push('-crf', String(options.crf))
        }

        // Pixel format
        if (options.pixelFormat && ![pix_fmt, 'auto'].includes(options.pixelFormat.key)) {
          command.push('-pix_fmt', options.pixelFormat.key)
        }

        // Fast start
        if (options.faststart && ['mp4', 'm4a'].includes(options.container.key)) {
          command.push('-movflags', 'faststart')
        }

        // Frame Rate
        if (options.frameRate) {
          command.push('-r', String(options.frameRate))
        }

        // Preset
        if (options.preset && options.preset.key !== 'medium') {
          command.push('-preset', options.preset.key)
        }

        // Tune
        if (options.tune && options.tune.key !== 'auto') {
          command.push('-tune', options.tune.key)
        }

        /**
         * Filters
         */
        // Resolution
        if (options.resolution && !(options.resolution.width === String(width) && options.resolution.height === String(height))) {
          const scaleFilter = `scale=${options.resolution.width || -1}:${options.resolution.height || -1}`;
          videoFilters.push(scaleFilter);
        }

        // Speed
        if (options.speed && +options.speed !== 1) {
          const setptsFilter = `setpts=${1 / +options.speed}*PTS`;
          videoFilters.push(setptsFilter);
        }

        // Deband, etc
        if (options.deband) {
          videoFilters.push('deband')
        }
        if (options.deflicker) {
          videoFilters.push('deflicker')
        }
        if (options.deshake) {
          videoFilters.push('deshake')
        }
        if (options.dejudder) {
          videoFilters.push('dejudder')
        }

        // EQ filters
        const eqFilters = []
        if (options.videoContrast !== 1) {
          eqFilters.push(`contrast=${options.videoContrast}`)
        }
        if (options.brightness !== 0) {
          eqFilters.push(`brightness=${options.brightness}`)
        }
        if (options.saturation !== 1) {
          eqFilters.push(`saturation=${options.saturation}`)
        }
        if (options.gamma !== 1) {
          eqFilters.push(`gamma=${options.gamma}`)
        }
        if (eqFilters.length) {
          videoFilters.push(`eq=${eqFilters.join(':')}`)
        }
      }

      // AUDIO: TODO handle multiple audio streams
      if (hasInputAndOutputAudio) {
        const { bit_rate, start_time, duration } = input.metadata.audioStreams[0]

        // Audio Codec
        if (options.audioDecoderCodec.key !== 'auto') {
          command.push('-c:a', options.audioDecoderCodec.key)
        }

        // Bitrate
        if (options.audioBitrate && options.audioBitrate !== +bit_rate) {
          command.push('-b:a', String(options.audioBitrate))
        }

        // Audio Channel
        if (options.audioChannel.key !== 0) {
          command.push('-ac', String(options.audioChannel.key))
        }

        // Start and end
        if (!hasInputAndOutputVideo) {
          if (options.clip.start && options.clip.start !== formatSeconds(start_time, 'HH:mm:ss.SSS')) {
            command.push('-ss', options.clip.start)
          }
          if (options.clip.end && options.clip.end !== formatSeconds(duration, 'HH:mm:ss.SSS')) {
            command.push('-to', options.clip.end)
          }
        }

        /**
         * FILTERS
         */
        // Speed
        if (options.speed && +options.speed !== 1) {
          let tempoFilter = '';
          let currentSpeed = +options.speed;
      
          // Since atempo can only be between 0.5 and 2.0, we might need to chain the filters if speed is not in range
          while (currentSpeed < 0.5) {
            tempoFilter += 'atempo=0.5,';
            currentSpeed *= 2;
          }
      
          // If the remaining speed factor is greater than 2, we need to apply atempo multiple times
          while (currentSpeed > 2) {
            tempoFilter += 'atempo=2.0,';
            currentSpeed /= 2;
          }
      
          // Apply the remaining speed factor
          tempoFilter += `atempo=${currentSpeed}`;
          audioFilters.push(tempoFilter);
        }

        // Volume
        if (options.volume && +options.volume !== 1) {
          audioFilters.push(`volume=${(+options.volume).toFixed(2)}`);
        }

        // Contrast
        if (options.audioContrast !== 0.33) {
          audioFilters.push(`acontrast=${options.audioContrast}`)
        }
      }

      // Construct the final filter_complex argument
      let filterComplex = '';
      if (videoFilters.length) {
        filterComplex += `[0:v]${videoFilters.join(',')}[v]; `;
      }
      if (audioFilters.length) {
        filterComplex += `[0:a]${audioFilters.join(',')}[a]; `;
      }
      filterComplex = filterComplex.replace(/;\s*$/, ''); // Remove the last semicolon and space

      // Merge all complex filters
      if (filterComplex) {
        command.push('-filter_complex', filterComplex);
        if (hasInputAndOutputVideo) {
          command.push('-map', filterComplex.includes('[v]') ? '[v]' : '0:v');
        }
        if (hasInputAndOutputAudio) {
          command.push('-map', filterComplex.includes('[a]') ? '[a]' : '0:a');
        }
      }

      // Enable Experimental Support
      command.push('-strict', '-2')

      // Add output path
      const outputsFolderPath = await path.editMediaOutputDir()
      const outputPath = [outputsFolderPath, input.nameWithNewExtension(options.container.key, true)].join(path.sep)
      command.push(outputPath)

      // Process func
      await processFfmpegCommand(command, [input])

      // Show file
      const exists = await path.exists(outputPath)
      if (exists) {
        await showInFinder(outputPath)
      }
      setLoading(false)
    } catch (e) {
      onError(e)
    }
  }

  const videoAccordionPanels = hasInputAndOutputVideo
    ? input.metadata.videoStreams.slice(0, 1)
      .map((_, i) => (
        <Accordion.Panel key={`video stream ${i}`}>
          <Accordion.Title>Video</Accordion.Title>
          <Accordion.Content>
            <div className="mb-6 grid gap-6 grid-cols-6 md:grid-cols-8 lg:grid-cols-10">
              <div className="col-span-2 gap-y-3">
                <Label htmlFor="format">Output Codec</Label>
                <VideoDecoderCodecSelector options={options} setOptions={setOptions} />
              </div>

              <div className="col-span-2 gap-y-3">
                <Label htmlFor="pixelformat">Pixel Format</Label>
                <PixelFormatSelector options={options} setOptions={setOptions} />
              </div>

              <div className="col-span-2 gap-y-3">
                <Label htmlFor="preset">Preset</Label>
                <PresetSelector options={options} setOptions={setOptions} />
              </div>

              <div className="col-span-2 gap-y-3">
                <Label htmlFor="preset">Tune</Label>
                <TuneSelector options={options} setOptions={setOptions} />
              </div>

              <div className="col-span-2">
                <Label htmlFor="framerate">Frame Rate</Label>
                <TextInput
                  id="framerate"
                  name="framerate"
                  value={options.frameRate || ''}
                  onChange={e => setOptions({ type: 'framerate', payload: +(e.target.value || 0) })}
                />
              </div>

              <div className="col-span-2">
                <Label htmlFor="codec">Bitrate</Label>
                <TextInput
                  id="bitrate"
                  name="bitrate"
                  value={options.videoBitrate || ''}
                  onChange={e => setOptions({ type: 'video_bitrate', payload: +(e.target.value || 0) })}
                />
              </div>

              <div className="col-span-2">
                <Label htmlFor="codec">Bitrate Min.</Label>
                <TextInput
                  id="bitrate_min"
                  name="bitrate_min"
                  value={options.videoBitrateMin || ''}
                  onChange={e => setOptions({ type: 'video_bitrate_min', payload: +(e.target.value || 0) })}
                />
              </div>

              <div className="col-span-2">
                <Label htmlFor="codec">Bitrate Max.</Label>
                <TextInput
                  id="bitrate_max"
                  name="bitrate_max"
                  value={options.videoBitrateMax || ''}
                  onChange={e => setOptions({ type: 'video_bitrate_max', payload: +(e.target.value || 0) })}
                />
              </div>

              <div className="col-span-2">
                <Label htmlFor="codec">Buffer Size</Label>
                <TextInput
                  id="buffer_size"
                  name="buffer_size"
                  value={options.bufferSize || ''}
                  onChange={e => setOptions({ type: 'buffer_size', payload: +(e.target.value || 0) })}
                />
              </div>

              <div className="col-span-2">
                <Label htmlFor="crf">CRF ({options.crf})</Label>
                <RangeSlider
                  className="mt-2"
                  min={0}
                  max={51}
                  step={1}
                  value={options.crf}
                  onChange={(e) => setOptions({ type: 'crf', payload: +e.target.value })}
                />
              </div>

              <div className="col-span-2">
                <Label htmlFor="vcontrast">Contrast ({options.videoContrast})</Label>
                <RangeSlider
                  className="mt-2"
                  min={-1000}
                  max={1000}
                  step={0.1}
                  value={options.videoContrast}
                  onChange={(e) => setOptions({ type: 'vcontrast', payload: +e.target.value })}
                />
              </div>

              <div className="col-span-2">
                <Label htmlFor="brightness">Brightness ({options.brightness})</Label>
                <RangeSlider
                  className="mt-2"
                  min={-1}
                  max={1}
                  step={0.1}
                  value={options.brightness}
                  onChange={(e) => setOptions({ type: 'brightness', payload: +e.target.value })}
                />
              </div>

              <div className="col-span-2">
                <Label htmlFor="saturation">Saturation ({options.saturation})</Label>
                <RangeSlider
                  className="mt-2"
                  min={0}
                  max={3}
                  step={0.1}
                  value={options.saturation}
                  onChange={(e) => setOptions({ type: 'saturation', payload: +e.target.value })}
                />
              </div>

              <div className="col-span-2">
                <Label htmlFor="gamma">Gamma ({options.gamma})</Label>
                <RangeSlider
                  className="mt-2"
                  min={0.1}
                  max={10}
                  step={0.1}
                  value={options.gamma}
                  onChange={(e) => setOptions({ type: 'gamma', payload: +e.target.value })}
                />
              </div>


              {['mp4', 'm4a'].includes(options.container.key) && (
                <div className="col-span-1 gap-y-3">
                  <Label htmlFor="faststart">FastStart</Label>
                  <div className="flex items-center mt-2.5">
                    <ToggleSwitch
                      checked={options.faststart}
                      onChange={() => setOptions({ type: 'faststart', payload: !options.faststart })}
                    />
                  </div>
                </div>
              )}

              <div className="col-span-1 gap-y-3">
                <Label htmlFor="faststart">Deband</Label>
                <div className="flex items-center mt-2.5">
                  <ToggleSwitch
                    checked={options.deband}
                    onChange={() => setOptions({ type: 'deband', payload: !options.deband })}
                  />
                </div>
              </div>

              <div className="col-span-1 gap-y-3">
                <Label htmlFor="faststart">Deflicker</Label>
                <div className="flex items-center mt-2.5">
                  <ToggleSwitch
                    checked={options.deflicker}
                    onChange={() => setOptions({ type: 'deflicker', payload: !options.deflicker })}
                  />
                </div>
              </div>

              <div className="col-span-1 gap-y-3">
                <Label htmlFor="faststart">Deshake</Label>
                <div className="flex items-center mt-2.5">
                  <ToggleSwitch
                    checked={options.deshake}
                    onChange={() => setOptions({ type: 'deshake', payload: !options.deshake })}
                  />
                </div>
              </div>

              <div className="col-span-1 gap-y-3">
                <Label htmlFor="faststart">Dejudder</Label>
                <div className="flex items-center mt-2.5">
                  <ToggleSwitch
                    checked={options.dejudder}
                    onChange={() => setOptions({ type: 'dejudder', payload: !options.dejudder })}
                  />
                </div>
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Panel>
      ))
    : []

  const audioAccordionPanels = hasInputAndOutputAudio
    ? input.metadata.audioStreams.slice(0, 1)
      .map((_, i) => (
        <Accordion.Panel key={`audio stream ${i}`}>
          <Accordion.Title>Audio</Accordion.Title>
          <Accordion.Content>
            <div className="mb-6 grid gap-6 grid-cols-6 md:grid-cols-8 lg:grid-cols-10">
              <div className="col-span-2 gap-y-3">
                <Label htmlFor="format">Output Codec</Label>
                <AudioDecoderCodecSelector options={options} setOptions={setOptions} />
              </div>

              <div className="col-span-2 gap-y-3">
                <Label htmlFor="channel">Channel</Label>
                <AudioChannelSelector options={options} setOptions={setOptions} />
              </div>

              <div className="col-span-2">
                <Label htmlFor="volume">Volume (x)</Label>
                <TextInput
                  id="volume"
                  name="volume"
                  value={options.volume || ''}
                  onChange={e => setOptions({ type: 'volume', payload: e.target.value })}
                />
              </div>

              <div className="col-span-2">
                <Label htmlFor="codec">Bitrate</Label>
                <TextInput
                  id="audiobitrate"
                  name="audiobitrate"
                  value={options.audioBitrate || ''}
                  onChange={e => setOptions({ type: 'audio_bitrate', payload: +(e.target.value || 0) })}
                />
              </div>

              <div className="col-span-2">
                <Label htmlFor="audiocontrast">Contrast ({options.audioContrast})</Label>
                <RangeSlider
                  className="mt-2"
                  min={0}
                  max={1}
                  step={0.01}
                  value={options.audioContrast}
                  onChange={(e) => setOptions({ type: 'acontrast', payload: +e.target.value })}
                />
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Panel>
      ))
    : []

  const accordionPanels = videoAccordionPanels.concat(audioAccordionPanels)

  return (
    <div className="h-full w-full flex">
      <FileTree
        addFile={(files) => dropStore.addFiles(files, location.pathname)}
      >
        <div className="h-full w-full flex flex-col gap-y-16 overflow-y-scroll no-scrollbar">
          {!input && (
            <div className="h-full w-full flex justify-center items-center">
              <div className="w-[48rem] h-[32rem]">
                <DragAndDrop />
              </div>
            </div>
          )}

          {input && (
            <div className="flex flex-col items-center w-full mt-3 max-w-7xl space-y-4" >
              <div className="dark:text-white flex items-center space-x-2 mt-3">
                <Badge color="primary" size="xl" className="font-normal px-3 max-w-[24rem] truncate">
                  {input.name}
                </Badge>
                <Badge color="primary" size="xl" className="font-normal px-3">
                  {superbytes(input.metadata.format.size, true, 2)}
                </Badge>
                {input.metadata.format.duration && (
                  <Badge color="primary" size="xl" className="font-normal px-3">
                    {formatSeconds(input.metadata.format.duration).replace('00h', '').replace('00m', '')}
                  </Badge>
                )}
              </div>

              <div className="w-full">
                <div className="group relative">
                  <div className="flex justify-center rounded-lg cursor-pointer">
                    {
                      isAudio(input.name)
                          ? (<AudioPlayer url={input.src} />)
                          : isVideo(input.name)
                              ? <ReactPlayer
                                  url={input.src}
                                  controls autoPlay muted playsinline ref={videoRef} className="w-full h-full cursor-pointer" />
                              : (<img src={input.src} className="max-w-2xl max-h-[30rem]" />)
                    }
                  </div>
                </div>
              </div>

              <div className="w-[34rem]">
                <Button color="primary" className="w-full" disabled={loading} onClick={() => execute()}>
                  {loading ? (
                    <LoadingCircle className="text-white"/>
                  ) : (
                    <BiSolidVideos className="text-xl" />
                  )}
                  <span className="ml-2">{loading ? 'Loading' : 'Create'}</span>
                </Button>
                {loading && (
                  <div className="w-full my-3 h-6 bg-gray-200 rounded-full dark:bg-gray-700">
                    <div className="bg-blue-600 h-full rounded text-right pr-3 text-white transition-all duration-500 ease-in-out" style={{ width: `${Math.max(progress, 10)}%`}}>
                      {progress.toFixed(2)}%
                    </div>
                  </div>
                )}

                {error && (
                  <div className="mt-3 text-red-500">
                    {error}
                  </div>
                )}
              </div>
            </div>
          )}

          {input && (
            <Container>
              <div className="dark:text-white">
                <div className="mb-6 grid gap-6 grid-cols-5 lg:grid-cols-10">
                  <div className="col-span-2 lg:col-span-1 gap-y-3">
                    <Label htmlFor="format">Format</Label>
                    <AudioVideoFormatSelector options={options} setOptions={setOptions} />
                  </div>

                  {hasInputAndOutputVideo ? (
                    <div className={classNames("gap-y-3 gap-x-3 col-span-3 lg:col-span-5 grid", options.resolution.key === 'custom' ? "grid-cols-3" : "rid-cols-1")}>
                      <div className="col-span-1">
                        <Label htmlFor="resolution">Resolution</Label>
                        <ResolutionSelector options={options} setOptions={setOptions} />
                      </div>

                      {options.resolution.key === 'custom' && (
                        <div className="col-span-1">
                          <Label htmlFor="height">Height</Label>
                          <TextInput
                            id="height"
                            name="height"
                            placeholder="Height"
                            type="number"
                            value={options.resolution.height}
                            onChange={(e) => setOptions({ type: 'resolution_height', payload: e.target.value })}
                          />
                        </div>
                      )}

                      {options.resolution.key === 'custom' && (
                        <div className="col-span-1">
                          <Label htmlFor="width">Width</Label>
                          <TextInput
                            id="width"
                            name="width"
                            placeholder="Width"
                            type="number"
                            value={options.resolution.width}
                            onChange={(e) => setOptions({ type: 'resolution_width', payload: e.target.value  })}
                          />
                        </div>
                      )}
                    </div>
                  ) : <></>}

                  <div className="col-span-4 lg:col-span-3 gap-x-3 grid grid-cols-2">
                    <div className="col-span-1">
                      <Label htmlFor="start-time">Start Time</Label>
                      <TextInput
                        id="start-time"
                        name="start"
                        placeholder="Hrs:Mins:Secs.Millisecs"
                        value={options.clip.start}
                        onChange={(e) => setOptions({ type: 'clip_start', payload: e.target.value })}
                      />
                    </div>
                    <div className="col-span-1">
                      <Label htmlFor="end-time">End Time</Label>
                      <TextInput
                        id="end-time"
                        name="end"
                        placeholder="Hrs:Mins:Secs.Millisecs"
                        value={options.clip.end}
                        onChange={(e) => setOptions({ type: 'clip_end', payload: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="col-span-1">
                      <Label htmlFor="speed">Speed</Label>
                      <TextInput
                        id="speed"
                        name="speed"
                        value={options.speed}
                        onChange={e => setOptions({ type: 'speed', payload: e.target.value })}
                      />
                    </div>
                </div>
              </div>
              <div className="dark:text-white">
                <div>Advanced Options:</div>

                <Accordion>
                  {accordionPanels}
                </Accordion>
              </div>
            </Container>
          )}
        </div>
      </FileTree>
    </div>
  );
};


export default ManualPage;
