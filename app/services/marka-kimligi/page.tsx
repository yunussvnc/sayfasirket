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
  title: "Marka Kimliği - NeoKreatif Ajans Lider Markaların Dijital Pazarlama & SEO Ajansı",
  description: "Markanızı tanımlayan görsel ve sözel unsurları profesyonelce tasarlayıp uygular. Güçlü bir marka kimliği ile müşterilerinizde güven oluşturuyoruz.",
  openGraph: {
    title: "Marka Kimliği - NeoKreatif Ajans",
    description: "Markanızı tanımlayan görsel ve sözel unsurları profesyonelce tasarlayıp uygular.",
    images: [
      {
        url: "/images/service_2-768x384.webp",
        width: 768,
        height: 384,
        alt: "Marka Kimliği",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marka Kimliği - NeoKreatif Ajans",
    description: "Markanızı tanımlayan görsel ve sözel unsurları profesyonelce tasarlayıp uygular.",
    images: ["/images/service_2-768x384.webp"],
  },
};

const features = [
  {
    title: "Kaliteli ve Güvenilir",
    description: "Marka kimliği oluştururken yalnızca tasarıma değil, stratejiye de önem veriyoruz. Her detay, markanızı profesyonel ve güvenilir kılmak üzere planlanır."
  },
  {
    title: "Lisanslı ve Sigortalı",
    description: "Tüm yaratıcı süreçlerimizde telif hakkı, kurumsal kimlik standardı ve sektörel uyumluluk kurallarına uygun hareket ederiz. Markanızı güvenle inşa edin."
  },
  {
    title: "Uzman Kadro",
    description: "Grafik tasarımcılar, marka stratejistleri ve içerik uzmanlarından oluşan ekibimizle sadece estetik değil, anlam derinliği taşıyan kimlikler oluştururuz."
  },
  {
    title: "Garanti ve Bakım",
    description: "Marka kimliğinizi teslim ettikten sonra da yanınızdayız. Gerekli güncellemeler, revizyonlar ve yeni mecralara uyarlamalar için destek sağlıyoruz."
  }
];

const faqs = [
  {
    question: "Marka kimliği tam olarak neyi kapsar?",
    answer: "Marka kimliği, işletmenizin görsel ve sözlü olarak dış dünyaya nasıl sunulduğunu belirleyen bütünsel bir sistemdir. Bu kapsamda logo, renk paleti, tipografi, kurumsal evraklar, marka sesi, slogan, web tasarımı ve sosyal medya dili gibi birçok unsur bulunur. Her biri tutarlı bir şekilde çalışarak markanızın tanınmasını sağlar.",
    defaultOpen: true
  },
  {
    question: "Sadece logo tasarımı yaptırmak yeterli olmaz mı?",
    answer: "Logo marka kimliğinin sadece bir parçasıdır. Yalnızca logoya sahip olmak, markanızın her platformda tutarlı ve profesyonel görünmesini sağlamaz. Etkili bir marka kimliği, logonuzu destekleyen görsel hiyerarşi, yazı dili, renk psikolojisi ve kullanıcı deneyimiyle bir bütündür."
  },
  {
    question: "Süreciniz nasıl işliyor?",
    answer: "Marka kimliği geliştirme sürecimiz şu adımlardan oluşur: Marka analizi ve sektörel araştırma, Marka stratejisi ve hedef kitle belirleme, Görsel kimlik geliştirme (logo, renk, tipografi vb.), Dokümantasyon (brand book / marka kılavuzu), Uygulama ve teslimat. Her adımda onayınızı alarak, sizinle iş birliği içinde ilerliyoruz."
  },
  {
    question: "Mevcut markamı yeniden konumlandırabilir misiniz?",
    answer: "Evet. Halihazırda var olan markanızı yeniden konumlandırmak için markalaşma denetimi (brand audit) yapıyor, eksikleri tespit ediyor ve yeni bir marka dili oluşturuyoruz. Bu süreç \"rebranding\" olarak da bilinir ve yeni hedef kitleye uyum sağlamanızı kolaylaştırır."
  },
  {
    question: "Marka kimliği çalışmasının süresi ne kadar sürer?",
    answer: "Projenin kapsamına göre değişmekle birlikte, temel bir marka kimliği oluşturma süreci ortalama 2 ila 4 hafta arasında tamamlanır. Daha geniş kapsamlı projelerde süre biraz daha uzayabilir. Ancak her adımı planlı ve şeffaf şekilde yürütüyoruz."
  }
];


export default function MarkaKimligi() {
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
                  Marka Kimliği
                </span>
              </li>
            </ul>
          </nav>

          {/* Page Header Content */}
          <div className="max-w-4xl text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Marka Kimliği
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
                Marka Kimliği
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Markanızı sadece görünür değil, unutulmaz kılın. Etkili bir marka kimliği, işletmenizin karakterini, değerlerini ve vizyonunu yansıtır. Markalaşma süreci yalnızca bir logo tasarımı değil; hikaye anlatımı, tutarlılık ve güven inşasıdır. Marka kimliği hizmetimizle, işletmenizin dijitalde ve fiziksel dünyada tanınan, hatırlanan ve sevilen bir marka olmasını sağlıyoruz.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/service_2-768x384.webp"
                alt="Marka Kimliği"
                width={768}
                height={384}
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
            <ServiceSidebar currentService="/services/marka-kimligi" />

            <div className="lg:col-span-9">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-2 bg-[#636EDF] rounded-full"></div>
                <span className="text-[#636EDF] font-medium text-sm uppercase tracking-wide">Hizmet Özellikleri</span>
              </div>

              <p className="text-gray-600 leading-relaxed mb-12 max-w-4xl">
                Marka kimliği, markanızın tüm dış dünyaya sunduğu ilk izlenimdir. Bu süreci yalnızca görsel bir düzenleme olarak değil, stratejik bir yapılandırma olarak ele alıyoruz. İsim, logo, renk paleti, tipografi, ses tonu ve marka hikayesi gibi tüm öğeleri uyum içinde harmanlayarak güçlü ve sürdürülebilir bir kimlik oluşturuyoruz. Hedef kitlenize hitap eden, duygusal bağ kuran ve sektörde sizi öne çıkaran bir marka dili yaratıyoruz.
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
                alt="Marka Kimliği Hizmetleri"
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

