// src/lib/api.ts
/**
 * Centralized API helper that prepends the base URL from the VITE environment variable
 * when not in development mode (Vite dev server). In development, it uses a relative path
 * so that the Vite proxy (configured in vite.config.ts) can forward the request to the
 * remote ngrok endpoint, avoiding CORS issues.
 */
export const apiBase = (() => {
  // Vite injects a boolean flag `import.meta.env.DEV` in development mode.
  const isDev = import.meta.env.DEV;
  if (isDev) {
    // Empty string makes fetch use a relative URL (e.g., '/api/cart/')
    return '';
  }
  // In production, fall back to the configured base URL.
  return (import.meta.env.VITE_API_BASE_URL ?? "").replace(/\/+$/, "");
})();

export const apiFetch = async (
  endpoint: string,
  options: RequestInit = {}
): Promise<Response> => {
  const token = localStorage.getItem("token");
  const adminToken = localStorage.getItem("adminToken");

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    // Prefer admin token if present, otherwise regular token
    ...(adminToken ? { Authorization: `Bearer ${adminToken}` } : (token ? { Authorization: `Bearer ${token}` } : {})),
    ...(options.headers ?? {}),
  };

  // Ensure the endpoint starts with a leading slash.
  const url = `${apiBase}${endpoint.startsWith('/') ? '' : '/'}${endpoint}`;

  return fetch(url, {
    ...options,
    headers,
  });
};
