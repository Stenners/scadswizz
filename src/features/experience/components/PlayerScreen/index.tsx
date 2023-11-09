import { FadeIn } from "../../../../common/FadeIn";
import { useExperienceContext } from "../../../../context/ExperienceProvider";
import { AudioPlayer } from "../../../audio/components/AudioPlayer";

export const PlayerScreen = () => {
  const { streams } = useExperienceContext();

  const renderStreams = () => {
    return streams.map((stream, index) => {
      const baseDelay = 0.15 * (index + 4);
      return (
        <div className="flex w-full">
          <div>
            <FadeIn direction="up" delay={baseDelay}>
              <AudioPlayer src={stream} />
            </FadeIn>
          </div>
          <div className="grow p-2">
            <FadeIn delay={baseDelay + 0.15}>
              <h2 className="font-semibold">Test audio 1</h2>
            </FadeIn>
            <FadeIn direction="left" delay={baseDelay + 0.3}>
              <p className="text-sm opacity-75">
                This is an exmaple audio stream with an audio ad coming from our
                custom server
              </p>
            </FadeIn>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <FadeIn delay={0.15}>
        <h1 className="text-5xl font-bold mb-3">
          <FadeIn delay={0.45}>you're</FadeIn>
          now listening to{" "}
          <FadeIn delay={0.75} direction="left">
            <strong className="text-emerald-500">SCADSWIZZ</strong>
          </FadeIn>{" "}
          radio
        </h1>
      </FadeIn>
      <FadeIn direction="left" delay={0.3}>
        <p className="text-sm">
          Below are two identical streams. One stream contains an ad served from
          our legacy ad server, the other comes from our custom purpose built
          server
        </p>
      </FadeIn>
      <div className="py-12 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 flex items-center justify-center flex-col gap-10">
        {renderStreams()}
      </div>
    </div>
  );
};
