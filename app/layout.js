import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const sans = Geist({ variable: "--font-sans", subsets: ["latin", "latin-ext"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin", "latin-ext"] });
const serif = Instrument_Serif({
  variable: "--font-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
});

const description =
  "Full-stack developer in Ankara building AI-powered SaaS products with Next.js, TypeScript and PostgreSQL.";

export const metadata = {
  metadataBase: new URL("https://firatkil.vercel.app"),
  title: "Fırat Kıl — Full-Stack Developer",
  description,
  authors: [{ name: "Fırat Kıl" }],
  openGraph: {
    title: "Fırat Kıl — Full-Stack Developer",
    description,
    url: "/",
    siteName: "Fırat Kıl",
    type: "website",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f1ea" },
    { media: "(prefers-color-scheme: dark)", color: "#141413" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
