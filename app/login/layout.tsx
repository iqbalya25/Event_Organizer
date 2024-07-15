import React, { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import StaticNavbar from "../components/StaticNavbar";

interface LayoutProps {
  children: ReactNode;
}

const ExpoLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <StaticNavbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default ExpoLayout;
