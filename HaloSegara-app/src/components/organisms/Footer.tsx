import { Link } from "react-router";
import logo from "../../assets/logo.svg";
import FooterContact from "../molecules/FooterContact";
import FooterSosmed from "../molecules/FooterSosmed";
import NavMenu from "../molecules/NavMenu";
import SupportMenu from "../molecules/SupportMenu";

const Footer = () => {
  return (
    <footer className="bg-primary500 flex justify-between items-center px-20 py-16 w-full">
      <div className="flex flex-col gap-7">
        <Link to="/">
          <img src={logo} alt="ReynMovies" className="w-44" />
        </Link>

        <FooterContact />

        <FooterSosmed />
      </div>

      <div className="flex gap-14">
        <div className="flex flex-col items-center gap-4">
          <div className="border-b-2 border-white text-sm py-2">
            <h3>HaloSegara</h3>
          </div>
          <NavMenu
            className="flex-col justify-center items-center gap-4 text-sm"
            withUnderline={false}
          />
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="border-b-2 border-white text-sm py-2">
            <h3>Support</h3>
          </div>
          <SupportMenu className="flex-col justify-center items-center gap-4 text-sm" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
