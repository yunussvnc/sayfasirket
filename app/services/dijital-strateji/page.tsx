import type { Metadata } from "next";
import PageNavbar from "@/components/PageNavbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import FAQItem from "@/components/FAQItem";
import ServiceSidebar from "@/components/ServiceSidebar";
import ServiceHero from "@/components/ServiceHero";

export const metadata: Metadata = {
  title: "Dijital Strateji - Secesta Lider Markaların Dijital Pazarlama & SEO Ajansı",
  description: "Dijital varlığınızı optimize etmek için hedef odaklı stratejik çözümler üretir. Dijital dünyada başarılı olmak için doğru strateji gereklidir.",
  openGraph: {
    title: "Dijital Strateji - Secesta",
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
    title: "Dijital Strateji - Secesta",
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
      
      {/* Breadcrumb Navigation */}
      <section className="pt-32 pb-6 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ul className="flex items-center gap-2 text-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-[#636EDF] transition-colors">
                  Anasayfa
                </Link>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li>
                <Link href="/hizmetlerimiz" className="hover:text-[#636EDF] transition-colors">
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li>
                <span className="text-gray-900" aria-current="page">Dijital Strateji</span>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      <ServiceHero title="Dijital Strateji" />

      {/* Page Header */}
      <section className="pb-12 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Dijital Strateji
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
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
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <ServiceSidebar currentService="/services/dijital-strateji" />
            
            <div className="lg:col-span-9">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-2 bg-[#636EDF] rounded-full"></div>
            <span className="text-[#636EDF] font-medium text-sm uppercase tracking-wide">Hizmet Özellikleri</span>
          </div>

          <p className="text-gray-600 leading-relaxed mb-12 max-w-4xl">
            Dijital strateji, markanızın dijital dünyadaki tüm temas noktalarını bir bütün olarak planlamayı gerektirir. Sadece sosyal medya yönetmek ya da reklam vermek değil; hangi platformlarda, hangi mesajlarla ve ne zaman görünür olacağınızı netleştirmek gerekir. Biz bu süreci veriye dayalı analizlerle başlatır, içerik, reklam, SEO, kullanıcı deneyimi ve dönüşüm optimizasyonu gibi alanlarla tamamlarız. Amaç? Daha fazla etkileşim, daha fazla dönüşüm, daha fazla başarı.
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
      <section className="py-20 px-4 bg-gray-50">
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
                alt="Dijital Strateji Hizmetleri"
                width={525}
                height={650}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-linear-to-br from-[#636EDF] to-[#5963C8] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/service-detail_deco.png"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="flex items-center justify-center gap-3 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="74" height="74" viewBox="0 0 74 74" fill="none" className="w-12 h-12 text-white">
              <path opacity="0.2" d="M74.0004 50.0795C74.0004 40.8967 68.7323 32.7013 60.8424 28.7148C60.5974 46.3217 46.3227 60.5964 28.7158 60.8414C32.7023 68.7314 40.8977 73.9994 50.0805 73.9994C54.3859 73.9994 58.5728 72.8528 62.2516 70.6741L73.896 73.895L70.675 62.2506C72.8537 58.5718 74.0004 54.3849 74.0004 50.0795Z" fill="white"/>
              <path d="M56.5117 28.2559C56.5117 12.6753 43.8364 0 28.2559 0C12.6753 0 0 12.6753 0 28.2559C0 33.3337 1.35159 38.2776 3.91815 42.6181L0.103882 56.4073L13.8936 52.5936C18.2341 55.1601 23.1781 56.5117 28.2559 56.5117C43.8364 56.5117 56.5117 43.8364 56.5117 28.2559ZM23.9199 21.6797H19.584C19.584 16.8977 23.4739 13.0078 28.2559 13.0078C33.0378 13.0078 36.9277 16.8977 36.9277 21.6797C36.9277 24.1068 35.9002 26.4396 34.1077 28.0792L30.4238 31.4508V34.832H26.0879V29.5414L31.1804 24.8803C32.0905 24.0475 32.5918 22.911 32.5918 21.6797C32.5918 19.2887 30.6468 17.3438 28.2559 17.3438C25.8649 17.3438 23.9199 19.2887 23.9199 21.6797ZM26.0879 39.168H30.4238V43.5039H26.0879V39.168Z" fill="white"/>
            </svg>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Bir sorunuz mu var?
            </h2>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
            <a href="mailto:info@secesta.com" className="text-white hover:text-gray-200 transition-colors text-lg">
              info@secesta.com
            </a>
            <span className="text-white/50 hidden md:inline">•</span>
            <a href="tel:+905539826700" className="text-white hover:text-gray-200 transition-colors text-lg">
              +90 553 982 6700
            </a>
          </div>
          <Link
            href="/bize-ulasin"
            className="inline-flex items-center gap-2 bg-white text-[#636EDF] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
          >
            Bize Ulaşın
            <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

