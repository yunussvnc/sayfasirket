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
  title: "Dijital Strateji - NeoKreatif Ajans Lider Markaların Dijital Pazarlama & SEO Ajansı",
  description: "Dijital varlığınızı optimize etmek için hedef odaklı stratejik çözümler üretir. Dijital dünyada başarılı olmak için doğru strateji gereklidir.",
  openGraph: {
    title: "Dijital Strateji - NeoKreatif Ajans",
    description: "Dijital varlığınızı optimize etmek için hedef odaklı stratejik çözümler üretir.",
    images: [
      {
        url: "/images/service_4-768x512.webp",
        width: 768,
        height: 512,
        alt: "Dijital Strateji",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dijital Strateji - NeoKreatif Ajans",
    description: "Dijital varlığınızı optimize etmek için hedef odaklı stratejik çözümler üretir.",
    images: ["/images/service_4-768x512.webp"],
  },
};

const features = [
  {
    title: "Veri Odaklı Planlama",
    description: "Sunduğumuz stratejiler rastlantısal değil; sektör analizi, kullanıcı davranışları ve dijital trendler doğrultusunda oluşturulur. Her adımda ölçülebilir başarı hedeflenir."
  },
  {
    title: "Uyumlu ve Etik Yaklaşım",
    description: "Stratejilerimiz, dijital reklam ve veri gizliliği kurallarına tam uyum sağlar. Platform politikalarına ve yasal mevzuata göre hareket ederiz."
  },
  {
    title: "Stratejik Zihin, Yaratıcı Ruh",
    description: "Ekibimiz sadece planlama yapmaz; yaratıcı fikirlerle sizi farklılaştıran özgün kampanyalar geliştirir. İçerik, reklam ve kanal seçimi tamamen entegre şekilde ilerler."
  },
  {
    title: "Dinamik Süreç Yönetimi",
    description: "Sabit bir planla değil, esnek ve güncel kalan bir stratejiyle ilerleriz. Gelişmeleri izler, dönüşümlere göre stratejinizi optimize ederiz."
  }
];

const faqs = [
  {
    question: "Dijital strateji tam olarak ne anlama gelir?",
    answer: "Dijital strateji, bir markanın dijital platformlardaki tüm iletişim, pazarlama ve etkileşim faaliyetlerini planlayan bir yol haritasıdır. Sosyal medya, web sitesi, reklam kampanyaları, içerik üretimi ve kullanıcı deneyimi gibi alanları kapsar. Amaç; dijitalde ölçülebilir başarı elde etmektir.",
    defaultOpen: true
  },
  {
    question: "Sadece sosyal medya yönetimi dijital strateji sayılır mı?",
    answer: "Hayır. Sosyal medya sadece bir bileşendir. Gerçek bir dijital strateji; hedef kitle analizi, rekabet incelemesi, SEO, içerik planlaması, reklam optimizasyonu ve performans takibini de içerir. Tüm dijital temas noktalarını kapsayan bütüncül bir bakış açısı gerektirir."
  },
  {
    question: "Dijital strateji süreciniz nasıl ilerliyor?",
    answer: "Sürecimiz şu adımlardan oluşur: Marka ve hedef analizi, Dijital varlıkların incelenmesi, Hedef odaklı strateji planlaması, İçerik, reklam ve kullanıcı etkileşimi taktiklerinin belirlenmesi, Uygulama, izleme ve optimizasyon. Her aşama veriye ve geri bildirime dayalı şekilde ilerler."
  },
  {
    question: "Mevcut markamı yeniden konumlandırabilir misiniz?",
    answer: "Stratejinin kapsamına bağlı olarak ilk etkiler genellikle 1-2 ay içinde görülür. Ancak SEO ve organik büyüme gibi bazı alanlarda kalıcı başarılar 3 ila 6 ay arası sürer. Reklam ve içerik odaklı planlamalarda ise daha hızlı sonuç alınabilir."
  },
  {
    question: "Küçük işletmeler için dijital strateji gerekli midir?",
    answer: "Kesinlikle evet. Dijital strateji, bütçenizi verimli kullanmak, doğru kitleye ulaşmak ve büyümenizi planlı şekilde yönetmek için şarttır. Özellikle küçük işletmeler için ölçülebilir, düşük maliyetli ama etkili adımlar hayati öneme sahiptir."
  }
];


export default function DijitalStrateji() {
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
          {/* Dark Overlay - Lighter for better image visibility */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ul className="flex items-center gap-3 text-base font-medium text-white/95">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Anasayfa
                </Link>
              </li>
              <li>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </li>
              <li>
                <Link href="/hizmetlerimiz" className="hover:text-white transition-colors">
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </li>
              <li>
                <span className="bg-white/25 text-white px-4 py-2 rounded-lg text-base font-medium" aria-current="page">
                  Dijital Strateji
                </span>
              </li>
            </ul>
          </nav>

          {/* Page Header Content */}
          <div className="max-w-4xl text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Dijital Strateji
            </h1>
          </div>
        </div>
      </section>

      {/* Page Header */}
      <section className="pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Dijital Strateji
              </h2>
              <p className="text-lg text-white/90 leading-relaxed">
                Dijitalde güçlü olmak tesadüf değil, stratejidir. Dijital dünyada rekabet her geçen gün artıyor. Sizi öne çıkaracak şey ise plansız çabalar değil, hedefe yönelik stratejik adımlardır. Dijital strateji hizmetimizle markanızın online varlığını planlı, ölçülebilir ve sürdürülebilir hale getiriyoruz. Pazarlama, içerik, reklam ve kullanıcı deneyimi gibi tüm alanlarda sizi başarıya götürecek yol haritasını birlikte oluşturuyoruz.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/service_4-768x512.webp"
                alt="Dijital Strateji"
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
            <ServiceSidebar currentService="/services/dijital-strateji" />

            <div className="lg:col-span-9">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-2 bg-[#636EDF] rounded-full"></div>
                <span className="text-[#636EDF] font-medium text-sm uppercase tracking-wide">Hizmet Özellikleri</span>
              </div>

              <p className="text-white/90 leading-relaxed mb-12 max-w-4xl">
                Dijital strateji, markanızın dijital dünyadaki tüm temas noktalarını bir bütün olarak planlamayı gerektirir. Sadece sosyal medya yönetmek ya da reklam vermek değil; hangi platformlarda, hangi mesajlarla ve ne zaman görünür olacağınızı netleştirmek gerekir. Biz bu süreci veriye dayalı analizlerle başlatır, içerik, reklam, SEO, kullanıcı deneyimi ve dönüşüm optimizasyonu gibi alanlarla tamamlarız. Amaç? Daha fazla etkileşim, daha fazla dönüşüm, daha fazla başarı.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 hover:shadow-md transition-shadow">
                    <div className="shrink-0">
                      <div className="w-10 h-10 rounded-full bg-[#636EDF] flex items-center justify-center">
                        <FaCheck className="text-white text-sm" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                      <p className="text-white/80 leading-relaxed">{feature.description}</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
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
                alt="Dijital Strateji Hizmetleri"
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

