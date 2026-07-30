import type { Metadata } from "next";
import { Geist } from "next/font/google";

import { InteractiveGrid } from "@/components/background";

import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ahmad Sohail | Full-Stack Developer",
    template: "%s | Ahmad Sohail",
  },

  description:
    "Portfolio of Ahmad Sohail, a Full-Stack Developer and Computer Science student specializing in modern web applications, backend systems and database development.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body className={geist.variable}>
        <InteractiveGrid />

        <div className="site-content">{children}</div>
      </body>
    </html>
  );
}
