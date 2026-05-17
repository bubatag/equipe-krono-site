import type { Metadata } from "next";

import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
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
  title: "O Meu Projeto",
  description: "Criado com Next.js",
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
        {children}
      </body>
    </html>
  );
}