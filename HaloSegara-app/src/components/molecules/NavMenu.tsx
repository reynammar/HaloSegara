import NavLink from "../atoms/NavLink"

interface NavMenuProps {
  className?: string;
  isLoggedIn?: boolean;
  withUnderline?: boolean;
}

const NavMenu = ({ className, isLoggedIn = false, withUnderline = true }: NavMenuProps) => {
  let navItems = [
    { label: "Beranda", to: "/" },
    { label: "Leaderboard", to: "/leaderboard" },
    { label: "Mitra", to: "/mitra" },
    { label: "Pantai", to: "/pantai" },
    { label: "Tentang", to: "/about" },
  ];

  if (isLoggedIn) {
    navItems = navItems.filter((item) => item.label !== "Tentang");
  }

  return (
    <div className={`flex ${className}`}>
      {navItems.map((item) => (
        <NavLink key={item.to} label={item.label} to={item.to} withUnderline={withUnderline} />
      ))}
    </div>
  );
};

export default NavMenu;