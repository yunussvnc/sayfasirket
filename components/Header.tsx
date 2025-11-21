"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isKurumsalOpen, setIsKurumsalOpen] = useState(false);

    return (
        <>
            <motion.header
                className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <nav className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
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
                        </motion.div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                                <Link href="/" className="text-gray-700 hover:text-gray-900">Anasayfa</Link>
                            </motion.div>
                            <div
                                className="relative"
                                onMouseEnter={() => setIsKurumsalOpen(true)}
                                onMouseLeave={() => setIsKurumsalOpen(false)}
                            >
                                <motion.button
                                    className="text-gray-700 hover:text-gray-900"
                                    whileHover={{ y: -2 }}
                                >
                                    Kurumsal
                                </motion.button>
                                <AnimatePresence>
                                    {isKurumsalOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg overflow-hidden"
                                        >
                                            <motion.div whileHover={{ x: 5 }}>
                                                <Link href="/ekibimiz" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Ekibimiz</Link>
                                            </motion.div>
                                            <motion.div whileHover={{ x: 5 }}>
                                                <Link href="/hakkimizda" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Hakkımızda</Link>
                                            </motion.div>
                                            <motion.div whileHover={{ x: 5 }}>
                                                <Link href="/degerlerimiz" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Değerlerimiz</Link>
                                            </motion.div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                            <motion.div whileHover={{ y: -2 }}>
                                <Link href="/hizmetlerimiz" className="text-gray-700 hover:text-gray-900">Hizmetlerimiz</Link>
                            </motion.div>
                            <motion.div whileHover={{ y: -2 }}>
                                <Link href="/referanslar" className="text-gray-700 hover:text-gray-900">Referanslar</Link>
                            </motion.div>
                            <motion.div whileHover={{ y: -2 }}>
                                <Link href="/iletisim" className="text-gray-700 hover:text-gray-900">İletişim</Link>
                            </motion.div>
                            <motion.div whileHover={{ y: -2 }}>
                                <Link href="/kariyer" className="text-gray-700 hover:text-gray-900">Kariyer</Link>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    href="/seo-analiz"
                                    className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
                                >
                                    Ücretsiz SEO Analiz
                                </Link>
                            </motion.div>
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            className="md:hidden text-gray-700"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            whileTap={{ scale: 0.9 }}
                        >
                            <motion.svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                animate={isMenuOpen ? { rotate: 90 } : { rotate: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </motion.svg>
                        </motion.button>
                    </div>

                    {/* Mobile Menu */}
                    <AnimatePresence>
                        {isMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="md:hidden mt-4 space-y-4 pb-4 overflow-hidden"
                            >
                                {[
                                    { href: "/", label: "Anasayfa" },
                                    { href: "/ekibimiz", label: "Ekibimiz" },
                                    { href: "/hakkimizda", label: "Hakkımızda" },
                                    { href: "/hizmetlerimiz", label: "Hizmetlerimiz" },
                                    { href: "/referanslar", label: "Referanslar" },
                                    { href: "/iletisim", label: "İletişim" }
                                ].map((item, index) => (
                                    <motion.div
                                        key={item.href}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link href={item.href} className="block text-gray-700">{item.label}</Link>
                                    </motion.div>
                                ))}
                                <motion.div
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link href="/seo-analiz" className="block bg-blue-600 text-white px-6 py-2 rounded-full text-center">
                                        Ücretsiz SEO Analiz
                                    </Link>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </nav>
            </motion.header>

            {/* Hero Cover Section */}
            <section className="relative w-full mt-[73px] h-[600px] lg:h-[720px] overflow-hidden">
                {/* First Cover Image - Base Layer */}
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src="/images/kapak1.jpg"
                        alt=""
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Second Cover Image - Overlay Layer */}
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src="/images/kapak 2.jpg"
                        alt=""
                        fill
                        className="object-cover opacity-80 mix-blend-overlay"
                        priority
                    />
                </div>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/30 to-[#1a1a3e]/70" />

                {/* Cube Image - Right Side */}
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none z-20">
                    <motion.div
                        initial={{ opacity: 0, x: 50, rotate: -15 }}
                        animate={{ opacity: 1, x: 0, rotate: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative w-48 h-48 lg:w-64 lg:h-64"
                    >
                        <Image
                            src="/images/küo.jpg"
                            alt=""
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 192px, 256px"
                        />
                    </motion.div>
                </div>

                {/* Hero Text Content */}
                <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="container mx-auto px-4">
                        <motion.div
                            className="text-center max-w-5xl mx-auto text-white"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <motion.div
                                className="flex items-center justify-center gap-2 mb-4 text-white/80"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <motion.span
                                    className="w-2 h-2 rounded-full bg-white"
                                    animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                                <span className="text-lg font-medium">Lider Markaların Dijital Çözüm Ortağı</span>
                            </motion.div>

                            <motion.h1
                                className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.6 }}
                            >
                                Secesta ile AI, SEO ve Dijital Marketing&apos;de Fark Yaratın
                            </motion.h1>

                            <motion.p
                                className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.8 }}
                            >
                                Secesta&apos;nın inovatif AI, SEO ve reklam teknolojileriyle dijitalde sürdürülebilir büyüme şimdi çok daha yakın.
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}

