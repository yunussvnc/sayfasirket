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
                src="/images/vision-thinking.jpg"
                alt="Düşünen Profesyonel"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Right Side - Text Content */}
          <motion.div
            className="relative space-y-6 bg-white rounded-lg p-8 md:p-12 shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Decorative Image - Top Right */}
            <motion.div
              className="absolute -top-8 -right-8 hidden lg:block z-10"
              initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 0.4
              }}
            >
              <Image
                src="/images/küo.jpg"
                alt="Decorative Cube"
                width={120}
                height={120}
                className="w-24 h-24 md:w-32 md:h-32 object-contain opacity-80 drop-shadow-lg"
              />
            </motion.div>
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
              NeoKreatif Ajans olarak 12 yılı aşkın tecrübemizle markaların dijital dünyada güçlü bir şekilde var olmasını sağlıyoruz. Web tasarım, yazılım geliştirme, SEO, Google Ads & Meta Reklam Yönetimi, sosyal medya yönetimi, kurumsal kimlik ve grafik tasarım alanlarında yüzlerce projeye imza attık.
            </motion.p>

            <motion.p
              className="text-lg font-medium text-[#636EDF] mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              12 Yılı Aşkın Tecrübeyle Dijitalde Güven İnşa Ediyoruz
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

