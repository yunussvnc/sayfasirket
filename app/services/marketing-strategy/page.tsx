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

      {/* CTA Section */}
      <section className="py-20 px-4 bg-linear-to-br from-[#636EDF] to-[#5963C8] relative overflow-hidden">
        {/* Background Decoration */}
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
              <path opacity="0.2" d="M74.0004 50.0795C74.0004 40.8967 68.7323 32.7013 60.8424 28.7148C60.5974 46.3217 46.3227 60.5964 28.7158 60.8414C32.7023 68.7314 40.8977 73.9994 50.0805 73.9994C54.3859 73.9994 58.5728 72.8528 62.2516 70.6741L73.896 73.895L70.675 62.2506C72.8537 58.5718 74.0004 54.3849 74.0004 50.0795Z" fill="white" />
              <path d="M56.5117 28.2559C56.5117 12.6753 43.8364 0 28.2559 0C12.6753 0 0 12.6753 0 28.2559C0 33.3337 1.35159 38.2776 3.91815 42.6181L0.103882 56.4073L13.8936 52.5936C18.2341 55.1601 23.1781 56.5117 28.2559 56.5117C43.8364 56.5117 56.5117 43.8364 56.5117 28.2559ZM23.9199 21.6797H19.584C19.584 16.8977 23.4739 13.0078 28.2559 13.0078C33.0378 13.0078 36.9277 16.8977 36.9277 21.6797C36.9277 24.1068 35.9002 26.4396 34.1077 28.0792L30.4238 31.4508V34.832H26.0879V29.5414L31.1804 24.8803C32.0905 24.0475 32.5918 22.911 32.5918 21.6797C32.5918 19.2887 30.6468 17.3438 28.2559 17.3438C25.8649 17.3438 23.9199 19.2887 23.9199 21.6797ZM26.0879 39.168H30.4238V43.5039H26.0879V39.168Z" fill="white" />
            </svg>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Bir sorunuz mu var?
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
            <a href="mailto:neokreatiff@gmail.com" className="text-white hover:text-gray-200 transition-colors text-lg">
              neokreatiff@gmail.com
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

