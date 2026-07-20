import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ahmad Sohail Wahidy | Full-Stack Developer",

  description:
    "Professional full-stack developer portfolio built with Next.js, TypeScript, Tailwind CSS, and FastAPI.",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="bg-slate-950">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
