import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Kariyer() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Kariyer
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Secesta ailesine katılın
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 md:p-12 shadow-sm border border-gray-100">
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Dijital dünyada fark yaratmak isteyen yetenekli insanları arıyoruz.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Eğer tutkulu, yaratıcı ve sonuç odaklı bir profesyonelseniz, bizimle çalışmak ister misiniz?
              </p>
              <div className="mt-8">
                <a
                  href="/iletisim"
                  className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Başvuru Yap
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

