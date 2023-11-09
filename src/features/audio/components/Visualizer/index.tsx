import React, { useRef, useEffect } from "react";

interface AudioVisualizerProps {
  audioRef: React.RefObject<HTMLAudioElement> | null;
  played: boolean;
}

const AudioVisualizer: React.FC<AudioVisualizerProps> = ({
  audioRef,
  played = false,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null); // useRef to store the AudioContext

  useEffect(() => {
    const setupAudioContext = async () => {
      if (played && audioRef?.current && canvasRef.current) {
        if (!audioContextRef.current) {
          audioContextRef.current = new ((window as any).AudioContext ||
            (window as any).webkitAudioContext)();
        }

        // Make sure audioContextRef.current is not null before continuing
        if (audioContextRef.current) {
          const source = audioContextRef.current.createMediaElementSource(
            audioRef.current
          );
          const analyser = audioContextRef.current.createAnalyser();

          source.connect(analyser);
          analyser.connect(audioContextRef.current.destination);

          analyser.fftSize = 2048;
          const bufferLength = analyser.fftSize;
          const dataArray = new Uint8Array(bufferLength);

          const canvas = canvasRef.current;
          const canvasCtx = canvas.getContext("2d");

          if (canvasCtx) {
            const draw = () => {
              // Make sure audioContextRef.current is not null before calling its methods
              if (
                audioContextRef.current &&
                audioContextRef.current.state === "running"
              ) {
                const WIDTH = canvas.width;
                const HEIGHT = canvas.height;

                requestAnimationFrame(draw);

                analyser.getByteTimeDomainData(dataArray);

                canvasCtx.fillStyle = "rgb(241 245 249)";
                canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

                canvasCtx.lineWidth = 2;
                canvasCtx.strokeStyle = "rgb(238, 44, 115)";

                canvasCtx.beginPath();

                const sliceWidth = (WIDTH * 1.0) / bufferLength;
                let x = 0;

                for (let i = 0; i < bufferLength; i++) {
                  const v = dataArray[i] / 128.0;
                  const y = (v * HEIGHT) / 2;

                  if (i === 0) {
                    canvasCtx.moveTo(x, y);
                  } else {
                    canvasCtx.lineTo(x, y);
                  }

                  x += sliceWidth;
                }

                canvasCtx.lineTo(WIDTH, HEIGHT / 2);
                canvasCtx.stroke();
              }
            };

            draw();
          }
        }
      }
    };

    setupAudioContext();

    return () => {
      audioContextRef.current?.close();
      audioContextRef.current = null;
    };
  }, [played, audioRef]);

  return (
    <>
      <canvas ref={canvasRef} className="w-full h-12" />
    </>
  );
};

export default AudioVisualizer;
