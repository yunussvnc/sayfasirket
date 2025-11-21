"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
    {
        icon: "/images/uxui-1.svg",
        title: "UX/UI Tasarımı",
        description: "Kullanıcı deneyimini önceliklendiren, estetik ve işlevsel arayüzler tasarlanır.",
        link: "/services/ux-ui-tasarimi"
    },
    {
        icon: "/images/brand-1.svg",
        title: "Marka Kimliği",
        description: "Markanızı tanımlayan görsel ve sözel unsurları profesyonelce tasarlayıp uygular.",
        link: "/services/marka-kimligi"
    },
    {
        icon: "/images/programming-1.svg",
        title: "Web Geliştirme",
        description: "Modern, hızlı ve mobil uyumlu web siteleri ile dijital varlığınızı güçlendirir.",
        link: "/services/web-gelistirme"
    },
    {
        icon: "/images/digital-1.svg",
        title: "Dijital Strateji",
        description: "Dijital varlığınızı optimize etmek için hedef odaklı stratejik çözümler üretir.",
        link: "/services/dijital-strateji"
    },
    {
        icon: "/images/system-1.svg",
        title: "Sistem ve Yazılım",
        description: "İşletmeniz için özel yazılım çözümleri ve entegre sistem altyapıları geliştirir.",
        link: "/services/sistem-ve-yazilim"
    },
    {
        icon: "/images/strategy-1.svg",
        title: "Pazarlama Stratejisi",
        description: "Markanız için sürdürülebilir büyümeyi hedefleyen bütüncül pazarlama planları oluşturur.",
        link: "/services/marketing-strategy"
    }
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isKurumsalOpen, setIsKurumsalOpen] = useState(false);

    return (
        <>
            <motion.header
                className="fixed top-0 left-0 right-0 z-50 bg-[#050a1f] shadow-[0_15px_45px_rgba(2,6,15,0.9)]"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <nav className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between bg-[radial-gradient(circle_at_top,#1a2b8a,#0a0f2b)] border border-white/10 rounded-full px-4 py-3 shadow-[0_10px_40px_rgba(4,9,20,0.6)] backdrop-blur">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-3 bg-white px-4 py-2 rounded-full"
                        >
                            <Link href="/" className="flex items-center gap-3">
                                <Image
                                    src="/images/neokreatif-logo.png"
                                    alt="NeoKreatif Ajans Logo"
                                    width={150}
                                    height={50}
                                    className="h-8 w-auto"
                                    priority
                                />

                            </Link>
                        </motion.div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center gap-1 text-white text-sm">
                            <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                                <Link href="/" className="px-4 py-2 rounded-full hover:bg-white/10 transition-colors">Anasayfa</Link>
                            </motion.div>
                            <span className="text-white/30">•</span>
                            <div
                                className="relative"
                                onMouseEnter={() => setIsKurumsalOpen(true)}
                                onMouseLeave={() => setIsKurumsalOpen(false)}
                            >
                                <motion.button
                                    className="px-4 py-2 rounded-full hover:bg-white/10 transition-colors"
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
                                            className="absolute top-full left-0 mt-2 w-48 bg-[#040a16] rounded-2xl shadow-lg overflow-hidden border border-white/10"
                                        >
                                            <motion.div whileHover={{ x: 5 }}>
                                                <Link href="/ekibimiz" className="block px-4 py-2 text-white hover:bg-white/10 transition-colors">Ekibimiz</Link>
                                            </motion.div>
                                            <motion.div whileHover={{ x: 5 }}>
                                                <Link href="/hakkimizda" className="block px-4 py-2 text-white hover:bg-white/10 transition-colors">Hakkımızda</Link>
                                            </motion.div>
                                            <motion.div whileHover={{ x: 5 }}>
                                                <Link href="/degerlerimiz" className="block px-4 py-2 text-white hover:bg-white/10 transition-colors">Değerlerimiz</Link>
                                            </motion.div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                            <span className="text-white/30">•</span>
                            <motion.div whileHover={{ y: -2 }}>
                                <Link href="/hizmetlerimiz" className="px-4 py-2 rounded-full hover:bg-white/10 transition-colors">Hizmetlerimiz</Link>
                            </motion.div>
                            <span className="text-white/30">•</span>
                            <motion.div whileHover={{ y: -2 }}>
                                <Link href="/referanslar" className="px-4 py-2 rounded-full hover:bg-white/10 transition-colors">Referanslar</Link>
                            </motion.div>
                            <span className="text-white/30">•</span>
                            <motion.div whileHover={{ y: -2 }}>
                                <Link href="/iletisim" className="px-4 py-2 rounded-full hover:bg-white/10 transition-colors">İletişim</Link>
                            </motion.div>
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            className="md:hidden text-white"
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
                                        <Link href={item.href} className="block text-white hover:text-blue-400 transition-colors">{item.label}</Link>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </nav>
            </motion.header >

            {/* Hero Cover Section with Services Background */}
            < div className="relative w-full mt-[73px] overflow-hidden" >
                {/* Background Images - Covering both Hero and Services */}
                < div className="absolute inset-0 w-full h-full" >
                    {/* First Cover Image - Base Layer */}
                    < div className="absolute inset-0 w-full h-full" >
                        <Image
                            src="/images/kapak1.jpg"
                            alt=""
                            fill
                            className="object-cover"
                            priority
                        />
                    </div >

                    {/* Second Cover Image - Overlay Layer */}
                    < div className="absolute inset-0 w-full h-full" >
                        <Image
                            src="/images/kapak 2.jpg"
                            alt=""
                            fill
                            className="object-cover opacity-80 mix-blend-overlay"
                            priority
                        />
                    </div >

                    {/* Overlay Gradient - Lighter at top for hero, darker at bottom for services */}
                    < div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/30 to-black/70" />
                </div >

                {/* Hero Section */}
                < section className="relative z-10 h-[600px] lg:h-[720px] pt-10" >

                    {/* Cube Image - Right Side */}
                    < div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none z-20" >
                        <motion.div
                            initial={{ opacity: 0, x: 50, rotate: -15 }}
                            animate={{ opacity: 1, x: 0, rotate: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
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
                    </div >

                    {/* Hero Text Content */}
                    < div className="relative z-10 h-full flex items-center justify-center" >
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
                                    <span className="text-lg font-medium">12 Yılı Aşkın Deneyimle Dijital Çözüm Ortağınız</span>
                                </motion.div>

                                <motion.h1
                                    className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, delay: 0.6 }}
                                >
                                    NeoKreatif ile Web Tasarım, SEO ve Dijital Pazarlama&apos;da Fark Yaratın
                                </motion.h1>

                                <motion.p
                                    className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, delay: 0.8 }}
                                >
                                    NeoKreatif&apos;in profesyonel web tasarım, yazılım geliştirme, SEO, Google Ads, Meta Ads ve sosyal medya yönetimi hizmetleriyle dijitalde sürdürülebilir büyüme şimdi çok daha yakın.
                                </motion.p>
                            </motion.div>
                        </div>
                    </div >
                </section >

                {/* Services Cards Section - Overlay on background */}
                < section className="relative z-10 py-20 px-4" >
                    <div className="container mx-auto max-w-6xl">
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                >
                                    <Link
                                        href={service.link}
                                        className="bg-white/95 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:shadow-xl group block transition-all"
                                    >
                                        {/* Icon Box */}
                                        <motion.div
                                            className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4 group-hover:bg-[#636EDF] transition-colors"
                                            whileHover={{ rotate: 360, scale: 1.1 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <Image
                                                src={service.icon}
                                                alt={service.title}
                                                width={48}
                                                height={48}
                                                className="w-8 h-8 object-contain"
                                            />
                                        </motion.div>

                                        {/* Content */}
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#636EDF] transition-colors">
                                            {service.title}
                                        </h3>

                                        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                            {service.description}
                                        </p>

                                        {/* Link */}
                                        <motion.div
                                            className="text-[#636EDF] hover:text-[#5963C8] font-medium inline-flex items-center gap-2"
                                            whileHover={{ x: 5 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            Detaylı Bilgi
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 32 32"
                                                className="w-4 h-4"
                                            >
                                                <path
                                                    d="M15.52 4.953c-.47.155-.904.523-1.125.956-.109.213-.128.327-.128.758 0 .43.019.546.131.773.101.206.87 1.009 3.384 3.533l3.253 3.266-7.438.014-7.437.014-.267.141a2.097 2.097 0 0 0-.831.834c-.109.213-.129.328-.129.758 0 .431.02.544.129.759.165.323.523.68.845.845l.253.129 7.437.014 7.438.014-3.253 3.266c-2.514 2.524-3.283 3.327-3.384 3.533-.112.227-.131.343-.131.773 0 .594.104.858.489 1.244.386.386.65.49 1.244.49.429 0 .547-.02.773-.131.391-.191 9.972-9.772 10.163-10.163.111-.226.131-.344.131-.773 0-.429-.02-.547-.131-.773-.103-.211-1.155-1.293-4.986-5.129-5.414-5.42-5.101-5.143-5.87-5.172-.235-.009-.487.003-.56.027"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </motion.div>
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section >
            </div >
        </>
    );
}

