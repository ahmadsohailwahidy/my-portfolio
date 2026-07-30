import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Ahmad Sohail Wahidy | Frontend Developer",
    template: "%s | Ahmad Sohail Wahidy",
  },

  description:
    "Professional portfolio of Ahmad Sohail Wahidy, a frontend developer building accessible, responsive, and maintainable web applications with React, Next.js, TypeScript, and Tailwind CSS.",

  keywords: [
    "Ahmad Sohail Wahidy",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Web Developer",
    "Portfolio",
  ],

  authors: [
    {
      name: "Ahmad Sohail Wahidy",
    },
  ],

  creator: "Ahmad Sohail Wahidy",

  openGraph: {
    title: "Ahmad Sohail Wahidy | Frontend Developer",
    description:
      "Frontend developer focused on responsive interfaces, accessible experiences, and maintainable application architecture.",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
