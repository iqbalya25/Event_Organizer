"use client";
import React, { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./queries/queriesClient";

interface LayoutProps {
  children: ReactNode;
}

const ExpoLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar />

        <main>{children}</main>
        <Footer />
      </QueryClientProvider>
    </>
  );
};

export default ExpoLayout;
