export interface AudioChannel {
  key: number;
  label: string;
}

export const audioChannels: AudioChannel[] = [
  {
    key: 0,
    label: "Auto",
  },
  {
    key: 1,
    label: "Mono",
  },
  {
    key: 2,
    label: "Stereo",
  },
  {
    key: 6,
    label: "5.1 Surround",
  },
  {
    key: 8,
    label: "7.1 Surround",
  },
]