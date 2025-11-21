"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function Services() {
  return (
    <section className="py-20 px-4 bg-white relative z-20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href={service.link}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-xl group block"
              >
                {/* Icon Box */}
                <motion.div
                  className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4 group-hover:bg-[#636EDF]"
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
                  className="text-[#636EDF] hover:text-[#5963C8] font-medium inline-flex items-center gap-2 group/link"
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
    </section>
  );
}
