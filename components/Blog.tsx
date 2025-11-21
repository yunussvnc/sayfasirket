import Link from "next/link";
import Image from "next/image";

const blogPosts = [
  {
    title: "NeoKreatif Ajans Ne Demek?",
    image: "/images/Secesta-Ne-Demek-300x300.webp",
    link: "/secesta-ne-demek.html"
  },
  {
    title: "Android Cihazlara Eposta Kurulumu",
    image: "/images/android-cihazlara-email-kurulumu-e1739873636382.jpg",
    link: "/android-cihazlara-eposta-kurulumu.html"
  },
  {
    title: "iPhone için E-Posta Kurulumu",
    image: "/images/1-e1739873616973.jpg",
    link: "/iphone-icin-e-posta-kurulumu.html"
  },
  {
    title: "NeoKreatif Ajans Mail Yapılandırması",
    image: "/images/Mail-Yapilandirmasi.png",
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
            NeoKreatif Ajans Blog & Bilgilendirme
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post, index) => (
            <Link
              key={index}
              href={post.link}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
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

