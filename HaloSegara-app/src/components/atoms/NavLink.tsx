import { NavLink as RouterNavLink } from "react-router";

interface NavLinkProps {
  label: string;
  to: string;
  withUnderline?: boolean;
}

const NavLink = ({ label, to, withUnderline = true }: NavLinkProps) => {
  return (
    <RouterNavLink
      to={to}
      className={({ isActive }) =>
        `relative font-inter text-white font-normal tracking-wide transition-colors duration-300 pb-2
        ${
          withUnderline
            ? `after:content-[''] after:absolute after:-bottom-6 after:left-0 after:h-[4px] after:w-0 after:bg-white after:transition-all after:duration-300
               hover:after:w-full ${isActive ? "after:w-full font-semibold" : ""}`
            : ""
        }`
      }
    >
      {label}
    </RouterNavLink>
  );
};

export default NavLink;