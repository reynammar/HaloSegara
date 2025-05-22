import type { ReactNode } from "react";

interface ContactItemProps {
  icon: ReactNode;
  text: string;
  className?: string;
}

const ContactItem = ({ icon, text, className = "" }: ContactItemProps) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {icon}
      <span className="text-white text-sm">{text}</span>
    </div>
  );
};

export default ContactItem;
