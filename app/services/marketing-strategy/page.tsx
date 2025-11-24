import type { Metadata } from "next";
import PageNavbar from "@/components/PageNavbar";
import Footer from "@/components/Footer";
import FAQItem from "@/components/FAQItem";
import Link from "next/link";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import ServiceSidebar from "@/components/ServiceSidebar";

export const metadata: Metadata = {
  title: "Pazarlama Stratejisi - NeoKreatif Ajans Lider Markaların Dijital Pazarlama & SEO Ajansı",
  description: "Markanız için sürdürülebilir büyümeyi hedefleyen bütüncül pazarlama planları oluşturur. Hedef odaklı stratejiler ile dijital pazarlama dünyasında fark yaratın.",
  openGraph: {
    title: "Pazarlama Stratejisi - NeoKreatif Ajans",
    description: "Markanız için sürdürülebilir büyümeyi hedefleyen bütüncül pazarlama planları oluşturur.",
    images: [
      {
        url: "/images/service_6-768x512.webp",
        width: 768,
        height: 512,
        alt: "Pazarlama Stratejisi",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pazarlama Stratejisi - NeoKreatif Ajans",
    description: "Markanız için sürdürülebilir büyümeyi hedefleyen bütüncül pazarlama planları oluşturur.",
    images: ["/images/service_6-768x512.webp"],
  },
};

const features = [
  {
    title: "Hedef Kitlenize Özel Planlama",
    description: "Stratejilerimizi yaş, lokasyon, davranış ve ilgi alanlarına göre kişiselleştiriyoruz. Her kampanya, doğru kitleye nokta atışı mesajlarla ulaşır."
  },
  {
    title: "Çok Kanallı Entegrasyon",
    description: "Sosyal medya, Google reklamları, e-posta pazarlama, içerik stratejisi ve SEO gibi tüm dijital kanalları uyum içinde planlıyoruz. Platformlar arası bütünlük kurarız."
  },
  {
    title: "Veriye Dayalı Karar Mekanizması",
    description: "Stratejilerimizi tahminlere değil, verilere göre oluştururuz. Google Analytics, Meta verileri, CRM analizleri ve dönüşüm oranları üzerinden sürekli optimizasyon sağlarız."
  },
  {
    title: "Sürdürülebilir ve Ölçülebilir Başarı",
    description: "Her kampanya başında ve sonunda performans raporları sunarız. Başarıyı sadece görünürlükle değil, net sonuçlarla ölçer; her stratejiyi gelişime açık tutarız."
  }
];

const faqs = [
  {
    question: "Pazarlama stratejisi neden bu kadar önemli?",
    answer: "Plansız yapılan pazarlama faaliyetleri zaman ve bütçe kaybına yol açar. Pazarlama stratejisi, hangi mecralarda, hangi hedef kitleye, ne tür içeriklerle ulaşmanız gerektiğini belirler. Bu sayede etkileşim artar, marka bilinirliği güçlenir ve yatırımın geri dönüşü (ROI) ölçülebilir hale gelir."
  },
  {
    question: "Strateji oluştururken hangi kriterleri göz önünde bulunduruyorsunuz?",
    answer: "Marka hedefleri, hedef kitle özellikleri, sektör dinamikleri, rakip analizleri, geçmiş performans verileri ve güncel dijital trendler dikkate alınır. Ayrıca reklam bütçesi, zamanlama ve platform tercihi gibi parametreler stratejinin bel kemiğini oluşturur."
  },
  {
    question: "Strateji oluşturulduktan sonra uygulamayı da siz mi yapıyorsunuz?",
    answer: "Evet. Stratejiyi yalnızca planlamakla kalmıyor, içerik üretimi, reklam kampanyaları, sosyal medya yönetimi, e-posta pazarlama ve performans takibi gibi uygulama süreçlerini de üstleniyoruz. Talep doğrultusunda tek seferlik strateji danışmanlığı da sunabiliyoruz."
  },
  {
    question: "Küçük işletmeler için de pazarlama stratejisi gerekli mi?",
    answer: "Kesinlikle. Özellikle sınırlı bütçeyle maksimum etki yaratmak isteyen küçük işletmeler için stratejik yaklaşım şarttır. Hedef kitleye doğrudan ve etkili ulaşmanın yolu stratejiden geçer. Aksi halde hem zaman hem para kaybı yaşanabilir."
  },
  {
    question: "Stratejinin etkilerini ne kadar sürede görmeye başlarız?",
    answer: "Stratejinin türüne ve uygulama alanına göre değişir. Reklam temelli stratejilerde etkiler 1-2 hafta içinde görülebilirken, SEO veya içerik odaklı stratejilerde 2-3 aylık bir süreç gerekebilir. Ancak her adımı raporlarla takip ediyor, gerektiğinde anlık optimizasyonlar sağlıyoruz."
  }
];


export default function MarketingStrategy() {
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
                  Pazarlama Stratejisi
                </span>
              </li>
            </ul>
          </nav>

          {/* Page Header Content */}
          <div className="max-w-4xl text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Pazarlama Stratejisi
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
                Pazarlama Stratejisi
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Plansız reklam değil, hedef odaklı stratejiler kazandırır.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Dijital pazarlama dünyasında fark yaratmak için sadece içerik üretmek ya da reklam vermek yetmez. Hangi mesajı, hangi mecrada, ne zaman ve nasıl vereceğinizi bilen bir strateji gerekir. Pazarlama stratejileri hizmetimizle, markanızın dijital yol haritasını belirliyor; hedef kitlenize ulaşan, sadakat oluşturan ve dönüşüm sağlayan stratejik planlar oluşturuyoruz.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/service_6-768x512.webp"
                alt="Pazarlama Stratejisi"
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
            <ServiceSidebar currentService="/services/marketing-strategy" />

            <div className="lg:col-span-9">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-2 bg-[#636EDF] rounded-full"></div>
                <span className="text-[#636EDF] font-medium text-sm uppercase tracking-wide">Hizmet Özellikleri</span>
              </div>

              <p className="text-lg text-gray-600 mb-12 max-w-3xl">
                Etkili pazarlama stratejileri; hedef kitlenizi, rakiplerinizi, sektörel dinamikleri ve dijital eğilimleri iyi okumayı gerektirir. Biz bu analizleri temel alarak içerik stratejisi, reklam planlaması, kampanya yönetimi, e-posta ve CRM entegrasyonları gibi birçok alanda yol haritası oluşturuyoruz. Amacımız: sadece görünürlük değil, doğru görünürlük ve yüksek etkileşim.
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

      {/* FAQ Section with Image */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar Image */}
            <div className="lg:col-span-1 hidden lg:block">
              <Image
                src="/images/service-detail.jpg"
                alt="Pazarlama Stratejisi Detay"
                width={525}
                height={650}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>

            {/* FAQ Content */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-2 bg-[#636EDF] rounded-full"></div>
                <span className="text-[#636EDF] font-medium text-sm uppercase tracking-wide">Sık Sorulan Sorular</span>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <FAQItem key={index} question={faq.question} answer={faq.answer} defaultOpen={index === 0} />
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

