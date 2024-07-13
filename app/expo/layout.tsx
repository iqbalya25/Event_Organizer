import React, { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "../../queries/queriesClient";

interface LayoutProps {
  children: ReactNode;
}

const ExpoLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default ExpoLayout;
