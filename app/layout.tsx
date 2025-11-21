import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import Image from "next/image";
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
