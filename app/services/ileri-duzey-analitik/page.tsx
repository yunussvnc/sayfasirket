"use client";

import PageNavbar from "@/components/PageNavbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ServiceSidebar from "@/components/ServiceSidebar";
import GradientBG from "@/components/GradientBG";

// Note: This is a client component, metadata should be in layout.tsx or a parent server component
// For now, we'll add it as a comment for documentation purposes
/*
export const metadata: Metadata = {
  title: "İleri Düzey Analitik - NeoKreatif Ajans Lider Markaların Dijital Pazarlama & SEO Ajansı",
  description: "Veri odaklı kararlar için gelişmiş analiz yöntemleriyle stratejik içgörüler sunar. Google Analytics, Meta verileri ve CRM analizleri ile sürekli optimizasyon sağlarız.",
  openGraph: {
    title: "İleri Düzey Analitik - NeoKreatif Ajans",
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
    title: "İleri Düzey Analitik - NeoKreatif Ajans",
    description: "Veri odaklı kararlar için gelişmiş analiz yöntemleriyle stratejik içgörüler sunar.",
    images: ["/images/service_7-768x432.webp"],
  },
};
*/


const features = [
  {
    title: "Kesintisiz Veri Kalitesi",
    description: "Tüm veri kaynaklarını tekilleştirerek hatalı kayıtları temizler, güvenilir paneller kurarız."
  },
  {
    title: "Tahmine Dayalı Modeller",
    description: "Makine öğrenmesi temelli modeller ile satış, talep ve kampanya dönüşlerini önceden görürsünüz."
  },
  {
    title: "Gerçek Zamanlı İzleme",
    description: "Pazarlama, satış ve operasyon metriklerini canlı olarak takip edip eşik değerlerini otomatik uyarırız."
  },
  {
    title: "Stratejik Raporlama",
    description: "Üst yönetime özel hikâyeleştirilmiş raporlarla içgörüleri aksiyona dönüştürmenizi kolaylaştırırız."
  }
];

const problems = [
  {
    title: "Yeni Ürün ve Kampanya Lansmanı",
    items: ["Öngörüsel talep tahminleri", "Hızlı A/B test kurulumları", "Gerçek zamanlı kanal optimizasyonu", "Tahsis edilen uzman proje ekibi"]
  },
  {
    title: "E-ticarette Büyüme Baskısı",
    items: ["Davranış segmentasyonu", "Yaşam boyu değer modellemesi", "Kâr marjı odaklı bütçe dağılımı", "Haftalık etki analizleri"]
  },
  {
    title: "Veri Tabanının Olgunlaşması",
    items: ["Veri yönetişimi kılavuzları", "Dönüşüm hunisi görünürlüğü", "Çok kaynaklı atribüsyon", "Kritik KPI’lar için alarm mekanizmaları"]
  }
];

const faqs = [
  {
    question: "İleri analitik projeleri ne kadar sürede canlıya alınır?",
    answer: "Analiz kapsamına göre 4-6 haftalık keşif ve veri temizlik aşamasının ardından panelleri yayına alır, eş zamanlı olarak tahmine dayalı modelleri eğitiriz. Her sprint sonunda ölçülebilir çıktıları paylaşırız."
  },
  {
    question: "Hangi veri kaynaklarıyla entegre olabiliyorsunuz?",
    answer: "Google Analytics 4, Meta, TikTok, CRM, e-ticaret platformları, çağrı merkezi yazılımları ve muhasebe sistemleri dahil olmak üzere API veya dosya bazlı tüm kaynaklarla entegre oluruz."
  },
  {
    question: "Ekibimizde veri uzmanı yok, yine de çalışabilir miyiz?",
    answer: "Evet. Teknik kurulum, veri modelleme ve dashboard yönetimi tamamen ekibimiz tarafından yürütülür. İç ekibinizden stratejik karar vericilerin katılımı yeterlidir."
  },
  {
    question: "Yatırımın geri dönüşünü nasıl raporluyorsunuz?",
    answer: "Her ay kanal bazında gelir katkısı, maliyet tasarrufu ve operasyonel kazanımları hesaplayan etki analizlerini raporlar, OKR’larınızla ilişkilendiririz."
  },
  {
    question: "Veri güvenliği ve KVKK uyumu nasıl sağlanıyor?",
    answer: "Veri yerelliği, erişim logları ve maskeleme politikaları için KVKK ve ISO 27001 standartlarında süreçler uygular, gerekli olduğunda anonimleştirilmiş veri katmanları kurarız."
  }
];

export default function IleriDuzeyAnalitik() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="relative min-h-screen overflow-hidden">
      <GradientBG />
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
      <section className="py-12 px-4">
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
                Veri odaklı büyümenin temeli doğru soruları sormak ve bu sorulara destekleyecek güvenilir kaynaklar oluşturmaktır. Kanal performansından operasyonel verimliliğe kadar tüm süreçleri tek panelde toplayarak karar alma hızınızı artırıyoruz.
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
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Hizmet Özellikleri</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Stratejik hedeflerinizi veriyle ilişkilendirip ölçülebilir KPI’lara dönüştürür, farklı kaynaklardan gelen ham veriyi standartlaştırarak analitik katmanlar inşa ederiz. Böylece pazarlama, satış ve ürün ekipleri ortak bir doğruda buluşur.
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
                        className="w-12 h-12 rounded-full bg-[#636EDF] flex items-center justify-center shrink-0"
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
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Çözdüğümüz Ana Problemler</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Performans odaklı ekiplerin veri karmaşası yüzünden ortak dil oluşturamadığı durumlarda devreye gireriz. İş hedeflerinizi, ölçüm altyapınızı ve aksiyon planınızı tek çatı altında toplayarak ekipler arası senkron kaybını ortadan kaldırırız.
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
                            <div className="w-2 h-2 bg-[#636EDF] rounded-full mt-2 shrink-0"></div>
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
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Sık Sorulan Sorular</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    İleri analitik süreçlerinin kapsamı, veri güvenliği koşulları ve ekip içi sorumlulukları hakkında en çok aldığımız soruları aşağıda özetledik. Projenize özel detaylar için dilediğiniz zaman bize ulaşabilirsiniz.
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

      <Footer />
    </main>
  );
}
