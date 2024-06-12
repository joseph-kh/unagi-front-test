import {
  PlayerCardItem,
  PlayerCardImg,
  PlayerCardDetailContainer,
  PlayerCardName,
  PlayerCardDetails,
} from './PlayerCard.elements';

const PlayerCard = () => {
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
        <PlayerCardImg src="https://images.fotmob.com/image_resources/playerimages/26166.png" />
        <PlayerCardName>Karim Benzema</PlayerCardName>
        <PlayerCardDetails>1987-12-19</PlayerCardDetails>
      </PlayerCardDetailContainer>
    </PlayerCardItem>
  );
};

export default PlayerCard;
