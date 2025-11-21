const partners = [
  "Google", "Meta", "Microsoft", "AWS", "HubSpot", "Salesforce",
  "Spotify", "TikTok", "X (Twitter)", "YouTube", "Instagram", "LinkedIn"
];

export default function Partners() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Dünya Çapındaki Lider İş Ortaklarımızla Dijital Dönüşümünüzü Hızlandırın
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            En iyi global teknoloji ve pazarlama çözümü sağlayıcılarıyla olan stratejik iş ortaklıklarımız sayesinde markanızı dijital dünyada öne çıkarıyoruz. Secesta ile işinizi büyütmek ve sonuçlarınızı hızla iyileştirmek şimdi çok daha kolay.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-lg p-6 h-24 flex items-center justify-center border border-gray-200 hover:shadow-md transition-shadow"
            >
              <span className="text-gray-600 font-medium text-sm">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

