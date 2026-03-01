import axios from "axios";

// Création dyal instance
const AxiosClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || "http://127.0.0.1:8000/api",
  withCredentials: true, // pour cookies
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
});

// Interceptor (khaso ykoun barra)
AxiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default AxiosClient;