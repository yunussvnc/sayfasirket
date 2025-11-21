import PageNavbar from "@/components/PageNavbar";
import Footer from "@/components/Footer";

export default function SeoAnaliz() {
  return (
    <main className="min-h-screen">
      <PageNavbar />
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Ücretsiz SEO Analizi
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Web sitenizin SEO performansını ücretsiz analiz edin
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 md:p-12 shadow-sm border border-gray-100 max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                  Web Sitesi URL&apos;si
                </label>
                <input
                  type="url"
                  id="website"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-posta Adresiniz
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="email@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefon Numaranız
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="05XX XXX XX XX"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg"
              >
                Ücretsiz SEO Analizi İsteyin
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

