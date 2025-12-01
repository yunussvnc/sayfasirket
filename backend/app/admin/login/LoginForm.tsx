"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { persistAdminSession } from "../_lib/call-admin-api";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || "Giriş başarısız");
      }

      const data = await response.json();
      persistAdminSession({ token: data.token, user: data.user, remember });
      router.push("/admin/panel");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Giriş başarısız");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 md:p-10">
      <h3 className="text-lg font-semibold text-white mb-1">Yönetici Girişi</h3>
      <p className="text-sm text-white/80 mb-6">Hesabınızla giriş yapın ve panoya erişin.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div role="alert" className="bg-red-600/20 border border-red-600 text-red-200 px-3 py-2 rounded text-sm">
            {error}
          </div>
        )}

        <div>
          <label htmlFor="username" className="block text-sm text-white/80 mb-1">Kullanıcı Adı</label>
          <input
            id="username"
            name="username"
            type="text"
            autoComplete="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 text-sm rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="ör. admin@ornek.com"
            aria-label="Kullanıcı Adı"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm text-white/80 mb-1">Şifre</label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 text-sm rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="••••••••"
            aria-label="Şifre"
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="inline-flex items-center gap-2 text-sm text-white/80">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="h-4 w-4 rounded border-white/20 bg-white/5"
            />
            <span>Beni hatırla</span>
          </label>

          <a href="#" className="text-sm text-indigo-200 hover:underline">Şifremi unuttum</a>
        </div>

        <div>
          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 py-2 px-4 text-white font-medium shadow-sm hover:brightness-105 disabled:opacity-60"
          >
            {loading ? (
              <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
              </svg>
            ) : null}
            {loading ? 'Giriş Yapılıyor' : 'Giriş Yap'}
          </button>
        </div>

        <div className="text-center text-sm text-white/60">veya</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <button type="button" className="py-2 px-3 rounded-lg border border-white/10 text-white/90 bg-white/3">Google ile devam et</button>
          <button type="button" className="py-2 px-3 rounded-lg border border-white/10 text-white/90 bg-white/3">GitHub ile devam et</button>
        </div>
      </form>
    </div>
  );
}
