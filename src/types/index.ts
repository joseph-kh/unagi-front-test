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
