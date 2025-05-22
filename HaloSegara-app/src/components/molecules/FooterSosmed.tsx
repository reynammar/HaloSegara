import SosmedItem from "../atoms/SosmedItem";
import { Twitter, Instagram, Linkedin, Facebook } from "lucide-react";

const FooterSosmed = () => {
  return (
    <div className="flex gap-4">
      <SosmedItem icon={<Twitter className="text-secondary500 w-5 h-5" />} />
      <SosmedItem icon={<Instagram className="text-secondary500 w-5 h-5" />} />
      <SosmedItem icon={<Linkedin className="text-secondary500 w-5 h-5" />} />
      <SosmedItem icon={<Facebook className="text-secondary500 w-5 h-5" />} />
    </div>
  );
};

export default FooterSosmed;
