import type { Metadata } from "next";
import { Geist } from "next/font/google";

import { InteractiveGrid } from "@/components/background";
import { Navbar } from "@/components/layout/navbar";

import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ahmad Sohail Wahidy | Full-Stack Developer",
    template: "%s | Ahmad Sohail Wahidy",
  },
  description:
    "Portfolio of Ahmad Sohail Wahidy, a Full-Stack Developer and final-year Computer Science student focused on modern web applications, backend systems and database development.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body className={geist.variable}>
        <InteractiveGrid />
        <Navbar />

        <div className="site-content">{children}</div>
      </body>
    </html>
  );
}
