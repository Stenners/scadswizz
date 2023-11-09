import classNames from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <button
      className={classNames(
        "rounded-l w-full h-full py-3 px-8 bg-emerald-400 text-white hover:bg-emerald-500 transition-all focus:border-5 disabled:bg-gray-300",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
