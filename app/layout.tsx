import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NeoKreatif Ajans | Lider Markaların Dijital Pazarlama & SEO Ajansı",
  description: "NeoKreatif Ajans, 12 yılı aşkın tecrübesiyle markaların dijital dünyada güçlü bir şekilde var olmasını sağlayan kreatif bir dijital ajans. Web tasarım, yazılım geliştirme, SEO, Google Ads, Meta Ads ve sosyal medya yönetimi hizmetleri sunar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body
        className={`${geistMono.variable} antialiased relative`}
      >
        {children}
      </body>
    </html>
  );
}
