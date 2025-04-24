import { Geist } from "next/font/google";
import ClientNavbar from "@/components/ClientNavbar";
import ClientFooter from "@/components/ClientFooter";
import "./globals.scss";
import React from "react";

const geistSans = Geist({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <main className="min-h-screen flex flex-col items-center">
          <div className="flex-1 w-full flex flex-col gap-11 items-center">
            <ClientNavbar />
            <div className="flex flex-col gap-20 max-w-5xl p-5">{children}</div>
            <ClientFooter />
          </div>
        </main>
      </body>
    </html>
  );
}
