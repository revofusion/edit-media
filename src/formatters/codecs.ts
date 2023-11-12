
export interface Codec {
    flags: {
      decoding: boolean
      encoding: boolean
      video?: boolean
      audio?: boolean
      subtitle?: boolean
      intraframe: boolean
      lossy: boolean
      lossless: boolean
    }
    key: string
    description: string
  }

  export const codecs: Codec[] = [
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "audio": true,
      "subtitle": true,
      "intraframe": true,
      "lossless": true,
      "lossy": false
    },
    "key": "auto",
    "description": "Auto"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "audio": true,
      "subtitle": true,
      "intraframe": true,
      "lossless": true,
      "lossy": false
    },
    "key": "copy",
    "description": "Copy Encoding"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "012v",
    "description": "Uncompressed 4:2:2 10-bit"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "4xm",
    "description": "4X Movie"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "8bps",
    "description": "QuickTime 8BPS video"
  },
  {
    "flags": {
      "decoding": false,
      "encoding": true,
      "video": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "a64_multi",
    "description": "Multicolor charset for Commodore 64 "
  },
  {
    "flags": {
      "decoding": false,
      "encoding": true,
      "video": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "a64_multi5",
    "description": "Multicolor charset for Commodore 64, extended with 5th color (colram) "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": false,
      "lossless": true
    },
    "key": "aasc",
    "description": "Autodesk RLE"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "agm",
    "description": "Amuse Graphics Movie"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "aic",
    "description": "Apple Intermediate Codec"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "alias_pix",
    "description": "Alias/Wavefront PIX image"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "amv",
    "description": "AMV Video"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "anm",
    "description": "Deluxe Paint Animation"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "ansi",
    "description": "ASCII/ANSI art"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": false,
      "lossy": false,
      "lossless": true
    },
    "key": "apng",
    "description": "APNG (Animated Portable Network Graphics) image"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "arbc",
    "description": "Gryphon's Anim Compressor"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "argo",
    "description": "Argonaut Games Video"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "asv1",
    "description": "ASUS V1"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "asv2",
    "description": "ASUS V2"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "aura",
    "description": "Auravision AURA"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "aura2",
    "description": "Auravision Aura 2"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "av1",
    "description": "Alliance for Open Media AV1  "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": false,
      "lossless": false
    },
    "key": "avrn",
    "description": "Avid AVI Codec"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "avrp",
    "description": "Avid 1:1 10-bit RGB Packer"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "avs",
    "description": "AVS (Audio Video Standard) video"
  },
  {
    "flags": {
      "decoding": false,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "avs2",
    "description": "AVS2-P2/IEEE1857.4"
  },
  {
    "flags": {
      "decoding": false,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "avs3",
    "description": "AVS3-P2/IEEE1857.10"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "avui",
    "description": "Avid Meridien Uncompressed"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "ayuv",
    "description": "Uncompressed packed MS 4:4:4:4"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "bethsoftvid",
    "description": "Bethesda VID video"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "bfi",
    "description": "Brute Force & Ignorance"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "binkvideo",
    "description": "Bink video"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": false
    },
    "key": "bintext",
    "description": "Binary text"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "bitpacked",
    "description": "Bitpacked"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "bmp",
    "description": "BMP (Windows and OS/2 bitmap)"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": false,
      "lossless": true
    },
    "key": "bmv_video",
    "description": "Discworld II BMV video"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "brender_pix",
    "description": "BRender PIX image"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "c93",
    "description": "Interplay C93"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "cavs",
    "description": "Chinese AVS (Audio Video Standard) (AVS1-P2, JiZhun profile)"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "cdgraphics",
    "description": "CD Graphics video"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": false,
      "lossless": true
    },
    "key": "cdtoons",
    "description": "CDToons video"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "cdxl",
    "description": "Commodore CDXL video"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "cfhd",
    "description": "GoPro CineForm HD"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "cinepak",
    "description": "Cinepak"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "clearvideo",
    "description": "Iterated Systems ClearVideo"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "cljr",
    "description": "Cirrus Logic AccuPak"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "cllc",
    "description": "Canopus Lossless Codec"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "cmv",
    "description": "Electronic Arts CMV video "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": false,
      "lossless": false
    },
    "key": "cpia",
    "description": "CPiA video format"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": true,
      "lossy": true,
      "lossless": true
    },
    "key": "cri",
    "description": "Cintel RAW"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": false,
      "lossless": true
    },
    "key": "cscd",
    "description": "CamStudio "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "cyuv",
    "description": "Creative YUV (CYUV)"
  },
  {
    "flags": {
      "decoding": false,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": true
    },
    "key": "daala",
    "description": "Daala"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": true,
      "lossy": true,
      "lossless": true
    },
    "key": "dds",
    "description": "DirectDraw Surface image decoder"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "dfa",
    "description": "Chronomaster DFA"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": true
    },
    "key": "dirac",
    "description": "Dirac "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "dnxhd",
    "description": "VC3/DNxHD"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "dpx",
    "description": "DPX (Digital Picture Exchange) image"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "dsicinvideo",
    "description": "Delphine Software International CIN video"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "dvvideo",
    "description": "DV (Digital Video)"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": false,
      "lossless": true
    },
    "key": "dxa",
    "description": "Feeble Files/ScummVM DXA"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "dxtory",
    "description": "Dxtory"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "dxv",
    "description": "Resolume DXV"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "escape124",
    "description": "Escape 124"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "escape130",
    "description": "Escape 130"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": true,
      "lossy": true,
      "lossless": true
    },
    "key": "exr",
    "description": "OpenEXR image"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": false,
      "lossy": false,
      "lossless": true
    },
    "key": "ffv1",
    "description": "FFmpeg video codec #1"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "ffvhuff",
    "description": "Huffyuv FFmpeg variant"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "fic",
    "description": "Mirillis FIC"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "fits",
    "description": "FITS (Flexible Image Transport System)"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": false,
      "lossy": false,
      "lossless": true
    },
    "key": "flashsv",
    "description": "Flash Screen Video v1"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "flashsv2",
    "description": "Flash Screen Video v2"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": false,
      "lossless": true
    },
    "key": "flic",
    "description": "Autodesk Animator Flic video"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "flv1",
    "description": "FLV / Sorenson Spark / Sorenson H.263 (Flash Video)  "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": false,
      "lossless": true
    },
    "key": "fmvc",
    "description": "FM Screen Capture Codec"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "fraps",
    "description": "Fraps"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "frwu",
    "description": "Forward Uncompressed"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "g2m",
    "description": "Go2Meeting"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "gdv",
    "description": "Gremlin Digital Video"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "gem",
    "description": "GEM Raster image"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": false,
      "lossy": false,
      "lossless": true
    },
    "key": "gif",
    "description": "CompuServe GIF (Graphics Interchange Format)"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "h261",
    "description": "H.261"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "h263",
    "description": "H.263 / H.263-1996, H.263+ / H.263-1998 / H.263 version 2"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "h263i",
    "description": "Intel H.263"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "h263p",
    "description": "H.263+ / H.263-1998 / H.263 version 2"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": true
    },
    "key": "h264",
    "description": "H.264 / AVC / MPEG-4 AVC / MPEG-4 part 10 "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "hap",
    "description": "Vidvox Hap"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "hevc",
    "description": "H.265 / HEVC (High Efficiency Video Coding) "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "hnm4video",
    "description": "HNM 4 video"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "hq_hqa",
    "description": "Canopus HQ/HQA"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "hqx",
    "description": "Canopus HQX"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "huffyuv",
    "description": "HuffYUV"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "hymt",
    "description": "HuffYUV MT"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "idcin",
    "description": "id Quake II CIN video "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": false
    },
    "key": "idf",
    "description": "iCEDraw text"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "iff_ilbm",
    "description": "IFF ACBM/ANIM/DEEP/ILBM/PBM/RGB8/RGBN "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "imm4",
    "description": "Infinity IMM4"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "imm5",
    "description": "Infinity IMM5"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "indeo2",
    "description": "Intel Indeo 2"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "indeo3",
    "description": "Intel Indeo 3"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "indeo4",
    "description": "Intel Indeo Video Interactive 4"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "indeo5",
    "description": "Intel Indeo Video Interactive 5"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "interplayvideo",
    "description": "Interplay MVE video"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "ipu",
    "description": "IPU Video"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": true,
      "lossy": true,
      "lossless": true
    },
    "key": "jpeg2000",
    "description": "JPEG 2000  "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": true,
      "lossy": true,
      "lossless": true
    },
    "key": "jpegls",
    "description": "JPEG-LS"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "jv",
    "description": "Bitmap Brothers JV video"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "kgv1",
    "description": "Kega Game Video"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "kmvc",
    "description": "Karl Morton's video codec"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "lagarith",
    "description": "Lagarith lossless"
  },
  {
    "flags": {
      "decoding": false,
      "encoding": true,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "ljpeg",
    "description": "Lossless JPEG"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "loco",
    "description": "LOCO"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "lscr",
    "description": "LEAD Screen Capture"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "m101",
    "description": "Matrox Uncompressed SD"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "mad",
    "description": "Electronic Arts Madcow Video "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "magicyuv",
    "description": "MagicYUV video"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "mdec",
    "description": "Sony PlayStation MDEC (Motion DECoder)"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "mimic",
    "description": "Mimic"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "mjpeg",
    "description": "Motion JPEG"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "mjpegb",
    "description": "Apple MJPEG-B"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "mmvideo",
    "description": "American Laser Games MM Video"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "mobiclip",
    "description": "MobiClip Video"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "motionpixels",
    "description": "Motion Pixels video"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "mpeg1video",
    "description": "MPEG-1 video"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "mpeg2video",
    "description": "MPEG-2 video "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "mpeg4",
    "description": "MPEG-4 part 2"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "msa1",
    "description": "MS ATC Screen"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "mscc",
    "description": "Mandsoft Screen Capture Codec"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "msmpeg4v1",
    "description": "MPEG-4 part 2 Microsoft variant version 1"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "msmpeg4v2",
    "description": "MPEG-4 part 2 Microsoft variant version 2"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "msmpeg4v3",
    "description": "MPEG-4 part 2 Microsoft variant version 3  "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "msp2",
    "description": "Microsoft Paint (MSP) version 2"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": false,
      "lossless": true
    },
    "key": "msrle",
    "description": "Microsoft RLE"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "mss1",
    "description": "MS Screen 1"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "mss2",
    "description": "MS Windows Media Video V9 Screen"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "msvideo1",
    "description": "Microsoft Video 1"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "mszh",
    "description": "LCL (LossLess Codec Library) MSZH"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "mts2",
    "description": "MS Expression Encoder Screen"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "mv30",
    "description": "MidiVid 3.0"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "mvc1",
    "description": "Silicon Graphics Motion Video Compressor 1"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "mvc2",
    "description": "Silicon Graphics Motion Video Compressor 2"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "mvdv",
    "description": "MidiVid VQ"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "mvha",
    "description": "MidiVid Archive Codec"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": false,
      "lossless": true
    },
    "key": "mwsc",
    "description": "MatchWare Screen Capture Codec"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "mxpeg",
    "description": "Mobotix MxPEG video"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "notchlc",
    "description": "NotchLC"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "nuv",
    "description": "NuppelVideo/RTJPEG"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "paf_video",
    "description": "Amazing Studio Packed Animation File Video"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "pam",
    "description": "PAM (Portable AnyMap) image"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "pbm",
    "description": "PBM (Portable BitMap) image"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "pcx",
    "description": "PC Paintbrush PCX image"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "pfm",
    "description": "PFM (Portable FloatMap) image"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "pgm",
    "description": "PGM (Portable GrayMap) image"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "pgmyuv",
    "description": "PGMYUV (Portable GrayMap YUV) image"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "pgx",
    "description": "PGX (JPEG2000 Test Format)"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "photocd",
    "description": "Kodak Photo CD"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "pictor",
    "description": "Pictor/PC Paint"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "pixlet",
    "description": "Apple Pixlet"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": false,
      "lossy": false,
      "lossless": true
    },
    "key": "png",
    "description": "PNG (Portable Network Graphics) image"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "ppm",
    "description": "PPM (Portable PixelMap) image"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "prores",
    "description": "Apple ProRes (iCodec Pro) "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "prosumer",
    "description": "Brooktree ProSumer Video"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "psd",
    "description": "Photoshop PSD file"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "ptx",
    "description": "V.Flash PTX image"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "qdraw",
    "description": "Apple QuickDraw"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "qpeg",
    "description": "Q-team QPEG"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": false,
      "lossy": false,
      "lossless": true
    },
    "key": "qtrle",
    "description": "QuickTime Animation (RLE) video"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "r10k",
    "description": "AJA Kona 10-bit RGB Codec"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "r210",
    "description": "Uncompressed RGB 10-bit"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "rasc",
    "description": "RemotelyAnywhere Screen Capture"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "rawvideo",
    "description": "raw video"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "rl2",
    "description": "RL2 video"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "roq",
    "description": "id RoQ video  "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "rpza",
    "description": "QuickTime video (RPZA)"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": false,
      "lossless": true
    },
    "key": "rscc",
    "description": "innoHeim/Rsupport Screen Capture Codec"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "rv10",
    "description": "RealVideo 1.0"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "rv20",
    "description": "RealVideo 2.0"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "rv30",
    "description": "RealVideo 3.0"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "rv40",
    "description": "RealVideo 4.0"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "sanm",
    "description": "LucasArts SANM/SMUSH video"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": true
    },
    "key": "scpr",
    "description": "ScreenPressor"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": false,
      "lossless": true
    },
    "key": "screenpresso",
    "description": "Screenpresso"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "sga",
    "description": "Digital Pictures SGA Video"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "sgi",
    "description": "SGI image"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "sgirle",
    "description": "SGI RLE 8-bit"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "sheervideo",
    "description": "BitJazz SheerVideo"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "simbiosis_imx",
    "description": "Simbiosis Interactive IMX Video"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "smackvideo",
    "description": "Smacker video "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "smc",
    "description": "QuickTime Graphics (SMC)"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "smvjpeg",
    "description": "Sigmatel Motion Video"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": true
    },
    "key": "snow",
    "description": "Snow"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "sp5x",
    "description": "Sunplus JPEG (SP5X)"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "speedhq",
    "description": "NewTek SpeedHQ"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "srgc",
    "description": "Screen Recorder Gold Codec"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "sunrast",
    "description": "Sun Rasterfile image"
  },
  {
    "flags": {
      "decoding": false,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": false,
      "lossless": true
    },
    "key": "svg",
    "description": "Scalable Vector Graphics"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "svq1",
    "description": "Sorenson Vector Quantizer 1 / Sorenson Video 1 / SVQ1"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "svq3",
    "description": "Sorenson Vector Quantizer 3 / Sorenson Video 3 / SVQ3"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "targa",
    "description": "Truevision Targa image"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "targa_y216",
    "description": "Pinnacle TARGA CineWave YUV16"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "tdsc",
    "description": "TDSC"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "tgq",
    "description": "Electronic Arts TGQ video "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "tgv",
    "description": "Electronic Arts TGV video "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "theora",
    "description": "Theora "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "thp",
    "description": "Nintendo Gamecube THP video"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "tiertexseqvideo",
    "description": "Tiertex Limited SEQ video"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "tiff",
    "description": "TIFF image"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "tmv",
    "description": "8088flex TMV"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "tqi",
    "description": "Electronic Arts TQI video "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "truemotion1",
    "description": "Duck TrueMotion 1.0"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "truemotion2",
    "description": "Duck TrueMotion 2.0"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "truemotion2rt",
    "description": "Duck TrueMotion 2.0 Real Time"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": false,
      "lossless": true
    },
    "key": "tscc",
    "description": "TechSmith Screen Capture Codec "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "tscc2",
    "description": "TechSmith Screen Codec 2"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "txd",
    "description": "Renderware TXD (TeXture Dictionary) image"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "ulti",
    "description": "IBM UltiMotion "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "utvideo",
    "description": "Ut Video"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "v210",
    "description": "Uncompressed 4:2:2 10-bit"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "v210x",
    "description": "Uncompressed 4:2:2 10-bit"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "v308",
    "description": "Uncompressed packed 4:4:4"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "v408",
    "description": "Uncompressed packed QT 4:4:4:4"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "v410",
    "description": "Uncompressed 4:4:4 10-bit"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "vb",
    "description": "Beam Software VB"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "vble",
    "description": "VBLE Lossless Codec"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "vc1",
    "description": "SMPTE VC-1"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "vc1image",
    "description": "Windows Media Video 9 Image v2"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "vcr1",
    "description": "ATI VCR1"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "vixl",
    "description": "Miro VideoXL "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "vmdvideo",
    "description": "Sierra VMD video"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": false,
      "lossless": true
    },
    "key": "vmnc",
    "description": "VMware Screen Codec / VMware Video"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "vp3",
    "description": "On2 VP3"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "vp4",
    "description": "On2 VP4"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "vp5",
    "description": "On2 VP5"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "vp6",
    "description": "On2 VP6"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "vp6a",
    "description": "On2 VP6 (Flash version, with alpha channel)"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "vp6f",
    "description": "On2 VP6 (Flash version)"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "vp7",
    "description": "On2 VP7"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "vp8",
    "description": "On2 VP8  "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "vp9",
    "description": "Google VP9  "
  },
  {
    "flags": {
      "decoding": false,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "vvc",
    "description": "H.266 / VVC (Versatile Video Coding)"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": false,
      "lossless": true
    },
    "key": "wcmv",
    "description": "WinCAM Motion Video"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": true,
      "lossy": true,
      "lossless": true
    },
    "key": "webp",
    "description": "WebP "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "wmv1",
    "description": "Windows Media Video 7"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "wmv2",
    "description": "Windows Media Video 8"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "wmv3",
    "description": "Windows Media Video 9"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "wmv3image",
    "description": "Windows Media Video 9 Image"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "wnv1",
    "description": "Winnov WNV1"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": false,
      "lossy": false,
      "lossless": true
    },
    "key": "wrapped_avframe",
    "description": "AVFrame to AVPacket passthrough"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "ws_vqa",
    "description": "Westwood Studios VQA (Vector Quantized Animation) video "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "xan_wc3",
    "description": "Wing Commander III / Xan"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "xan_wc4",
    "description": "Wing Commander IV / Xxan"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": false
    },
    "key": "xbin",
    "description": "eXtended BINary text"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "xbm",
    "description": "XBM (X BitMap) image"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "xface",
    "description": "X-face image"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "xpm",
    "description": "XPM (X PixMap) image"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "xwd",
    "description": "XWD (X Window Dump) image"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "y41p",
    "description": "Uncompressed YUV 4:1:1 12-bit"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "ylc",
    "description": "YUY2 Lossless Codec"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "yop",
    "description": "Psygnosis YOP Video"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "yuv4",
    "description": "Uncompressed packed 4:2:0"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "video": true,
      "intraframe": false,
      "lossy": false,
      "lossless": true
    },
    "key": "zerocodec",
    "description": "ZeroCodec Lossless Video"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "zlib",
    "description": "LCL (LossLess Codec Library) ZLIB"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "video": true,
      "intraframe": false,
      "lossy": false,
      "lossless": true
    },
    "key": "zmbv",
    "description": "Zip Motion Blocks Video"
  },
  {
    "flags": {
      "decoding": false,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "4gv",
    "description": "4GV (Fourth Generation Vocoder)"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "8svx_exp",
    "description": "8SVX exponential"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "8svx_fib",
    "description": "8SVX fibonacci"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "aac",
    "description": "AAC (Advanced Audio Coding)  "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "aac_latm",
    "description": "AAC LATM (Advanced Audio Coding LATM syntax)"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "ac3",
    "description": "ATSC A/52A (AC-3)  "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "acelp.kelvin",
    "description": "Sipro ACELP.KELVIN"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "adpcm_4xm",
    "description": "ADPCM 4X Movie"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "adpcm_adx",
    "description": "SEGA CRI ADX ADPCM"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "adpcm_afc",
    "description": "ADPCM Nintendo Gamecube AFC"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "adpcm_agm",
    "description": "ADPCM AmuseGraphics Movie AGM"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "adpcm_aica",
    "description": "ADPCM Yamaha AICA"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "adpcm_argo",
    "description": "ADPCM Argonaut Games"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "adpcm_ct",
    "description": "ADPCM Creative Technology"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "adpcm_dtk",
    "description": "ADPCM Nintendo Gamecube DTK"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "adpcm_ea",
    "description": "ADPCM Electronic Arts"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "adpcm_ea_maxis_xa",
    "description": "ADPCM Electronic Arts Maxis CDROM XA"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "adpcm_ea_r1",
    "description": "ADPCM Electronic Arts R1"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "adpcm_ea_r2",
    "description": "ADPCM Electronic Arts R2"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "adpcm_ea_r3",
    "description": "ADPCM Electronic Arts R3"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "adpcm_ea_xas",
    "description": "ADPCM Electronic Arts XAS"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "adpcm_g722",
    "description": "G.722 ADPCM  "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "adpcm_g726",
    "description": "G.726 ADPCM  "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "adpcm_g726le",
    "description": "G.726 ADPCM little-endian  "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "adpcm_ima_acorn",
    "description": "ADPCM IMA Acorn Replay"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "adpcm_ima_alp",
    "description": "ADPCM IMA High Voltage Software ALP"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "adpcm_ima_amv",
    "description": "ADPCM IMA AMV"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "adpcm_ima_apc",
    "description": "ADPCM IMA CRYO APC"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "adpcm_ima_apm",
    "description": "ADPCM IMA Ubisoft APM"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "adpcm_ima_cunning",
    "description": "ADPCM IMA Cunning Developments"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "adpcm_ima_dat4",
    "description": "ADPCM IMA Eurocom DAT4"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "adpcm_ima_dk3",
    "description": "ADPCM IMA Duck DK3"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "adpcm_ima_dk4",
    "description": "ADPCM IMA Duck DK4"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "adpcm_ima_ea_eacs",
    "description": "ADPCM IMA Electronic Arts EACS"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "adpcm_ima_ea_sead",
    "description": "ADPCM IMA Electronic Arts SEAD"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "adpcm_ima_iss",
    "description": "ADPCM IMA Funcom ISS"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "adpcm_ima_moflex",
    "description": "ADPCM IMA MobiClip MOFLEX"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "adpcm_ima_mtf",
    "description": "ADPCM IMA Capcom's MT Framework"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "adpcm_ima_oki",
    "description": "ADPCM IMA Dialogic OKI"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "adpcm_ima_qt",
    "description": "ADPCM IMA QuickTime "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "adpcm_ima_rad",
    "description": "ADPCM IMA Radical"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "adpcm_ima_smjpeg",
    "description": "ADPCM IMA Loki SDL MJPEG"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "adpcm_ima_ssi",
    "description": "ADPCM IMA Simon & Schuster Interactive"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "adpcm_ima_wav",
    "description": "ADPCM IMA WAV"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "adpcm_ima_ws",
    "description": "ADPCM IMA Westwood"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "adpcm_ms",
    "description": "ADPCM Microsoft"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "adpcm_mtaf",
    "description": "ADPCM MTAF"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "adpcm_psx",
    "description": "ADPCM Playstation"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "adpcm_sbpro_2",
    "description": "ADPCM Sound Blaster Pro 2-bit"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "adpcm_sbpro_3",
    "description": "ADPCM Sound Blaster Pro 2.6-bit"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "adpcm_sbpro_4",
    "description": "ADPCM Sound Blaster Pro 4-bit"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "adpcm_swf",
    "description": "ADPCM Shockwave Flash"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "adpcm_thp",
    "description": "ADPCM Nintendo THP"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "adpcm_thp_le",
    "description": "ADPCM Nintendo THP (Little-Endian)"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "adpcm_vima",
    "description": "LucasArts VIMA audio"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "adpcm_xa",
    "description": "ADPCM CDROM XA"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "adpcm_yamaha",
    "description": "ADPCM Yamaha"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "adpcm_zork",
    "description": "ADPCM Zork"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "alac",
    "description": "ALAC (Apple Lossless Audio Codec)  "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "amr_nb",
    "description": "AMR-NB (Adaptive Multi-Rate NarrowBand) "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "amr_wb",
    "description": "AMR-WB (Adaptive Multi-Rate WideBand) "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "ape",
    "description": "Monkey's Audio"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "aptx",
    "description": "aptX (Audio Processing Technology for Bluetooth)"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "aptx_hd",
    "description": "aptX HD (Audio Processing Technology for Bluetooth)"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "atrac1",
    "description": "ATRAC1 (Adaptive TRansform Acoustic Coding)"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "atrac3",
    "description": "ATRAC3 (Adaptive TRansform Acoustic Coding 3)"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "atrac3al",
    "description": "ATRAC3 AL (Adaptive TRansform Acoustic Coding 3 Advanced Lossless)"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "atrac3p",
    "description": "ATRAC3+ (Adaptive TRansform Acoustic Coding 3+) "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "atrac3pal",
    "description": "ATRAC3+ AL (Adaptive TRansform Acoustic Coding 3+ Advanced Lossless) "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "atrac9",
    "description": "ATRAC9 (Adaptive TRansform Acoustic Coding 9)"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "avc",
    "description": "On2 Audio for Video Codec "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "binkaudio_dct",
    "description": "Bink Audio (DCT)"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "binkaudio_rdft",
    "description": "Bink Audio (RDFT)"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "bmv_audio",
    "description": "Discworld II BMV audio"
  },
  {
    "flags": {
      "decoding": false,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "celt",
    "description": "Constrained Energy Lapped Transform (CELT)"
  },
  {
    "flags": {
      "decoding": false,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "codec2",
    "description": "codec2 (very low bitrate speech codec)"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "comfortnoise",
    "description": "RFC 3389 Comfort Noise"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "cook",
    "description": "Cook / Cooker / Gecko (RealAudio G2)"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "derf_dpcm",
    "description": "DPCM Xilam DERF"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "dolby_e",
    "description": "Dolby E"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "dsd_lsbf",
    "description": "DSD (Direct Stream Digital), least significant bit first"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "dsd_lsbf_planar",
    "description": "DSD (Direct Stream Digital), least significant bit first, planar"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "dsd_msbf",
    "description": "DSD (Direct Stream Digital), most significant bit first"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "dsd_msbf_planar",
    "description": "DSD (Direct Stream Digital), most significant bit first, planar"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "dsicinaudio",
    "description": "Delphine Software International CIN audio"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "dss_sp",
    "description": "Digital Speech Standard - Standard Play mode (DSS SP)"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "dst",
    "description": "DST (Direct Stream Transfer)"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": true
    },
    "key": "dts",
    "description": "DCA (DTS Coherent Acoustics)  "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "dvaudio",
    "description": "DV audio"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "eac3",
    "description": "ATSC A/52B (AC-3, E-AC-3) "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "evrc",
    "description": "EVRC (Enhanced Variable Rate Codec)"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "fastaudio",
    "description": "MobiClip FastAudio"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "flac",
    "description": "FLAC (Free Lossless Audio Codec)"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "g723_1",
    "description": "G.723.1"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "g729",
    "description": "G.729"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "gremlin_dpcm",
    "description": "DPCM Gremlin"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "gsm",
    "description": "GSM"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "gsm_ms",
    "description": "GSM Microsoft variant "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "hca",
    "description": "CRI HCA"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "hcom",
    "description": "HCOM Audio"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "iac",
    "description": "IAC (Indeo Audio Coder)"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "ilbc",
    "description": "iLBC (Internet Low Bitrate Codec)  "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "imc",
    "description": "IMC (Intel Music Coder)"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "interplay_dpcm",
    "description": "DPCM Interplay"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "interplayacm",
    "description": "Interplay ACM"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "mace3",
    "description": "MACE (Macintosh Audio Compression/Expansion) 3:1"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "mace6",
    "description": "MACE (Macintosh Audio Compression/Expansion) 6:1"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "metasound",
    "description": "Voxware MetaSound"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": false,
      "lossy": false,
      "lossless": true
    },
    "key": "mlp",
    "description": "MLP (Meridian Lossless Packing)"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "mp1",
    "description": "MP1 (MPEG audio layer 1) "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "mp2",
    "description": "MP2 (MPEG audio layer 2)  "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "mp3",
    "description": "MP3 (MPEG audio layer 3)  "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "mp3adu",
    "description": "ADU (Application Data Unit) MP3 (MPEG audio layer 3) "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "mp3on4",
    "description": "MP3onMP4 "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "mp4als",
    "description": "MPEG-4 Audio Lossless Coding (ALS) "
  },
  {
    "flags": {
      "decoding": false,
      "encoding": false,
      "audio": true,
      "intraframe": false,
      "lossy": true,
      "lossless": false
    },
    "key": "mpegh_3d_audio",
    "description": "MPEG-H 3D Audio"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "msnsiren",
    "description": "MSN Siren"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "musepack7",
    "description": "Musepack SV7 "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "musepack8",
    "description": "Musepack SV8 "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "nellymoser",
    "description": "Nellymoser Asao"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "opus",
    "description": "Opus (Opus Interactive Audio Codec)  "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "paf_audio",
    "description": "Amazing Studio Packed Animation File Audio"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "pcm_alaw",
    "description": "PCM A-law / G.711 A-law  "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "pcm_bluray",
    "description": "PCM signed 16|20|24-bit big-endian for Blu-ray media"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "pcm_dvd",
    "description": "PCM signed 20|24-bit big-endian"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "pcm_f16le",
    "description": "PCM 16.8 floating point little-endian"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "pcm_f24le",
    "description": "PCM 24.0 floating point little-endian"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "pcm_f32be",
    "description": "PCM 32-bit floating point big-endian"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "pcm_f32le",
    "description": "PCM 32-bit floating point little-endian"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "pcm_f64be",
    "description": "PCM 64-bit floating point big-endian"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "pcm_f64le",
    "description": "PCM 64-bit floating point little-endian"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "pcm_lxf",
    "description": "PCM signed 20-bit little-endian planar"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "pcm_mulaw",
    "description": "PCM mu-law / G.711 mu-law  "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "pcm_s16be",
    "description": "PCM signed 16-bit big-endian"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "pcm_s16be_planar",
    "description": "PCM signed 16-bit big-endian planar"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "pcm_s16le",
    "description": "PCM signed 16-bit little-endian"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "pcm_s16le_planar",
    "description": "PCM signed 16-bit little-endian planar"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "pcm_s24be",
    "description": "PCM signed 24-bit big-endian"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "pcm_s24daud",
    "description": "PCM D-Cinema audio signed 24-bit"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "pcm_s24le",
    "description": "PCM signed 24-bit little-endian"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "pcm_s24le_planar",
    "description": "PCM signed 24-bit little-endian planar"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "pcm_s32be",
    "description": "PCM signed 32-bit big-endian"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "pcm_s32le",
    "description": "PCM signed 32-bit little-endian"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "pcm_s32le_planar",
    "description": "PCM signed 32-bit little-endian planar"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "pcm_s64be",
    "description": "PCM signed 64-bit big-endian"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "pcm_s64le",
    "description": "PCM signed 64-bit little-endian"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "pcm_s8",
    "description": "PCM signed 8-bit"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "pcm_s8_planar",
    "description": "PCM signed 8-bit planar"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "pcm_sga",
    "description": "PCM SGA"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "pcm_u16be",
    "description": "PCM unsigned 16-bit big-endian"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "pcm_u16le",
    "description": "PCM unsigned 16-bit little-endian"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "pcm_u24be",
    "description": "PCM unsigned 24-bit big-endian"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "pcm_u24le",
    "description": "PCM unsigned 24-bit little-endian"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "pcm_u32be",
    "description": "PCM unsigned 32-bit big-endian"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "pcm_u32le",
    "description": "PCM unsigned 32-bit little-endian"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "pcm_u8",
    "description": "PCM unsigned 8-bit"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "pcm_vidc",
    "description": "PCM Archimedes VIDC"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "qcelp",
    "description": "QCELP / PureVoice"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "qdm2",
    "description": "QDesign Music Codec 2 "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "qdmc",
    "description": "QDesign Music "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "ra_144",
    "description": "RealAudio 1.0 (14.4K)  "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "ra_288",
    "description": "RealAudio 2.0 (28.8K) "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "ralf",
    "description": "RealAudio Lossless"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "roq_dpcm",
    "description": "DPCM id RoQ"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "s302m",
    "description": "SMPTE 302M"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "sbc",
    "description": "SBC (low-complexity subband codec)"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "sdx2_dpcm",
    "description": "DPCM Squareroot-Delta-Exact"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "shorten",
    "description": "Shorten"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "sipr",
    "description": "RealAudio SIPR / ACELP.NET"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "siren",
    "description": "Siren"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "smackaudio",
    "description": "Smacker audio "
  },
  {
    "flags": {
      "decoding": false,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "smv",
    "description": "SMV (Selectable Mode Vocoder)"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "sol_dpcm",
    "description": "DPCM Sol"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": false,
      "lossless": false
    },
    "key": "sonic",
    "description": "Sonic"
  },
  {
    "flags": {
      "decoding": false,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": false,
      "lossless": false
    },
    "key": "sonicls",
    "description": "Sonic lossless"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "speex",
    "description": "Speex"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": false,
      "lossy": false,
      "lossless": true
    },
    "key": "tak",
    "description": "TAK (Tom's lossless Audio Kompressor)"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": false,
      "lossy": false,
      "lossless": true
    },
    "key": "truehd",
    "description": "TrueHD"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "truespeech",
    "description": "DSP Group TrueSpeech"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "tta",
    "description": "TTA (True Audio)"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "twinvq",
    "description": "VQF TwinVQ"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "vmdaudio",
    "description": "Sierra VMD audio"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "vorbis",
    "description": "Vorbis  "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": false,
      "lossless": false
    },
    "key": "wavesynth",
    "description": "Wave synthesis pseudo-codec"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": true
    },
    "key": "wavpack",
    "description": "WavPack"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "westwood_snd1",
    "description": "Westwood Audio (SND1) "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": false,
      "lossless": true
    },
    "key": "wmalossless",
    "description": "Windows Media Audio Lossless"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "wmapro",
    "description": "Windows Media Audio 9 Professional"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "wmav1",
    "description": "Windows Media Audio 1"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "wmav2",
    "description": "Windows Media Audio 2"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "wmavoice",
    "description": "Windows Media Audio Voice"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "xan_dpcm",
    "description": "DPCM Xan"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "xma1",
    "description": "Xbox Media Audio 1"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "audio": true,
      "intraframe": true,
      "lossy": true,
      "lossless": false
    },
    "key": "xma2",
    "description": "Xbox Media Audio 2"
  },
  {
    "flags": {
      "decoding": false,
      "encoding": false,
      "subtitle": true,
      "intraframe": false,
      "lossy": false,
      "lossless": false
    },
    "key": "arib_caption",
    "description": "ARIB STD-B24 caption"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "subtitle": true,
      "intraframe": false,
      "lossy": false,
      "lossless": false
    },
    "key": "ass",
    "description": "ASS (Advanced SSA) subtitle  "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "subtitle": true,
      "intraframe": false,
      "lossy": false,
      "lossless": false
    },
    "key": "dvb_subtitle",
    "description": "DVB subtitles  "
  },
  {
    "flags": {
      "decoding": false,
      "encoding": false,
      "subtitle": true,
      "intraframe": false,
      "lossy": false,
      "lossless": false
    },
    "key": "dvb_teletext",
    "description": "DVB teletext"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "subtitle": true,
      "intraframe": false,
      "lossy": false,
      "lossless": false
    },
    "key": "dvd_subtitle",
    "description": "DVD subtitles  "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "subtitle": true,
      "intraframe": false,
      "lossy": false,
      "lossless": false
    },
    "key": "eia_608",
    "description": "EIA-608 closed captions "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "subtitle": true,
      "intraframe": false,
      "lossy": false,
      "lossless": false
    },
    "key": "hdmv_pgs_subtitle",
    "description": "HDMV Presentation Graphic Stream subtitles "
  },
  {
    "flags": {
      "decoding": false,
      "encoding": false,
      "subtitle": true,
      "intraframe": false,
      "lossy": false,
      "lossless": false
    },
    "key": "hdmv_text_subtitle",
    "description": "HDMV Text subtitle"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "subtitle": true,
      "intraframe": false,
      "lossy": false,
      "lossless": false
    },
    "key": "jacosub",
    "description": "JACOsub subtitle"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "subtitle": true,
      "intraframe": false,
      "lossy": false,
      "lossless": false
    },
    "key": "microdvd",
    "description": "MicroDVD subtitle"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "subtitle": true,
      "intraframe": false,
      "lossy": false,
      "lossless": false
    },
    "key": "mov_text",
    "description": "MOV text"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "subtitle": true,
      "intraframe": false,
      "lossy": false,
      "lossless": false
    },
    "key": "mpl2",
    "description": "MPL2 subtitle"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "subtitle": true,
      "intraframe": false,
      "lossy": false,
      "lossless": false
    },
    "key": "pjs",
    "description": "PJS (Phoenix Japanimation Society) subtitle"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "subtitle": true,
      "intraframe": false,
      "lossy": false,
      "lossless": false
    },
    "key": "realtext",
    "description": "RealText subtitle"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "subtitle": true,
      "intraframe": false,
      "lossy": false,
      "lossless": false
    },
    "key": "sami",
    "description": "SAMI subtitle"
  },
  {
    "flags": {
      "decoding": false,
      "encoding": false,
      "subtitle": true,
      "intraframe": false,
      "lossy": false,
      "lossless": false
    },
    "key": "srt",
    "description": "SubRip subtitle with embedded timing"
  },
  {
    "flags": {
      "decoding": false,
      "encoding": false,
      "subtitle": true,
      "intraframe": false,
      "lossy": false,
      "lossless": false
    },
    "key": "ssa",
    "description": "SSA (SubStation Alpha) subtitle"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "subtitle": true,
      "intraframe": false,
      "lossy": false,
      "lossless": false
    },
    "key": "stl",
    "description": "Spruce subtitle format"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "subtitle": true,
      "intraframe": false,
      "lossy": false,
      "lossless": false
    },
    "key": "subrip",
    "description": "SubRip subtitle  "
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "subtitle": true,
      "intraframe": false,
      "lossy": false,
      "lossless": false
    },
    "key": "subviewer",
    "description": "SubViewer subtitle"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "subtitle": true,
      "intraframe": false,
      "lossy": false,
      "lossless": false
    },
    "key": "subviewer1",
    "description": "SubViewer v1 subtitle"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "subtitle": true,
      "intraframe": false,
      "lossy": false,
      "lossless": false
    },
    "key": "text",
    "description": "raw UTF-8 text"
  },
  {
    "flags": {
      "decoding": false,
      "encoding": true,
      "subtitle": true,
      "intraframe": false,
      "lossy": false,
      "lossless": false
    },
    "key": "ttml",
    "description": "Timed Text Markup Language"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": false,
      "subtitle": true,
      "intraframe": false,
      "lossy": false,
      "lossless": false
    },
    "key": "vplayer",
    "description": "VPlayer subtitle"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "subtitle": true,
      "intraframe": false,
      "lossy": false,
      "lossless": false
    },
    "key": "webvtt",
    "description": "WebVTT subtitle"
  },
  {
    "flags": {
      "decoding": true,
      "encoding": true,
      "subtitle": true,
      "intraframe": false,
      "lossy": false,
      "lossless": false
    },
    "key": "xsub",
    "description": "XSUB"
  }
]

  export const videoCodecs: Codec[] = codecs.filter(_ => _.flags.video && _.flags.encoding && _.flags.decoding)
  export const audioCodecs: Codec[] = codecs.filter(_ => _.flags.audio && _.flags.encoding && _.flags.decoding)

