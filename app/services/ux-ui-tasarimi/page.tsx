import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const features = [
  {
    title: "Kullanıcı Deneyimi (UX) Tasarımı",
    description: "Kullanıcıların ihtiyaçlarını, beklentilerini ve davranışlarını analiz ederek, kullanıcı dostu ve sezgisel arayüzler tasarlıyoruz. Her tasarım, kullanıcı deneyimini önceliklendirir."
  },
  {
    title: "Kullanıcı Arayüzü (UI) Tasarımı",
    description: "Estetik ve işlevsel dengenin kurulduğu, görsel olarak çekici arayüzler tasarlıyoruz. Modern tasarım trendlerini takip ederek, markanıza uygun görsel dil oluşturuyoruz."
  },
  {
    title: "Prototipleme ve Test",
    description: "Tasarımlarınızı prototiplerle test ediyor, kullanıcı geri bildirimlerini alıyoruz. İteratif tasarım süreciyle mükemmel kullanıcı deneyimi sağlıyoruz."
  },
  {
    title: "Responsive ve Erişilebilir Tasarım",
    description: "Tüm cihazlarda mükemmel görünen, erişilebilirlik standartlarına uygun tasarımlar geliştiriyoruz. Her kullanıcının sitenize erişebilmesini sağlıyoruz."
  }
];

const relatedServices = [
  { title: "İleri Düzey Analitik", link: "/services/ileri-duzey-analitik" },
  { title: "Pazarlama Stratejisi", link: "/services/marketing-strategy" },
  { title: "Sistem ve Yazılım", link: "/services/sistem-ve-yazilim" },
  { title: "Dijital Strateji", link: "/services/dijital-strateji" },
  { title: "Web Geliştirme", link: "/services/web-gelistirme" },
  { title: "Marka Kimliği", link: "/services/marka-kimligi" }
];

export default function UXUITasarimi() {
  return (
    <main className="min-h-screen">
      <Header />
      
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
                <span className="text-gray-900" aria-current="page">UX/UI Tasarımı</span>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      {/* Page Header */}
      <section className="pb-12 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            UX/UI Tasarımı
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
            Kullanıcı deneyimini önceliklendiren, estetik ve işlevsel arayüzler tasarlanır. UX/UI tasarımı, kullanıcıların dijital ürünlerinizle etkileşimini şekillendirir. Doğru tasarım, kullanıcı memnuniyetini artırır, dönüşüm oranlarını yükseltir ve markanızın dijital dünyadaki başarısını belirler.
          </p>
        </div>
      </section>

      {/* Related Services Navigation */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-4">
            {relatedServices.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="text-sm text-gray-600 hover:text-[#636EDF] transition-colors"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-2 bg-[#636EDF] rounded-full"></div>
            <span className="text-[#636EDF] font-medium text-sm uppercase tracking-wide">Hizmet Özellikleri</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 border border-gray-200 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Bir sorunuz mu var?
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
            <a href="mailto:info@secesta.com" className="text-gray-600 hover:text-[#636EDF] transition-colors">
              info@secesta.com
            </a>
            <span className="text-gray-400 hidden md:inline">•</span>
            <a href="tel:+905539826700" className="text-gray-600 hover:text-[#636EDF] transition-colors">
              +90 553 982 6700
            </a>
          </div>
          <Link
            href="/bize-ulasin"
            className="inline-flex items-center gap-2 bg-[#636EDF] text-white px-8 py-3 rounded-lg hover:bg-[#5963C8] transition-colors font-medium"
          >
            Bize Ulaşın
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32" className="w-4 h-4">
              <path d="M15.52 4.953c-.47.155-.904.523-1.125.956-.109.213-.128.327-.128.758 0 .43.019.546.131.773.101.206.87 1.009 3.384 3.533l3.253 3.266-7.438.014-7.437.014-.267.141a2.097 2.097 0 0 0-.831.834c-.109.213-.129.328-.129.758 0 .431.02.544.129.759.165.323.523.68.845.845l.253.129 7.437.014 7.438.014-3.253 3.266c-2.514 2.524-3.283 3.327-3.384 3.533-.112.227-.131.343-.131.773 0 .594.104.858.489 1.244.386.386.65.49 1.244.49.429 0 .547-.02.773-.131.391-.191 9.972-9.772 10.163-10.163.111-.226.131-.344.131-.773 0-.429-.02-.547-.131-.773-.103-.211-1.155-1.293-4.986-5.129-5.414-5.42-5.101-5.143-5.87-5.172-.235-.009-.487.003-.56.027" fill="currentColor" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

