import axios from 'axios';

const getBaseUrl = () => {
  let url = '/api/';
  if (import.meta.env.VITE_API_BASE_URL) {
    url = import.meta.env.VITE_API_BASE_URL;
  } else if (typeof window !== 'undefined' && !window.location.hostname.includes('localhost') && !window.location.hostname.includes('127.0.0.1')) {
    url = 'https://djobrothers.onrender.com/api/';
  }
  return url.endsWith('/') ? url : `${url}/`;
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
    const response = await api.post('enquiries', formData);
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
