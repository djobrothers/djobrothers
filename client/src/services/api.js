import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  timeout: 15000
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
      message: 'Network connection failed. Please check your internet connection or try again later.'
    };
  }
};

export default api;
