import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";

export default function Referanslar() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Referanslarımız
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Gerçek başarılarımız
            </p>
          </div>
        </div>
      </section>
      <Projects />
      <Footer />
    </main>
  );
}

