"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Vision() {
  return (
    <section className="py-20 px-4 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Decorative Element */}
        <motion.div
          className="absolute top-0 right-0 -mt-20 -mr-20 hidden md:block opacity-20"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.2, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.div
            animate={{
              rotate: [0, -10, 10, 0]
            }}
            transition={{
              duration: 10,
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

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <motion.div
            className="relative h-96 lg:h-[500px] w-full rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative h-full w-full"
            >
              <Image 
                src="/images/ab-img1.png" 
                alt="Team Member" 
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </motion.div>

          {/* Right Side - Text Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.div
                className="w-2 h-2 bg-[#636EDF] rounded-full"
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
              <span className="text-[#636EDF] font-medium text-sm uppercase tracking-wide">Vizyonumuz</span>
            </motion.div>
            
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Güçlü Markalar ve Eşsiz<br />Deneyimler Yaratıyoruz
            </motion.h2>
            
            <motion.p
              className="text-lg md:text-xl text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Deneyimli tasarımcılar, geliştiriciler ve dijital pazarlama uzmanlarından oluşan ekibimizle, dijital başarıyı mümkün kılıyoruz. Müşterilerimizin markalarını ileriye taşıyan yaratıcı ve sonuç odaklı çözümler üretiyoruz.
            </motion.p>
          </motion.div>
        </div>

        {/* Bottom Card Section */}
        <motion.div
          className="mt-20 bg-white rounded-lg p-8 md:p-12 shadow-sm border border-gray-100"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
        >
          <div className="text-center">
            <motion.div
              className="flex justify-center mb-6"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 200 }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <Image 
                  src="/images/Secesta-Fistik.webp" 
                  alt="Secesta Fıstık" 
                  width={120} 
                  height={120}
                  className="w-24 h-24"
                />
              </motion.div>
            </motion.div>
            <motion.p
              className="text-gray-600 mb-4 text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              22 Yıllık Tecrübeyle Dijitalde Güven İnşa Ediyoruz
            </motion.p>
            <motion.h3
              className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              Secesta Software Solutions
            </motion.h3>
            <motion.p
              className="text-lg font-medium text-gray-900 max-w-2xl mx-auto mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              Başarımızın Temelinde İnsanımız Var
            </motion.p>
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              İşimizi tutkuyla yapıyor, her projeye kalite ve sorumluluk anlayışıyla yaklaşıyoruz.<br />
              22 yıllık tecrübemiz ve uzman kadromuzla müşterilerimize en iyi çözümleri sunmak için çalışıyoruz.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

