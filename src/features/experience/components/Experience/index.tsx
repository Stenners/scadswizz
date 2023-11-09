import { useEffect } from "react";
import { useExperienceContext } from "../../../../context/ExperienceProvider";
import { LoadingScreen } from "../LoadingScreen";
import { PlayerScreen } from "../PlayerScreen";
import { Transition } from "../../../../common/Transition";

export const Experience: React.FC = () => {
  const { start, ready } = useExperienceContext();

  useEffect(() => {
    start();
  });

  if (ready) {
    return (
      <Transition>
        <PlayerScreen></PlayerScreen>
      </Transition>
    );
  }

  return (
    <Transition>
      <LoadingScreen />
    </Transition>
  );
};
