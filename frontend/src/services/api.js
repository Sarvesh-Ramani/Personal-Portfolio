import axios from 'axios';
import { personalInfo, skills, projects, experience, education, achievements } from '../mock.js';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

// Check if we're in a frontend-only deployment (Netlify or empty backend URL)
const isProductionFrontendOnly = !BACKEND_URL || 
  BACKEND_URL.trim() === '' || 
  BACKEND_URL === 'undefined' || 
  BACKEND_URL === 'null' ||
  (typeof window !== 'undefined' && window.location.hostname.includes('netlify'));

const API_BASE = isProductionFrontendOnly ? null : `${BACKEND_URL}/api`;



// Create axios instance with default config (only if backend is available)
const api = (!isProductionFrontendOnly && API_BASE) ? axios.create({
  baseURL: API_BASE,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
}) : null;

// Add request interceptor for logging (only if backend is available)
if (api) {
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
}

// Personal Information API
export const personalInfoApi = {
  get: async () => {
    if (isProductionFrontendOnly) {
      // Return mock data for frontend-only deployment
      return new Promise((resolve) => {
        setTimeout(() => resolve(personalInfo), 100); // Simulate API delay
      });
    }
    const response = await api.get('/personal-info');
    return response.data;
  },
  
  update: async (data) => {
    if (isProductionFrontendOnly) {
      // Return updated mock data for frontend-only deployment
      return new Promise((resolve) => {
        setTimeout(() => resolve({ ...personalInfo, ...data }), 100);
      });
    }
    const response = await api.put('/personal-info', data);
    return response.data;
  }
};

// Experience API
export const experienceApi = {
  getAll: async () => {
    if (isProductionFrontendOnly) {
      // Return mock experience data for frontend-only deployment
      return new Promise((resolve) => {
        setTimeout(() => resolve(experience), 120);
      });
    }
    const response = await api.get('/experience');
    return response.data;
  },
  
  create: async (data) => {
    if (isProductionFrontendOnly) {
      // Return created experience for frontend-only deployment
      return new Promise((resolve) => {
        setTimeout(() => resolve({ id: Date.now(), ...data }), 200);
      });
    }
    const response = await api.post('/experience', data);
    return response.data;
  },
  
  update: async (id, data) => {
    if (isProductionFrontendOnly) {
      // Return updated experience for frontend-only deployment
      return new Promise((resolve) => {
        setTimeout(() => resolve({ id, ...data }), 180);
      });
    }
    const response = await api.put(`/experience/${id}`, data);
    return response.data;
  },
  
  delete: async (id) => {
    if (isProductionFrontendOnly) {
      // Return success for frontend-only deployment
      return new Promise((resolve) => {
        setTimeout(() => resolve({ success: true, id }), 150);
      });
    }
    const response = await api.delete(`/experience/${id}`);
    return response.data;
  }
};

// Projects API
export const projectsApi = {
  getAll: async () => {
    if (isProductionFrontendOnly) {
      // Return all mock projects for frontend-only deployment
      return new Promise((resolve) => {
        setTimeout(() => resolve([...projects.featured, ...projects.upcoming]), 150);
      });
    }
    const response = await api.get('/projects');
    return response.data;
  },
  
  getFeatured: async () => {
    if (isProductionFrontendOnly) {
      // Return featured mock projects for frontend-only deployment
      return new Promise((resolve) => {
        setTimeout(() => resolve(projects.featured), 120);
      });
    }
    const response = await api.get('/projects/featured');
    return response.data;
  },
  
  create: async (data) => {
    if (isProductionFrontendOnly) {
      // Return created project for frontend-only deployment
      return new Promise((resolve) => {
        setTimeout(() => resolve({ id: Date.now(), ...data }), 200);
      });
    }
    const response = await api.post('/projects', data);
    return response.data;
  },
  
  update: async (id, data) => {
    if (isProductionFrontendOnly) {
      // Return updated project for frontend-only deployment
      return new Promise((resolve) => {
        setTimeout(() => resolve({ id, ...data }), 180);
      });
    }
    const response = await api.put(`/projects/${id}`, data);
    return response.data;
  },
  
  delete: async (id) => {
    if (isProductionFrontendOnly) {
      // Return success for frontend-only deployment
      return new Promise((resolve) => {
        setTimeout(() => resolve({ success: true, id }), 150);
      });
    }
    const response = await api.delete(`/projects/${id}`);
    return response.data;
  }
};

