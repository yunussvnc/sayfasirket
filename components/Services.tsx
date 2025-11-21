import Link from "next/link";

const services = [
  {
    icon: "💻",
    title: "Web Geliştirme",
    description: "Modern, hızlı ve mobil uyumlu web siteleri ile dijital varlığınızı güçlendirir.",
    link: "/services/web-gelistirme"
  },
  {
    icon: "📱",
    title: "Dijital Strateji",
    description: "Dijital varlığınızı optimize etmek için hedef odaklı stratejik çözümler üretir.",
    link: "/services/dijital-strateji"
  },
  {
    icon: "⚙️",
    title: "Sistem ve Yazılım",
    description: "İşletmeniz için özel yazılım çözümleri ve entegre sistem altyapıları geliştirir.",
    link: "/services/sistem-ve-yazilim"
  },
  {
    icon: "📊",
    title: "Pazarlama Stratejisi",
    description: "Markanız için sürdürülebilir büyümeyi hedefleyen bütüncül pazarlama planları oluşturur.",
    link: "/services/marketing-strategy"
  },
  {
    icon: "🎨",
    title: "UX/UI Tasarımı",
    description: "Kullanıcı deneyimini önceliklendiren, estetik ve işlevsel arayüzler tasarlanır.",
    link: "/services/ux-ui-tasarimi"
  },
  {
    icon: "🏷️",
    title: "Marka Kimliği",
    description: "Markanızı tanımlayan görsel ve sözel unsurları profesyonelce tasarlayıp uygular.",
    link: "/services/marka-kimligi"
  }
];

export default function Services() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                <Link href={service.link} className="hover:text-blue-600">
                  {service.title}
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link 
                href={service.link}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Detaylı Bilgi →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

