import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SiteYeniyol Backend",
  description: "Minimal backend UI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
