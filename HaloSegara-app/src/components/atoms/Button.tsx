import type { ReactNode } from "react";

interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button = ({
  onClick,
  children,
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`transition focus:outline-none ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;