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
  title: "UX/UI Tasarımı - Secesta Lider Markaların Dijital Pazarlama & SEO Ajansı",
  description: "Kullanıcı deneyimini önceliklendiren, estetik ve işlevsel arayüzler tasarlanır.",
  openGraph: {
    title: "UX/UI Tasarımı - Secesta Lider Markaların Dijital Pazarlama & SEO Ajansı",
    description: "Kullanıcı deneyimini önceliklendiren, estetik ve işlevsel arayüzler tasarlanır.",
    url: "https://secesta.com/services/ux-ui-tasarimi",
    siteName: "Secesta Software Solution® Web Tasarım ve Programlama",
    images: [
      {
        url: "https://secesta.com/wp-content/uploads/service_1.jpg",
        width: 1920,
        height: 1080,
        alt: "UX/UI Tasarımı",
      },
    ],
    locale: "tr_TR",
    type: "article",
    updatedTime: "2025-07-20T15:43:02+03:00",
  },
  twitter: {
    card: "summary_large_image",
    title: "UX/UI Tasarımı - Secesta Lider Markaların Dijital Pazarlama & SEO Ajansı",
    description: "Kullanıcı deneyimini önceliklendiren, estetik ve işlevsel arayüzler tasarlanır.",
    images: ["https://secesta.com/wp-content/uploads/service_1.jpg"],
  },
  robots: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: {
    canonical: "https://secesta.com/services/ux-ui-tasarimi",
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
      <section className="pb-12 px-4 bg-white">
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
      <section className="py-20 px-4 bg-white">
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
      <section className="py-20 px-4 bg-gray-50">
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

