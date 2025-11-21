"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center">
                        <Image 
                            src="/images/secesta-vector-logo.svg" 
                            alt="Secesta Logo" 
                            width={150} 
                            height={50}
                            className="h-10 w-auto"
                            priority
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-gray-700 hover:text-gray-900">Anasayfa</Link>
                        <div className="relative group">
                            <button className="text-gray-700 hover:text-gray-900">Kurumsal</button>
                            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                                <Link href="/ekibimiz" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Ekibimiz</Link>
                                <Link href="/hakkimizda" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Hakkımızda</Link>
                                <Link href="/degerlerimiz" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Değerlerimiz</Link>
                            </div>
                        </div>
                        <Link href="/hizmetlerimiz" className="text-gray-700 hover:text-gray-900">Hizmetlerimiz</Link>
                        <Link href="/referanslar" className="text-gray-700 hover:text-gray-900">Referanslar</Link>
                        <Link href="/iletisim" className="text-gray-700 hover:text-gray-900">İletişim</Link>
                        <Link href="/kariyer" className="text-gray-700 hover:text-gray-900">Kariyer</Link>
                        <Link
                            href="/seo-analiz"
                            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
                        >
                            Ücretsiz SEO Analiz
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-700"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 space-y-4 pb-4">
                        <Link href="/" className="block text-gray-700">Anasayfa</Link>
                        <Link href="/ekibimiz" className="block text-gray-700">Ekibimiz</Link>
                        <Link href="/hakkimizda" className="block text-gray-700">Hakkımızda</Link>
                        <Link href="/hizmetlerimiz" className="block text-gray-700">Hizmetlerimiz</Link>
                        <Link href="/referanslar" className="block text-gray-700">Referanslar</Link>
                        <Link href="/iletisim" className="block text-gray-700">İletişim</Link>
                        <Link href="/seo-analiz" className="block bg-blue-600 text-white px-6 py-2 rounded-full text-center">
                            Ücretsiz SEO Analiz
                        </Link>
                    </div>
                )}
            </nav>
        </header>
    );
}

