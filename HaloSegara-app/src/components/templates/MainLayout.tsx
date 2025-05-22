import type { ReactNode } from "react";
import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="bg-black-900 min-h-screen text-white w-full overflow-x-hidden">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
