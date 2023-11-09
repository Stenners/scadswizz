const formatSeconds = (seconds: number) => {
  const pad = (num: number) => String(num).padStart(2, "0");
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${pad(minutes)}:${pad(remainingSeconds)}`;
};

export const PlayerBar: React.FC<{ duration: number; time: number }> = ({
  duration,
  time,
}) => {
  return (
    <div className="w-full">
      <div className="grow bg-black h-2 mb-1">
        <div
          className="bg-main h-full"
          style={{ width: (time / duration) * 100 }}
        />
      </div>
      <div className="flex justify-between">
        <div>{formatSeconds(time)}</div>
        <div>{formatSeconds(duration)}</div>
      </div>
    </div>
  );
};
