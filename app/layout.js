import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientComponents from "./client-components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fırat Kıl | Portfolio",
  description: "Personal portfolio showcasing projects and skills",
  keywords: ["portfolio", "web development", "frontend", "developer"],
  authors: [{ name: "Fırat Kıl" }],
  creator: "Fırat Kıl",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased !bg-gradient-to-r !from-slate-100 !to-white`}
      >
        <ClientComponents />
        <main className="z-0 h-screen w-screen overflow-auto pt-20 md:pt-16">
          <div>{children}</div>
        </main>
      </body>
    </html>
  );
}
