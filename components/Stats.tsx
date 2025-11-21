"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 12, suffix: "+", label: "Yıllık Tecrübe" },
  { value: 100, suffix: "+", label: "Tamamlanan Proje" },
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
    <section className="relative py-20 px-4 overflow-hidden min-h-[600px] flex items-center">
      {/* Background Image - Team Photo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/team_bc.jpg"
          alt="Team Background"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            className="space-y-6 text-white"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block bg-white/90 text-gray-900 px-4 py-2 rounded-lg font-semibold text-sm mb-4"
            >
              NeoKreatif Ajans
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Başarımızın Temelinde İnsanımız Var
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-white/90 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              İşimizi tutkuyla yapıyor, her projeye kalite ve sorumluluk anlayışıyla yaklaşıyoruz. 12 yılı aşkın tecrübemiz ve uzman kadromuzla müşterilerimize en iyi çözümleri sunmak için çalışıyoruz. Yenilikçi, dinamik ve çözüm odaklı bakış açımızla, işinizi dijital dünyada bir adım öne taşıyoruz.
            </motion.p>
          </motion.div>

          {/* Right Side - Statistics */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.2, duration: 0.5 }}
              >
                <div className="text-5xl md:text-6xl font-bold text-white mb-2 flex items-center justify-center gap-1">
                  {stat.prefix && <span className="text-[#00b4d8]">{stat.prefix}</span>}
                  {stat.prefix ? (
                    <span className="text-white">{stat.value}</span>
                  ) : (
                    <span className={index === 0 ? "text-[#00b4d8]" : "text-white"}>{stat.value}</span>
                  )}
                  {stat.suffix && <span className="text-white">{stat.suffix}</span>}
                </div>
                <div className="text-lg text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Right - CTA Button */}
        <motion.div
          className="flex justify-end mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 bg-[#00b4d8] text-white px-8 py-3 rounded-full hover:bg-[#0096c7] transition-colors font-medium"
            >
              <span>Bize Ulaşın</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

