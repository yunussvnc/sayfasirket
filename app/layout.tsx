import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Secesta | Lider Markaların Dijital Pazarlama & SEO Ajansı",
  description: "Secesta, dünya genelinde lider markalara dijital pazarlama ve SEO çözümleri sunar. Sonuç odaklı yaklaşım ile markanızı öne taşıyoruz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body
        className={`${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
