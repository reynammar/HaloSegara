import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import InputWithLabel from "./InputLabels";

interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const PasswordInput = ({ label, ...props }: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <InputWithLabel
      label={label}
      type={showPassword ? "text" : "password"}
      {...props}
      icon={
        showPassword ? (
          <EyeOff
            size={18}
            className="text-neutral500 cursor-pointer"
            onClick={() => setShowPassword(false)}
          />
        ) : (
          <Eye
            size={18}
            className="text-neutral500 cursor-pointer"
            onClick={() => setShowPassword(true)}
          />
        )
      }
    />
  );
};

export default PasswordInput;
