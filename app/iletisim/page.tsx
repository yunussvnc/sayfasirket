"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import Link from "next/link";

const offices = [
  {
    city: "İstanbul",
    address: "Seba Office Boulevard, Ayazağa, Mimar Sinan Sk. No:21 D:2, Sarıyer/İstanbul"
  },
  {
    city: "Eskişehir",
    address: "Esentepe Mahallesi, Çifteler Sokak, No: 8 Tepebaşı / ESKİŞEHİR"
  },
  {
    city: "İzmir",
    address: "Kazım Dirik Mahallesi Fatih Sultan Mehmet caddesi no: 28 kat 3 Bornova / İzmir"
  },
  {
    city: "Almanya",
    address: "Königstraße 10C, Stuttgart, Almanya"
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
      <Header />
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Secesta Software Solutions - İletişim
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Secesta web tasarım ve programlama; internet üzerindeki ihtiyaç ve talepleri karşılayabilmek aynı zamanda danışmanlık hizmetleri vermek için kurulmuştur.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4 leading-relaxed">
              2002 yılından günümüze kadar bir çok kişi ve kurumlara çalışmalar yapmış olup, 2016 yılından itibaren SECESTA SOFTWARE SOLUTIONS çatısı altında tüm çalışmalarını toplamıştır.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4 leading-relaxed">
              Secesta dünya standartlarını yakalayan ve sürekli geliştiren süreçleri işler.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg p-8 md:p-12 shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Bize Ulaşın</h2>
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
                      <option key={index} value={topic}>{topic}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Ad Soyad *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Adınız Soyadınız"
                  />
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

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg"
                >
                  Gönder
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">İletişim Bilgileri</h2>
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-600 mt-1">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <div>
                      <a href="tel:+905539826700" className="hover:text-blue-600 transition-colors">
                        +90 553 982 6700
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-600 mt-1">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <div>
                      <a href="mailto:info@secesta.com" className="hover:text-blue-600 transition-colors">
                        info@secesta.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Offices */}
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Ofislerimiz</h2>
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <div key={index}>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{office.city}</h3>
                      <p className="text-gray-600">{office.address}</p>
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
