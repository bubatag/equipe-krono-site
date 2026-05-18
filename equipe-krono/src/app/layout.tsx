import type { Metadata } from "next";

import localFont from "next/font/local";
import AosProvider from "@/components/AosProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "aos/dist/aos.css";
import "./globals.css";

const audiowide = localFont({
  src: "./fonts/Audiowide-Regular.ttf",
  variable: "--font-audiowide",
  display: "swap",
});

// 3. Configurar a Open Sans (Normal e Itálico)
const openSans = localFont({
  src: [
    {
      path: "./fonts/OpenSans-VariableFont_wdth,wght.ttf",
      style: "normal",
    },
    {
      path: "./fonts/OpenSans-Italic-VariableFont_wdth,wght.ttf",
      style: "italic",
    },
  ],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Krono",
  description: "Criado com Next.js",
  icons: {
    icon: "/assets/krono-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // As variáveis são injetadas no html
    <html lang="pt-PT" className={`${audiowide.variable} ${openSans.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <AosProvider />
        {children}
        <Footer />
      </body>
    </html>
  );
}