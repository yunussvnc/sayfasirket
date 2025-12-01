import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white flex items-center">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">NeoKreatif Yönetim Paneli</h1>
            <p className="mt-4 text-lg text-white/80">
              İçeriklerinizi, sayfalarınızı ve SEO ayarlarınızı kolayca yönetin. Hızlı, güvenli ve kullanışlı arayüz ile kontrol sizde.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/admin/login"
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 px-5 py-3 font-medium shadow-md"
              >
                Admin Girişi
              </Link>

              <a
                href="#"
                className="inline-flex items-center justify-center rounded-lg border border-white/10 px-5 py-3 text-sm text-white/90"
              >
                Dokümantasyon
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white/5 p-4 rounded-lg">
                <h4 className="font-semibold">İçerik Yönetimi</h4>
                <p className="text-sm text-white/70 mt-1">Makale, sayfa ve referansları kolayca düzenleyin.</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <h4 className="font-semibold">Görseller</h4>
                <p className="text-sm text-white/70 mt-1">Yükleme, sıkıştırma ve kataloglama işlemleri.</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <h4 className="font-semibold">SEO & Ayarlar</h4>
                <p className="text-sm text-white/70 mt-1">Meta veriler, site haritası ve SEO kontrolleri.</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <div className="w-full max-w-md bg-white/5 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold">Hızlı Bakış</h3>
              <p className="text-sm text-white/70 mt-2">Son eklenen yazılar, bekleyen mesajlar ve site istatistikleri burada görünecek.</p>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="bg-white/6 p-3 rounded">
                  <div className="text-xs text-white/80">Yazılar</div>
                  <div className="text-lg font-semibold">12</div>
                </div>
                <div className="bg-white/6 p-3 rounded">
                  <div className="text-xs text-white/80">Mesajlar</div>
                  <div className="text-lg font-semibold">3</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

