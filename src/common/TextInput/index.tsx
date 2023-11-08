import classNames from "classnames";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const TextInput: React.FC<TextInputProps> = ({ className, ...rest }) => {
  return (
    <input
      type="text"
      {...rest}
      className={classNames(
        "h-[50px] w-full px-3 py-1 rounded-l border-2",
        className
      )}
    />
  );
};

// height: 50px;
//   width: 100%;
//   padding: 15px 35px 12px ${({ hasIcon }) => (hasIcon ? '46px' : '12px')};
//   font-family: inherit;
//   font-size: 16px;
//   font-weight: normal;
//   border: 1px solid ${(props) => rgba(props.theme.textPrimary, 0.3)};
//   border-radius: 6px;
//   background-color: transparent;
//   outline: 0;
//   color: ${(props) => props.theme.textPrimary};
