import { FadeIn } from "../../../../common/FadeIn";
import { useExperienceContext } from "../../../../context/ExperienceProvider";
import { AudioPlayer } from "../../../audio/components/AudioPlayer";

export const PlayerScreen = () => {
  const { streams } = useExperienceContext();

  const renderStreams = () => {
    return streams.map((stream, index) => {
      const baseDelay = 0.15 * (index + 3);
      return (
        <div className="flex w-full">
          <div>
            <FadeIn direction="up" delay={baseDelay}>
              <AudioPlayer src={stream} />
            </FadeIn>
          </div>
          <FadeIn direction="left" delay={baseDelay + 0.15}>
            <div className="grow">test</div>
          </FadeIn>
        </div>
      );
    });
  };

  return (
    <div>
      <FadeIn>
        <h1 className="text-3xl font-bold mb-2">
          You are now listening to SCADSWIZZ radio
        </h1>
      </FadeIn>
      <FadeIn direction="up">
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
