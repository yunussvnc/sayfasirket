import Link from "next/link";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sizden Gelen Gerçek Yorumlar
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-2xl font-bold text-gray-400">G</span>
            <span className="text-3xl font-bold text-gray-900">4.9/5</span>
            <span className="text-gray-600">247 Yorum Üzerinden</span>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 md:p-12 shadow-sm border border-gray-100 max-w-4xl mx-auto">
          <div className="text-gray-600 leading-relaxed text-lg italic mb-6">
            &quot;Aydın Enginar Kooperatifi olarak dijital yolculuğumuzda bize en güvenilir pusula olduğunuz için teşekkür ederiz.
            <br /><br />
            Her bir katkınız, kooperatifimizin dijital varlığını güçlendirdi ve bizi sektörde öne çıkardı. Tasarımdan içerik üretimine kadar emeği geçen tüm ekibinize teşekkür ederiz.
            <br /><br />
            Enginarın doğallığını ve Aydın&apos;ın ruhunu dijital dünyaya yansıtma konusundaki hassasiyetiniz bizler için çok değerliydi.
            <br /><br />
            İş birliğimizin ilham verici devam etmesini diliyor, desteğiniz için bir kez daha teşekkür ediyoruz&quot;
          </div>
          <div className="font-semibold text-gray-900">Aydın Enginar Kooperatifi</div>
        </div>

        <div className="text-center mt-8">
          <Link 
            href="/yorumlar"
            className="inline-block text-blue-600 hover:text-blue-700 font-medium"
          >
            Tüm Yorumlar →
          </Link>
        </div>
      </div>
    </section>
  );
}

