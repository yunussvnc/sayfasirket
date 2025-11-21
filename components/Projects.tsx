import Link from "next/link";

const projects = [
  {
    title: "PRADO Hospitality",
    category: "Web Tasarım",
    link: "/projects/pradoo-hospitality"
  },
  {
    title: "Kuvings",
    category: "E-Ticaret Çözümleri, Google Reklamları, Grafik Tasarım, Meta Reklamları, SEO, Sosyal Medya Yönetimi, Web Tasarım",
    link: "/projects/kuvings"
  },
  {
    title: "Sahipleniyorum",
    category: "SEO",
    link: "/projects/sahipleniyorum"
  },
  {
    title: "İstanbul Festivali",
    category: "Grafik Tasarım, Sosyal Medya Yönetimi",
    link: "/projects/istanbul-festivali"
  },
  {
    title: "New Home in Turkey",
    category: "Web Tasarım",
    link: "/projects/new-home-in-turkey"
  },
  {
    title: "Tamsan",
    category: "Web Tasarım",
    link: "/projects/tamsan"
  }
];

export default function Projects() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-medium mb-2 block">Eserlerimiz</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Gerçek Başarılarımız
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sunduğumuz çözümlerle, sektörünün lider markalarının büyüme hikâyelerine nasıl katkı sağladığımızı inceleyin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link 
              key={index}
              href={project.link}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">Proje Görseli</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm">{project.category}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/referanslar"
            className="inline-block text-blue-600 hover:text-blue-700 font-medium"
          >
            Tüm Projeleri Gör →
          </Link>
        </div>
      </div>
    </section>
  );
}

