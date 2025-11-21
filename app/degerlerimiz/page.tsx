"use client";

import PageNavbar from "@/components/PageNavbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const progressBars = [
  {
    title: "Yapay Zeka Destekli Dijital Çözümler",
    value: 80
  },
  {
    title: "Güvenilir ve Ölçeklenebilir Bulut Hizmetleri",
    value: 90
  },
  {
    title: "Sonuç Odaklı Dijital Pazarlama & Reklam",
    value: 70
  },
  {
    title: "Hızlı ve Proaktif Teknik Destek",
    value: 65
  }
];

const values = [
  {
    icon: "robot",
    title: "Yapay Zeka ve İnovasyon",
    description: "Projelerimizde en güncel yapay zeka teknolojilerini kullanıyor, iş süreçlerinde maksimum verimlilik ve rekabet avantajı sağlıyoruz. Sürekli gelişim ve inovasyon, DNA'mızda var."
  },
  {
    icon: "message",
    title: "Güvenilir Dijital Altyapı",
    description: "Bulut servislerinden veri merkezine kadar, güvenli ve ölçeklenebilir çözümler sunuyoruz. Müşterilerimizin verilerini korumak ve erişilebilirliği garanti altına almak en büyük önceliğimiz."
  },
  {
    icon: "check",
    title: "Sonuç Odaklı Dijital Pazarlama",
    description: "Veriye ve stratejiye dayalı dijital pazarlama ve reklam kampanyalarımız ile markaların büyümesini hızlandırıyoruz. Her kampanya; ölçülebilir başarı, sürdürülebilir büyüme."
  },
  {
    icon: "shield",
    title: "22+ Yıllık Güçlü Altyapı",
    description: "22 yılı aşkın süredir kesintisiz çalışan API altyapımız ve deneyimli ekibimizle, her zaman ulaşılabilir ve şeffaf destek sunuyoruz. Projeleriniz için sadece bugünü değil, geleceği de güvence altına alıyor; doğru stratejilerle kalıcı başarıya odaklanıyoruz."
  },
  {
    icon: "lock",
    title: "Hızlı ve Şeffaf Destek",
    description: "Her adımda ulaşılabilir, hızlı ve açık iletişim ile çözüm sunuyoruz. Her zaman ulaşılabilir, anında çözüm sunan bir destek hattı."
  },
  {
    icon: "heart",
    title: "Müşteri Memnuniyeti",
    description: "Tüm süreçlerimizin merkezine müşterilerimizi koyuyor, ihtiyaçlarınıza uygun en iyi çözümleri sunmak için çalışıyoruz. \"Sizin başarınız, bizim önceliğimiz.\""
  }
];

