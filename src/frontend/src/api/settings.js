import axios from 'axios';
export const api = axios.create({ baseURL: 'http://localhost:3000' });

export function fetchSettings() {
  return api.get('/settings');
}

export function updateSettings(payload) {
  return api.put('/settings', payload);
}