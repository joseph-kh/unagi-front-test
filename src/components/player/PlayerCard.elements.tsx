import styled, { keyframes } from 'styled-components';
import Tilt from 'react-parallax-tilt';

const rgbAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const PlayerCardsContainer = styled.div`
  display: grid;
  margin-top: 2.5rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 2.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 5rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const PlayerCardItem = styled(Tilt)`
  border-radius: 1.5rem;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  cursor: pointer;
  background: linear-gradient(#141414, #080808);

  transform-style: preserve-3d;
  color: white;
  text-align: center;
  position: relative;
  &:after {
    content: '';
    background: linear-gradient(
        45deg,
        #ff0000 0%,
        #ff9a00 10%,
        #d0de21 20%,
        #4fdc4a 30%,
        #3fdad8 40%,
        #2fc9e2 50%,
        #1c7fee 60%,
        #5f15f2 70%,
        #ba0cf8 80%,
        #fb07d9 90%,
        #ff0000 100%
      )
      repeat 0% 0% / 300% 100%;
    position: absolute;
    inset: -3px;
    border-radius: 1.5rem;
    filter: blur(8px);
    transform: translateZ(-1px);
    animation: ${rgbAnimation} 6s linear infinite;
  }
`;

export const PlayerCardDetailContainer = styled.div`
  padding: 2.5rem;
  transform: translateZ(60px);
`;

export const PlayerCardImg = styled.img`
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  object-position: center;
  width: 100%;
  height: 60%;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  margin-bottom: 1.25rem;
`;

export const PlayerCardName = styled.h2`
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.5rem;
  white-space: nowrap;

  @media (min-width: 768px) {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
`;

export const PlayerCardDetails = styled.p`
  padding-top: 0.75rem;
  font-size: 0.875rem;
  line-height: 1.25rem;

  @media (min-width: 768px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;
