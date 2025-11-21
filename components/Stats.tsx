"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 22, suffix: "+", label: "Yıllık Tecrübe" },
  { value: 1.5, suffix: "K", label: "Başarılı Proje" },
  { value: 99, prefix: "%", label: "Memnuniyet" }
];

function AnimatedCounter({ value, prefix, suffix, duration = 2 }: { value: number; prefix?: string; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        
        if (suffix === "K") {
          setCount(Number((value * progress).toFixed(1)));
        } else {
          setCount(Math.floor(value * progress));
        }
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, value, suffix, duration]);

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-bold text-blue-600 mb-4 flex items-center justify-center gap-1">
      {prefix && <span className="text-3xl md:text-4xl">{prefix}</span>}
      <span>{count}</span>
      {suffix && <span className="text-3xl md:text-4xl">{suffix}</span>}
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <AnimatedCounter
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
              />
              <div className="text-xl text-gray-700">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/iletisim"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors font-medium"
            >
              Bize Ulaşın
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

