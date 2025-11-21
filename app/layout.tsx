import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import Image from "next/image";
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
        {/* Global Background Image */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <Image
            src="/images/bg-body2.png"
            alt=""
            fill
            className="object-cover opacity-30"
            sizes="100vw"
            priority
          />
          {/* Optional gradient overlay for better readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/20"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
