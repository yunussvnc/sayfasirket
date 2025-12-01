"use client";

import { useEffect } from "react";
import "./admin.css";

export default function AdminThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.body.classList.add("admin-light");
    return () => {
      document.body.classList.remove("admin-light");
    };
  }, []);

  return <>{children}</>;
}
