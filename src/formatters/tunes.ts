export interface Tune {
  key: string;
  label: string
  description: string;
}

export const tunes: Tune[] = [
  {
    key: "auto",
    label: "Auto",
    description: "Automatic"
  },
  {
    key: "film",
    label: "Film",
    description: "Use for high quality movie content"
  },
  {
    key: "animation",
    label: "Animation",
    description: "Good for cartoons"
  },
  {
    key: "grain",
    label: "Grain",
    description: "Preserves the grain structure in old, grainy film material"
  },
  {
    key: "stillimage",
    label: "Still Image",
    description: "Good for slideshow-like content"
  },
  {
    key: "fastdecode",
    label: "Fast Decode",
    description: "Allows faster decoding by disabling certain filters"
  },
  {
    key: "zerolatency",
    label: "Zero Latency",
    description: "Good for fast encoding and low-latency streaming"
  }
]