import ContactItem from "../atoms/ContactItem";
import { Phone, Mail, MapPin } from "lucide-react";

const FooterContact = () => {
  return (
    <div className="flex flex-col gap-4">
      <ContactItem
        icon={<MapPin className="text-secondary500 w-5 h-5" />}
        text="Fakultas Ilmu Komputer, Universitas Brawijaya, Malang, Jawa Timur 65145"
      />
      <ContactItem
        icon={<Mail className="text-secondary500 w-5 h-5" />}
        text="halosegara@gmail.com"
      />
      <ContactItem
        icon={<Phone className="text-secondary500 w-5 h-5" />}
        text="+6282-2331-32131"
      />
    </div>
  );
};

export default FooterContact;
