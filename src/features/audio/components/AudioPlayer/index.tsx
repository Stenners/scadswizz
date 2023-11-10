import { RefObject, useEffect, useRef, useState } from "react";
import { PlayButton } from "../../../../common/PlayButton";
import { detachAndDestroy, initialise } from "../../util/hlsLoader";

interface AudioPlayerProps {
  src: string;
  onTimeUpdate: (time: number) => void;
  onDurationUpdate: (time: number) => void;
  onSetAudioRef: (audioRef: RefObject<HTMLAudioElement>) => void;
  onPlayed: () => void;
  onSetRelUrl: (relUrl: string) => void;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  src,
  onTimeUpdate,
  onDurationUpdate,
  onSetAudioRef,
  onPlayed,
  onSetRelUrl,
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!audioRef.current) {
      return;
    }

    audioRef.current.onplay = () => setPlaying(true);
    audioRef.current.onpause = () => setPlaying(false);
    audioRef.current.ontimeupdate = (e: any) =>
      onTimeUpdate(e.target.currentTime);
    audioRef.current.onloadeddata = () => {
      onDurationUpdate(audioRef?.current?.duration ?? 0);
    };
    onSetAudioRef(audioRef);
  });

  const updateTrackInfo = (
    artist: string,
    artworkUrl: string,
    title: string,
    relUrl: string
  ) => {
    onSetRelUrl(relUrl);
  };

  const handlePlay = () => {
    if (!audioRef.current) {
      console.error("current is not available on audioRef");
      return;
    }

    detachAndDestroy();
    initialise(audioRef.current, src, updateTrackInfo);
    audioRef.current.play();
    onPlayed();
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
      <PlayButton
        className="h-[100px] w-[100px]"
        onClick={playing ? handlePause : handlePlay}
        playing={playing}
      />
    </>
  );
};
