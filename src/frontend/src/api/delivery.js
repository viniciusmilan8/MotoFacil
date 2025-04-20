import axios from 'axios';
export const api = axios.create({ baseURL: 'http://localhost:3000' });

export function createDelivery(data) {
  return api.post('/deliveries', data);
}

export function getDeliveries() {
  return api.get('/deliveries');
}