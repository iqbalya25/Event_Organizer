import React, { ReactNode } from "react";
import Footer from "../components/footer";
import StaticNavbar from "../components/StaticNavbar";

interface LayoutProps {
  children: ReactNode;
}

const Regislayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <StaticNavbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Regislayout;
