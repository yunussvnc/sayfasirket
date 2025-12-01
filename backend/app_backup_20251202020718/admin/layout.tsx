import type { ReactNode } from "react";
import AdminThemeProvider from "./AdminThemeProvider";

export const metadata = {
  title: "Admin - NeoKreatif",
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <AdminThemeProvider>
      <div className="admin-shell">{children}</div>
    </AdminThemeProvider>
  );
}
