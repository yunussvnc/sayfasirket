export default function BrandPanel() {
  return (
    <div className="hidden md:flex flex-col items-start justify-center gap-4 p-10 bg-gradient-to-tr from-[#2b6cb0]/30 to-[#805ad5]/20">
      <div className="flex items-center gap-3">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg">
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <div>
          <h2 className="text-white text-2xl font-semibold">NeoKreatif</h2>
          <p className="text-sm text-white/80">Yönetim paneli — hızlı ve güvenli</p>
        </div>
      </div>

      <p className="text-sm text-white/70 max-w-xs">
        Buradan web sitenizin içeriklerini, sliderları ve ayarları kolayca yönetebilirsiniz. Güvenlik önceliğimizdir.
      </p>

      <ul className="space-y-2 text-sm text-white/80">
        <li>• İçerik yönetimi</li>
        <li>• Görsel yükleme ve optimize</li>
        <li>• SEO ve sayfa ayarları</li>
      </ul>
    </div>
  );
}