// Skills API
export const skillsApi = {
  getAll: async () => {
    if (isProductionFrontendOnly) {
      // Transform mock skills data to match backend format
      const skillsArray = [];
      Object.entries(skills).forEach(([category, skillList]) => {
        skillList.forEach(skill => {
          skillsArray.push({
            ...skill,
            category: category
          });
        });
      });
      return new Promise((resolve) => {
        setTimeout(() => resolve(skillsArray), 130);
      });
    }
    const response = await api.get('/skills');
    return response.data;
  },
  
  create: async (data) => {
    if (isProductionFrontendOnly) {
      // Return created skill for frontend-only deployment
      return new Promise((resolve) => {
        setTimeout(() => resolve({ id: Date.now(), ...data }), 200);
      });
    }
    const response = await api.post('/skills', data);
    return response.data;
  },
  
  update: async (id, data) => {
    if (isProductionFrontendOnly) {
      // Return updated skill for frontend-only deployment
      return new Promise((resolve) => {
        setTimeout(() => resolve({ id, ...data }), 180);
      });
    }
    const response = await api.put(`/skills/${id}`, data);
    return response.data;
  },
  
  delete: async (id) => {
    if (isProductionFrontendOnly) {
      // Return success for frontend-only deployment
      return new Promise((resolve) => {
        setTimeout(() => resolve({ success: true, id }), 150);
      });
    }
    const response = await api.delete(`/skills/${id}`);
    return response.data;
  }
};

// Education API
export const educationApi = {
  getAll: async () => {
    if (isProductionFrontendOnly) {
      // Return mock education data for frontend-only deployment
      return new Promise((resolve) => {
        setTimeout(() => resolve([education]), 110); // Wrap in array to match API format
      });
    }
    const response = await api.get('/education');
    return response.data;
  },
  
  create: async (data) => {
    if (isProductionFrontendOnly) {
      // Return created education for frontend-only deployment
      return new Promise((resolve) => {
        setTimeout(() => resolve({ id: Date.now(), ...data }), 200);
      });
    }
    const response = await api.post('/education', data);
    return response.data;
  },
  
  update: async (id, data) => {
    if (isProductionFrontendOnly) {
      // Return updated education for frontend-only deployment
      return new Promise((resolve) => {
        setTimeout(() => resolve({ id, ...data }), 180);
      });
    }
    const response = await api.put(`/education/${id}`, data);
    return response.data;
  },
  
  delete: async (id) => {
    if (isProductionFrontendOnly) {
      // Return success for frontend-only deployment
      return new Promise((resolve) => {
        setTimeout(() => resolve({ success: true, id }), 150);
      });
    }
    const response = await api.delete(`/education/${id}`);
    return response.data;
  }
};

// Achievements API
export const achievementsApi = {
  getAll: async () => {
    if (isProductionFrontendOnly) {
      // Return mock achievements data for frontend-only deployment
      return new Promise((resolve) => {
        setTimeout(() => resolve(achievements), 130);
      });
    }
    const response = await api.get('/achievements');
    return response.data;
  },
  
  create: async (data) => {
    if (isProductionFrontendOnly) {
      // Return created achievement for frontend-only deployment
      return new Promise((resolve) => {
        setTimeout(() => resolve({ id: Date.now(), ...data }), 200);
      });
    }
    const response = await api.post('/achievements', data);
    return response.data;
  },
  
  update: async (id, data) => {
    if (isProductionFrontendOnly) {
      // Return updated achievement for frontend-only deployment
      return new Promise((resolve) => {
        setTimeout(() => resolve({ id, ...data }), 180);
      });
    }
    const response = await api.put(`/achievements/${id}`, data);
    return response.data;
  },
  
  delete: async (id) => {
    if (isProductionFrontendOnly) {
      // Return success for frontend-only deployment
      return new Promise((resolve) => {
        setTimeout(() => resolve({ success: true, id }), 150);
      });
    }
    const response = await api.delete(`/achievements/${id}`);
    return response.data;
  }
};

// Test API connection
export const testApi = {
  health: async () => {
    if (isProductionFrontendOnly) {
      // Return mock health status for frontend-only deployment
      return new Promise((resolve) => {
        setTimeout(() => resolve({ message: 'Portfolio Frontend is running!', mode: 'frontend-only' }), 50);
      });
    }
    const response = await api.get('/');
    return response.data;
  }
};

export default api;