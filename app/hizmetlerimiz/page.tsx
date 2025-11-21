import PageNavbar from "@/components/PageNavbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    icon: "/images/pie-chart-1.svg",
    image: "/images/service_7-768x432.webp",
    title: "İleri Düzey Analitik",
    description: "Veri odaklı kararlar için gelişmiş analiz yöntemleriyle stratejik içgörüler sunar.",
    link: "/services/ileri-duzey-analitik"
  },
  {
    icon: "/images/strategy-1.svg",
    image: "/images/service_6-768x512.webp",
    title: "Pazarlama Stratejisi",
    description: "Markanız için sürdürülebilir büyümeyi hedefleyen bütüncül pazarlama planları oluşturur.",
    link: "/services/marketing-strategy"
  },
  {
    icon: "/images/system-1.svg",
    image: "/images/service_5-768x502.webp",
    title: "Sistem ve Yazılım",
    description: "İşletmeniz için özel yazılım çözümleri ve entegre sistem altyapıları geliştirir.",
    link: "/services/sistem-ve-yazilim"
  },
  {
    icon: "/images/digital-1.svg",
    image: "/images/service_4-768x512.webp",
    title: "Dijital Strateji",
    description: "Dijital varlığınızı optimize etmek için hedef odaklı stratejik çözümler üretir.",
    link: "/services/dijital-strateji"
  },
  {
    icon: "/images/programming-1.svg",
    image: "/images/service_3-768x512.webp",
    title: "Web Geliştirme",
    description: "Modern, hızlı ve mobil uyumlu web siteleri ile dijital varlığınızı güçlendirir.",
    link: "/services/web-gelistirme"
  },
  {
    icon: "/images/brand-1.svg",
    image: "/images/service_2-768x384.webp",
    title: "Marka Kimliği",
    description: "Markanızı tanımlayan görsel ve sözel unsurları profesyonelce tasarlayıp uygular.",
    link: "/services/marka-kimligi"
  },
  {
    icon: "/images/uxui-1.svg",
    image: "/images/service_1-768x432.webp",
    title: "UX/UI Tasarımı",
    description: "Kullanıcı deneyimini önceliklendiren, estetik ve işlevsel arayüzler tasarlanır.",
    link: "/services/ux-ui-tasarimi"
  }
];

export default function Hizmetlerimiz() {
  return (
    <main className="min-h-screen">
      <PageNavbar activePage="hizmetlerimiz" />

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
                <span className="bg-white/25 text-white px-4 py-2 rounded-lg text-base font-medium" aria-current="page">
                  Hizmetlerimiz
                </span>
              </li>
            </ul>
          </nav>

          {/* Page Header Content */}
          <div className="max-w-4xl text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Hizmetlerimiz
            </h1>
          </div>
        </div>
      </section>

      {/* Services Content Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Dijital Medyada Marka Stratejisi ve Yönetimi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Neler Yapıyoruz?
            </p>
          </div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
              >
                {/* Image */}
                <div className={`relative h-64 md:h-96 w-full rounded-lg overflow-hidden ${index % 2 === 1 ? "md:order-2" : ""
                  }`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="w-16 h-16 rounded-lg border-2 border-blue-600 bg-white flex items-center justify-center">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    Detaylı Bilgi
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32" className="w-4 h-4">
                      <path d="M15.52 4.953c-.47.155-.904.523-1.125.956-.109.213-.128.327-.128.758 0 .43.019.546.131.773.101.206.87 1.009 3.384 3.533l3.253 3.266-7.438.014-7.437.014-.267.141a2.097 2.097 0 0 0-.831.834c-.109.213-.129.328-.129.758 0 .431.02.544.129.759.165.323.523.68.845.845l.253.129 7.437.014 7.438.014-3.253 3.266c-2.514 2.524-3.283 3.327-3.384 3.533-.112.227-.131.343-.131.773 0 .594.104.858.489 1.244.386.386.65.49 1.244.49.429 0 .547-.02.773-.131.391-.191 9.972-9.772 10.163-10.163.111-.226.131-.344.131-.773 0-.429-.02-.547-.131-.773-.103-.211-1.155-1.293-4.986-5.129-5.414-5.42-5.101-5.143-5.87-5.172-.235-.009-.487.003-.56.027" fill="currentColor" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
