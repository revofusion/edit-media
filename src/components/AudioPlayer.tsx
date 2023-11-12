import { useState, useEffect, useRef, FC } from 'react';
import WaveSurfer from 'wavesurfer.js/dist/wavesurfer';
import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa';

const AudioPlayer: FC<{
    url: string;
}> = ({ url }) => {
  const containerRef = useRef();
  const waveSurferRef = useRef(null as any);
  const [isPlaying, toggleIsPlaying] = useState(false);

  useEffect(() => {
    const waveSurfer = WaveSurfer.create({
      container: containerRef.current,
      barWidth: 2,
      barHeight: 10,
      cursorWidth: 0,
      backend: "WebAudio"
    });

    waveSurfer.load(url);
    waveSurfer.on('ready', () => {
      waveSurferRef.current = waveSurfer;
    });

    return () => {
      waveSurfer.destroy();
    };
  }, [url]);

  return (
    <div className="grid grid-cols-3 items-center">
      <button
        onClick={() => {
            if (waveSurferRef.current) {
                waveSurferRef.current.playPause();
                toggleIsPlaying(waveSurferRef.current.isPlaying());
            }
        }}
        type="button"
        className="w-10 h-10 border-none p-0"
      >
        {isPlaying ? <FaPauseCircle size="3em" /> : <FaPlayCircle size="3em" />}
      </button>
      <div className="col-span-2" ref={containerRef} />
    </div>
  );
};

export default AudioPlayer;