const iconComponents = {
  robot: (
    <svg aria-hidden="true" className="w-10 h-10" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
      <path d="M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z" fill="currentColor" />
    </svg>
  ),
  message: (
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none" className="w-10 h-10">
      <path d="M25.676 2.25H10.324C5.44966 2.25 1.5 6.21962 1.5 11.1186V31.0455C1.5 33.306 4.10176 34.5662 5.865 33.1564L10.2065 29.6672C10.5435 29.3915 10.9666 29.2419 11.4055 29.2419H25.676C30.5503 29.2419 34.5 25.2722 34.5 20.3732V11.1186C34.5 6.21962 30.5503 2.25 25.676 2.25ZM10.4024 17.7504C9.34445 17.7504 8.48243 16.8841 8.48243 15.8208C8.48243 14.7575 9.34445 13.8911 10.4024 13.8911C11.4603 13.8911 12.3224 14.7575 12.3224 15.8208C12.3224 16.8919 11.4603 17.7504 10.4024 17.7504ZM18.0744 17.7504C17.0165 17.7504 16.1545 16.8841 16.1545 15.8208C16.1545 14.7575 17.0165 13.8911 18.0744 13.8911C19.1324 13.8911 19.9944 14.7575 19.9944 15.8208C19.9944 16.8919 19.1402 17.7504 18.0744 17.7504ZM25.7543 17.7504C24.6964 17.7504 23.8344 16.8841 23.8344 15.8208C23.8344 14.7575 24.6964 13.8911 25.7543 13.8911C26.8123 13.8911 27.6743 14.7575 27.6743 15.8208C27.6665 16.8919 26.8123 17.7504 25.7543 17.7504Z" fill="currentColor" />
    </svg>
  ),
  check: (
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none" className="w-10 h-10">
      <path d="M31.8746 8.31104L18.3712 0.84519C18.1462 0.71827 17.8686 0.71827 17.6435 0.84519L4.1401 8.31104C3.90004 8.43796 3.75 8.6918 3.75 8.96057V23.8325C3.75 26.5426 5.22787 29.0437 7.60598 30.3577L17.636 35.9048C17.8611 36.0317 18.1386 36.0317 18.3637 35.9048L28.3938 30.3577C30.7719 29.0437 32.2497 26.5426 32.2497 23.8325V8.96057C32.2572 8.6918 32.1072 8.43796 31.8746 8.31104ZM25.0329 15.6201L17.9061 22.7127C17.6885 22.9292 17.396 23.0412 17.1109 23.0412C16.8258 23.0412 16.5332 22.9292 16.3157 22.7127L12.7523 19.1664C12.3097 18.7259 12.3097 18.0166 12.7523 17.5836C13.1949 17.1431 13.9076 17.1431 14.3427 17.5836L17.1109 20.3385L23.4425 14.0373C23.8851 13.5969 24.5978 13.5969 25.0329 14.0373C25.4755 14.4704 25.4755 15.1796 25.0329 15.6201Z" fill="currentColor" />
    </svg>
  ),
  shield: (
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none" className="w-10 h-10">
      <path d="M34.3103 21.1017V17.8983C34.3103 8.86017 26.9972 1.5 18 1.5C9.01034 1.5 1.68966 8.86017 1.68966 17.8983V21.1017C1.56828 21.3686 1.5 21.6585 1.5 21.9636V33.1525C1.5 34.3119 2.4331 35.25 3.58621 35.25H9.40483C10.5579 35.25 11.491 34.3119 11.491 33.1525V21.9636C11.491 20.8042 10.5579 19.8661 9.40483 19.8661H3.96552V17.8983C3.96552 10.1186 10.2621 3.78814 18 3.78814C25.7379 3.78814 32.0345 10.1186 32.0345 17.8983V19.8661H26.5952C25.4421 19.8661 24.509 20.8042 24.509 21.9636V33.1525C24.509 34.3119 25.4421 35.25 26.5952 35.25H32.4138C33.5669 35.25 34.5 34.3119 34.5 33.1525V21.9636C34.5 21.6585 34.4317 21.3686 34.3103 21.1017Z" fill="currentColor" />
    </svg>
  ),
  lock: (
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none" className="w-10 h-10">
      <g clipPath="url(#clip0_73_650)">
        <path d="M19.0978 4.75636V2.18182H21.2276C21.835 2.18182 22.3254 1.69455 22.3254 1.09091C22.3254 0.487273 21.835 0 21.2276 0H14.7651C14.1576 0 13.6673 0.487273 13.6673 1.09091C13.6673 1.69455 14.1576 2.18182 14.7651 2.18182H16.8949V4.75636C8.7198 5.31636 2.25 12.08 2.25 20.3491C2.25 28.9964 9.29798 36 18 36C26.6947 36 33.75 28.9964 33.75 20.3491C33.7427 12.08 27.2802 5.31636 19.0978 4.75636ZM23.6208 16.3055L18.7758 21.12C18.5635 21.3309 18.2781 21.44 18 21.44C17.7219 21.44 17.4365 21.3309 17.2242 21.12C16.7924 20.6909 16.7924 20 17.2242 19.5782L22.0692 14.7636C22.501 14.3345 23.1963 14.3345 23.6208 14.7636C24.0453 15.1927 24.0453 15.8836 23.6208 16.3055Z" fill="currentColor" />
      </g>
      <defs>
        <clipPath id="clip0_73_650">
          <rect width="36" height="36" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  heart: (
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none" className="w-10 h-10">
      <path d="M31.6342 6.03672C27.8938 2.11677 21.8798 1.99267 18 5.67903C14.1202 1.99267 8.10623 2.10947 4.36582 6.03672C0.544727 10.0516 0.544727 16.5264 4.36582 20.5413L13.8269 30.4616C14.9637 31.6514 16.4818 32.25 18 32.25C19.5182 32.25 21.0437 31.6514 22.1731 30.4616L31.6342 20.5413C35.4553 16.5264 35.4553 10.0443 31.6342 6.03672Z" fill="currentColor" />
    </svg>
  )
};

function ProgressBar({ title, value }: { title: string; value: number }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(value);
    }, 100);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className="mb-6">
      <h6 className="text-sm font-medium text-gray-900 mb-2">{title}</h6>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-[#636EDF] h-2.5 rounded-full transition-all duration-2000"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}

export default function Degerlerimiz() {
  return (
    <main className="min-h-screen">
      <PageNavbar activePage="degerlerimiz" />

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
                <span className="text-gray-900" aria-current="page">Değerlerimiz</span>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      {/* Page Header */}
      <section className="pb-12 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8">
            <Link href="/">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Değerlerimiz
              </h1>
            </Link>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
              Sadece yazılım yeteneğimizle değil, kapsamlı tecrübemiz ve farklı sektörlerde biriktirdiğimiz bilgiyle projelerinize değer katıyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section - Two Column Layout with Progress Bars */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-[#636EDF] rounded-full"></div>
              <span className="text-[#636EDF] font-medium text-sm uppercase tracking-wide">Bizi Biz Yapan Özel Değerlerimiz</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              +22 Yılı Aşan Deneyim | Tecrübe & Bilgi
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed max-w-3xl">
              <p>
                Stratejik dijital pazarlama danışmanlığında öncü bir çözüm ortağıyız.
              </p>
              <p>
                Müşterilerimizin gerçek potansiyelini ortaya çıkarmaya ve hızla değişen, rekabetçi dijital dünyada sürdürülebilir büyüme elde etmelerine tutkuyla destek veriyoruz.
              </p>
              <p>
                Yenilikçi yaklaşımımız, uzman ekibimiz ve tam kapsamlı hizmetlerimizle işinizi bir üst seviyeye taşıyoruz.
              </p>
            </div>
          </div>

          {/* Two Column Layout: Progress Bars + Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Side - Progress Bars */}
            <div className="space-y-6">
              {progressBars.map((bar, index) => (
                <ProgressBar key={index} title={bar.title} value={bar.value} />
              ))}
            </div>

            {/* Right Side - Image */}
            <div className="relative h-96 w-full rounded-lg overflow-hidden">
              <Image
                src="/images/service-bc.webp"
                alt="Core Values"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-full bg-[#636EDF]/10 flex items-center justify-center mb-6 text-[#636EDF]">
                  {iconComponents[value.icon as keyof typeof iconComponents]}
                </div>
                <h5 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h5>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          {/* Background Images */}
          <div className="absolute top-0 right-0 hidden lg:block opacity-10">
            <Image
              src="/images/service-bc.webp"
              alt="Background"
              width={800}
              height={470}
              className="object-contain"
            />
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-[#636EDF] rounded-full"></div>
              <span className="text-[#636EDF] font-medium text-sm uppercase tracking-wide">Bizi Farklı Kılan Ne?</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
              Bize Güvenen 1500+ Firma Arasına Katılın
            </h3>
            <div className="mb-8">
              <Link
                href="/bize-ulasin"
                className="inline-flex items-center gap-2 bg-[#636EDF] text-white px-6 py-3 rounded-lg hover:bg-[#5963C8] transition-colors font-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32" className="w-4 h-4">
                  <path d="M15.52 4.953c-.47.155-.904.523-1.125.956-.109.213-.128.327-.128.758 0 .43.019.546.131.773.101.206.87 1.009 3.384 3.533l3.253 3.266-7.438.014-7.437.014-.267.141a2.097 2.097 0 0 0-.831.834c-.109.213-.129.328-.129.758 0 .431.02.544.129.759.165.323.523.68.845.845l.253.129 7.437.014 7.438.014-3.253 3.266c-2.514 2.524-3.283 3.327-3.384 3.533-.112.227-.131.343-.131.773 0 .594.104.858.489 1.244.386.386.65.49 1.244.49.429 0 .547-.02.773-.131.391-.191 9.972-9.772 10.163-10.163.111-.226.131-.344.131-.773 0-.429-.02-.547-.131-.773-.103-.211-1.155-1.293-4.986-5.129-5.414-5.42-5.101-5.143-5.87-5.172-.235-.009-.487.003-.56.027" fill="currentColor" />
                </svg>
                <span>Hemen Başlayın</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
