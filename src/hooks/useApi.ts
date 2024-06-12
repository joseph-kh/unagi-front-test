import useSWR from 'swr';
import { fetchCollection } from '../lib/collection';
import { AxiosError } from 'axios';
import { Card } from '../types';

export const useCards = () => {
  const { data, error } = useSWR<Card[], AxiosError>('cards', fetchCollection);

  return {
    cards: data,
    isCardsLoading: !error && !data,
    isCardsError: error,
  };
};
