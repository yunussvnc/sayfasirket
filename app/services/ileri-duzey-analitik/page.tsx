"use client";

import type { Metadata } from "next";
import PageNavbar from "@/components/PageNavbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ServiceSidebar from "@/components/ServiceSidebar";

// Note: This is a client component, metadata should be in layout.tsx or a parent server component
// For now, we'll add it as a comment for documentation purposes
/*
export const metadata: Metadata = {
  title: "İleri Düzey Analitik - Secesta Lider Markaların Dijital Pazarlama & SEO Ajansı",
  description: "Veri odaklı kararlar için gelişmiş analiz yöntemleriyle stratejik içgörüler sunar. Google Analytics, Meta verileri ve CRM analizleri ile sürekli optimizasyon sağlarız.",
  openGraph: {
    title: "İleri Düzey Analitik - Secesta",
    description: "Veri odaklı kararlar için gelişmiş analiz yöntemleriyle stratejik içgörüler sunar.",
    images: [
      {
        url: "/images/service_7-768x432.webp",
        width: 768,
        height: 432,
        alt: "İleri Düzey Analitik",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "İleri Düzey Analitik - Secesta",
    description: "Veri odaklı kararlar için gelişmiş analiz yöntemleriyle stratejik içgörüler sunar.",
    images: ["/images/service_7-768x432.webp"],
  },
};
*/


const features = [
  {
    title: "Quality & Reliable",
    description: "We provide all types of business & financial consultations."
  },
  {
    title: "Licensed & Insured",
    description: "Our dynamic resourcing calibration can replicate any solution for a much larger playing ground."
  },
  {
    title: "Skilled Staff",
    description: "Cognitive capabilities and data analytics bring efficiency and competitive edge."
  },
  {
    title: "Warranty & Maintance",
    description: "Our quick time and proactive approach assist our clients to rehearse the future."
  }
];

const problems = [
  {
    title: "Launching a New Product",
    items: ["Fast project turnaround time", "Substantial cost savings", "International quality standards", "Customized project"]
  },
  {
    title: "Incremental eCommerce Sales",
    items: ["A dedicated Project Management", "Strategic delivery locations", "Basic social media strategy", "Quarterly performance reports"]
  },
  {
    title: "Database Growth",
    items: ["Press release drafting and distribution", "Increase in business revenue", "Substantial cost savings", "Strategic delivery locations"]
  }
];

const faqs = [
  {
    question: "How to soft launch your business?",
    answer: "A digital marketing agency can help businesses of all sizes and industries to improve their online visibility, generate leads, and increase sales. By leveraging the latest digital marketing strategies and technologies, a digital marketing agency can help businesses to stay ahead of the competition"
  },
  {
    question: "What is the transfer application process?",
    answer: "A digital marketing agency can help businesses of all sizes and industries to improve their online visibility, generate leads, and increase sales. By leveraging the latest digital marketing strategies and technologies, a digital marketing agency can help businesses to stay ahead of the competition"
  },
  {
    question: "Where should I incorporate my business?",
    answer: "A digital marketing agency can help businesses of all sizes and industries to improve their online visibility, generate leads, and increase sales. By leveraging the latest digital marketing strategies and technologies, a digital marketing agency can help businesses to stay ahead of the competition"
  },
  {
    question: "How can SEO optimization help my business?",
    answer: "A digital marketing agency can help businesses of all sizes and industries to improve their online visibility, generate leads, and increase sales. By leveraging the latest digital marketing strategies and technologies, a digital marketing agency can help businesses to stay ahead of the competition"
  },
  {
    question: "Why should I make branding strategies for startups?",
    answer: "A digital marketing agency can help businesses of all sizes and industries to improve their online visibility, generate leads, and increase sales. By leveraging the latest digital marketing strategies and technologies, a digital marketing agency can help businesses to stay ahead of the competition"
  }
];

