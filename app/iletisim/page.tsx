"use client";

import PageNavbar from "@/components/PageNavbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const offices = [
  {
    city: "İstanbul",
    address: "19 Mayıs Mah. 19 Mayıs Cad. Golden Plaza No:3 K:9, 34363 Şişli/İstanbul"
  }
];

const contactTopics = [
  "SEO",
  "Google Reklam",
  "Facebook/Instagram Reklam",
  "Fotoğraf/Video Çekimi",
  "Özel Eğitim",
  "Staj / İş Başvurusu"
];

export default function Iletisim() {
  const [selectedTopic, setSelectedTopic] = useState("");

  return (
    <main className="min-h-screen">
      <PageNavbar activePage="iletisim" />

      <section className="relative pt-32 pb-20 px-4 overflow-hidden page-hero z-10">
        <div className="absolute inset-0 z-[-1]">
          <Image
            src="/images/contact-bg.jpg"
            alt="NeoKreatif Ajans iletişim arka planı"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col gap-6 text-white">
            <nav aria-label="Breadcrumb">
              <ul className="flex items-center gap-2 text-sm text-white/80">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Anasayfa
                  </Link>
                </li>
                <li>
                  <span className="text-white/60">/</span>
                </li>
                <li>
                  <span className="text-white" aria-current="page">
                    İletişim
                  </span>
                </li>
              </ul>
            </nav>

            <div className="max-w-4xl">
              <p className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] font-semibold text-white/80">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                Bilgilendirme ve İletişim
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 mt-4">
                NeoKreatif Ajans - İletişim
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg p-8 md:p-12 shadow-sm border border-gray-100">
              <div className="mb-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 mb-2">
                  Bilgi Formu
                </p>
                <h2 className="text-3xl font-bold text-gray-900">Bize Ulaşın</h2>
              </div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-2">
                    Hangi konuda iletişim kuruyorsunuz?
                  </label>
                  <select
                    id="topic"
                    value={selectedTopic}
                    onChange={(e) => setSelectedTopic(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Konu Seçin</option>
                    {contactTopics.map((topic, index) => (
                      <option key={index} value={topic}>
                        {topic}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      Ad *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Adınız"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Soyad *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Soyadınız"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-posta *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+90 5XX XXX XX XX"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mesajınız *
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Mesajınızı buraya yazın"
                  />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-gray-500">*: Zorunlu alanları doldurmanız gereklidir.</p>
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-[#008AEE] text-white px-8 py-3 rounded-lg hover:bg-[#0077cb] transition-colors font-semibold text-base"
                  >
                    Gönder
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">İletişim Bilgileri</h2>
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5 text-blue-600 mt-1"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <div>
                      <a href="tel:+905441904447" className="hover:text-blue-600 transition-colors">
                        +90 544 190 44 47
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5 text-blue-600 mt-1"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <div>
                      <a href="mailto:neokreatiff@gmail.com" className="hover:text-blue-600 transition-colors">
                        neokreatiff@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Offices */}
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">

                    </p>
                    <h2 className="text-2xl font-bold text-gray-900">Ofisimiz</h2>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {offices.map((office, index) => (
                    <div
                      key={index}
                      className="border border-gray-100 rounded-lg p-4 hover:border-[#008AEE] transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{office.city}</h3>
                      <p className="text-gray-600 leading-relaxed">{office.address}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
