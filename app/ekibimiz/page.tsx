import PageNavbar from "@/components/PageNavbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Ekibimiz() {
  return (
    <main className="min-h-screen">
      <PageNavbar activePage="ekibimiz" />

      {/* Hero Section with Background */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden rounded-b-3xl">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/team_bc.jpg"
            alt="Team Background"
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
                  NeoKreatif Ajans Ekibimiz
                </span>
              </li>
            </ul>
          </nav>

          {/* Page Header Content */}
          <div className="max-w-4xl text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              NeoKreatif Ajans Ekibimiz
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl">
              Ekibimiz, dijital pazarlama, yazılım geliştirme, web tasarım ve SEO alanlarında derin bilgiye ve yılların deneyimine sahip profesyonellerden oluşmaktadır. Yaratıcılıkla teknik mükemmeliyeti birleştirerek inovatif ve güvenilir çözümler sunuyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          {/* Label */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 bg-[#636EDF] rounded-full"></div>
            <span className="text-[#636EDF] font-medium text-sm uppercase tracking-wide">Yenilikçi ve Uzman Kadromuz</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-12 leading-tight">
            Lider Kadromuzla Tanışın
          </h2>

          {/* Yakında Eklenecek Message */}
          <div className="bg-white rounded-lg border border-gray-200 p-12 md:p-16 mb-20 text-center">
            <div className="max-w-md mx-auto">
              <div className="w-32 h-32 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Yakında Eklenecek
              </h3>
              <p className="text-gray-600 text-lg">
                Ekip üyelerimizin bilgileri ve görselleri yakında eklenecektir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NeoKreatif Ajans'a Katıl Section */}
      <section className="py-20 px-4 bg-white relative overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
            {/* Decorative Image - Hidden on mobile/tablet */}
            <div className="absolute top-0 right-0 hidden lg:block opacity-20">
              <Image
                src="/images/team-bg.png"
                alt="Team Background"
                width={342}
                height={457}
                className="w-[342px] h-[457px] object-contain"
              />
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Label */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-[#636EDF] rounded-full"></div>
                <span className="text-[#636EDF] font-medium text-sm uppercase tracking-wide">NeoKreatif Ajans&apos;a Katıl</span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Hayalindeki kariyere ilk adımı bizimle at!
              </h2>

              {/* Button */}
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 bg-[#636EDF] text-white px-6 py-3 rounded-lg hover:bg-[#5963C8] transition-colors font-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32" className="w-4 h-4">
                  <path d="M15.52 4.953c-.47.155-.904.523-1.125.956-.109.213-.128.327-.128.758 0 .43.019.546.131.773.101.206.87 1.009 3.384 3.533l3.253 3.266-7.438.014-7.437.014-.267.141a2.097 2.097 0 0 0-.831.834c-.109.213-.129.328-.129.758 0 .431.02.544.129.759.165.323.523.68.845.845l.253.129 7.437.014 7.438.014-3.253 3.266c-2.514 2.524-3.283 3.327-3.384 3.533-.112.227-.131.343-.131.773 0 .594.104.858.489 1.244.386.386.65.49 1.244.49.429 0 .547-.02.773-.131.391-.191 9.972-9.772 10.163-10.163.111-.226.131-.344.131-.773 0-.429-.02-.547-.131-.773-.103-.211-1.155-1.293-4.986-5.129-5.414-5.42-5.101-5.143-5.87-5.172-.235-.009-.487.003-.56.027" fill="currentColor" />
                </svg>
                <span>Başvurunu Yap</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* İşinizi Birlikte Büyütelim Section */}
      <section className="py-20 px-4 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          {/* Decorative Images - Hidden on mobile/tablet */}
          <div className="absolute top-0 right-0 hidden lg:block opacity-20">
            <Image
              src="/images/h6_deco-2.webp"
              alt="Decor"
              width={230}
              height={230}
              className="w-[230px] h-[230px] object-contain"
            />
          </div>

          <div className="relative z-10 max-w-4xl">
            {/* Label */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-[#636EDF] rounded-full"></div>
              <span className="text-[#636EDF] font-medium text-sm uppercase tracking-wide">İşinizi Birlikte Büyütelim!</span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Yeni Başarılar İçin Hazır mısınız?<br /><br />
              Hedeflerinize ulaşmak, dijitalde büyümek ve fark yaratmak için bizimle iletişime geçin.
            </h2>

            {/* Button */}
            <Link
              href="/bize-ulasin"
              className="inline-flex items-center gap-2 border-2 border-[#636EDF] text-[#636EDF] px-6 py-3 rounded-lg hover:bg-[#636EDF] hover:text-white transition-colors font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32" className="w-4 h-4">
                <path d="M15.52 4.953c-.47.155-.904.523-1.125.956-.109.213-.128.327-.128.758 0 .43.019.546.131.773.101.206.87 1.009 3.384 3.533l3.253 3.266-7.438.014-7.437.014-.267.141a2.097 2.097 0 0 0-.831.834c-.109.213-.129.328-.129.758 0 .431.02.544.129.759.165.323.523.68.845.845l.253.129 7.437.014 7.438.014-3.253 3.266c-2.514 2.524-3.283 3.327-3.384 3.533-.112.227-.131.343-.131.773 0 .594.104.858.489 1.244.386.386.65.49 1.244.49.429 0 .547-.02.773-.131.391-.191 9.972-9.772 10.163-10.163.111-.226.131-.344.131-.773 0-.429-.02-.547-.131-.773-.103-.211-1.155-1.293-4.986-5.129-5.414-5.42-5.101-5.143-5.87-5.172-.235-.009-.487.003-.56.027" fill="currentColor" />
              </svg>
              <span>Bize Ulaşın</span>
            </Link>
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
