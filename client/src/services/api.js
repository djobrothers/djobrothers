import axios from 'axios';

const getBaseUrl = () => {
  if (import.meta.env.VITE_API_BASE_URL) {
    return import.meta.env.VITE_API_BASE_URL;
  }
  // In production deployments where VITE_API_BASE_URL is not set, default to Render live endpoint
  if (typeof window !== 'undefined' && !window.location.hostname.includes('localhost') && !window.location.hostname.includes('127.0.0.1')) {
    return 'https://djobrothers.onrender.com/api';
  }
  return '/api';
};

const api = axios.create({
  baseURL: getBaseUrl(),
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  timeout: 20000
});

export const submitEnquiry = async (formData) => {
  try {
    const response = await api.post('/enquiries', formData);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw error.response.data;
    }
    throw {
      success: false,
      message: error.message && !error.message.includes('Network Error')
        ? error.message
        : 'Unable to connect to DJO Brothers Limited server. Please try again shortly or contact us at contact@djobrothers.com.'
    };
  }
};

export default api;
