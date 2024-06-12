import { useMemo, useState } from 'react';
import {
  PlayerCardItem,
  PlayerCardImg,
  PlayerCardDetailContainer,
  PlayerCardName,
  PlayerCardDetails,
} from './PlayerCard.elements';

interface Props {
  name: string;
  dob: string;
  image?: string;
}

const PlayerCard = ({ name, dob, image }: Props) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isImageExist, setIsImageExist] = useState(true);

  const imgSrc = useMemo(() => {
    if (isImageExist && isImageLoaded) return image;
    return require('../../images/avatar-placeholder.png');
  }, [isImageLoaded, isImageExist]);

  console.log(imgSrc);

  return (
    <PlayerCardItem
      perspective={500}
      glareEnable={true}
      glareColor="#D4AF37"
      glareBorderRadius="1.5rem"
      glareMaxOpacity={0.45}
      scale={1.1}
    >
      <PlayerCardDetailContainer>
        <PlayerCardImg
          src={imgSrc}
          onLoad={() => setIsImageLoaded(true)}
          onError={() => setIsImageExist(false)}
          loading="lazy"
        />
        <PlayerCardName>{name}</PlayerCardName>
        <PlayerCardDetails>{dob}</PlayerCardDetails>
      </PlayerCardDetailContainer>
    </PlayerCardItem>
  );
};

export default PlayerCard;
