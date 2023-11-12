export interface Preset {
    key: string;
    label: string;
}

export const presets: Preset[] = [
  {
    key: "ultrafast",
    label: "Ultra Fast"
  },
  {
    key: "superfast",
    label: "Super Fast"
  },
  {
    key: "veryfast",
    label: "Very Fast"
  },
  {
    key: "faster",
    label: "Faster"
  },
  {
    key: "fast",
    label: "Fast"
  },
  {
    key: "medium",
    label: "Medium"
  },
  {
    key: "slow",
    label: "Slow"
  },
  {
    key: "slower",
    label: "Slower"
  },
  {
    key: "veryslow",
    label: "Very Slow"
  }
]