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
  "Hangi konuda iletişim kuruyorsunuz?",
  "SEO",
  "Google Reklam",
  "Facebook/Instagram Reklam",
  "Fotoğraf/Video Çekimi",
  "Özel Eğitim",
  "Staj / İş Başvurusu"
];

export default function BizeUlasin() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceTopic: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="min-h-screen">
      <PageNavbar />
      
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
                <span className="text-gray-900" aria-current="page">Bize Ulaşın</span>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      {/* Page Header */}
      <section className="pb-12 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          {/* Label */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 bg-[#636EDF] rounded-full"></div>
            <span className="text-[#636EDF] font-medium text-sm uppercase tracking-wide">Bilgilendirme ve İletişim</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Secesta Software Solutions - İletişim
          </h1>

          {/* Description */}
          <div className="space-y-4 text-lg text-gray-600 leading-relaxed max-w-3xl">
            <p>
              Secesta web tasarım ve programlama; internet üzerindeki ihtiyaç ve talepleri karşılayabilmek aynı zamanda danışmanlık hizmetleri vermek için kurulmuştur.
            </p>
            <p>
              2002 yılından günümüze kadar bir çok kişi ve kurumlara çalışmalar yapmış olup, 2016 yılından itibaren SECESTA SOFTWARE SOLUTIONS çatısı altında tüm çalışmalarını toplamıştır.
            </p>
            <p>
              Secesta dünya standartlarını yakalayan ve sürekli geliştiren süreçleri işler.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 md:p-12 shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* First Name */}
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-2">
                  Adınız *
                </label>
                <input
                  type="text"
                  id="first-name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#636EDF] focus:border-transparent"
                  placeholder="Adınız"
                />
              </div>

              {/* Last Name */}
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-2">
                  Soyadınız *
                </label>
                <input
                  type="text"
                  id="last-name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#636EDF] focus:border-transparent"
                  placeholder="Soyadınız"
                />
              </div>
            </div>

            {/* Email */}
            <div className="mb-6">
              <label htmlFor="your-email" className="block text-sm font-medium text-gray-700 mb-2">
                E-posta Adresiniz *
              </label>
              <input
                type="email"
                id="your-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#636EDF] focus:border-transparent"
                placeholder="E-posta Adresiniz"
              />
            </div>

            {/* Phone */}
            <div className="mb-6">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Telefon Numaranız *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#636EDF] focus:border-transparent"
                placeholder="Telefon Numaranız"
              />
            </div>

            {/* Service Topic */}
            <div className="mb-6">
              <label htmlFor="service-topic" className="block text-sm font-medium text-gray-700 mb-2">
                Konu
              </label>
              <select
                id="service-topic"
                name="serviceTopic"
                value={formData.serviceTopic}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#636EDF] focus:border-transparent"
              >
                {contactTopics.map((topic, index) => (
                  <option key={index} value={topic === "Hangi konuda iletişim kuruyorsunuz?" ? "" : topic}>
                    {topic}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div className="mb-6">
              <label htmlFor="your-message" className="block text-sm font-medium text-gray-700 mb-2">
                Mesajınız *
              </label>
              <textarea
                id="your-message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                maxLength={2000}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#636EDF] focus:border-transparent"
                placeholder="Mesajınız"
              />
            </div>

            {/* Submit Button */}
            <div className="submit-btn">
              <button
                type="submit"
                className="w-full bg-[#636EDF] text-white px-6 py-3 rounded-lg hover:bg-[#5963C8] transition-colors font-medium"
              >
                Gönder
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Contact Info */}
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
                    className="w-5 h-5 text-[#636EDF] mt-1"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <div>
                    <a href="tel:+905441904447" className="hover:text-[#636EDF] transition-colors">
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
                    className="w-5 h-5 text-[#636EDF] mt-1"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <div>
                    <a href="mailto:neokreatiff@gmail.com" className="hover:text-[#636EDF] transition-colors">
                      neokreatiff@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Address */}
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Ofis Adresimiz</h2>
              <div className="space-y-4">
                {offices.map((office, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{office.city}</h3>
                    <p className="text-gray-600 leading-relaxed">{office.address}</p>
                  </div>
                ))}
              </div>
            </div>
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
