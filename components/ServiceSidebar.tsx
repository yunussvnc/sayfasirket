"use client";

import Link from "next/link";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface Service {
  title: string;
  link: string;
}

const allServices: Service[] = [
  { title: "İleri Düzey Analitik", link: "/services/ileri-duzey-analitik" },
  { title: "Pazarlama Stratejisi", link: "/services/marketing-strategy" },
  { title: "Sistem ve Yazılım", link: "/services/sistem-ve-yazilim" },
  { title: "Dijital Strateji", link: "/services/dijital-strateji" },
  { title: "Web Geliştirme", link: "/services/web-gelistirme" },
  { title: "Marka Kimliği", link: "/services/marka-kimligi" },
  { title: "UX/UI Tasarımı", link: "/services/ux-ui-tasarimi" }
];

interface ServiceSidebarProps {
  currentService: string;
}

export default function ServiceSidebar({ currentService }: ServiceSidebarProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="hidden lg:block lg:col-span-3">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/95 backdrop-blur-xl rounded-2xl p-6 sticky top-32 border border-gray-200/50 shadow-xl shadow-gray-900/5"
      >
        {/* Services List */}
        <div className="space-y-2 mb-8">
          {allServices.map((service, index) => {
            const isCurrent = service.link === currentService;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <Link
                  href={service.link}
                  className={`relative block p-4 rounded-xl transition-all duration-300 overflow-hidden group ${isCurrent
                      ? "bg-gradient-to-r from-[#636EDF] to-[#7C87F5] text-white shadow-lg shadow-[#636EDF]/30"
                      : "text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:shadow-md"
                    }`}
                >
                  {/* Animated background gradient for hover */}
                  {!isCurrent && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#636EDF]/10 to-[#7C87F5]/10 opacity-0 group-hover:opacity-100"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}

                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{
                      x: hoveredIndex === index ? "100%" : "-100%",
                    }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />

                  <div className="relative flex items-center justify-between">
                    <span className={`font-semibold text-sm transition-all duration-300 ${isCurrent ? "text-white" : "text-gray-800 group-hover:text-[#636EDF]"
                      }`}>
                      {service.title}
                    </span>
                    <motion.div
                      animate={{
                        x: hoveredIndex === index && !isCurrent ? 4 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <FiArrowRight
                        className={`w-4 h-4 transition-all duration-300 ${isCurrent
                            ? "text-white"
                            : "text-gray-400 group-hover:text-[#636EDF] group-hover:translate-x-1"
                          }`}
                      />
                    </motion.div>
                  </div>

                  {/* Active indicator dot */}
                  {isCurrent && (
                    <motion.div
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-r-full"
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Brochure Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="pt-8 border-t border-gray-200/60"
        >
          <div className="flex items-center gap-2 mb-4">
            <motion.div
              className="w-2.5 h-2.5 bg-gradient-to-r from-[#636EDF] to-[#7C87F5] rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.8, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <span className="text-sm text-gray-600 font-medium">
              Başlangıç aşamasında mısınız?
            </span>
          </div>

          <h4 className="text-xl font-bold text-gray-900 mb-5 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Şirket broşürünü indirin
          </h4>

          {/* Brochure Image with hover effect */}
          <motion.div
            className="relative mb-5 rounded-xl overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#636EDF]/20 to-[#7C87F5]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
            <Image
              src="/images/service-detail_sidebar.png"
              alt="Şirket Broşürü"
              width={265}
              height={266}
              className="w-full h-auto rounded-xl transition-transform duration-300 group-hover:scale-105"
            />
          </motion.div>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="/bize-ulasin"
              className="relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#636EDF] to-[#7C87F5] text-white px-6 py-3.5 rounded-xl hover:shadow-lg hover:shadow-[#636EDF]/40 transition-all duration-300 font-semibold w-full group overflow-hidden"
            >
              {/* Button shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />

              <span className="relative z-10">Kopyasını Alın</span>
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <FiArrowRight className="w-4 h-4 relative z-10" />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

