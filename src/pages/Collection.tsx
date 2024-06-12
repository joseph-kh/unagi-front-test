// import { fetchCollection } from '../lib/collection';
import { PlayerCardsContainer } from '../components/player/PlayerCard.elements';

import PlayerCard from '../components/player/PlayerCard';
import { SectionContainer } from '../components/ui';

const CollectionPage = () => {
  // const collection = fetchCollection();
  // const card = collection[0];

  /**
   * Step 1: Render the card
   */
  return (
    <SectionContainer title="your favorite athletes' Ultimate Cards">
      <PlayerCardsContainer>
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
      </PlayerCardsContainer>
    </SectionContainer>
  );
};

export default CollectionPage;
