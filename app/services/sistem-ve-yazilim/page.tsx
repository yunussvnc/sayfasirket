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
  title: "Sistem ve Yazılım - NeoKreatif Ajans Lider Markaların Dijital Pazarlama & SEO Ajansı",
  description: "İhtiyacınıza özel, güvenilir ve ölçeklenebilir yazılım çözümleri. Özgün, güvenli ve iş süreçlerinize tam uyumlu yazılımlar geliştiririz.",
  openGraph: {
    title: "Sistem ve Yazılım - NeoKreatif Ajans",
    description: "İhtiyacınıza özel, güvenilir ve ölçeklenebilir yazılım çözümleri geliştiririz.",
    images: [
      {
        url: "/images/service_5-768x502.webp",
        width: 768,
        height: 502,
        alt: "Sistem ve Yazılım",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sistem ve Yazılım - NeoKreatif Ajans",
    description: "İhtiyacınıza özel, güvenilir ve ölçeklenebilir yazılım çözümleri geliştiririz.",
    images: ["/images/service_5-768x502.webp"],
  },
};

const features = [
  {
    title: "İhtiyaca Özel Yazılım Mimarisi",
    description: "Her işletmenin ihtiyacı farklıdır. Sizin için sıfırdan, iş süreçlerinize birebir uyumlu özel yazılımlar geliştiriyoruz. Hazır paketlere bağlı kalmazsınız."
  },
  {
    title: "Veri Güvenliği ve Erişim Kontrolü",
    description: "Kullandığımız altyapılar güçlü güvenlik protokolleriyle donatılmıştır. Yetkilendirme sistemleri, veri yedekleme ve şifreleme standart olarak sunulur."
  },
  {
    title: "Entegre ve Uyumlu Sistemler",
    description: "ERP, CRM, e-ticaret altyapısı ya da API tabanlı dış sistemlerle sorunsuz entegre çalışacak yazılımlar geliştiriyoruz. Süreçler arasında tam otomasyon sağlıyoruz."
  },
  {
    title: "Sürekli Gelişim ve Destek",
    description: "Yazılım sadece ilk teslimde değil, sonraki adımlarda da destek ister. Bakım, yeni modül geliştirme ve sistem güncellemeleri için uzun vadeli çözümler sunuyoruz."
  }
];

const faqs = [
  {
    question: "Özel yazılım geliştirme ile hazır yazılımlar arasındaki fark nedir?",
    answer: "Hazır yazılımlar genellikle belirli bir işlevi karşılamak için üretilmiş, sınırlı özelleştirmeye sahip sistemlerdir. Özel yazılım ise sizin ihtiyaçlarınıza özel olarak sıfırdan geliştirilir. Bu sayede gereksiz modüllerden arındırılmış, tam entegre, esnek ve ölçeklenebilir çözümler elde edersiniz.",
    defaultOpen: true
  },
  {
    question: "Hangi programlama dillerini ve altyapıları kullanıyorsunuz?",
    answer: "Projeye göre genellikle ASP.NET Core, C#, PHP (Laravel), JavaScript (Vue.js, React), MySQL/MSSQL, REST API gibi teknolojiler kullanıyoruz. Projenin kapsamı ve hedef platforma göre en uygun yapıyı belirleyip uyguluyoruz."
  },
  {
    question: "Yazılım geliştirme süreci nasıl işliyor?",
    answer: "Süreç şu adımlarla ilerler: İhtiyaç ve iş süreçlerinin analizi, Teknik mimari ve kullanıcı akışı planlaması, Geliştirme ve test aşamaları, Canlıya alma (deployment), Eğitim ve bakım desteği. Her adım sizinle onaylı şekilde ilerletilir."
  },
  {
    question: "Yazılım sonrası teknik destek sunuyor musunuz?",
    answer: "Evet. Yazılım geliştirme sonrasında bakım, güncelleme, yeni özellik ekleme, yedekleme ve güvenlik kontrolleri gibi konularda teknik destek sunuyoruz. Dilerseniz uzun vadeli bakım anlaşmaları da yapabiliriz."
  },
  {
    question: "Mevcut sistemimiz üzerine entegrasyon veya iyileştirme yapabilir misiniz?",
    answer: "Elbette. Mevcut sistemlerinizi analiz ediyor, performans sorunlarını gideriyor, eksik modüller ekliyor veya yeni sistemlerle entegre olacak şekilde yeniden yapılandırıyoruz. Böylece sıfırdan başlamak zorunda kalmadan verimli bir dijital altyapıya kavuşuyorsunuz."
  }
];


export default function SistemVeYazilim() {
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
                  Sistem ve Yazılım
                </span>
              </li>
            </ul>
          </nav>

          {/* Page Header Content */}
          <div className="max-w-4xl text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Sistem ve Yazılım
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
                Sistem ve Yazılım
              </h2>
              <p className="text-lg text-white/90 leading-relaxed">
                İhtiyacınıza özel, güvenilir ve ölçeklenebilir yazılım çözümleri. Hazır sistemler her zaman ihtiyaçlarınıza cevap vermez. Özgün, güvenli ve iş süreçlerinize tam uyumlu yazılımlar; verimliliği artırır, operasyonel maliyetleri düşürür ve rekabet avantajı sağlar.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/service_5-768x502.webp"
                alt="Sistem ve Yazılım"
                width={768}
                height={502}
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
            <ServiceSidebar currentService="/services/sistem-ve-yazilim" />

            <div className="lg:col-span-9">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-2 bg-[#636EDF] rounded-full"></div>
                <span className="text-[#636EDF] font-medium text-sm uppercase tracking-wide">Hizmet Özellikleri</span>
              </div>

              <p className="text-white/90 leading-relaxed mb-12 max-w-4xl">
                Sistem ve yazılım geliştirme, sadece bir uygulama inşa etmekten çok daha fazlasıdır. İhtiyaç analizi, veri güvenliği, kullanıcı deneyimi ve sürdürülebilirlik gibi birçok bileşeni kapsar. ASP.NET Core, C#, PHP ve modern framework&apos;lerle geliştirdiğimiz özel çözümler; uzun vadede hem teknik performans hem de operasyonel başarı sunar. Tüm sistemler ölçeklenebilir, çok katmanlı ve güncellenebilir yapıdadır.
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
                alt="Sistem ve Yazılım Hizmetleri"
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

