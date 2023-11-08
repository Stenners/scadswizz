interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <button
      className="w-full h-full py-3 px-8 bg-emerald-400 rounded-l text-white hover:bg-emerald-500 transition-all"
      {...rest}
    >
      {children}
    </button>
  );
};
