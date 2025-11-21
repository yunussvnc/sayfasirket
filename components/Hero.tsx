import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <Image 
              src="/images/puzzle.webp" 
              alt="Puzzle" 
              width={120} 
              height={120}
              className="w-24 h-24 md:w-32 md:h-32"
              priority
            />
          </div>
          <p className="text-gray-600 text-lg mb-4">Lider Markaların Dijital Çözüm Ortağı</p>
        </div>
        
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Secesta İle AI, SEO ve Dijital Marketing&apos;de Fark Yaratın
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Secesta&apos;nın inovatif AI, SEO ve reklam teknolojileriyle dijitalde sürdürülebilir büyüme şimdi çok daha yakın.
          </p>
        </div>
      </div>
    </section>
  );
}

