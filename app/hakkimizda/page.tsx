import PageNavbar from "@/components/PageNavbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const stats = [
  { number: "22", suffix: "+", label: "Yıllık Deneyim" },
  { number: "17", suffix: "+", label: "Aktif Proje" },
  { number: "18", suffix: "+", label: "Kazanılan Yarışmalar" },
  { number: "875", suffix: "+", label: "Tamamlanan Projeler" }
];

const principles = [
  {
    number: "01.",
    title: "Vizyonumuz",
    description: "Daha hızlı ve daha akıllı çözümler geliştirerek, dijital pazarda sürdürülebilir rekabet avantajı sağlıyoruz.",
    link: "/bize-ulasin",
    linkText: "Bize Ulaşın"
  },
  {
    number: "02.",
    title: "Neler Yapıyoruz?",
    description: "İşinizi dijitalleştiriyor, kullanıcı deneyimi odaklı yazılımlar ve performans bazlı çözümlerle büyümenizi destekliyoruz.",
    link: "/referanslarimiz",
    linkText: "Referanslarımız"
  },
  {
    number: "03.",
    title: "Temel Değerlerimiz",
    description: "Güvenilir altyapı, şeffaf hizmet ve bütünsel yaklaşım ile dijital dönüşümünüzü geleceğe taşıyoruz.",
    link: "/degerlerimiz",
    linkText: "Değerlerimiz"
  }
];

const values = [
  {
    icon: "report",
    title: "Sonuç Odaklı Yaklaşım",
    subtitle: "Her dakikanın değeri var.",
    description: "Projelerinizi zamanında ve hedef odaklı teslim ediyor, hızlı aksiyon kabiliyetiyle maksimum dönüşüm elde etmenizi sağlıyoruz. Başarıyı tahmin etmiyor, planlıyoruz."
  },
  {
    icon: "growth",
    title: "İşinizi Büyütmek İçin Teknoloji",
    subtitle: "Büyüme vizyonunuz bizim rehberimiz.",
    description: "Kullandığımız her satır kod, işletmenizin hedeflerine hizmet eder. İster e-ticaret, ister kurumsal site, ister SaaS ürünü… Her çözümümüz ölçeklenebilir, güvenli ve kullanıcı dostudur."
  },
  {
    icon: "exclusive",
    title: "Mükemmel Müşteri Deneyimi",
    subtitle: "Yalnızca ürün değil, deneyim sunarız.",
    description: "İletişimde şeffaflık, teslimatta dakiklik ve destek süreçlerinde sürdürülebilirlik önceliğimizdir. Secesta ile çalıştığınızda yalnızca yazılım değil, iş ortağı kazanırsınız."
  }
];

const testimonials = [
  {
    quote: "Profesyonel ekibinizin gösterdiği özveri ve işbirliği için minnettarız. Sorularımıza ve ihtiyaçlarımıza hızlı ve etkili bir şekilde yanıt verdiğiniz için teşekkür ederiz. Sizlerle çalışmak gerçekten keyifliydi",
    author: "Bayram B.",
    company: "Kusva Terlik ve Buklet"
  },
  {
    quote: "20 Yıllık turizim şirketimizi internete taşımaya karar verdikten sonra bir çok firma ile çalıştık. Ancak hiç bir verim alamadık. Emre bey ve ekibi ile tanıştıktan sonra şirketimiz gerçekten internet üzerinde 24 saat açık bir ofis haline geldi. Herkese güvenle tavsiye ediyorum.",
    author: "Hakan Ö.",
    company: "Easybook Tours"
  }
];

