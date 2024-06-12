import axios, { AxiosError } from 'axios';
import { unknownErrorMessage } from './constants';

export const apiErrorHandler = (err: unknown, type: 'Cards') => {
  if (axios.isAxiosError(err)) {
    if (err?.response?.status === 404) {
      return `${type} not found 😟`;
    }

    const errorMessage =
      (err.response?.data as AxiosError)?.message || err.message;

    return errorMessage || unknownErrorMessage;
  }
  return unknownErrorMessage;
};

export const fullName = (firstName: string, lastName: string) => {
  const fullName = firstName && lastName ? `${firstName} ${firstName}` : 'N/A';
  return fullName;
};

export const generateImageUrl = (playerId?: number) => {
  if (playerId) {
    const imageUrl = `${process.env.REACT_APP_IMAGE_RESOURCE}/${playerId}.png`;
    return imageUrl;
  }
};

export const formattedDate = (dob: string) => {
  const date = new Date(dob);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
};
