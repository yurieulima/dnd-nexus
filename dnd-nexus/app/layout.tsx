// app/layout.tsx
import type { Metadata } from "next";
import { Roboto, Merriweather } from "next/font/google";
import "./globals.css";
import { Header } from "./_components/Header";
import { Footer } from "./_components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-roboto",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-merriweather",
});

export const metadata: Metadata = {
  title: "D&D Nexus - Seu Guia de D&D",
  description: "Encontre regras, magias, monstros e tudo que você precisa para sua próxima campanha de D&D.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="...">
      {/* 👇 DEIXE A TAG BODY LIMPA, SEM CLASSES DE BACKGROUND OU STYLE */}
      <body>
        <div className="min-h-screen w-full">
          <Header />
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}