export default function Hakkimizda() {
  return (
    <main className="min-h-screen">
      <PageNavbar activePage="hakkimizda" />

      {/* Hero Section with Background */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden rounded-b-3xl">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about_bc.jpg"
            alt="About Background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
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
                <span className="bg-white/20 text-white px-3 py-1 rounded-lg text-sm" aria-current="page">
                  Hakkımızda
                </span>
              </li>
            </ul>
          </nav>

          {/* Page Header Content */}
          <div className="max-w-4xl text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Biz SECESTA&apos;yız
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl">
              22 yıllık deneyimimizle, tasarım, yazılım ve dijital pazarlama alanlarında markaların dijital başarısını inşa ediyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section - Two Column Layout */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Side - Image with Label */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#636EDF] rounded-full"></div>
                <span className="text-[#636EDF] font-medium text-sm uppercase tracking-wide">Şirket Genel Görünüm</span>
              </div>
              <div className="relative h-96 w-full rounded-lg overflow-hidden">
                <Image
                  src="/images/image.webp"
                  alt="Şirket Genel Görünüm"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Dijital Fikirlerinizi Hayata Geçiriyoruz
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                İşletmelerin dijital dönüşüm yolculuğunu hızlandırmasına yardımcı olurken, verimlilik, ölçeklenebilirlik ve maliyet avantajı sağlıyoruz.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                İş modelinizi yeniden şekillendirmek veya dijital yetkinliklerinizi artırmak istiyorsanız, size özel stratejilerle fark yaratmanıza yardımcı olabiliriz. Ekibimiz en yeni teknolojilerle işinizi geleceğe taşır.
              </p>
            </div>
          </div>

          {/* Company Presentation Card */}
          <div className="bg-gray-50 rounded-lg p-8 md:p-12 relative mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-[#636EDF] rounded-full"></div>
              <span className="text-[#636EDF] font-medium text-sm uppercase tracking-wide">Secesta Software Solutions</span>
            </div>
            <h4 className="text-2xl font-semibold text-gray-900 mb-8">Şirket Sunumu</h4>
            <div className="relative h-64 w-64 mx-auto mb-8">
              <Image
                src="/images/ab-img2.png"
                alt="Şirket Sunumu"
                fill
                className="object-contain"
                sizes="256px"
              />
            </div>
            <div className="text-center">
              <Link
                href="#"
                className="inline-flex items-center gap-2 border-2 border-[#636EDF] text-[#636EDF] px-6 py-3 rounded-lg hover:bg-[#636EDF] hover:text-white transition-colors font-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32" className="w-4 h-4">
                  <path d="M15.52 4.953c-.47.155-.904.523-1.125.956-.109.213-.128.327-.128.758 0 .43.019.546.131.773.101.206.87 1.009 3.384 3.533l3.253 3.266-7.438.014-7.437.014-.267.141a2.097 2.097 0 0 0-.831.834c-.109.213-.129.328-.129.758 0 .431.02.544.129.759.165.323.523.68.845.845l.253.129 7.437.014 7.438.014-3.253 3.266c-2.514 2.524-3.283 3.327-3.384 3.533-.112.227-.131.343-.131.773 0 .594.104.858.489 1.244.386.386.65.49 1.244.49.429 0 .547-.02.773-.131.391-.191 9.972-9.772 10.163-10.163.111-.226.131-.344.131-.773 0-.429-.02-.547-.131-.773-.103-.211-1.155-1.293-4.986-5.129-5.414-5.42-5.101-5.143-5.87-5.172-.235-.009-.487.003-.56.027" fill="currentColor" />
                </svg>
                <span>PDF İndir</span>
              </Link>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center border border-gray-200">
                <div className="flex items-center gap-3 justify-center mb-4">
                  <div className="w-2 h-2 bg-[#636EDF] rounded-full"></div>
                  <span className="text-[#636EDF] font-medium text-sm">{stat.label}</span>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-[#636EDF] mb-2">
                  {stat.number}<sup>{stat.suffix}</sup>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-20 px-4 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          {/* Decorative Background Element */}
          <div className="absolute top-0 right-0 hidden lg:block opacity-10">
            <Image
              src="/images/h6_deco-2.webp"
              alt="Decor"
              width={300}
              height={300}
              className="w-[300px] h-[300px] object-contain"
            />
          </div>

          <div className="relative z-10 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-[#636EDF] rounded-full"></div>
              <span className="text-[#636EDF] font-medium text-sm uppercase tracking-wide">Secesta&apos;yı Keşfet</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Güvenilir Çözüm Ortağınız
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {principles.map((principle, index) => (
              <div key={index} className="bg-white rounded-lg p-8 border border-gray-200">
                <div className="text-2xl font-bold text-[#636EDF] mb-4">{principle.number}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{principle.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{principle.description}</p>
                <Link
                  href={principle.link}
                  className="text-[#636EDF] hover:text-[#5963C8] font-medium inline-flex items-center gap-2"
                >
                  {principle.linkText}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32" className="w-4 h-4">
                    <path d="M15.52 4.953c-.47.155-.904.523-1.125.956-.109.213-.128.327-.128.758 0 .43.019.546.131.773.101.206.87 1.009 3.384 3.533l3.253 3.266-7.438.014-7.437.014-.267.141a2.097 2.097 0 0 0-.831.834c-.109.213-.129.328-.129.758 0 .431.02.544.129.759.165.323.523.68.845.845l.253.129 7.437.014 7.438.014-3.253 3.266c-2.514 2.524-3.283 3.327-3.384 3.533-.112.227-.131.343-.131.773 0 .594.104.858.489 1.244.386.386.65.49 1.244.49.429 0 .547-.02.773-.131.391-.191 9.972-9.772 10.163-10.163.111-.226.131-.344.131-.773 0-.429-.02-.547-.131-.773-.103-.211-1.155-1.293-4.986-5.129-5.414-5.42-5.101-5.143-5.87-5.172-.235-.009-.487.003-.56.027" fill="currentColor"/>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Section */}
      <section className="py-20 px-4 bg-white relative overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-[#636EDF] rounded-full"></div>
              <span className="text-[#636EDF] font-medium text-sm uppercase tracking-wide">Temiz kod, doğru yol haritası</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
              Büyümeniz İçin Tasarlanmış Akıllı Dijital Çözümler
            </h2>
          </div>

          {/* Video Background Section (using image as placeholder) */}
          <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden mb-12 bg-gray-900">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-center">
                <svg className="w-20 h-20 mx-auto mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                <p className="text-lg opacity-75">Video İçerik</p>
              </div>
            </div>
          </div>

          {/* Code Image and Quote Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Left - Code Image */}
            <div className="relative h-96 w-full rounded-lg overflow-hidden">
              <Image
                src="/images/image.webp"
                alt="Code"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Right - Quote and Content */}
            <div className="space-y-6">
              <h5 className="text-2xl font-semibold text-gray-900 italic">
                &quot;Kod yazmak kolay. Doğru problemi çözmek ustalık ister.&quot;
              </h5>
              <p className="text-gray-600 font-medium">Secesta Ekibi</p>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>Secesta olarak stratejiyi, yaratıcılığı ve yazılım gücünü bir araya getiriyoruz.</strong>
                </p>
                <p>
                  İşinizi dijitalde büyütmek için sadece kod değil; doğru vizyon, kullanıcı odaklı deneyim ve veriyle şekillenen kararlar sunuyoruz. Her projeye özgü planlama yaparak, ölçeklenebilir web çözümleri, yüksek performanslı mobil uygulamalar ve maksimum etkileşim sağlayan dijital kampanyalar geliştiriyoruz.
                </p>
                <p>
                  Karmaşık sorunları yalın çözümlerle ele alıyor; hem kullanıcılarınızın hem de iş hedeflerinizin dilinden anlayan ürünler tasarlıyoruz.
                </p>
                <p>
                  İster yeni bir girişim olun ister köklü bir marka, Secesta olarak size özel teknolojik stratejilerle dijital başarıyı sürdürülebilir hale getiriyoruz.
                </p>
              </div>
            </div>
          </div>

          {/* Values Icon Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-16 h-16 rounded-full bg-[#636EDF]/10 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[#636EDF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h6 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h6>
                <p className="text-[#636EDF] font-medium mb-4 text-sm">{value.subtitle}</p>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="flex items-center gap-3 justify-center mb-4">
              <div className="w-2 h-2 bg-[#636EDF] rounded-full"></div>
              <span className="text-[#636EDF] font-medium text-sm uppercase tracking-wide">Yorumlarınız</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Çözüm Ortaklarımızın Gerçek Yorumları
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-8 border border-gray-200">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="font-semibold text-gray-900">{testimonial.author}</div>
                <div className="text-gray-600 text-sm">{testimonial.company}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
