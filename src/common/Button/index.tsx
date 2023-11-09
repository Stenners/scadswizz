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
        "rounded-l w-full h-full py-3 px-8 bg-main text-white hover:bg-main transition-all focus:border-5 disabled:bg-gray-300",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
