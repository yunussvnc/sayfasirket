import Link from "next/link";

const blogPosts = [
  {
    title: "Secesta Ne Demek?",
    image: "/blog/secesta-ne-demek.jpg",
    link: "/secesta-ne-demek.html"
  },
  {
    title: "Android Cihazlara Eposta Kurulumu",
    image: "/blog/android-email.jpg",
    link: "/android-cihazlara-eposta-kurulumu.html"
  },
  {
    title: "iPhone için E-Posta Kurulumu",
    image: "/blog/iphone-email.jpg",
    link: "/iphone-icin-e-posta-kurulumu.html"
  },
  {
    title: "Secesta Mail Yapılandırması",
    image: "/blog/mail-config.jpg",
    link: "/secesta-mail-yapilandirmasi.html"
  }
];

export default function Blog() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-medium mb-2 block">Makaleler ve Bilgilendirmeler</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Secesta Blog & Bilgilendirme
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post, index) => (
            <Link 
              key={index}
              href={post.link}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">Blog Görseli</span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                  {post.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

