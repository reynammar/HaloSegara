import type { ReactNode } from "react";

interface SosmedItemProps {
  icon: ReactNode;
}

const SosmedItem = ({ icon }: SosmedItemProps) => {
  return (
    <div className="rounded-full border-2 border-secondary500 w-12 h-12 flex items-center justify-center">
      {icon}
    </div>
  );
};

export default SosmedItem;
