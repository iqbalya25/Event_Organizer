import React, { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

interface LayoutProps {
  children: ReactNode;
}

const Reservationlayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Reservationlayout;
