
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

const Input = ({ icon, className, ...props }: InputProps) => {
  return (
    <div className="relative">
      <input
        {...props}
        className={`w-full border border-neutral300 px-3 py-2 pr-10 rounded-sm text-sm text-neutral800 focus:outline-primary500 ${className}`}
      />
      {icon && <div className="absolute right-3 top-2.5">{icon}</div>}
    </div>
  );
};

export default Input;
