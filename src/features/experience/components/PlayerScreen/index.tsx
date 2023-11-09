import { useState } from "react";
import { FadeIn } from "../../../../common/FadeIn";
import { InView } from "../../../../common/InView";
import { useExperienceContext } from "../../../../context/ExperienceProvider";
import { AudioPlayer } from "../../../audio/components/AudioPlayer";
import { PlayerBar } from "../../../audio/components/PlayerBar";

export const PlayerScreen = () => {
  const { streams } = useExperienceContext();
  const [audioEnded, setAudioEnded] = useState(false);
  const [audioDuration, setAudioDuration] = useState(0);
  const [audioTime, setAudioTime] = useState(0);

  const renderStreams = () => {
    return streams.map((stream, index) => {
      const baseDelay = 0.15 * (index + 4);
      return (
        <div className="flex items-center w-full">
          <div>
            <FadeIn direction="up" delay={baseDelay}>
              <AudioPlayer
                src={stream}
                onTimeUpdate={(time) => setAudioTime(time)}
                onDurationUpdate={(time) => setAudioDuration(time)}
              />
            </FadeIn>
          </div>
          <div className="grow p-2">
            <FadeIn delay={baseDelay + 0.15}>
              <h2 className="font-semibold">Test audio 1</h2>
            </FadeIn>
            <FadeIn direction="left" delay={baseDelay + 0.3}>
              <p className="text-sm opacity-75 mb-2">
                This is an exmaple audio stream with an audio ad coming from our
                custom server
              </p>
            </FadeIn>
            <PlayerBar time={audioTime} duration={audioDuration} />
          </div>
        </div>
      );
    });
  };

  return (
    <div className="w-full flex justify-center">
      <div className="md:w-1/2">
        <FadeIn delay={0.15}>
          <h1 className="text-5xl font-bold mb-3">
            <FadeIn delay={0.45}>you're</FadeIn>
            now listening to{" "}
            <FadeIn delay={0.75} direction="left">
              <strong className="text-main">SCADSWIZZ</strong>
            </FadeIn>{" "}
            radio
          </h1>
        </FadeIn>
        <FadeIn direction="left" delay={0.3}>
          <p className="text-sm">
            Below are two identical streams. One stream contains an ad served
            from our legacy ad server, the other comes from our custom purpose
            built server
          </p>
        </FadeIn>
        <div className="py-12 w-full flex items-center justify-center flex-col gap-10">
          {renderStreams()}
        </div>
        {audioEnded && (
          <InView>
            <FadeIn delay={0.15}>
              <h1 className="text-5xl font-bold mb-3 text-right">
                Let's keep going...
              </h1>
            </FadeIn>
          </InView>
        )}
      </div>
    </div>
  );
};
