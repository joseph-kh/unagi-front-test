import { PlayerCardsContainer } from '../components/player/PlayerCard.elements';
import PlayerCard from '../components/player/PlayerCard';
import { ErrorMessage, SectionContainer } from '../components/ui';
import { useCards } from '../hooks/useApi';
import { Spinner } from '../components/ui';
import { apiErrorHandler } from '../utils/helpers';
import { fullName, generateImageUrl, formattedDate } from '../utils/helpers';

const CollectionPage = () => {
  const { cards, isCardsError, isCardsLoading } = useCards();

  // TODO: Add a condition if cards array is empty

  if (isCardsLoading) return <Spinner />;

  if (isCardsError)
    return (
      <SectionContainer title="Oops!">
        <ErrorMessage fontSize={64}>
          {apiErrorHandler(isCardsError, 'Cards')}
        </ErrorMessage>
      </SectionContainer>
    );

  return (
    <SectionContainer title="your favorite athletes' Ultimate Cards">
      <PlayerCardsContainer>
        {cards?.map(({ id, player: { firstname, lastname, birthday } }) => (
          <PlayerCard
            key={id}
            name={fullName(firstname, lastname)}
            dob={formattedDate(birthday)}
            image={generateImageUrl(id)}
          />
        ))}
      </PlayerCardsContainer>
    </SectionContainer>
  );
};

export default CollectionPage;
