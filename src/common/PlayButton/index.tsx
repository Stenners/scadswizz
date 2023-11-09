import classNames from "classnames";

interface PlayButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  playing: boolean;
}

export const PlayButton: React.FC<PlayButtonProps> = ({
  children,
  className,
  playing,
  ...rest
}) => {
  return (
    <button
      className={classNames(
        "rounded-full w-full h-full py-3 px-8 bg-emerald-400 text-white hover:bg-emerald-500 transition-all focus:border-5 disabled:bg-gray-300 flex items-center justify-center",
        className
      )}
      {...rest}
    >
      {playing ? (
        <img src="/pause.svg" height="30px" width="30px" />
      ) : (
        <img src="/play.svg" height="30px" width="30px" />
      )}
    </button>
  );
};
