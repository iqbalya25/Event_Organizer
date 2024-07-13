"use client";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { Ubuntu } from "next/font/google";
import React from "react";
import EventContext, { EventProvider } from "./context/eventContext";
import { TopicsProvider } from "./context/topicsContext";
import "./globals.css";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "@/queries/queriesClient";

const inter = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const metadata: Metadata = {
  title: "KUKIVENT",
  description: "Your Trusted Event Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <QueryClientProvider client={queryClient}>
        <body className={inter.className}>{children}</body>
      </QueryClientProvider>
    </html>
  );
}
