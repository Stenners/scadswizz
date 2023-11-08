import React, { useRef, useEffect, useState } from "react";

//

interface AudioVisualizerProps {
  audioRef: React.RefObject<HTMLAudioElement>;
  played: boolean;
}

const AudioVisualizer: React.FC<AudioVisualizerProps> = ({
  audioRef,
  played = false,
}) => {
  const [init, setInit] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let audioContext: AudioContext;

  useEffect(() => {
    const setupAudioContext = async () => {
      //setInit(true);
      if (played && audioRef.current && canvasRef.current) {
        audioContext = new ((window as any).AudioContext ||
          (window as any).webkitAudioContext)();

        const source = audioContext.createMediaElementSource(audioRef.current);
        const analyser = audioContext.createAnalyser();

        source.connect(analyser);
        analyser.connect(audioContext.destination);

        analyser.fftSize = 128; // Change this value if you want more or less bars
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        const canvas = canvasRef.current;
        const canvasCtx = canvas.getContext("2d");

        if (canvasCtx) {
          const draw = () => {
            if (audioContext.state === "running") {
              const WIDTH = canvas.width;
              const HEIGHT = canvas.height;

              requestAnimationFrame(draw);

              analyser.getByteTimeDomainData(dataArray);

              canvasCtx.fillStyle = "rgb(241 245 249)";
              canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

              const barWidth = (WIDTH / bufferLength) * 1;
              let barHeight;
              let x = 0;

              for (let i = 0; i < bufferLength; i++) {
                barHeight = dataArray[i];

                //52 211 153
                canvasCtx.fillStyle =
                  "rgb(" + (52 + (barHeight * 2) / 100) + ",211,153)";
                canvasCtx.fillRect(
                  x,
                  HEIGHT - barHeight / 2,
                  barWidth,
                  barHeight / 2
                );

                x += barWidth + 1;
              }
            }
          };

          draw();
        }
      }
    };

    setupAudioContext();

    return () => {
      audioContext?.close();
    };
  }, [played, audioRef]);

  return (
    <>
      <canvas ref={canvasRef} className="w-full" />
    </>
  );
};

export default AudioVisualizer;
