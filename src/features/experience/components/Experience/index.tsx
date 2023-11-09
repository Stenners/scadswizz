import { useEffect } from "react";
import { useExperienceContext } from "../../../../context/ExperienceProvider";
import { LoadingScreen } from "../LoadingScreen";
import { PlayerScreen } from "../PlayerScreen";
import { Transition } from "../../../../common/Transition";

interface ExperienceProps {
  eid: string;
}

export const Experience: React.FC<ExperienceProps> = ({ eid }) => {
  const { start, ready } = useExperienceContext();

  useEffect(() => {
    start();
  });

  if (ready) {
    return (
      <Transition>
        <PlayerScreen eid={eid}></PlayerScreen>
      </Transition>
    );
  }

  return (
    <Transition>
      <LoadingScreen />
    </Transition>
  );
};
