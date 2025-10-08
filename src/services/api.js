import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, 
});


export const authAPI = {
  login: async (email, password) => {
    const response = await api.post('/auth/login', { email, password });
    return response.data; 
  },

  register: async (email, password, name,role) => {
    const response = await api.post('/auth/register', { email, password, name,role });
    return response.data; 
  },

  getProfile: async () => {
    const response = await api.get('/auth/me'); 
    return response.data;
  },

  logout: async () => {
    const response = await api.get('/auth/logout'); 
    return response.data;
  },
};

// ✅ Product APIs
export const productAPI = {
  getAll: async () => {
    const response = await api.get('/products');
    return response.data;
  },

  getById: async (id) => {
    const response = await api.get(`/products/${id}`);
    return response.data;
  },

  getFeatured: async () => {
    const response = await api.get('/products/featured');
    return response.data;
  },

  getNewArrivals: async () => {
    const response = await api.get('/products/new-arrivals');
    return response.data;
  },

  createPatient: async () => {
    const response = await api.post('/patient/');
    return response.data;
  },};

export default api;
