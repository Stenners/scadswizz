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
        "rounded-full py-3 px-8 bg-main text-white hover:bg-main transition-all focus:border-5 disabled:bg-gray-300 flex items-center justify-center",
        className
      )}
      {...rest}
    >
      {playing ? (
        <img
          alt=""
          src="/pause.png"
          height="40px"
          width="40px"
          className="h-[40px] w-[40px]"
        />
      ) : (
        <img
          alt=""
          src="/play.png"
          height="30px"
          width="30px"
          className="h-[30px] w-[30px]"
        />
      )}
    </button>
  );
};
