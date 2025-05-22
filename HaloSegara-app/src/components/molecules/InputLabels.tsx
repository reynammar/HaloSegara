import Input from "../atoms/Input";

interface InputWithLabelProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: React.ReactNode;
}

const InputLabels = ({ label, icon, ...props }: InputWithLabelProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={props.id} className="font-inter text-black font-semibold text-sm">
        {label}
      </label>
      <Input {...props} icon={icon} />
    </div>
  );
};

export default InputLabels;
