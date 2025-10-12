import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/sections/navbar/navbar";
import FooterSection from "@/components/sections/footer/footer";
import Navbar2 from "@/components/sections/navbar/navbar2";

const InterFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "PhoneLife",
  description:
    "Platforme d'achat de téléphones accessecoires et pièces détachées",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${InterFont.variable} antialiased`}>
        <div>
          <Navbar2 />
        </div>
        {children}
        <div>
          <FooterSection />
        </div>
      </body>
    </html>
  );
}
