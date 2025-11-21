"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const references = [
  // Web Yazılım Referansları
  {
    title: "Web Yazılım Projesi 1",
    image: "https://www.neokreatif.com/wp-content/uploads/2022/03/28.png",
    icon: "https://www.neokreatif.com/wp-content/uploads/2022/03/28.png",
    link: "#",
    categories: [
      { name: "Web Yazılım", link: "/services/web-gelistirme" },
      { name: "Web Tasarım", link: "/services/web-gelistirme" }
    ]
  },
  {
    title: "Web Yazılım Projesi 2",
    image: "https://www.neokreatif.com/wp-content/uploads/2022/03/27.png",
    icon: "https://www.neokreatif.com/wp-content/uploads/2022/03/27.png",
    link: "#",
    categories: [
      { name: "Web Yazılım", link: "/services/web-gelistirme" },
      { name: "Web Tasarım", link: "/services/web-gelistirme" }
    ]
  },
  {
    title: "Web Yazılım Projesi 3",
    image: "https://www.neokreatif.com/wp-content/uploads/2022/03/4-1.png",
    icon: "https://www.neokreatif.com/wp-content/uploads/2022/03/4-1.png",
    link: "#",
    categories: [
      { name: "Web Yazılım", link: "/services/web-gelistirme" },
      { name: "Web Tasarım", link: "/services/web-gelistirme" }
    ]
  },
  {
    title: "Web Yazılım Projesi 4",
    image: "https://www.neokreatif.com/wp-content/uploads/2022/03/16.png",
    icon: "https://www.neokreatif.com/wp-content/uploads/2022/03/16.png",
    link: "#",
    categories: [
      { name: "Web Yazılım", link: "/services/web-gelistirme" },
      { name: "Web Tasarım", link: "/services/web-gelistirme" }
    ]
  },
  {
    title: "Web Yazılım Projesi 5",
    image: "https://www.neokreatif.com/wp-content/uploads/2022/03/19.png",
    icon: "https://www.neokreatif.com/wp-content/uploads/2022/03/19.png",
    link: "#",
    categories: [
      { name: "Web Yazılım", link: "/services/web-gelistirme" },
      { name: "Web Tasarım", link: "/services/web-gelistirme" }
    ]
  },
  {
    title: "Web Yazılım Projesi 6",
    image: "https://www.neokreatif.com/wp-content/uploads/2022/03/26.png",
    icon: "https://www.neokreatif.com/wp-content/uploads/2022/03/26.png",
    link: "#",
    categories: [
      { name: "Web Yazılım", link: "/services/web-gelistirme" },
      { name: "Web Tasarım", link: "/services/web-gelistirme" }
    ]
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
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.42, 0, 0.58, 1] as const
    }
  }
};

export default function Projects() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-600 font-medium mb-2 block">Eserlerimiz</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Gerçek Başarılarımız
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sunduğumuz çözümlerle, sektörünün lider markalarının büyüme hikâyelerine nasıl katkı sağladığımızı inceleyin.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {references.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <Link 
                href={project.link}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden group block"
              >
                <motion.div
                  className="relative h-48 w-full overflow-hidden"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </motion.div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.categories.map((category, catIndex) => (
                      <span
                        key={catIndex}
                        className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
                      >
                        {category.name}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <motion.div
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/referanslar"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              Tüm Projeleri Gör
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 32 32"
                className="w-4 h-4"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path d="M15.52 4.953c-.47.155-.904.523-1.125.956-.109.213-.128.327-.128.758 0 .43.019.546.131.773.101.206.87 1.009 3.384 3.533l3.253 3.266-7.438.014-7.437.014-.267.141a2.097 2.097 0 0 0-.831.834c-.109.213-.129.328-.129.758 0 .431.02.544.129.759.165.323.523.68.845.845l.253.129 7.437.014 7.438.014-3.253 3.266c-2.514 2.524-3.283 3.327-3.384 3.533-.112.227-.131.343-.131.773 0 .594.104.858.489 1.244.386.386.65.49 1.244.49.429 0 .547-.02.773-.131.391-.191 9.972-9.772 10.163-10.163.111-.226.131-.344.131-.773 0-.429-.02-.547-.131-.773-.103-.211-1.155-1.293-4.986-5.129-5.414-5.42-5.101-5.143-5.87-5.172-.235-.009-.487.003-.56.027" fill="currentColor" />
              </motion.svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

