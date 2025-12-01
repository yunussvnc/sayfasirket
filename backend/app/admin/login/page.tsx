import LoginForm from "./LoginForm";
import BrandPanel from "./BrandPanel";

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white/5 backdrop-blur rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        <BrandPanel />
        <LoginForm />
      </div>
    </div>
  );
}
