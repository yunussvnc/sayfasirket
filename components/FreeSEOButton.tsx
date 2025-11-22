"use client";

import Link from "next/link";

// TODO: SEO Analiz sayfası linkini buraya ekleyin
// Örnek: "https://example.com/seo-analiz" veya "/uretsiz-seo-analiz"
const SEO_ANALIZ_LINK = "";

export default function FreeSEOButton() {
    return (
        <Link
            href={SEO_ANALIZ_LINK || "#"}
            className="flex items-center bg-[#636EDF] hover:bg-[#5963C8] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden border border-white/10"
        >
            {/* White square with arrow */}
            <div className="bg-white p-2.5 md:p-2.5 rounded-l-full flex items-center justify-center shrink-0">
                <svg
                    className="w-4 h-4 md:w-4 md:h-4 text-gray-900 group-hover:translate-x-0.5 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </div>
            {/* Text */}
            <span className="px-3 md:px-4 py-2 md:py-2.5 font-semibold text-xs md:text-sm whitespace-nowrap">
                Ücretsiz Seo Analiz
            </span>
        </Link>
    );
}

