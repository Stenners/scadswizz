import classNames from "classnames";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const TextInput: React.FC<TextInputProps> = ({ className, ...rest }) => {
  return (
    <input
      type="text"
      {...rest}
      className={classNames(
        "h-[50px] w-full px-3 py-1 rounded-l border-2 transition-all focus:border-0 focus:border-b-4 focus:border-b-main outline-none",
        className
      )}
    />
  );
};
