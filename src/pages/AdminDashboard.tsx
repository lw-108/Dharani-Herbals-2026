// src/pages/AdminDashboard.tsx
import { Outlet, Link } from "react-router-dom";
import { RequireAdmin } from "@/components/RequireAdmin";

/**
 * Admin layout – contains a vertical navigation sidebar and renders the
 * requested admin page via <Outlet/>. All child routes are automatically
 * protected by RequireAdmin.
 */
export const AdminDashboard = () => {
  return (
    <RequireAdmin>
      <div className="flex min-h-screen bg-[#111] text-white">
        {/* Sidebar */}
        <nav className="w-64 flex-shrink-0 border-r border-gray-800 bg-[#0d0d0d] p-6">
          <h2 className="mb-8 text-2xl font-bold text-emerald-400">Admin Panel</h2>
          <ul className="space-y-4">
            <li>
              <Link to="categories" className="block rounded px-3 py-2 hover:bg-gray-800">
                Categories
              </Link>
            </li>
            <li>
              <Link to="products" className="block rounded px-3 py-2 hover:bg-gray-800">
                Products
              </Link>
            </li>
            <li>
              <Link to="orders" className="block rounded px-3 py-2 hover:bg-gray-800">
                Orders
              </Link>
            </li>
            {/* Additional admin sections can be added here */}
          </ul>
        </nav>
        {/* Main content area */}
        <main className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </main>
      </div>
    </RequireAdmin>
  );
};
export default AdminDashboard;
