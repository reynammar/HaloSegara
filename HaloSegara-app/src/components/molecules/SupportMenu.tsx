import NavLink from "../atoms/NavLink"

interface SupportMenuProps {
  className?: string;
}


const SupportMenu = ({ className }: SupportMenuProps) => {
  let navItems = [
    { label: "Kontak", to: "/contact" },
    { label: "Kebijakan Privasi", to: "/policyprivacy" },
  ];

  return (
    <div className={`flex ${className}`}>
      {navItems.map((item) => (
        <NavLink key={item.to} label={item.label} to={item.to} />
      ))}
    </div>
  );
};


export default SupportMenu