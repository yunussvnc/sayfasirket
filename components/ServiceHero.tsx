import Image from "next/image";

interface ServiceHeroProps {
  title: string;
  imageSrc?: string;
}

const DEFAULT_IMAGE = "/images/service-bc.jpg";

export default function ServiceHero({ title, imageSrc = DEFAULT_IMAGE }: ServiceHeroProps) {
  return (
    <section className="px-4 pb-12 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="relative h-64 md:h-72 lg:h-80 rounded-3xl overflow-hidden shadow-lg">
          <Image
            src={imageSrc}
            alt={title}
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 75vw, 1152px"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />
          <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12">
            <p className="text-white/70 text-sm uppercase tracking-wide mb-3">Secesta</p>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">{title}</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

