"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FreeSEOButton from "./FreeSEOButton";

interface PageNavbarProps {
  activePage?: "anasayfa" | "hakkimizda" | "degerlerimiz" | "hizmetlerimiz" | "referanslar" | "iletisim";
}

export default function PageNavbar({ activePage }: PageNavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isKurumsalOpen, setIsKurumsalOpen] = useState(false);

  return (
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
            className="logo-container flex items-center gap-3 bg-white px-4 py-2 rounded-full"
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
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
              <FreeSEOButton />
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
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-4"
              >
                <FreeSEOButton />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}

