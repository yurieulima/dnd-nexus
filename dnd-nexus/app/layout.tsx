import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./_components/Header";

export const metadata: Metadata = {
  title: "D&D Nexus - your D&D companion",
  description: "Find everything you need to make your D&D campaign a success.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-us" className="...">
      <body>
        <div className="min-h-screen w-full">
          <Header />
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}