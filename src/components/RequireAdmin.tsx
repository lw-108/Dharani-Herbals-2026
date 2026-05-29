// src/components/RequireAdmin.tsx
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAdminAuth } from "@/context/AdminAuthContext";

/**
 * Protects admin routes. If the user is not logged in as admin,
 * redirects to the admin login page.
 */
export const RequireAdmin = ({ children }: { children: React.ReactNode }) => {
  const { isAdmin } = useAdminAuth();
  const location = useLocation();

  if (!isAdmin) {
    // Preserve the attempted location so we could redirect back after login if desired
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }
  return <>{children}</>;
};
