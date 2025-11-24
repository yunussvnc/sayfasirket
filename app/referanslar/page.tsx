"use client";

import PageNavbar from "@/components/PageNavbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type ReferenceCategory = {
  name: string;
  link: string;
};

type ReferenceItem = {
  title: string;
  image: string;
  icon?: string;
  link: string;
  categories: ReferenceCategory[];
};

const FALLBACK_REFERENCE_IMAGE = "/references/fallback-reference.jpg";
const REMOTE_FALLBACK_REFERENCE_IMAGE =
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80";

const references: ReferenceItem[] = [
  // Web Yazılım Referansları
  {
    title: "Web Yazılım Projesi 1",
    image: "/references/28.png",
    icon: "/references/28.png",
    link: "#",
    categories: [
      { name: "Web Yazılım", link: "/services/web-gelistirme" },
      { name: "Web Tasarım", link: "/services/web-gelistirme" }
    ]
  },
  {
    title: "Web Yazılım Projesi 2",
    image: "/references/27.png",
    icon: "/references/27.png",
    link: "#",
    categories: [
      { name: "Web Yazılım", link: "/services/web-gelistirme" },
      { name: "Web Tasarım", link: "/services/web-gelistirme" }
    ]
  },
  {
    title: "Web Yazılım Projesi 3",
    image: "/references/4-1.png",
    icon: "/references/4-1.png",
    link: "#",
    categories: [
      { name: "Web Yazılım", link: "/services/web-gelistirme" },
      { name: "Web Tasarım", link: "/services/web-gelistirme" }
    ]
  },
  {
    title: "Web Yazılım Projesi 4",
    image: "/references/16.png",
    icon: "/references/16.png",
    link: "#",
    categories: [
      { name: "Web Yazılım", link: "/services/web-gelistirme" },
      { name: "Web Tasarım", link: "/services/web-gelistirme" }
    ]
  },
  {
    title: "Web Yazılım Projesi 5",
    image: "/references/19.png",
    icon: "/references/19.png",
    link: "#",
    categories: [
      { name: "Web Yazılım", link: "/services/web-gelistirme" },
      { name: "Web Tasarım", link: "/services/web-gelistirme" }
    ]
  },
  {
    title: "Web Yazılım Projesi 6",
    image: "/references/26.png",
    icon: "/references/26.png",
    link: "#",
    categories: [
      { name: "Web Yazılım", link: "/services/web-gelistirme" },
      { name: "Web Tasarım", link: "/services/web-gelistirme" }
    ]
  },
  // Sosyal Medya Yönetimi Referansları
  {
    title: "Sosyal Medya Projesi 1",
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=900&q=80",
    link: "#",
    categories: [
      { name: "Sosyal Medya Yönetimi", link: "/services/marketing-strategy" }
    ]
  },
  {
    title: "Sosyal Medya Projesi 2",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    link: "#",
    categories: [
      { name: "Sosyal Medya Yönetimi", link: "/services/marketing-strategy" }
    ]
  },
  {
    title: "Sosyal Medya Projesi 3",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80",
    link: "#",
    categories: [
      { name: "Sosyal Medya Yönetimi", link: "/services/marketing-strategy" }
    ]
  },
  {
    title: "Sosyal Medya Projesi 4",
    image: "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?auto=format&fit=crop&w=900&q=80",
    link: "#",
    categories: [
      { name: "Sosyal Medya Yönetimi", link: "/services/marketing-strategy" }
    ]
  },
  {
    title: "Sosyal Medya Projesi 5",
    image: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?auto=format&fit=crop&w=900&q=80",
    link: "#",
    categories: [
      { name: "Sosyal Medya Yönetimi", link: "/services/marketing-strategy" }
    ]
  },
  {
    title: "Sosyal Medya Projesi 6",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80",
    link: "#",
    categories: [
      { name: "Sosyal Medya Yönetimi", link: "/services/marketing-strategy" }
    ]
  }
];

export default function Referanslar() {
  return (
    <main className="min-h-screen">
      <PageNavbar activePage="referanslar" />

      {/* Hero Section with Cover Image */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden z-10">
        {/* Background Image */}
        <div className="absolute inset-0 z-[-1]">
          <Image
            src="/images/testi_bc.jpg"
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
                <span className="text-white" aria-current="page">Referanslar</span>
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
              NeoKreatif Ajans olarak bugüne kadar farklı sektörlerden birçok değerli markaya dijital dünyada fark yaratmaları için çözüm ortaklığı sunduk.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          {/* Label */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 bg-[#636EDF] rounded-full"></div>
            <span className="text-[#636EDF] font-medium text-sm uppercase tracking-wide">Başarılarımız</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Sunduğumuz Çözümlerle, Sektörünün Lider Markalarının Büyüme Hikâyelerine Nasıl Katkı Sağladığımızı İnceleyin.
          </h2>

          {/* Description */}
          <p className="text-xl text-white/80 leading-relaxed max-w-3xl mb-12">
            Her proje, müşterilerimizin dijital varlığını güçlendirmek ve iş hedeflerine ulaşmak için özenle planlanmış ve uygulanmıştır. Aşağıda, farklı sektörlerdeki başarı hikâyelerimizi keşfedebilirsiniz.
          </p>

          {/* References Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {references.map((reference, index) => (
              <ReferenceCard reference={reference} index={index} key={reference.title} />
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="border-t border-white/20"></div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ReferenceCard({ reference, index }: { reference: ReferenceItem; index: number }) {
  const [imageSrc, setImageSrc] = useState(reference.image || FALLBACK_REFERENCE_IMAGE);
  const [iconSrc, setIconSrc] = useState(reference.icon);

  const handleMainImageError = () => {
    setImageSrc((prev) => {
      if (prev === FALLBACK_REFERENCE_IMAGE) {
        return REMOTE_FALLBACK_REFERENCE_IMAGE;
      }
      if (prev === REMOTE_FALLBACK_REFERENCE_IMAGE) {
        return prev;
      }
      return FALLBACK_REFERENCE_IMAGE;
    });
  };

  const handleIconError = () => {
    setIconSrc(undefined);
  };

  return (
    <Link
      href={reference.link}
      className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
    >
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-100">
        <Image
          src={imageSrc}
          alt={reference.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={index < 3}
          onError={handleMainImageError}
        />

        {/* Icon Overlay */}
        {iconSrc && (
          <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-md">
            <div className="relative w-12 h-12">
              <Image
                src={iconSrc}
                alt={`${reference.title} Icon`}
                fill
                className="object-contain"
                sizes="48px"
                onError={handleIconError}
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
  );
}

