"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavigationController from "@/components/layout/navigationController";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable}  ${geistMono.variable} antialiased !bg-gradient-to-r !from-slate-100 !to-white`}
      >
        <Toaster position="top-center" reverseOrder={false} />
        <NavigationController />
        <main className=" z-0 h-screen w-screen overflow-auto pt-20 md:pt-16  ">
          <div className="">{children}</div>
        </main>
      </body>
    </html>
  );
}
