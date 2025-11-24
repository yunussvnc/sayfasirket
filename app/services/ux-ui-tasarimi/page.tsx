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
  title: "UX/UI Tasarımı - NeoKreatif Ajans Lider Markaların Dijital Pazarlama & SEO Ajansı",
  description: "Kullanıcı deneyimini önceliklendiren, estetik ve işlevsel arayüzler tasarlanır.",
  openGraph: {
    title: "UX/UI Tasarımı - NeoKreatif Ajans Lider Markaların Dijital Pazarlama & SEO Ajansı",
    description: "Kullanıcı deneyimini önceliklendiren, estetik ve işlevsel arayüzler tasarlanır.",
    url: "https://neokreatif.com/services/ux-ui-tasarimi",
    siteName: "NeoKreatif Ajans Web Tasarım ve Programlama",
    images: [
      {
        url: "https://neokreatif.com/wp-content/uploads/service_1.jpg",
        width: 1920,
        height: 1080,
        alt: "UX/UI Tasarımı",
      },
    ],
    locale: "tr_TR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "UX/UI Tasarımı - NeoKreatif Ajans Lider Markaların Dijital Pazarlama & SEO Ajansı",
    description: "Kullanıcı deneyimini önceliklendiren, estetik ve işlevsel arayüzler tasarlanır.",
    images: ["https://neokreatif.com/wp-content/uploads/service_1.jpg"],
  },
  robots: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: {
    canonical: "https://neokreatif.com/services/ux-ui-tasarimi",
  },
};

const features = [
  {
    title: "Kaliteli ve Güvenilir",
    description: "Her sektör için uyarlanabilir, test edilmiş ve kullanıcı odaklı arayüzler geliştiriyoruz. Tasarımlarımız hem estetik hem de kullanılabilirlik açısından yüksek standartları karşılar."
  },
  {
    title: "Lisanslı ve Sigortalı",
    description: "Tüm süreçlerimiz belirli standartlara ve yasal gerekliliklere uygun olarak yürütülür. Projeleriniz, lisanslı profesyonellerin güvencesinde tasarlanır."
  },
  {
    title: "Uzman Kadro",
    description: "UX araştırmacılarından UI tasarımcılarına kadar multidisipliner bir ekip ile çalışıyoruz. Kullanıcı davranışlarını analiz eder, bu verileri etkili arayüzlere dönüştürürüz."
  },
  {
    title: "Garanti ve Bakım",
    description: "Sadece tasarım değil, sonrasında da yanınızdayız. Revizyonlar, testler ve bakım süreçleriyle sürdürülebilir ve güncel deneyimler sunuyoruz."
  }
];

const faqItems = [
  {
    question: "UX ve UI tasarımı arasındaki fark nedir?",
    answer: "UX (User Experience), bir kullanıcının bir dijital ürünle yaşadığı tüm deneyimi kapsarken; UI (User Interface), bu deneyimi şekillendiren görsel arayüzün tasarımıdır. UX işlevsellik, kullanılabilirlik ve kullanıcı yolculuğunu optimize ederken, UI estetik, renk, tipografi ve etkileşim tasarımı ile ilgilenir. Biz her iki disiplini bir arada yürüterek bütüncül çözümler sunarız.",
    defaultOpen: true
  },
  {
    question: "UX/UI tasarımı yaptırmak neden önemli?",
    answer: "Kullanıcı dostu bir arayüz, web sitenizin ya da uygulamanızın dönüşüm oranlarını doğrudan etkiler. Karmaşık, zor anlaşılır arayüzler kullanıcı kaybına yol açarken, iyi tasarlanmış bir deneyim sadakat ve satış artışı sağlar. UX/UI tasarımı, yatırımınızın geri dönüşünü hızlandırır."
  },
  {
    question: "Tasarım süreciniz nasıl işliyor?",
    answer: "Sürecimiz şu adımlarla ilerler: İhtiyaç analizi ve kullanıcı araştırması, Wireframe (kablo şeması) ve prototip oluşturma, UI tasarımı ve marka uyarlaması, Test ve geri bildirim alma, Final teslim ve destek. Her aşamada sizinle iletişimde kalarak projeyi şeffaf biçimde ilerletiyoruz."
  },
  {
    question: "Tasarımlarınız mobil uyumlu mu?",
    answer: "Evet, tüm tasarımlarımız responsive (duyarlı) yapıdadır. Masaüstü, tablet ve mobil cihazlarda sorunsuz ve hızlı çalışan arayüzler geliştiriyoruz. Mobil kullanıcı deneyimini merkeze alan tasarımlar sayesinde daha geniş kitlelere etkili biçimde ulaşabilirsiniz."
  },
  {
    question: "Mevcut bir site ya da uygulama üzerinde UX/UI iyileştirmesi yapıyor musunuz?",
    answer: "Kesinlikle! Var olan sistemleriniz için detaylı UX denetimleri (audit) yapıyor, kullanıcı davranışlarına göre yeniden yapılandırma önerileri sunuyoruz. Bu sayede sıfırdan başlamadan maksimum etki elde edebilirsiniz."
  }
];


export default function UXUITasarimi() {
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
                  UX/UI Tasarımı
                </span>
              </li>
            </ul>
          </nav>

          {/* Page Header Content */}
          <div className="max-w-4xl text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              UX/UI Tasarımı
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
                UX/UI Tasarımı
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Kapsayıcı, kullanıcı odaklı ve dönüşüm getiren dijital deneyimler tasarlayın. İyi bir kullanıcı deneyimi sadece estetikle değil, işlevsellikle de ilgilidir. UX/UI tasarım hizmetimiz, farklı sektörlerde faaliyet gösteren her ölçekten işletme için dijital varlıkların görünürlüğünü artırır, kullanıcı etkileşimini güçlendirir ve dönüşüm oranlarını yükseltir. Strateji, tasarım ve kullanılabilirliği bir araya getirerek markanızı dijitalde en iyi şekilde temsil ediyoruz.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/service_1-768x432.webp"
                alt="UX/UI Tasarımı"
                width={768}
                height={432}
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
            <ServiceSidebar currentService="/services/ux-ui-tasarimi" />

            <div className="lg:col-span-9">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-2 bg-[#636EDF] rounded-full"></div>
                <span className="text-[#636EDF] font-medium text-sm uppercase tracking-wide">Hizmet Özellikleri</span>
              </div>

              <p className="text-gray-600 leading-relaxed mb-12 max-w-4xl">
                Dijital tasarım sadece güzel görünen arayüzlerden ibaret değildir; kullanıcıların davranışlarını anlamak, onlara sezgisel ve keyifli bir deneyim sunmak gerekir. UX/UI tasarım hizmetimizle, projelerinizin temelinde kullanıcıyı merkeze alan, veri odaklı ve yenilikçi bir yaklaşım benimsiyoruz. İşlevsellik ve estetik arasındaki dengeyi kurarak hem kullanıcıları memnun eden hem de işletmenizin hedeflerine hizmet eden çözümler üretiyoruz.
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-2 bg-[#636EDF] rounded-full"></div>
                <span className="text-[#636EDF] font-medium text-sm uppercase tracking-wide">Sıkça Sorulan Sorular</span>
              </div>
              <div className="space-y-4">
                {faqItems.map((faq, index) => (
                  <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    defaultOpen={faq.defaultOpen || false}
                  />
                ))}
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <Image
                  src="/images/service-detail.jpg"
                  alt="UX/UI Tasarımı"
                  width={525}
                  height={650}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

