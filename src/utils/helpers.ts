import axios, { AxiosError } from 'axios';
import { unknownErrorMessage } from './constants';
import { Card, SortTypes } from '../types';

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
  const fullName = firstName && lastName ? `${firstName} ${lastName}` : 'N/A';
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

export const sortedCards = (
  sortBy: SortTypes,
  cards?: Card[],
): Card[] | undefined => {
  if (cards) {
    switch (sortBy) {
      case SortTypes.FIRST_NAME_ASC:
        return [...cards].sort((a, b) =>
          a.player.firstname.localeCompare(b.player.firstname),
        );

      case SortTypes.FIRST_NAME_DESC:
        return [...cards].sort((a, b) =>
          b.player.firstname.localeCompare(a.player.firstname),
        );

      case SortTypes.LAST_NAME_ASC:
        return [...cards].sort((a, b) =>
          a.player.lastname.localeCompare(b.player.lastname),
        );

      case SortTypes.LAST_NAME_DESC:
        return [...cards].sort((a, b) =>
          b.player.lastname.localeCompare(a.player.lastname),
        );

      case SortTypes.BIRTHDAY_ASC:
        return [...cards].sort(
          (a, b) =>
            new Date(a.player.birthday).getTime() -
            new Date(b.player.birthday).getTime(),
        );

      case SortTypes.BIRTHDAY_DESC:
        return [...cards].sort(
          (a, b) =>
            new Date(b.player.birthday).getTime() -
            new Date(a.player.birthday).getTime(),
        );

      default:
        return cards;
    }
  }
  return undefined;
};
