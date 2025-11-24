import type { Metadata } from "next";
import PageNavbar from "@/components/PageNavbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import FAQItem from "@/components/FAQItem";
import ServiceSidebar from "@/components/ServiceSidebar";

export const metadata: Metadata = {
  title: "Web Geliştirme - NeoKreatif Ajans Lider Markaların Dijital Pazarlama & SEO Ajansı",
  description: "Modern, hızlı ve mobil uyumlu web siteleri ile dijital varlığınızı güçlendirir. Kurumsal web sitelerinden e-ticaret platformlarına kadar geniş bir yelpazede hizmet sunuyoruz.",
  openGraph: {
    title: "Web Geliştirme - NeoKreatif Ajans",
    description: "Modern, hızlı ve mobil uyumlu web siteleri ile dijital varlığınızı güçlendirir.",
    images: [
      {
        url: "/images/service_3-768x512.webp",
        width: 768,
        height: 512,
        alt: "Web Geliştirme",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Geliştirme - NeoKreatif Ajans",
    description: "Modern, hızlı ve mobil uyumlu web siteleri ile dijital varlığınızı güçlendirir.",
    images: ["/images/service_3-768x512.webp"],
  },
};

const features = [
  {
    title: "Performansa Odaklı Altyapı",
    description: "Kullandığımız teknolojiler yüksek trafik altında bile hızlı çalışan, optimize edilmiş sistemler sunar. Sayfa açılış hızları, mobil uyumluluk ve veri yönetimi önceliğimizdir."
  },
  {
    title: "Güvenli ve Güncel Kodlama",
    description: "Web siteniz dış tehditlere karşı korumalı olur. SSL, veri şifreleme, spam filtreleme ve düzenli yedekleme sistemlerini projelere entegre ediyoruz."
  },
  {
    title: "Esnek ve Ölçeklenebilir Mimari",
    description: "İşletmenizin büyümesiyle birlikte web altyapınız da gelişebilir. Modüler yapılar ve API entegrasyonları ile esnek bir temel sunuyoruz."
  },
  {
    title: "Tam Destek ve Eğitim",
    description: "Web sitenizi teslim etmekle kalmaz, kullanım eğitimi, teknik destek ve gerektiğinde bakım hizmetleriyle süreci sahipleniriz."
  }
];

const faqs = [
  {
    question: "Web geliştirme süreciniz nasıl ilerliyor?",
    answer: "Sürecimiz şu adımlardan oluşur: İhtiyaç ve hedef analizi, Tasarım veya mevcut yapının değerlendirilmesi, Kodlama ve test aşamaları, Yayına alma ve optimizasyon, Eğitim ve teknik destek. Her proje, detaylı planlama ve sürekli iletişimle yürütülür.",
    defaultOpen: true
  },
  {
    question: "Hangi teknolojileri kullanıyorsunuz?",
    answer: "Projeye göre ASP.NET Core, C#, PHP, Laravel, JavaScript, Vue.js ve WordPress gibi farklı teknolojiler kullanıyoruz. Geliştirme dili ve altyapı, projenin hedefleri, ölçeği ve bütçesine göre belirlenir."
  },
  {
    question: "Mobil uyumlu (responsive) siteler geliştiriyor musunuz?",
    answer: "Evet. Geliştirdiğimiz tüm web siteleri mobil, tablet ve masaüstü cihazlarda sorunsuz çalışacak şekilde responsive olarak tasarlanır ve test edilir. Google'ın mobil öncelikli indeksleme standartlarına da tam uyumludur."
  },
  {
    question: "SEO uyumlu web sitesi yapıyor musunuz?",
    answer: "Kesinlikle. Web siteleri, arama motorlarının anlayabileceği yapıda semantik HTML, hızlı yükleme süreleri, temiz URL yapısı, meta etiketler ve açık grafik verileri ile SEO dostu olarak geliştirilir. İsteğe bağlı olarak temel içerik SEO ayarlarını da yapıyoruz."
  },
  {
    question: "Site yayına alındıktan sonra destek veriyor musunuz?",
    answer: "Evet. Web sitesi yayına alındıktan sonra belirli bir süre ücretsiz destek sunuyoruz. Ayrıca teknik bakım, güncelleme, yedekleme ve performans izleme gibi konularda uzun vadeli destek paketlerimiz de mevcut."
  }
];


export default function WebGelistirme() {
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

        {/* Cube Image - Right Side */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none z-20">
          <div className="relative w-48 h-48 lg:w-64 lg:h-64">
            <Image
              src="/images/kuo.jpg"
              alt=""
              fill
              className="object-contain"
              sizes="(max-width: 768px) 192px, 256px"
            />
          </div>
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
                  Web Geliştirme
                </span>
              </li>
            </ul>
          </nav>

          {/* Page Header Content */}
          <div className="max-w-4xl text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Web Geliştirme
            </h1>
          </div>
        </div>
      </section>

      {/* Page Header */}
      <section className="pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Web Geliştirme
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                İşlevsel, hızlı ve güvenli web çözümleriyle fark yaratın. Web siteniz, dijital dünyadaki ilk izleniminizdir. Modern kullanıcılar sadece estetik değil; hız, güvenlik ve kullanılabilirlik de bekliyor. Web geliştirme hizmetimizle size özel, performansı yüksek ve mobil uyumlu çözümler sunuyoruz. İster kurumsal site, ister e-ticaret altyapısı, ister özel yazılım tabanlı sistemler… Her projeyi detaylı analizle başlatır, sağlam mimariyle tamamlarız.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/service_3-768x512.webp"
                alt="Web Geliştirme"
                width={768}
                height={512}
                className="rounded-lg shadow-lg w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <ServiceSidebar currentService="/services/web-gelistirme" />

            <div className="lg:col-span-9">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-2 bg-[#636EDF] rounded-full"></div>
                <span className="text-[#636EDF] font-medium text-sm uppercase tracking-wide">Hizmet Özellikleri</span>
              </div>

              <p className="text-gray-600 leading-relaxed mb-12 max-w-4xl">
                Web geliştirme sadece &quot;kod yazmak&quot; değildir; kullanıcıyı anlayarak, iş hedeflerine uygun dijital platformlar üretmektir. ASP.NET Core, PHP, Laravel, WordPress gibi teknolojilerle platforma özel çözümler sunuyoruz. SEO uyumlu yapılar, yüksek performans, güvenlik katmanları ve kolay yönetim paneli gibi detayları standart olarak kabul ediyoruz. Her proje, sürdürülebilir ve genişletilebilir yapıdadır.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4 bg-gray-50 rounded-lg p-8 border border-gray-200 hover:shadow-md transition-shadow">
                    <div className="shrink-0">
                      <div className="w-10 h-10 rounded-full bg-[#636EDF] flex items-center justify-center">
                        <FaCheck className="text-white text-sm" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Sıkça Sorulan Sorular
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    defaultOpen={faq.defaultOpen || false}
                  />
                ))}
              </div>
            </div>
            <div className="relative hidden lg:block">
              <Image
                src="/images/service-detail.jpg"
                alt="Web Geliştirme Hizmetleri"
                width={525}
                height={650}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