export default function IleriDuzeyAnalitik() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen">
      <PageNavbar />
      
      {/* Hero Section with Background */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden rounded-b-3xl">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/service-bc.jpg"
            alt="Services Background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ul className="flex items-center gap-2 text-sm text-white/90">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Anasayfa
                </Link>
              </li>
              <li>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </li>
              <li>
                <Link href="/hizmetlerimiz" className="hover:text-white transition-colors">
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </li>
              <li>
                <span className="bg-white/20 text-white px-3 py-1 rounded-lg text-sm" aria-current="page">
                  İleri Düzey Analitik
                </span>
              </li>
            </ul>
          </nav>

          {/* Page Header Content */}
          <div className="max-w-4xl text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              İleri Düzey Analitik
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <ServiceSidebar currentService="/services/ileri-duzey-analitik" />

            {/* Main Content Area */}
            <div className="lg:col-span-9">
              {/* Intro Text */}
              <motion.h5
                className="text-lg text-gray-700 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                A digital marketing agency can help businesses of all sizes and industries to improve their online visibility, generate leads, and increase sales. Strengthen your team in strategy, marketing & operations.
              </motion.h5>

              {/* Service Image */}
              <motion.div
                className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src="/images/service_7-768x432.webp"
                  alt="İleri Düzey Analitik"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 75vw"
                />
              </motion.div>

              {/* Service Features */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Service features</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      whileHover={{ x: 5, scale: 1.02 }}
                    >
                      <motion.div
                        className="w-12 h-12 rounded-full bg-[#636EDF] flex items-center justify-center flex-shrink-0"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </motion.div>
                      <div>
                        <h5 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h5>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Problems We Solve */}
              <div className="mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Problems we solve</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  From content creation and partnership brokering to dynamic content optimisation and sponsorship, we do a lot more in the world of content than you would imagine from a media agency.
                </p>

                <div className="space-y-6">
                  {problems.map((problem, index) => (
                    <div key={index} className="border-l-4 border-[#636EDF] pl-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#636EDF] rounded-full"></div>
                        {problem.title}
                      </h4>
                      <ul className="space-y-2">
                        {problem.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-gray-600 flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#636EDF] rounded-full mt-2 flex-shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular Questions with Accordion */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Popular questions</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  </p>
                </div>
                <div className="relative hidden lg:block">
                  <Image
                    src="/images/service-detail.jpg"
                    alt="Service Detail"
                    width={525}
                    height={650}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>

              {/* FAQ Accordion */}
              <div className="space-y-4 mb-12">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-6 py-4 flex items-center justify-between text-left bg-white hover:bg-gray-50"
                      whileHover={{ backgroundColor: "#f9fafb" }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        animate={{
                          rotate: openFaq === index ? 45 : 0
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </motion.svg>
                    </motion.button>
                    <AnimatePresence>
                      {openFaq === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                            <motion.p
                              className="text-gray-600 leading-relaxed"
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 }}
                            >
                              {faq.answer}
                            </motion.p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 hidden lg:block">
          <Image
            src="/images/service-detail_deco.png"
            alt="Decoration"
            width={1710}
            height={600}
            className="w-full h-auto"
          />
        </div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="74" height="74" viewBox="0 0 74 74" fill="none">
              <g clipPath="url(#clip0_109_2585)">
                <path opacity="0.2" d="M74.0004 50.0795C74.0004 40.8967 68.7323 32.7013 60.8424 28.7148C60.5974 46.3217 46.3227 60.5964 28.7158 60.8414C32.7023 68.7314 40.8977 73.9994 50.0805 73.9994C54.3859 73.9994 58.5728 72.8528 62.2516 70.6741L73.896 73.895L70.675 62.2506C72.8537 58.5718 74.0004 54.3849 74.0004 50.0795Z" fill="#636EDF"></path>
                <path d="M56.5117 28.2559C56.5117 12.6753 43.8364 0 28.2559 0C12.6753 0 0 12.6753 0 28.2559C0 33.3337 1.35159 38.2776 3.91815 42.6181L0.103882 56.4073L13.8936 52.5936C18.2341 55.1601 23.1781 56.5117 28.2559 56.5117C43.8364 56.5117 56.5117 43.8364 56.5117 28.2559ZM23.9199 21.6797H19.584C19.584 16.8977 23.4739 13.0078 28.2559 13.0078C33.0378 13.0078 36.9277 16.8977 36.9277 21.6797C36.9277 24.1068 35.9002 26.4396 34.1077 28.0792L30.4238 31.4508V34.832H26.0879V29.5414L31.1804 24.8803C32.0905 24.0475 32.5918 22.911 32.5918 21.6797C32.5918 19.2887 30.6468 17.3438 28.2559 17.3438C25.8649 17.3438 23.9199 19.2887 23.9199 21.6797ZM26.0879 39.168H30.4238V43.5039H26.0879V39.168Z" fill="#636EDF"></path>
              </g>
            </svg>
            <h4 className="text-2xl font-bold text-gray-900">Do you need any help?</h4>
          </div>
          <div className="mb-6">
            <p className="text-lg text-gray-700 mb-2">support@example.com</p>
            <p className="text-gray-600">+ (406) 555-0120</p>
          </div>
          <Link
            href="/bize-ulasin"
            className="inline-flex items-center gap-2 bg-[#636EDF] text-white px-8 py-3 rounded-lg hover:bg-[#5963C8] transition-colors font-medium"
          >
            get an appointment
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32" className="w-4 h-4">
              <path d="M15.52 4.953c-.47.155-.904.523-1.125.956-.109.213-.128.327-.128.758 0 .43.019.546.131.773.101.206.87 1.009 3.384 3.533l3.253 3.266-7.438.014-7.437.014-.267.141a2.097 2.097 0 0 0-.831.834c-.109.213-.129.328-.129.758 0 .431.02.544.129.759.165.323.523.68.845.845l.253.129 7.437.014 7.438.014-3.253 3.266c-2.514 2.524-3.283 3.327-3.384 3.533-.112.227-.131.343-.131.773 0 .594.104.858.489 1.244.386.386.65.49 1.244.49.429 0 .547-.02.773-.131.391-.191 9.972-9.772 10.163-10.163.111-.226.131-.344.131-.773 0-.429-.02-.547-.131-.773-.103-.211-1.155-1.293-4.986-5.129-5.414-5.42-5.101-5.143-5.87-5.172-.235-.009-.487.003-.56.027" fill="currentColor" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
