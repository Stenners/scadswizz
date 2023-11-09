import { useEffect, useRef, useState } from "react";
import { PlayButton } from "../../../../common/PlayButton";
// import AudioVisualizer from "../Visualizer";

interface AudioPlayerProps {
  src: string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
  console.log(src);
  const audioRef = useRef<HTMLAudioElement>(null);
  //const [played, setPlayed] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!audioRef.current) {
      return;
    }

    audioRef.current.onplay = () => setPlaying(true);
    audioRef.current.onpause = () => setPlaying(false);
  }, []);

  const handlePlay = () => {
    if (!audioRef.current) {
      console.error("current is not available on audioRef");
      return;
    }
    audioRef.current.play();
  };

  const handlePause = () => {
    if (!audioRef.current) {
      console.error("current is not available on audioRef");
      return;
    }

    audioRef.current.pause();
  };

  return (
    <>
      <audio src={src} ref={audioRef}>
        Your browser does not support the audio element.
      </audio>
      {/* <AudioVisualizer audioRef={audioRef} played={played} /> */}
      <PlayButton
        className="h-[100px] w-[100px]"
        onClick={playing ? handlePause : handlePlay}
        playing={playing}
      />
    </>
  );
};
