"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PageNavbarProps {
  activePage?: "anasayfa" | "ekibimiz" | "hakkimizda" | "degerlerimiz" | "hizmetlerimiz" | "referanslar" | "iletisim";
}

export default function PageNavbar({ activePage }: PageNavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isKurumsalOpen, setIsKurumsalOpen] = useState(false);

  const isActive = (page: string) => activePage === page;

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm border-b border-gray-200 shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <nav className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3"
          >
            <Link href="/" className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/secesta-vector-logo.svg"
                  alt="NeoKreatif Ajans Logo"
                  width={150}
                  height={50}
                  className="h-10 w-auto"
                  priority
                />
                <Image
                  src="/images/Secesta-Fistik.webp"
                  alt="NeoKreatif Ajans"
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-sm font-medium text-gray-600 hidden lg:block">SOFTWARE SOLUTIONS</span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-3">
            <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
              <Link 
                href="/" 
                className={`transition-colors px-4 py-2.5 text-base font-medium ${
                  isActive("anasayfa") 
                    ? "text-[#636EDF] font-semibold" 
                    : "text-gray-700 hover:text-[#636EDF]"
                }`}
              >
                Anasayfa
              </Link>
            </motion.div>
            <span className="text-gray-400 text-lg">•</span>
            <div
              className="relative"
              onMouseEnter={() => setIsKurumsalOpen(true)}
              onMouseLeave={() => setIsKurumsalOpen(false)}
            >
              <motion.button
                className={`transition-colors px-4 py-2.5 text-base font-medium ${
                  isActive("ekibimiz") || isActive("hakkimizda") || isActive("degerlerimiz")
                    ? "text-[#636EDF] font-semibold"
                    : "text-gray-700 hover:text-[#636EDF]"
                }`}
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
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
                  >
                    <motion.div whileHover={{ x: 5 }}>
                      <Link 
                        href="/ekibimiz" 
                        className={`block px-4 py-2 transition-colors ${
                          isActive("ekibimiz")
                            ? "bg-[#636EDF]/10 text-[#636EDF] font-medium"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        Ekibimiz
                      </Link>
                    </motion.div>
                    <motion.div whileHover={{ x: 5 }}>
                      <Link 
                        href="/hakkimizda" 
                        className={`block px-4 py-2 transition-colors ${
                          isActive("hakkimizda")
                            ? "bg-[#636EDF]/10 text-[#636EDF] font-medium"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        Hakkımızda
                      </Link>
                    </motion.div>
                    <motion.div whileHover={{ x: 5 }}>
                      <Link 
                        href="/degerlerimiz" 
                        className={`block px-4 py-2 transition-colors ${
                          isActive("degerlerimiz")
                            ? "bg-[#636EDF]/10 text-[#636EDF] font-medium"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        Değerlerimiz
                      </Link>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <span className="text-gray-400 text-lg">•</span>
            <motion.div whileHover={{ y: -2 }}>
              <Link 
                href="/hizmetlerimiz" 
                className={`transition-colors px-4 py-2.5 text-base font-medium ${
                  isActive("hizmetlerimiz")
                    ? "text-[#636EDF] font-semibold"
                    : "text-gray-700 hover:text-[#636EDF]"
                }`}
              >
                Hizmetlerimiz
              </Link>
            </motion.div>
            <span className="text-gray-400 text-lg">•</span>
            <motion.div whileHover={{ y: -2 }}>
              <Link 
                href="/referanslar" 
                className={`transition-colors px-4 py-2.5 text-base font-medium ${
                  isActive("referanslar")
                    ? "text-[#636EDF] font-semibold"
                    : "text-gray-700 hover:text-[#636EDF]"
                }`}
              >
                Referanslar
              </Link>
            </motion.div>
            <span className="text-gray-400 text-lg">•</span>
            <motion.div whileHover={{ y: -2 }}>
              <Link 
                href="/iletisim" 
                className={`transition-colors px-4 py-2.5 text-base font-medium ${
                  isActive("iletisim")
                    ? "text-[#636EDF] font-semibold"
                    : "text-gray-700 hover:text-[#636EDF]"
                }`}
              >
                İletişim
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
                { href: "/", label: "Anasayfa", page: "anasayfa" },
                { href: "/ekibimiz", label: "Ekibimiz", page: "ekibimiz" },
                { href: "/hakkimizda", label: "Hakkımızda", page: "hakkimizda" },
                { href: "/hizmetlerimiz", label: "Hizmetlerimiz", page: "hizmetlerimiz" },
                { href: "/referanslar", label: "Referanslar", page: "referanslar" },
                { href: "/iletisim", label: "İletişim", page: "iletisim" }
              ].map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    href={item.href} 
                    className={`block transition-colors ${
                      isActive(item.page as any)
                        ? "text-[#636EDF] font-medium"
                        : "text-gray-700 hover:text-[#636EDF]"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}

