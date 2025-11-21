import PageNavbar from "@/components/PageNavbar";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Image from "next/image";
import Link from "next/link";

export default function Referanslar() {
  return (
    <main className="min-h-screen">
      <PageNavbar activePage="referanslar" />
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0">
            <Image
              src="/images/testi_bc.webp"
              alt="Referanslarımız Kapak"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

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

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Referanslarımız
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl">
              Secesta olarak bugüne kadar farklı sektörlerden birçok değerli markaya dijital dünyada fark yaratmaları için çözüm ortaklığı sunduk.
            </p>
          </div>
        </div>
      </section>
      <Projects />
      <Footer />
    </main>
  );
}

