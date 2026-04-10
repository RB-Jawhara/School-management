import AxiosClient from "../../../api/axios";

// Hayed "function" w redha "const" object
const StudentApi = {
  getCsrfToken: async () => {
    return await AxiosClient.get('/sanctum/csrf-cookie', {
      baseURL: 'http://127.0.0.1:8000'
    });
  },
  login: async (email, password) => {
    return await AxiosClient.post('/login', { email, password });
  },
  logout: async () => {
    return await AxiosClient.post('/logout');
  },
  getUser: async () => {
    return await AxiosClient.get("/user");
  }
};

export default StudentApi; // Exporti l-object direct