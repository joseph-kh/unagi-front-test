export interface InfoSection {
  primary: boolean;
  lightBg: boolean;
  lightText: boolean;
  lightTopLine: boolean;
  lightTextDesc: boolean;
  imgStart: boolean;
  start: boolean;
  topLine?: string;
  headline?: string;
  description?: string;
  buttonLabel?: string;
  img?: string;
  alt?: string;
}

export interface Player {
  firstname: string;
  lastname: string;
  birthday: string;
  image?: string;
}
export interface Card {
  id?: number;
  player: Player;
}

export enum SortTypes {
  DEFAULT = 'default',
  FIRST_NAME_ASC = 'first_name_asc',
  FIRST_NAME_DESC = 'first_name_des',
  LAST_NAME_ASC = 'last_name_asc',
  LAST_NAME_DESC = 'last_name_des',
  BIRTHDAY_ASC = 'birthday_asc',
  BIRTHDAY_DESC = 'birthday_desc',
}
