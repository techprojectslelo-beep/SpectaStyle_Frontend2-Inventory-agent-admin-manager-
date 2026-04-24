// Centralized API configuration for Dashboard
// Change this URL in one place when switching between local and production
// For Vite: use VITE_ prefix to expose to client

// const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:5500";
const backendUrl = import.meta.env.VITE_BACKEND_URL
export const API_URL = backendUrl;
export const API_BASE_URL = `${backendUrl}/ecommerce`;

export default {
  backendUrl,
  API_URL,
  API_BASE_URL,
};
