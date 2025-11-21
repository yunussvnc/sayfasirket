"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const values = [
  {
    title: "Deneyimli Ekip",
    description: "22 yıllık sektörel bilgi birikimiyle uzman kadromuzla yanınızdayız.",
    image: "/images/h6_img-4.jpg"
  },
  {
    title: "Sorumluluk",
    description: "Her projeye kendi işimiz gibi yaklaşır, tam sorumluluk alırız.",
    image: "/images/h6_img-3.jpg"
  },
  {
    title: "Garantili Kalite",
    description: "Teslim ettiğimiz her iş, kalite standartlarıyla test edilerek sunulur.",
    image: "/images/h6_img-5.jpg"
  },
  {
    title: "Hızlı Destek",
    description: "Sorunlara anında çözüm, müşterilerimize kesintisiz destek sunarız.",
    image: "/images/h6_img-2.jpg"
  },
  {
    title: "Müşteri Memnuniyeti",
    description: "Her kararımızda kullanıcı deneyimi ve müşteri mutluluğu önceliğimizdir.",
    image: "/images/Secesta-Fistik.webp"
  }
];

export default function Values() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-medium mb-2 block">Temel Değerlerimiz</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Bizi Biz Yapan Değerler
          </h2>
        </div>

        {/* Desktop: Tab Hover Layout */}
        <div className="hidden lg:block">
          <motion.div
            className="flex gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {values.map((value, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
                className={`flex-1 p-4 rounded-lg border-2 ${
                  activeIndex === index
                    ? "border-blue-600 bg-blue-50 shadow-md"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-lg font-semibold text-gray-900">{value.title}</h3>
              </motion.button>
            ))}
          </motion.div>
          <motion.div
            className="bg-white rounded-lg p-8 border border-gray-200 min-h-[400px] relative overflow-hidden"
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
              >
                <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden">
                  <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={values[activeIndex].image}
                      alt={values[activeIndex].title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1200px) 100vw, 1200px"
                    />
                  </motion.div>
                </div>
                <motion.h3
                  className="text-2xl font-semibold text-gray-900 mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {values[activeIndex].title}
                </motion.h3>
                <motion.p
                  className="text-gray-600 text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {values[activeIndex].description}
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Mobile: Grid Layout */}
        <motion.div
          className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg overflow-hidden border border-gray-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
            >
              <motion.div
                className="relative h-48 w-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={value.image}
                  alt={value.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
