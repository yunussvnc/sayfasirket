"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-[#1a1a3e] via-[#2d1b4e] to-[#4a2c7a]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>

      {/* Decorative 3D Shapes in Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Left Decorative Shape - puzzle.webp */}
        <motion.div
          className="absolute top-1/4 left-0 -translate-y-1/2 opacity-30"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 0.3 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <motion.div
            animate={{
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <Image
              src="/images/puzzle.webp"
              alt="Decorative Shape"
              width={768}
              height={768}
              className="w-64 h-64 md:w-96 md:h-96 object-contain"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Right Top Decorative Shape - h6_deco-1.png */}
        <motion.div
          className="absolute top-0 right-0 -mt-20 -mr-20 hidden md:block opacity-20"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 0.2 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <motion.div
            animate={{
              rotate: [0, -10, 10, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <Image
              src="/images/h6_deco-1.png"
              alt="Decor"
              width={430}
              height={430}
              className="w-[430px] h-[430px] object-contain"
            />
          </motion.div>
        </motion.div>

        {/* Right Bottom Decorative Shape */}
        <motion.div
          className="absolute top-1/2 right-0 -translate-y-1/2 opacity-30 hidden md:block"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 0.3 }}
          transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
        >
          <motion.div
            animate={{
              y: [0, -20, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <Image
              src="/images/Secesta-Fistik.webp"
              alt="NeoKreatif Ajans"
              width={230}
              height={230}
              className="w-32 h-32 md:w-48 md:h-48 object-contain"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Content - Centered */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Label */}
          <motion.div
            className="flex items-center justify-center gap-2 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.div
              className="w-2 h-2 bg-white rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
            <p className="text-lg md:text-xl text-white/90 font-medium">
              Lider Markaların Dijital Çözüm Ortağı
            </p>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            NeoKreatif Ajans İle Web Tasarım, SEO ve Dijital Pazarlama&apos;da Fark Yaratın
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            NeoKreatif Ajans&apos;ın profesyonel web tasarım, yazılım geliştirme, SEO, Google Ads, Meta Ads ve sosyal medya yönetimi hizmetleriyle dijitalde sürdürülebilir büyüme şimdi çok daha yakın.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
