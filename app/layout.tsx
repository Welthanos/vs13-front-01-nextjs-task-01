import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "./components/footer/page";
import Header from "./components/header/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Top 5 Animes",
  description: "Top 5 animes de todos os tempos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
