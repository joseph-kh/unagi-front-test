import { InfoSection } from '../../types';

export const homeSectionOne: InfoSection = {
  lightBg: false,
  lightText: true,
  lightTopLine: true,
  lightTextDesc: true,
  topLine: '',
  headline: 'Collect and play',
  description:
    'Find the future stars of football and basketball and take on other players every week to see how your squad stacks up!',
  buttonLabel: 'Buy Now',
  imgStart: false,
  img: require('../../images/section-one.png'),
  alt: '#',
  primary: true,
  start: false,
};

export const homeSectionTwo: InfoSection = {
  lightBg: true,
  lightText: false,
  lightTopLine: true,
  lightTextDesc: false,
  topLine: '',
  headline: 'Authentic gameplay',
  description:
    "Experience the full range of authentic gameplay features you'd expect in a fantasy sports game, from 11-a-side matches to substitutes and formations.",
  buttonLabel: 'Play Now',
  imgStart: true,
  img: require('../../images/section-two.png'),
  alt: '#',
  primary: false,
  start: false,
};

export const homeSectionTree: InfoSection = {
  lightBg: false,
  lightText: true,
  lightTopLine: true,
  lightTextDesc: true,
  topLine: '',
  headline: 'Compete for amazing rewards',
  description:
    'Put your expertise to the test every week and compete against other players for a chance to win incredible rewards!',
  buttonLabel: 'Collect Now',
  imgStart: false,
  img: require('../../images/section-three.png'),
  alt: '#',
  primary: true,
  start: false,
};
