import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import React from "react";
import EventContext, { EventProvider } from "./context/eventContext";
import { TopicsProvider } from "./context/topicsContext";
import "./globals.css";

const inter = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
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
      <body>
        <EventProvider>
          <TopicsProvider>{children}</TopicsProvider>
        </EventProvider>
      </body>
    </html>
  );
}
