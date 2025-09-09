import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API_BASE = `${BACKEND_URL}/api`;

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor for logging
api.interceptors.request.use(
  (config) => {
    console.log(`Making ${config.method?.toUpperCase()} request to ${config.url}`);
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// Personal Information API
export const personalInfoApi = {
  get: async () => {
    const response = await api.get('/personal-info');
    return response.data;
  },
  
  update: async (data) => {
    const response = await api.put('/personal-info', data);
    return response.data;
  }
};

// Experience API
export const experienceApi = {
  getAll: async () => {
    const response = await api.get('/experience');
    return response.data;
  },
  
  create: async (data) => {
    const response = await api.post('/experience', data);
    return response.data;
  },
  
  update: async (id, data) => {
    const response = await api.put(`/experience/${id}`, data);
    return response.data;
  },
  
  delete: async (id) => {
    const response = await api.delete(`/experience/${id}`);
    return response.data;
  }
};

// Projects API
export const projectsApi = {
  getAll: async () => {
    const response = await api.get('/projects');
    return response.data;
  },
  
  getFeatured: async () => {
    const response = await api.get('/projects/featured');
    return response.data;
  },
  
  create: async (data) => {
    const response = await api.post('/projects', data);
    return response.data;
  },
  
  update: async (id, data) => {
    const response = await api.put(`/projects/${id}`, data);
    return response.data;
  },
  
  delete: async (id) => {
    const response = await api.delete(`/projects/${id}`);
    return response.data;
  }
};

// Skills API
export const skillsApi = {
  getAll: async () => {
    const response = await api.get('/skills');
    return response.data;
  },
  
  create: async (data) => {
    const response = await api.post('/skills', data);
    return response.data;
  },
  
  update: async (id, data) => {
    const response = await api.put(`/skills/${id}`, data);
    return response.data;
  },
  
  delete: async (id) => {
    const response = await api.delete(`/skills/${id}`);
    return response.data;
  }
};

// Education API
export const educationApi = {
  getAll: async () => {
    const response = await api.get('/education');
    return response.data;
  },
  
  create: async (data) => {
    const response = await api.post('/education', data);
    return response.data;
  },
  
  update: async (id, data) => {
    const response = await api.put(`/education/${id}`, data);
    return response.data;
  },
  
  delete: async (id) => {
    const response = await api.delete(`/education/${id}`);
    return response.data;
  }
};

// Achievements API
export const achievementsApi = {
  getAll: async () => {
    const response = await api.get('/achievements');
    return response.data;
  },
  
  create: async (data) => {
    const response = await api.post('/achievements', data);
    return response.data;
  },
  
  update: async (id, data) => {
    const response = await api.put(`/achievements/${id}`, data);
    return response.data;
  },
  
  delete: async (id) => {
    const response = await api.delete(`/achievements/${id}`);
    return response.data;
  }
};

// Test API connection
export const testApi = {
  health: async () => {
    const response = await api.get('/');
    return response.data;
  }
};

export default api;