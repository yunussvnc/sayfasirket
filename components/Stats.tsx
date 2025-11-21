import Link from "next/link";

const stats = [
  { value: "22+", label: "Yıllık Tecrübe" },
  { value: "250+", label: "Başarılı Proje" },
  { value: "%98", label: "Memnuniyet" }
];

export default function Stats() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-8">
              <div className="text-5xl md:text-6xl font-bold text-blue-600 mb-4">
                {stat.value}
              </div>
              <div className="text-xl text-gray-700">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link 
            href="/iletisim"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors font-medium"
          >
            Bize Ulaşın
          </Link>
        </div>
      </div>
    </section>
  );
}

