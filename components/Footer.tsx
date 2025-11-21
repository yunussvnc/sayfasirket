import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="block mb-4">
              <Image
                src="/images/secesta-vector-logo.svg"
                alt="Secesta Logo"
                width={150}
                height={50}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 text-sm">
              NeoKreatif Ajans, 12 yılı aşkın tecrübesiyle markaların dijital dünyada güçlü bir şekilde var olmasını sağlayan kreatif bir dijital ajanstır. Web tasarım, yazılım geliştirme, SEO, Google Ads, Meta Ads ve sosyal medya yönetimi alanlarında uzmanlaşmıştır.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Bize Ulaşın</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="tel:+905441904447" className="hover:text-white transition-colors">+90 544 190 44 47</a></li>
              <li><a href="mailto:neokreatiff@gmail.com" className="hover:text-white transition-colors">neokreatiff@gmail.com</a></li>
              <li className="mt-2">19 Mayıs Mah. 19 Mayıs Cad.<br />Golden Plaza No:3 K:9<br />34363 Şişli/İstanbul</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Servislerimiz</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/services" className="hover:text-white">Web Tasarım ve Geliştirme</Link></li>
              <li><Link href="/services" className="hover:text-white">Dijital Pazarlama ve SEO</Link></li>
              <li><Link href="/services" className="hover:text-white">Sosyal Medya Yönetimi</Link></li>
              <li><Link href="/services" className="hover:text-white">E-Ticaret Çözümleri</Link></li>
              <li><Link href="/services" className="hover:text-white">Mobil ve Web Uygulamaları</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Kurumsal</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/hakkimizda" className="hover:text-white">Hakkımızda</Link></li>
              <li><Link href="/degerlerimiz" className="hover:text-white">Değerlerimiz</Link></li>
              <li><Link href="/ekibimiz" className="hover:text-white">Ekibimiz</Link></li>
              <li><Link href="/referanslar" className="hover:text-white">Referanslarımız</Link></li>
              <li><Link href="/iletisim" className="hover:text-white">İletişim</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>Copyright © 2025 NeoKreatif Ajans | Dijital Pazarlama ve Web Çözümleri</p>
        </div>
      </div>
    </footer>
  );
}

