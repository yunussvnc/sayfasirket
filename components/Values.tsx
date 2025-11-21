const values = [
  {
    title: "Deneyimli Ekip",
    description: "22 yıllık sektörel bilgi birikimiyle uzman kadromuzla yanınızdayız.",
    icon: "👥"
  },
  {
    title: "Sorumluluk",
    description: "Her projeye kendi işimiz gibi yaklaşır, tam sorumluluk alırız.",
    icon: "🤝"
  },
  {
    title: "Garantili Kalite",
    description: "Teslim ettiğimiz her iş, kalite standartlarıyla test edilerek sunulur.",
    icon: "✅"
  },
  {
    title: "Hızlı Destek",
    description: "Sorunlara anında çözüm, müşterilerimize kesintisiz destek sunarız.",
    icon: "⚡"
  },
  {
    title: "Müşteri Memnuniyeti",
    description: "Her kararımızda kullanıcı deneyimi ve müşteri mutluluğu önceliğimizdir.",
    icon: "❤️"
  }
];

export default function Values() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-medium mb-2 block">Temel Değerlerimiz</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Bizi Biz Yapan Değerler
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

