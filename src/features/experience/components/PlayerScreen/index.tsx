import { useState } from "react";
import { FadeIn } from "../../../../common/FadeIn";
import { useExperienceContext } from "../../../../context/ExperienceProvider";
import { AudioPlayer } from "../../../audio/components/AudioPlayer";

interface PlayerScreenProps {
  eid: string;
}

export const PlayerScreen: React.FC<PlayerScreenProps> = ({ eid }) => {
  const { streamUrl } = useExperienceContext();
  const [played, setPlayed] = useState(false);
  const [relUrl, setRelUrl] = useState("");

  const userNameLower = eid.split(".")[0];
  const userNameCapitalize =
    userNameLower.charAt(0).toUpperCase() + userNameLower.slice(1);

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
          <p className="text-sm opacity-75 mb-2">
            This is an exmaple audio stream with an audio ad coming from our
            custom server
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
                  onSetAudioRef={(audioRef) => {}}
                  onPlayed={() => setPlayed(true)}
                  onSetRelUrl={(relUrl) => setRelUrl(relUrl)}
                />
              </FadeIn>
            </div>
            <div className="grow p-2">
              <FadeIn direction="left" delay={1 + 0.3}>
                <div className="text-xs opacity-50">{relUrl}</div>
              </FadeIn>
              <FadeIn delay={1 + 0.15}>
                <h2 className="font-semibold">
                  {userNameCapitalize}'s custom audio stream
                </h2>
                <div className="h-8 inline" />
                {played && (
                  <FadeIn direction="up">
                    <div>
                      <img src="/volume1.gif" alt="" className="h-8 inline" />
                    </div>
                  </FadeIn>
                )}
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
