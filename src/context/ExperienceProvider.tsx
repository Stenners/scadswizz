import axios from "axios";
import React, { createContext, useState, useContext } from "react";
import { useSearchParams } from "react-router-dom";

interface ExperienceContextValue {
  start: () => void;
  step: number;
  ready: boolean;
  streamUrl: string;
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
  const [searchParams] = useSearchParams();
  const [ready, setReady] = useState(false);
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [streamUrl, setStreamUrl] = useState<string>("");

  const incrementStep = () => setStep((prev) => prev + 1);

  const runExperience = async () => {
    const stream1UrlRes = await getStreamUrl();
    await sleep();
    setStreamUrl(stream1UrlRes);
    incrementStep();

    await sleep();

    incrementStep();

    await sleep();

    setReady(true);
  };

  const getStreamUrl = async () => {
    const eid = searchParams.get("eid");

    try {
      const res = await axios.post(
        "https://scadswizz.scalabs.io/session",
        JSON.stringify(eid),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return res.data;
    } catch (err) {
      console.log(err);
    }

    return;
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
    streamUrl,
  };

  return (
    <ExperienceContext.Provider value={value}>
      {children}
    </ExperienceContext.Provider>
  );
};

export const useExperienceContext = () => useContext(ExperienceContext);
