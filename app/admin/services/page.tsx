"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
}

export default function ServicesManagement() {
  const router = useRouter();
  const [services, setServices] = useState<Service[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = sessionStorage.getItem("adminAuth");
    if (auth !== "true") {
      router.push("/admin/login");
    } else {
      setIsAuthenticated(true);
      loadServices();
    }
  }, [router]);

  const loadServices = () => {
    // Örnek hizmet listesi
    const allServices: Service[] = [
      {
        id: "1",
        title: "UX/UI Tasarımı",
        description: "Kullanıcı deneyimini önceliklendiren, estetik ve işlevsel arayüzler tasarlanır.",
        icon: "/images/uxui-1.svg",
        link: "/services/ux-ui-tasarimi",
      },
      {
        id: "2",
        title: "Marka Kimliği",
        description: "Markanızı tanımlayan görsel ve sözel unsurları profesyonelce tasarlayıp uygular.",
        icon: "/images/brand-1.svg",
        link: "/services/marka-kimligi",
      },
      {
        id: "3",
        title: "Web Geliştirme",
        description: "Modern, hızlı ve mobil uyumlu web siteleri ile dijital varlığınızı güçlendirir.",
        icon: "/images/programming-1.svg",
        link: "/services/web-gelistirme",
      },
      {
        id: "4",
        title: "Dijital Strateji",
        description: "Dijital varlığınızı optimize etmek için hedef odaklı stratejik çözümler üretir.",
        icon: "/images/digital-1.svg",
        link: "/services/dijital-strateji",
      },
      {
        id: "5",
        title: "Sistem ve Yazılım",
        description: "İşletmeniz için özel yazılım çözümleri ve entegre sistem altyapıları geliştirir.",
        icon: "/images/system-1.svg",
        link: "/services/sistem-ve-yazilim",
      },
      {
        id: "6",
        title: "Pazarlama Stratejisi",
        description: "Markanız için sürdürülebilir büyümeyi hedefleyen bütüncül pazarlama planları oluşturur.",
        icon: "/images/strategy-1.svg",
        link: "/services/marketing-strategy",
      },
      {
        id: "7",
        title: "İleri Düzey Analitik",
        description: "Veri odaklı kararlar için gelişmiş analiz yöntemleriyle stratejik içgörüler sunar.",
        icon: "/images/pie-chart-1.svg",
        link: "/services/ileri-duzey-analitik",
      },
    ];
    setServices(allServices);
  };

  const handleDelete = (id: string) => {
    if (confirm("Bu hizmeti silmek istediğinize emin misiniz?")) {
      setServices(services.filter((service) => service.id !== id));
      // API çağrısı burada yapılacak
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <Link href="/admin/dashboard" className="text-white/70 hover:text-white mb-4 inline-block">
              ← Dashboard'a Dön
            </Link>
            <h1 className="text-4xl font-bold text-white mb-2">Hizmet Yönetimi</h1>
            <p className="text-white/70">Hizmetleri düzenle, ekle veya sil</p>
          </div>
          <Link
            href="/admin/services/create"
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            + Yeni Hizmet
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6"
            >
              <div className="mb-4">
                <img src={service.icon} alt={service.title} className="w-12 h-12 mb-3" />
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-white/70 text-sm mb-4">{service.description}</p>
              </div>
              <div className="flex gap-2">
                <Link
                  href={`/admin/services/edit/${service.id}`}
                  className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-center text-sm transition-colors"
                >
                  Düzenle
                </Link>
                <Link
                  href={service.link}
                  target="_blank"
                  className="flex-1 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded text-center text-sm transition-colors"
                >
                  Görüntüle
                </Link>
                <button
                  onClick={() => handleDelete(service.id)}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded text-sm transition-colors"
                >
                  Sil
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

