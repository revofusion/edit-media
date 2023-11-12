
export interface PixelFormat {
    flags: {
        input: boolean
        output: boolean
        hardware: boolean
        paletted: boolean
        bitstream: boolean
    }
    key: string
    nb_components: string
    bits_per_pixel: string
    bit_depths: string
}

export const pixelFormats: PixelFormat[] = [
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": true,
      "paletted": true,
      "bitstream": true
    },
    "key": "auto",
    "nb_components": "",
    "bits_per_pixel": "",
    "bit_depths": ""
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuv420p",
    "nb_components": "3",
    "bits_per_pixel": "12",
    "bit_depths": "8-8-8"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuyv422",
    "nb_components": "3",
    "bits_per_pixel": "16",
    "bit_depths": "8-8-8"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "rgb24",
    "nb_components": "3",
    "bits_per_pixel": "24",
    "bit_depths": "8-8-8"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "bgr24",
    "nb_components": "3",
    "bits_per_pixel": "24",
    "bit_depths": "8-8-8"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuv422p",
    "nb_components": "3",
    "bits_per_pixel": "16",
    "bit_depths": "8-8-8"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuv444p",
    "nb_components": "3",
    "bits_per_pixel": "24",
    "bit_depths": "8-8-8"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuv410p",
    "nb_components": "3",
    "bits_per_pixel": "9",
    "bit_depths": "8-8-8"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuv411p",
    "nb_components": "3",
    "bits_per_pixel": "12",
    "bit_depths": "8-8-8"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "gray",
    "nb_components": "1",
    "bits_per_pixel": "8",
    "bit_depths": "8"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": true
    },
    "key": "monow",
    "nb_components": "1",
    "bits_per_pixel": "1",
    "bit_depths": "1"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": true
    },
    "key": "monob",
    "nb_components": "1",
    "bits_per_pixel": "1",
    "bit_depths": "1"
  },
  {
    "flags": {
      "input": true,
      "output": false,
      "hardware": false,
      "paletted": true,
      "bitstream": false
    },
    "key": "pal8",
    "nb_components": "1",
    "bits_per_pixel": "8",
    "bit_depths": "8"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuvj420p",
    "nb_components": "3",
    "bits_per_pixel": "12",
    "bit_depths": "8-8-8"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuvj422p",
    "nb_components": "3",
    "bits_per_pixel": "16",
    "bit_depths": "8-8-8"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuvj444p",
    "nb_components": "3",
    "bits_per_pixel": "24",
    "bit_depths": "8-8-8"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "uyvy422",
    "nb_components": "3",
    "bits_per_pixel": "16",
    "bit_depths": "8-8-8"
  },
  {
    "flags": {
      "input": false,
      "output": false,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "uyyvyy411",
    "nb_components": "3",
    "bits_per_pixel": "12",
    "bit_depths": "8-8-8"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "bgr8",
    "nb_components": "3",
    "bits_per_pixel": "8",
    "bit_depths": "3-3-2"
  },
  {
    "flags": {
      "input": false,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": true
    },
    "key": "bgr4",
    "nb_components": "3",
    "bits_per_pixel": "4",
    "bit_depths": "1-2-1"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "bgr4_byte",
    "nb_components": "3",
    "bits_per_pixel": "4",
    "bit_depths": "1-2-1"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "rgb8",
    "nb_components": "3",
    "bits_per_pixel": "8",
    "bit_depths": "2-3-3"
  },
  {
    "flags": {
      "input": false,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": true
    },
    "key": "rgb4",
    "nb_components": "3",
    "bits_per_pixel": "4",
    "bit_depths": "1-2-1"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "rgb4_byte",
    "nb_components": "3",
    "bits_per_pixel": "4",
    "bit_depths": "1-2-1"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "nv12",
    "nb_components": "3",
    "bits_per_pixel": "12",
    "bit_depths": "8-8-8"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "nv21",
    "nb_components": "3",
    "bits_per_pixel": "12",
    "bit_depths": "8-8-8"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "argb",
    "nb_components": "4",
    "bits_per_pixel": "32",
    "bit_depths": "8-8-8-8"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "rgba",
    "nb_components": "4",
    "bits_per_pixel": "32",
    "bit_depths": "8-8-8-8"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "abgr",
    "nb_components": "4",
    "bits_per_pixel": "32",
    "bit_depths": "8-8-8-8"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "bgra",
    "nb_components": "4",
    "bits_per_pixel": "32",
    "bit_depths": "8-8-8-8"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "gray16be",
    "nb_components": "1",
    "bits_per_pixel": "16",
    "bit_depths": "16"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "gray16le",
    "nb_components": "1",
    "bits_per_pixel": "16",
    "bit_depths": "16"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuv440p",
    "nb_components": "3",
    "bits_per_pixel": "16",
    "bit_depths": "8-8-8"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuvj440p",
    "nb_components": "3",
    "bits_per_pixel": "16",
    "bit_depths": "8-8-8"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuva420p",
    "nb_components": "4",
    "bits_per_pixel": "20",
    "bit_depths": "8-8-8-8"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "rgb48be",
    "nb_components": "3",
    "bits_per_pixel": "48",
    "bit_depths": "16-16-16"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "rgb48le",
    "nb_components": "3",
    "bits_per_pixel": "48",
    "bit_depths": "16-16-16"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "rgb565be",
    "nb_components": "3",
    "bits_per_pixel": "16",
    "bit_depths": "5-6-5"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "rgb565le",
    "nb_components": "3",
    "bits_per_pixel": "16",
    "bit_depths": "5-6-5"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "rgb555be",
    "nb_components": "3",
    "bits_per_pixel": "15",
    "bit_depths": "5-5-5"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "rgb555le",
    "nb_components": "3",
    "bits_per_pixel": "15",
    "bit_depths": "5-5-5"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "bgr565be",
    "nb_components": "3",
    "bits_per_pixel": "16",
    "bit_depths": "5-6-5"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "bgr565le",
    "nb_components": "3",
    "bits_per_pixel": "16",
    "bit_depths": "5-6-5"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "bgr555be",
    "nb_components": "3",
    "bits_per_pixel": "15",
    "bit_depths": "5-5-5"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "bgr555le",
    "nb_components": "3",
    "bits_per_pixel": "15",
    "bit_depths": "5-5-5"
  },
  {
    "flags": {
      "input": false,
      "output": false,
      "hardware": true,
      "paletted": false,
      "bitstream": false
    },
    "key": "vaapi",
    "nb_components": "0",
    "bits_per_pixel": "0",
    "bit_depths": "0"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuv420p16le",
    "nb_components": "3",
    "bits_per_pixel": "24",
    "bit_depths": "16-16-16"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuv420p16be",
    "nb_components": "3",
    "bits_per_pixel": "24",
    "bit_depths": "16-16-16"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuv422p16le",
    "nb_components": "3",
    "bits_per_pixel": "32",
    "bit_depths": "16-16-16"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuv422p16be",
    "nb_components": "3",
    "bits_per_pixel": "32",
    "bit_depths": "16-16-16"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuv444p16le",
    "nb_components": "3",
    "bits_per_pixel": "48",
    "bit_depths": "16-16-16"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuv444p16be",
    "nb_components": "3",
    "bits_per_pixel": "48",
    "bit_depths": "16-16-16"
  },
  {
    "flags": {
      "input": false,
      "output": false,
      "hardware": true,
      "paletted": false,
      "bitstream": false
    },
    "key": "dxva2_vld",
    "nb_components": "0",
    "bits_per_pixel": "0",
    "bit_depths": "0"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "rgb444le",
    "nb_components": "3",
    "bits_per_pixel": "12",
    "bit_depths": "4-4-4"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "rgb444be",
    "nb_components": "3",
    "bits_per_pixel": "12",
    "bit_depths": "4-4-4"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "bgr444le",
    "nb_components": "3",
    "bits_per_pixel": "12",
    "bit_depths": "4-4-4"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "bgr444be",
    "nb_components": "3",
    "bits_per_pixel": "12",
    "bit_depths": "4-4-4"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "ya8",
    "nb_components": "2",
    "bits_per_pixel": "16",
    "bit_depths": "8-8"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "bgr48be",
    "nb_components": "3",
    "bits_per_pixel": "48",
    "bit_depths": "16-16-16"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "bgr48le",
    "nb_components": "3",
    "bits_per_pixel": "48",
    "bit_depths": "16-16-16"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuv420p9be",
    "nb_components": "3",
    "bits_per_pixel": "13",
    "bit_depths": "9-9-9"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuv420p9le",
    "nb_components": "3",
    "bits_per_pixel": "13",
    "bit_depths": "9-9-9"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuv420p10be",
    "nb_components": "3",
    "bits_per_pixel": "15",
    "bit_depths": "10-10-10"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuv420p10le",
    "nb_components": "3",
    "bits_per_pixel": "15",
    "bit_depths": "10-10-10"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuv422p10be",
    "nb_components": "3",
    "bits_per_pixel": "20",
    "bit_depths": "10-10-10"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuv422p10le",
    "nb_components": "3",
    "bits_per_pixel": "20",
    "bit_depths": "10-10-10"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuv444p9be",
    "nb_components": "3",
    "bits_per_pixel": "27",
    "bit_depths": "9-9-9"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuv444p9le",
    "nb_components": "3",
    "bits_per_pixel": "27",
    "bit_depths": "9-9-9"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuv444p10be",
    "nb_components": "3",
    "bits_per_pixel": "30",
    "bit_depths": "10-10-10"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuv444p10le",
    "nb_components": "3",
    "bits_per_pixel": "30",
    "bit_depths": "10-10-10"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuv422p9be",
    "nb_components": "3",
    "bits_per_pixel": "18",
    "bit_depths": "9-9-9"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuv422p9le",
    "nb_components": "3",
    "bits_per_pixel": "18",
    "bit_depths": "9-9-9"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "gbrp",
    "nb_components": "3",
    "bits_per_pixel": "24",
    "bit_depths": "8-8-8"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "gbrp9be",
    "nb_components": "3",
    "bits_per_pixel": "27",
    "bit_depths": "9-9-9"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "gbrp9le",
    "nb_components": "3",
    "bits_per_pixel": "27",
    "bit_depths": "9-9-9"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "gbrp10be",
    "nb_components": "3",
    "bits_per_pixel": "30",
    "bit_depths": "10-10-10"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "gbrp10le",
    "nb_components": "3",
    "bits_per_pixel": "30",
    "bit_depths": "10-10-10"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "gbrp16be",
    "nb_components": "3",
    "bits_per_pixel": "48",
    "bit_depths": "16-16-16"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "gbrp16le",
    "nb_components": "3",
    "bits_per_pixel": "48",
    "bit_depths": "16-16-16"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuva422p",
    "nb_components": "4",
    "bits_per_pixel": "24",
    "bit_depths": "8-8-8-8"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuva444p",
    "nb_components": "4",
    "bits_per_pixel": "32",
    "bit_depths": "8-8-8-8"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuva420p9be",
    "nb_components": "4",
    "bits_per_pixel": "22",
    "bit_depths": "9-9-9-9"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuva420p9le",
    "nb_components": "4",
    "bits_per_pixel": "22",
    "bit_depths": "9-9-9-9"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuva422p9be",
    "nb_components": "4",
    "bits_per_pixel": "27",
    "bit_depths": "9-9-9-9"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuva422p9le",
    "nb_components": "4",
    "bits_per_pixel": "27",
    "bit_depths": "9-9-9-9"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuva444p9be",
    "nb_components": "4",
    "bits_per_pixel": "36",
    "bit_depths": "9-9-9-9"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuva444p9le",
    "nb_components": "4",
    "bits_per_pixel": "36",
    "bit_depths": "9-9-9-9"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuva420p10be",
    "nb_components": "4",
    "bits_per_pixel": "25",
    "bit_depths": "10-10-10-10"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuva420p10le",
    "nb_components": "4",
    "bits_per_pixel": "25",
    "bit_depths": "10-10-10-10"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuva422p10be",
    "nb_components": "4",
    "bits_per_pixel": "30",
    "bit_depths": "10-10-10-10"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuva422p10le",
    "nb_components": "4",
    "bits_per_pixel": "30",
    "bit_depths": "10-10-10-10"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuva444p10be",
    "nb_components": "4",
    "bits_per_pixel": "40",
    "bit_depths": "10-10-10-10"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuva444p10le",
    "nb_components": "4",
    "bits_per_pixel": "40",
    "bit_depths": "10-10-10-10"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuva420p16be",
    "nb_components": "4",
    "bits_per_pixel": "40",
    "bit_depths": "16-16-16-16"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuva420p16le",
    "nb_components": "4",
    "bits_per_pixel": "40",
    "bit_depths": "16-16-16-16"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuva422p16be",
    "nb_components": "4",
    "bits_per_pixel": "48",
    "bit_depths": "16-16-16-16"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuva422p16le",
    "nb_components": "4",
    "bits_per_pixel": "48",
    "bit_depths": "16-16-16-16"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuva444p16be",
    "nb_components": "4",
    "bits_per_pixel": "64",
    "bit_depths": "16-16-16-16"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuva444p16le",
    "nb_components": "4",
    "bits_per_pixel": "64",
    "bit_depths": "16-16-16-16"
  },
  {
    "flags": {
      "input": false,
      "output": false,
      "hardware": true,
      "paletted": false,
      "bitstream": false
    },
    "key": "vdpau",
    "nb_components": "0",
    "bits_per_pixel": "0",
    "bit_depths": "0"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "xyz12le",
    "nb_components": "3",
    "bits_per_pixel": "36",
    "bit_depths": "12-12-12"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "xyz12be",
    "nb_components": "3",
    "bits_per_pixel": "36",
    "bit_depths": "12-12-12"
  },
  {
    "flags": {
      "input": false,
      "output": false,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "nv16",
    "nb_components": "3",
    "bits_per_pixel": "16",
    "bit_depths": "8-8-8"
  },
  {
    "flags": {
      "input": false,
      "output": false,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "nv20le",
    "nb_components": "3",
    "bits_per_pixel": "20",
    "bit_depths": "10-10-10"
  },
  {
    "flags": {
      "input": false,
      "output": false,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "nv20be",
    "nb_components": "3",
    "bits_per_pixel": "20",
    "bit_depths": "10-10-10"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "rgba64be",
    "nb_components": "4",
    "bits_per_pixel": "64",
    "bit_depths": "16-16-16-16"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "rgba64le",
    "nb_components": "4",
    "bits_per_pixel": "64",
    "bit_depths": "16-16-16-16"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "bgra64be",
    "nb_components": "4",
    "bits_per_pixel": "64",
    "bit_depths": "16-16-16-16"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "bgra64le",
    "nb_components": "4",
    "bits_per_pixel": "64",
    "bit_depths": "16-16-16-16"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yvyu422",
    "nb_components": "3",
    "bits_per_pixel": "16",
    "bit_depths": "8-8-8"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "ya16be",
    "nb_components": "2",
    "bits_per_pixel": "32",
    "bit_depths": "16-16"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "ya16le",
    "nb_components": "2",
    "bits_per_pixel": "32",
    "bit_depths": "16-16"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "gbrap",
    "nb_components": "4",
    "bits_per_pixel": "32",
    "bit_depths": "8-8-8-8"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "gbrap16be",
    "nb_components": "4",
    "bits_per_pixel": "64",
    "bit_depths": "16-16-16-16"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "gbrap16le",
    "nb_components": "4",
    "bits_per_pixel": "64",
    "bit_depths": "16-16-16-16"
  },
  {
    "flags": {
      "input": false,
      "output": false,
      "hardware": true,
      "paletted": false,
      "bitstream": false
    },
    "key": "qsv",
    "nb_components": "0",
    "bits_per_pixel": "0",
    "bit_depths": "0"
  },
  {
    "flags": {
      "input": false,
      "output": false,
      "hardware": true,
      "paletted": false,
      "bitstream": false
    },
    "key": "mmal",
    "nb_components": "0",
    "bits_per_pixel": "0",
    "bit_depths": "0"
  },
  {
    "flags": {
      "input": false,
      "output": false,
      "hardware": true,
      "paletted": false,
      "bitstream": false
    },
    "key": "d3d11va_vld",
    "nb_components": "0",
    "bits_per_pixel": "0",
    "bit_depths": "0"
  },
  {
    "flags": {
      "input": false,
      "output": false,
      "hardware": true,
      "paletted": false,
      "bitstream": false
    },
    "key": "cuda",
    "nb_components": "0",
    "bits_per_pixel": "0",
    "bit_depths": "0"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "0rgb",
    "nb_components": "3",
    "bits_per_pixel": "24",
    "bit_depths": "8-8-8"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "rgb0",
    "nb_components": "3",
    "bits_per_pixel": "24",
    "bit_depths": "8-8-8"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "0bgr",
    "nb_components": "3",
    "bits_per_pixel": "24",
    "bit_depths": "8-8-8"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "bgr0",
    "nb_components": "3",
    "bits_per_pixel": "24",
    "bit_depths": "8-8-8"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuv420p12be",
    "nb_components": "3",
    "bits_per_pixel": "18",
    "bit_depths": "12-12-12"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuv420p12le",
    "nb_components": "3",
    "bits_per_pixel": "18",
    "bit_depths": "12-12-12"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuv420p14be",
    "nb_components": "3",
    "bits_per_pixel": "21",
    "bit_depths": "14-14-14"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuv420p14le",
    "nb_components": "3",
    "bits_per_pixel": "21",
    "bit_depths": "14-14-14"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuv422p12be",
    "nb_components": "3",
    "bits_per_pixel": "24",
    "bit_depths": "12-12-12"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuv422p12le",
    "nb_components": "3",
    "bits_per_pixel": "24",
    "bit_depths": "12-12-12"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuv422p14be",
    "nb_components": "3",
    "bits_per_pixel": "28",
    "bit_depths": "14-14-14"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuv422p14le",
    "nb_components": "3",
    "bits_per_pixel": "28",
    "bit_depths": "14-14-14"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuv444p12be",
    "nb_components": "3",
    "bits_per_pixel": "36",
    "bit_depths": "12-12-12"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuv444p12le",
    "nb_components": "3",
    "bits_per_pixel": "36",
    "bit_depths": "12-12-12"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuv444p14be",
    "nb_components": "3",
    "bits_per_pixel": "42",
    "bit_depths": "14-14-14"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuv444p14le",
    "nb_components": "3",
    "bits_per_pixel": "42",
    "bit_depths": "14-14-14"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "gbrp12be",
    "nb_components": "3",
    "bits_per_pixel": "36",
    "bit_depths": "12-12-12"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "gbrp12le",
    "nb_components": "3",
    "bits_per_pixel": "36",
    "bit_depths": "12-12-12"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "gbrp14be",
    "nb_components": "3",
    "bits_per_pixel": "42",
    "bit_depths": "14-14-14"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "gbrp14le",
    "nb_components": "3",
    "bits_per_pixel": "42",
    "bit_depths": "14-14-14"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuvj411p",
    "nb_components": "3",
    "bits_per_pixel": "12",
    "bit_depths": "8-8-8"
  },
  {
    "flags": {
      "input": true,
      "output": false,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "bayer_bggr8",
    "nb_components": "3",
    "bits_per_pixel": "8",
    "bit_depths": "2-4-2"
  },
  {
    "flags": {
      "input": true,
      "output": false,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "bayer_rggb8",
    "nb_components": "3",
    "bits_per_pixel": "8",
    "bit_depths": "2-4-2"
  },
  {
    "flags": {
      "input": true,
      "output": false,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "bayer_gbrg8",
    "nb_components": "3",
    "bits_per_pixel": "8",
    "bit_depths": "2-4-2"
  },
  {
    "flags": {
      "input": true,
      "output": false,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "bayer_grbg8",
    "nb_components": "3",
    "bits_per_pixel": "8",
    "bit_depths": "2-4-2"
  },
  {
    "flags": {
      "input": true,
      "output": false,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "bayer_bggr16le",
    "nb_components": "3",
    "bits_per_pixel": "16",
    "bit_depths": "4-8-4"
  },
  {
    "flags": {
      "input": true,
      "output": false,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "bayer_bggr16be",
    "nb_components": "3",
    "bits_per_pixel": "16",
    "bit_depths": "4-8-4"
  },
  {
    "flags": {
      "input": true,
      "output": false,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "bayer_rggb16le",
    "nb_components": "3",
    "bits_per_pixel": "16",
    "bit_depths": "4-8-4"
  },
  {
    "flags": {
      "input": true,
      "output": false,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "bayer_rggb16be",
    "nb_components": "3",
    "bits_per_pixel": "16",
    "bit_depths": "4-8-4"
  },
  {
    "flags": {
      "input": true,
      "output": false,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "bayer_gbrg16le",
    "nb_components": "3",
    "bits_per_pixel": "16",
    "bit_depths": "4-8-4"
  },
  {
    "flags": {
      "input": true,
      "output": false,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "bayer_gbrg16be",
    "nb_components": "3",
    "bits_per_pixel": "16",
    "bit_depths": "4-8-4"
  },
  {
    "flags": {
      "input": true,
      "output": false,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "bayer_grbg16le",
    "nb_components": "3",
    "bits_per_pixel": "16",
    "bit_depths": "4-8-4"
  },
  {
    "flags": {
      "input": true,
      "output": false,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "bayer_grbg16be",
    "nb_components": "3",
    "bits_per_pixel": "16",
    "bit_depths": "4-8-4"
  },
  {
    "flags": {
      "input": false,
      "output": false,
      "hardware": true,
      "paletted": false,
      "bitstream": false
    },
    "key": "xvmc",
    "nb_components": "0",
    "bits_per_pixel": "0",
    "bit_depths": "0"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuv440p10le",
    "nb_components": "3",
    "bits_per_pixel": "20",
    "bit_depths": "10-10-10"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuv440p10be",
    "nb_components": "3",
    "bits_per_pixel": "20",
    "bit_depths": "10-10-10"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuv440p12le",
    "nb_components": "3",
    "bits_per_pixel": "24",
    "bit_depths": "12-12-12"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuv440p12be",
    "nb_components": "3",
    "bits_per_pixel": "24",
    "bit_depths": "12-12-12"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "ayuv64le",
    "nb_components": "4",
    "bits_per_pixel": "64",
    "bit_depths": "16-16-16-16"
  },
  {
    "flags": {
      "input": false,
      "output": false,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "ayuv64be",
    "nb_components": "4",
    "bits_per_pixel": "64",
    "bit_depths": "16-16-16-16"
  },
  {
    "flags": {
      "input": false,
      "output": false,
      "hardware": true,
      "paletted": false,
      "bitstream": false
    },
    "key": "videotoolbox_vld",
    "nb_components": "0",
    "bits_per_pixel": "0",
    "bit_depths": "0"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "p010le",
    "nb_components": "3",
    "bits_per_pixel": "15",
    "bit_depths": "10-10-10"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "p010be",
    "nb_components": "3",
    "bits_per_pixel": "15",
    "bit_depths": "10-10-10"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "gbrap12be",
    "nb_components": "4",
    "bits_per_pixel": "48",
    "bit_depths": "12-12-12-12"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "gbrap12le",
    "nb_components": "4",
    "bits_per_pixel": "48",
    "bit_depths": "12-12-12-12"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "gbrap10be",
    "nb_components": "4",
    "bits_per_pixel": "40",
    "bit_depths": "10-10-10-10"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "gbrap10le",
    "nb_components": "4",
    "bits_per_pixel": "40",
    "bit_depths": "10-10-10-10"
  },
  {
    "flags": {
      "input": false,
      "output": false,
      "hardware": true,
      "paletted": false,
      "bitstream": false
    },
    "key": "mediacodec",
    "nb_components": "0",
    "bits_per_pixel": "0",
    "bit_depths": "0"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "gray12be",
    "nb_components": "1",
    "bits_per_pixel": "12",
    "bit_depths": "12"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "gray12le",
    "nb_components": "1",
    "bits_per_pixel": "12",
    "bit_depths": "12"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "gray10be",
    "nb_components": "1",
    "bits_per_pixel": "10",
    "bit_depths": "10"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "gray10le",
    "nb_components": "1",
    "bits_per_pixel": "10",
    "bit_depths": "10"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "p016le",
    "nb_components": "3",
    "bits_per_pixel": "24",
    "bit_depths": "16-16-16"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "p016be",
    "nb_components": "3",
    "bits_per_pixel": "24",
    "bit_depths": "16-16-16"
  },
  {
    "flags": {
      "input": false,
      "output": false,
      "hardware": true,
      "paletted": false,
      "bitstream": false
    },
    "key": "d3d11",
    "nb_components": "0",
    "bits_per_pixel": "0",
    "bit_depths": "0"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "gray9be",
    "nb_components": "1",
    "bits_per_pixel": "9",
    "bit_depths": "9"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "gray9le",
    "nb_components": "1",
    "bits_per_pixel": "9",
    "bit_depths": "9"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "gbrpf32be",
    "nb_components": "3",
    "bits_per_pixel": "96",
    "bit_depths": "32-32-32"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "gbrpf32le",
    "nb_components": "3",
    "bits_per_pixel": "96",
    "bit_depths": "32-32-32"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "gbrapf32be",
    "nb_components": "4",
    "bits_per_pixel": "128",
    "bit_depths": "32-32-32-32"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "gbrapf32le",
    "nb_components": "4",
    "bits_per_pixel": "128",
    "bit_depths": "32-32-32-32"
  },
  {
    "flags": {
      "input": false,
      "output": false,
      "hardware": true,
      "paletted": false,
      "bitstream": false
    },
    "key": "drm_prime",
    "nb_components": "0",
    "bits_per_pixel": "0",
    "bit_depths": "0"
  },
  {
    "flags": {
      "input": false,
      "output": false,
      "hardware": true,
      "paletted": false,
      "bitstream": false
    },
    "key": "opencl",
    "nb_components": "0",
    "bits_per_pixel": "0",
    "bit_depths": "0"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "gray14be",
    "nb_components": "1",
    "bits_per_pixel": "14",
    "bit_depths": "14"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "gray14le",
    "nb_components": "1",
    "bits_per_pixel": "14",
    "bit_depths": "14"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "grayf32be",
    "nb_components": "1",
    "bits_per_pixel": "32",
    "bit_depths": "32"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "grayf32le",
    "nb_components": "1",
    "bits_per_pixel": "32",
    "bit_depths": "32"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuva422p12be",
    "nb_components": "4",
    "bits_per_pixel": "36",
    "bit_depths": "12-12-12-12"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuva422p12le",
    "nb_components": "4",
    "bits_per_pixel": "36",
    "bit_depths": "12-12-12-12"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuva444p12be",
    "nb_components": "4",
    "bits_per_pixel": "48",
    "bit_depths": "12-12-12-12"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "yuva444p12le",
    "nb_components": "4",
    "bits_per_pixel": "48",
    "bit_depths": "12-12-12-12"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "nv24",
    "nb_components": "3",
    "bits_per_pixel": "24",
    "bit_depths": "8-8-8"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "nv42",
    "nb_components": "3",
    "bits_per_pixel": "24",
    "bit_depths": "8-8-8"
  },
  {
    "flags": {
      "input": false,
      "output": false,
      "hardware": true,
      "paletted": false,
      "bitstream": false
    },
    "key": "vulkan",
    "nb_components": "0",
    "bits_per_pixel": "0",
    "bit_depths": "0"
  },
  {
    "flags": {
      "input": false,
      "output": false,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "y210be",
    "nb_components": "3",
    "bits_per_pixel": "20",
    "bit_depths": "10-10-10"
  },
  {
    "flags": {
      "input": true,
      "output": false,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "y210le",
    "nb_components": "3",
    "bits_per_pixel": "20",
    "bit_depths": "10-10-10"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "x2rgb10le",
    "nb_components": "3",
    "bits_per_pixel": "30",
    "bit_depths": "10-10-10"
  },
  {
    "flags": {
      "input": false,
      "output": false,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "x2rgb10be",
    "nb_components": "3",
    "bits_per_pixel": "30",
    "bit_depths": "10-10-10"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "x2bgr10le",
    "nb_components": "3",
    "bits_per_pixel": "30",
    "bit_depths": "10-10-10"
  },
  {
    "flags": {
      "input": false,
      "output": false,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "x2bgr10be",
    "nb_components": "3",
    "bits_per_pixel": "30",
    "bit_depths": "10-10-10"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "p210be",
    "nb_components": "3",
    "bits_per_pixel": "20",
    "bit_depths": "10-10-10"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "p210le",
    "nb_components": "3",
    "bits_per_pixel": "20",
    "bit_depths": "10-10-10"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "p410be",
    "nb_components": "3",
    "bits_per_pixel": "30",
    "bit_depths": "10-10-10"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "p410le",
    "nb_components": "3",
    "bits_per_pixel": "30",
    "bit_depths": "10-10-10"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "p216be",
    "nb_components": "3",
    "bits_per_pixel": "32",
    "bit_depths": "16-16-16"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "p216le",
    "nb_components": "3",
    "bits_per_pixel": "32",
    "bit_depths": "16-16-16"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "p416be",
    "nb_components": "3",
    "bits_per_pixel": "48",
    "bit_depths": "16-16-16"
  },
  {
    "flags": {
      "input": true,
      "output": true,
      "hardware": false,
      "paletted": false,
      "bitstream": false
    },
    "key": "p416le",
    "nb_components": "3",
    "bits_per_pixel": "48",
    "bit_depths": "16-16-16"
  }
]
