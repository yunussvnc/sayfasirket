import PageNavbar from "@/components/PageNavbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const references = [
  {
    title: "PRADO Hospitality",
    image: "/images/service_1-768x432.webp",
    icon: "/images/mix-logo_1.webp",
    link: "/projects/pradoo-hospitality",
    categories: [
      { name: "Web Tasarım", link: "/services/web-design" }
    ]
  },
  {
    title: "Kuvings",
    image: "/images/service_2-768x384.webp",
    icon: "/images/referans.webp",
    link: "/projects/kuvings",
    categories: [
      { name: "E-Ticaret Çözümleri", link: "/services/e-commerce" },
      { name: "Google Reklamları", link: "/services/google-ads" },
      { name: "Grafik Tasarım", link: "/services/graphic-design" },
      { name: "Meta Reklamları", link: "/services/meta-ads" },
      { name: "SEO", link: "/services/seo" },
      { name: "Sosyal Medya Yönetimi", link: "/services/social-media" },
      { name: "Web Tasarım", link: "/services/web-design" }
    ]
  },
  {
    title: "Sahipleniyorum",
    image: "/images/service_3-768x512.webp",
    icon: "/images/referans.png.webp",
    link: "/projects/sahipleniyorum",
    categories: [
      { name: "SEO", link: "/services/seo" }
    ]
  },
  {
    title: "İstanbul Festivali",
    image: "/images/service_4-768x512.webp",
    icon: "/images/istfest.webp",
    link: "/projects/istanbul-festivali",
    categories: [
      { name: "Grafik Tasarım", link: "/services/graphic-design" },
      { name: "Sosyal Medya Yönetimi", link: "/services/social-media" }
    ]
  },
  {
    title: "New Home in Turkey",
    image: "/images/service_5-768x502.webp",
    icon: "/images/New-Home-in-Turkey.png.webp",
    link: "/projects/new-home-in-turkey",
    categories: [
      { name: "Web Tasarım", link: "/services/web-design" }
    ]
  },
  {
    title: "Tamsan",
    image: "/images/service_6-768x512.webp",
    icon: "/images/referans-2.png.webp",
    link: "/projects/tamsan",
    categories: [
      { name: "Web Tasarım", link: "/services/web-design" }
    ]
  }
];

export default function Referanslarimiz() {
  return (
    <main className="min-h-screen">
      <PageNavbar activePage="referanslar" />
      
      {/* Hero Section with Cover Image */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/testi_bc.webp"
            alt="Referanslarımız Kapak"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Breadcrumb Navigation */}
        <div className="container mx-auto max-w-6xl relative z-10 mb-8">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ul className="flex items-center gap-2 text-sm text-white">
              <li>
                <Link href="/" className="hover:text-white/80 transition-colors">
                  Anasayfa
                </Link>
              </li>
              <li>
                <span className="text-white/60">/</span>
              </li>
              <li>
                <span className="text-white" aria-current="page">Referanslarımız</span>
              </li>
            </ul>
          </nav>
        </div>

        {/* Page Header Content */}
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Referanslarımız
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl">
              Sunduğumuz çözümlerle, sektörünün lider markalarının büyüme hikâyelerine nasıl katkı sağladığımızı inceleyin.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 px-4 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          {/* Label */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 bg-[#636EDF] rounded-full"></div>
            <span className="text-[#636EDF] font-medium text-sm uppercase tracking-wide">Başarılarımız</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Sunduğumuz Çözümlerle, Sektörünün Lider Markalarının Büyüme Hikâyelerine Nasıl Katkı Sağladığımızı İnceleyin.
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mb-12">
            Her proje, müşterilerimizin dijital varlığını güçlendirmek ve iş hedeflerine ulaşmak için özenle planlanmış ve uygulanmıştır. Aşağıda, farklı sektörlerdeki başarı hikâyelerimizi keşfedebilirsiniz.
          </p>

          {/* References Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {references.map((reference, index) => (
              <Link
                key={index}
                href={reference.link}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={reference.image}
                    alt={reference.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* Icon Overlay */}
                  {reference.icon && (
                    <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-md">
                      <div className="relative w-12 h-12">
                        <Image
                          src={reference.icon}
                          alt={`${reference.title} Icon`}
                          fill
                          className="object-contain"
                          sizes="48px"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-[#636EDF] transition-colors">
                    {reference.title}
                  </h3>
                  
                  {/* Categories */}
                  <div className="flex flex-wrap gap-2">
                    {reference.categories.map((category, catIndex) => (
                      <Link
                        key={catIndex}
                        href={category.link}
                        onClick={(e) => e.stopPropagation()}
                        className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full hover:bg-[#636EDF] hover:text-white transition-colors"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <section className="py-8 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="border-t border-gray-200"></div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

