import toast from 'react-hot-toast';
import axios, { AxiosError } from 'axios';
import { unknownErrorMessage } from './constants';

export const successNotify = (message: string, id?: string) =>
  toast.success(message, { id });

export const errorNotify = (err: unknown, id?: string) => {
  if (axios.isAxiosError(err)) {
    const errorMessage = (err.response?.data as AxiosError).message;
    return toast.error(errorMessage || unknownErrorMessage, { id });
  }
  return toast.error(unknownErrorMessage, { id });
};

export const loadingNotify = (message: string) => toast.loading(message);
