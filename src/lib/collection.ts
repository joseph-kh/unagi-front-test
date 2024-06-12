import { Card } from '../types';
import axios from './api';

export const fetchCollection = async () => {
  const response = await axios.get<Card[]>(`cards`);
  return response.data;
};

export const createCardHandler = async (data: Card) => {
  const response = await axios.post<Card>(`cards`, data);
  return response.data;
};
