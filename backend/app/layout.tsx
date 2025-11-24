import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NeoKreatif Admin",
  description: "NeoKreatif içerik yönetimi paneli",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="bg-slate-950 text-gray-100 antialiased">{children}</body>
    </html>
  );
}

