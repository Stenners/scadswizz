import React, { createContext, useState, useContext } from "react";

interface ExperienceContextValue {
  start: () => void;
  step: number;
  ready: boolean;
  streams: string[];
}

const ExperienceContext = createContext<ExperienceContextValue>(
  {} as ExperienceContextValue
);

interface ExperienceProviderProps extends React.PropsWithChildren {}

const sleep = () =>
  new Promise((resolve) => setTimeout(() => resolve(true), 1000));

export const ExperienceProvider: React.FC<ExperienceProviderProps> = ({
  children,
}) => {
  const [ready, setReady] = useState(false);
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);

  const [streams, setStreams] = useState<string[]>([]);

  const incrementStep = () => setStep((prev) => prev + 1);

  const runExperience = async () => {
    const stream1UrlRes = await getStreamUrl();
    await sleep();
    setStreams((prev) => [...prev, stream1UrlRes]);
    incrementStep();

    // const stream2UrlRes = await getStreamUrl();
    // await sleep();
    // setStreams((prev) => [...prev, stream2UrlRes]);
    // incrementStep();

    await sleep();

    incrementStep();

    await sleep();

    setReady(true);
  };

  const getStreamUrl = async () => {
    return "/audio/5mg.mp3";
  };

  const start = () => {
    if (!started) {
      setStarted(true);
      runExperience();
    }
  };

  const value: ExperienceContextValue = {
    start,
    step,
    ready,
    streams,
  };

  return (
    <ExperienceContext.Provider value={value}>
      {children}
    </ExperienceContext.Provider>
  );
};

export const useExperienceContext = () => useContext(ExperienceContext);
