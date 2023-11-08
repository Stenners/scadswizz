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
        "w-full h-full py-3 px-8 bg-emerald-400 text-white hover:bg-emerald-500 transition-all",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
