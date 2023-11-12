export interface VideoResolution {
    key: string;
    width: string;
    height: string
    label: string
    type: 'default' | 'social'
}

export const videoResolutions: VideoResolution[] = [
    {
      "key": "custom",
      "width": "0",
      "height": "0",
      "label": "Custom",
      "type": "default"
    },
    {
      "key": "1920x1080",
      "width": "1920",
      "height": "1080",
      "label": "Full HD",
      "type": "default"
    },
    {
      "key": "1366x768",
      "width": "1366",
      "height": "768",
      "label": "HD",
      "type": "default"
    },
    {
      "key": "1280x720",
      "width": "1280",
      "height": "720",
      "label": "HD Ready",
      "type": "default"
    },
    {
      "key": "1600x900",
      "width": "1600",
      "height": "900",
      "label": "HD+",
      "type": "default"
    },
    {
        "key": "2560x1440",
        "width": "2560",
        "height": "1440",
        "label": "Quad HD",
        "type": "default"
    },
    {
        "key": "3840x2160",
        "width": "3840",
        "height": "2160",
        "label": "4K UHD",
        "type": "default"
    },
    {
        "key": "1440x900",
        "width": "1440",
        "height": "900",
        "label": "WXGA+",
        "type": "default"
    },
    {
      "key": "1280x1024",
      "width": "1280",
      "height": "1024",
      "label": "SXGA",
      "type": "default"
    },
    {
      "key": "1680x1050",
      "width": "1680",
      "height": "1050",
      "label": "WSXGA+",
      "type": "default"
    },
    {
      "key": "1024x768",
      "width": "1024",
      "height": "768",
      "label": "XGA",
      "type": "default"
    },
    {
      "key": "1080x1350",
      "width": "1080",
      "height": "1350",
      "label": "Instagram Post",
      "type": "social"
    },
    {
      "key": "1080x1920",
      "width": "1080",
      "height": "1920",
      "label": "Instagram Reel",
      "type": "social"
    },
    {
      "key": "1080x1920",
      "width": "1080",
      "height": "1920",
      "label": "TikTok Story",
      "type": "social"
    },
    {
      "key": "1920x1080",
      "width": "1920",
      "height": "1080",
      "label": "YouTube",
      "type": "social"
    },
    {
      "key": "1280x720",
      "width": "1280",
      "height": "720",
      "label": "YouTube",
      "type": "social"
    }
  ]
  