import { JetBrains_Mono, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";

const sans = Schibsted_Grotesk({ variable: "--font-sans", subsets: ["latin", "latin-ext"] });
const mono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin", "latin-ext"] });

const description =
  "Full-stack developer in Ankara building AI-powered SaaS products with Next.js, TypeScript and PostgreSQL.";

export const metadata = {
  metadataBase: new URL("https://www.firatkil.com"),
  title: "Fırat Kıl · Full-stack developer",
  description,
  authors: [{ name: "Fırat Kıl" }],
  openGraph: {
    title: "Fırat Kıl · Full-stack developer",
    description,
    url: "/",
    siteName: "Fırat Kıl",
    type: "website",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f6f3" },
    { media: "(prefers-color-scheme: dark)", color: "#111111" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
