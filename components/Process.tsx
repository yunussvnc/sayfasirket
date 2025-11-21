const steps = [
  {
    number: "01",
    title: "Proje Analizi",
    description: "Site, rakip ve anahtar kelime analizleriyle mevcut durum belirlenir."
  },
  {
    number: "02",
    title: "Strateji Planı",
    description: "Anahtar kelimelere ve hedeflere uygun SEO planı oluşturulur."
  },
  {
    number: "03",
    title: "Uygulama",
    description: "Teknik optimizasyon, içerik üretimi ve backlink çalışmaları yapılır."
  },
  {
    number: "04",
    title: "Ölçümleme",
    description: "Tüm sonuçlar takip edilir, strateji düzenli olarak güncellenir."
  }
];

export default function Process() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-medium mb-2 block">Proje Yönetim Süreci</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nasıl Çalışıyoruz
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dijitalde fark yaratmak isteyen markaları destekliyor, dönüşüm odaklı SEO stratejileriyle sürdürülebilir büyümelerine katkı sağlıyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 border border-gray-200"
            >
              <div className="text-4xl font-bold text-blue-600 mb-4">{step.number}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

