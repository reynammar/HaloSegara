import { useState, useEffect } from "react";
import Button from "../atoms/Button";
import NavMenu from "../molecules/NavMenu";
import { Link } from "react-router";
import logo from "../../assets/logo.svg";
import { Menu, Bell } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedInStatus === "true");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "/";
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary500 flex justify-between items-center px-14 py-3 w-full transition-all duration-300">
      <div className="flex items-center gap-12">
        <Link to="/">
          <img src={logo} alt="HaloSegara Logo Navbar" className="w-28" />
        </Link>

        <NavMenu className="gap-14 flex-row text-navlink" isLoggedIn={isLoggedIn} />
      </div>

      <div className="flex gap-5 font-inter">
        {!isLoggedIn ? (
          <>
            <Link to="/login">
              <Button className="border-2 border-secondary500 text-secondary500 hover:bg-secondary50 px-[30px] py-[6px] text-[14px] font-semibold rounded-[18px] cursor-pointer">
                Log In
              </Button>
            </Link>
            <Link to="/register">
            <Button className="bg-secondary500 hover:bg-secondary700 text-black px-[30px] py-[6px] text-[14px] font-semibold rounded-[18px] cursor-pointer transition-colors duration-300">
              Sign Up
            </Button>
            </Link>
          </>
        ) : (
          <>
            <Button className="relative">
              <Bell className="text-white w-8 h-8" />
              <span className="absolute -top-1 -right-1 bg-danger500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                3
              </span>
            </Button>

            <Button onClick={() => setIsOpen(!isOpen)}>
              <Menu className="text-white w-8 h-8" />
            </Button>

            <Button onClick={handleLogout}>
              <span className="text-white">Logout</span>
            </Button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
