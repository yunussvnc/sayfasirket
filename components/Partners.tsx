import Image from "next/image";

const partners = [
  { name: "Google", logo: "/images/google-1024x455.png.webp" },
  { name: "Meta", logo: "/images/meta-1024x455.png.webp" },
  { name: "Microsoft", logo: "/images/microsoft-advertising-partner-1024x455.png.webp" },
  { name: "AWS", logo: "/images/AWS-Partner-Network-APN-1024x455.png.webp" },
  { name: "HubSpot", logo: "/images/HubSpot-Partner-1024x455.png.webp" },
  { name: "Salesforce", logo: "/images/Salesforce-Partner-1024x455.png.webp" },
  { name: "Spotify", logo: "/images/Spotify-Advertising-Partner-1024x455.png.webp" },
  { name: "TikTok", logo: "/images/tiktok-1024x455.png.webp" },
  { name: "X", logo: "/images/x-1024x455.png.webp" },
  { name: "YouTube", logo: "/images/youtube-1024x455.png.webp" },
  { name: "Instagram", logo: "/images/instagram-1024x455.png.webp" },
  { name: "LinkedIn", logo: "/images/linkdn-1024x455.png.webp" },
  { name: "Facebook", logo: "/images/facebook-1024x455.png.webp" },
  { name: "Yandex", logo: "/images/yandex-1024x455.png.webp" },
  { name: "Google Cloud", logo: "/images/Google-Cloud-Partner-1024x455.png.webp" },
  { name: "Microsoft Azure", logo: "/images/Microsoft-Azure-Partner-1024x455.png.webp" },
  { name: "Amazon Ads", logo: "/images/amazon-ads-advanced-partner-1024x455.png.webp" },
  { name: "Criteo", logo: "/images/criteo-1024x455.png.webp" },
  { name: "Adjust", logo: "/images/adjust-1024x455.png.webp" },
  { name: "RTB House", logo: "/images/rtb-house-1024x455.png.webp" },
  { name: "Insider", logo: "/images/insider-1024x455.png.webp" },
  { name: "Segmentify", logo: "/images/segmentify-1024x455.png.webp" },
  { name: "IAB", logo: "/images/iab-1024x455.png.webp" }
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
            En iyi global teknoloji ve pazarlama çözümü sağlayıcılarıyla olan stratejik iş ortaklıklarımız sayesinde markanızı dijital dünyada öne çıkarıyoruz. NeoKreatif Ajans ile işinizi büyütmek ve sonuçlarınızı hızla iyileştirmek şimdi çok daha kolay.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-4 h-24 flex items-center justify-center border border-gray-200 hover:shadow-md transition-shadow"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={60}
                className="max-w-full max-h-full object-contain"
                style={{ width: 'auto', height: 'auto' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

