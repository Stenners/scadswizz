// import { useState } from "react";
import { RefObject, useState } from "react";
import { FadeIn } from "../../../../common/FadeIn";
//import { InView } from "../../../../common/InView";
import { useExperienceContext } from "../../../../context/ExperienceProvider";
import { AudioPlayer } from "../../../audio/components/AudioPlayer";
// import { PlayerBar } from "../../../audio/components/PlayerBar";
import AudioVisualizer from "../../../audio/components/Visualizer";

export const PlayerScreen = () => {
  const { streamUrl } = useExperienceContext();
  //   const [audioEnded, setAudioEnded] = useState(false);
  //   const [audioDuration, setAudioDuration] = useState(0);
  //const [audioTime, setAudioTime] = useState(0);
  const [audioRef, setAudioRef] = useState<RefObject<HTMLAudioElement> | null>(
    null
  );
  const [played, setPlayed] = useState(false);

  console.log("streamUrl: ", streamUrl);

  return (
    <div className="w-full flex justify-center">
      <div className="md:w-1/2">
        <FadeIn delay={0.15}>
          <h1 className="text-5xl font-bold mb-3">
            <FadeIn delay={0.25} className="inline">
              you're&nbsp;
            </FadeIn>
            <FadeIn delay={0.45} direction="left" className="inline">
              now{" "}
            </FadeIn>
            listening to{" "}
            <FadeIn delay={0.5} direction="left">
              <strong className="text-main">SCADSWIZZ</strong>
            </FadeIn>{" "}
            radio
          </h1>
        </FadeIn>
        <FadeIn direction="left" delay={0.75}>
          <p className="text-sm">
            Below are two identical streams. One stream contains an ad served
            from our legacy ad server, the other comes from our custom purpose
            built server
          </p>
        </FadeIn>
        <div className="py-12 w-full flex items-center justify-center flex-col gap-10 mb-48">
          <div className="flex items-center w-full">
            <div>
              <FadeIn direction="up" delay={1}>
                <AudioPlayer
                  src={streamUrl}
                  onTimeUpdate={(time) => {}}
                  onDurationUpdate={(time) => {}}
                  onSetAudioRef={(audioRef) => setAudioRef(audioRef)}
                  onPlayed={() => setPlayed(true)}
                />
              </FadeIn>
            </div>
            <div className="grow p-2">
              <FadeIn delay={1 + 0.15}>
                <h2 className="font-semibold">Test audio 1</h2>
              </FadeIn>
              <FadeIn direction="left" delay={1 + 0.3}>
                <p className="text-sm opacity-75 mb-2">
                  This is an exmaple audio stream with an audio ad coming from
                  our custom server
                </p>
              </FadeIn>
              <FadeIn direction="up" delay={1 + 0.45}>
                <AudioVisualizer audioRef={audioRef} played={played} />
              </FadeIn>
            </div>
          </div>
        </div>
        {/* {
          <InView>
            <FadeIn delay={0.15}>
              <h1 className="text-5xl font-bold mb-3 text-right">
                Let's keep going...
              </h1>
            </FadeIn>
          </InView>
        } */}
      </div>
    </div>
  );
};
