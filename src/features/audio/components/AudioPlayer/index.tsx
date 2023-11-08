import { useEffect, useRef, useState } from "react";
import { Button } from "../../../../common/Button";
// import AudioVisualizer from "../Visualizer";

interface AudioPlayerProps {
  src: string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
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
    //setPlayed(true);
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
      <Button onClick={playing ? handlePause : handlePlay}>
        {playing ? "pause" : "play"}
      </Button>
    </>
  );
};
