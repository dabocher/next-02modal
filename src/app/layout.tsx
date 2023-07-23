import "./globals.css";
import type { Metadata } from "next";
import { Racing_Sans_One, Inter, Oswald } from "next/font/google";

export const racing = Racing_Sans_One({ subsets: ["latin"], weight: ["400"] });
export const oswald = Oswald({ subsets: ["latin"], weight: ["400"] });
export const inter = Inter({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Modal Example",
  description: "Estructura básica del Modal",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
