import { FadeIn } from "../../../../common/FadeIn";
import { Transition } from "../../../../common/Transition";
import { useExperienceContext } from "../../../../context/ExperienceProvider";

const getStepContent = (step: number) => {
  switch (step) {
    case 0:
      return <FadeIn key={1}>Noice, you're in</FadeIn>;
    case 1:
      return <FadeIn key={2}>Getting some stuff together</FadeIn>;
    case 2:
      return <FadeIn key={3}>Grabbing some streams</FadeIn>;
    case 3:
      return (
        <FadeIn key={4}>
          Almost there, just putting some stuff together...
        </FadeIn>
      );
    default:
      return "We're as lost as you, try signing out and in";
  }
};

export const LoadingScreen = () => {
  const { step } = useExperienceContext();

  return (
    <div className="w-full flex justify-center">
      <div className="py-12 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 flex items-center justify-center flex-col">
        {getStepContent(step)}
      </div>
    </div>
  );
};
