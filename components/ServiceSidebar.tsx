"use client";

import Link from "next/link";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

interface Service {
  title: string;
  link: string;
}

const allServices: Service[] = [
  { title: "İleri Düzey Analitik", link: "/services/ileri-duzey-analitik" },
  { title: "Pazarlama Stratejisi", link: "/services/marketing-strategy" },
  { title: "Sistem ve Yazılım", link: "/services/sistem-ve-yazilim" },
  { title: "Dijital Strateji", link: "/services/dijital-strateji" },
  { title: "Web Geliştirme", link: "/services/web-gelistirme" },
  { title: "Marka Kimliği", link: "/services/marka-kimligi" },
  { title: "UX/UI Tasarımı", link: "/services/ux-ui-tasarimi" }
];

interface ServiceSidebarProps {
  currentService: string; // current service link
}

export default function ServiceSidebar({ currentService }: ServiceSidebarProps) {
  return (
    <div className="hidden lg:block lg:col-span-3">
      <div className="bg-white rounded-lg p-6 sticky top-32 border border-gray-200 shadow-sm">
        <div className="space-y-2 mb-8">
          {allServices.map((service, index) => {
            const isCurrent = service.link === currentService;
            return (
              <Link
                key={index}
                href={service.link}
                className={`block p-3 rounded-lg transition-colors ${
                  isCurrent
                    ? "bg-[#636EDF] text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-sm">{service.title}</span>
                  <FiArrowRight
                    className={`w-4 h-4 ${isCurrent ? "text-white" : "text-gray-400"}`}
                  />
                </div>
              </Link>
            );
          })}
        </div>

        {/* "Just starting out?" Section */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-[#636EDF] rounded-full"></div>
            <span className="text-sm text-gray-600 font-medium">Başlangıç aşamasında mısınız?</span>
          </div>
          <h4 className="text-lg font-semibold text-gray-900 mb-4">
            Şirket broşürünü indirin
          </h4>
          
          {/* Brochure Image */}
          <div className="relative mb-4 rounded-lg overflow-hidden">
            <Image
              src="/images/service-detail_sidebar.png"
              alt="Şirket Broşürü"
              width={265}
              height={266}
              className="w-full h-auto rounded-lg"
            />
          </div>

          <Link
            href="/bize-ulasin"
            className="inline-flex items-center gap-2 bg-[#636EDF] text-white px-6 py-3 rounded-lg hover:bg-[#5963C8] transition-colors font-medium w-full justify-center"
          >
            Kopyasını Alın
            <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

