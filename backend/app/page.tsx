import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="space-y-4 text-center">
        <h1 className="text-2xl font-semibold text-white">NeoKreatif Admin</h1>
        <p className="text-gray-400">
          Yönetim paneline erişmek için aşağıdaki bağlantıyı kullanın.
        </p>
        <Link
          href="/admin/login"
          className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#636EDF] to-[#7C87F5] px-4 py-2 font-medium text-white"
        >
          Admin Girişi
        </Link>
      </div>
    </main>
  );
}

