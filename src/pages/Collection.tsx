import { PlayerCardsContainer } from '../components/player/PlayerCard.elements';
import PlayerCard from '../components/player/PlayerCard';
import { ErrorMessage, SectionContainer, SortSelect } from '../components/ui';
import { useCards } from '../hooks/useApi';
import { Spinner } from '../components/ui';
import { apiErrorHandler, sortedCards } from '../utils/helpers';
import { fullName, generateImageUrl, formattedDate } from '../utils/helpers';
import { useState } from 'react';
import { SortTypes } from '../types';

const CollectionPage = () => {
  const { cards, isCardsError, isCardsLoading } = useCards();

  const [sortBy, setSortBy] = useState<SortTypes>(SortTypes.DEFAULT);

  const onSortSelect = (value: SortTypes) => setSortBy(value);

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

  if (cards?.length === 0)
    return (
      <SectionContainer title="Oops!">
        <ErrorMessage fontSize={64}>Your Collection is Empty 😟</ErrorMessage>
      </SectionContainer>
    );

  return (
    <SectionContainer title="your favorite athletes' Ultimate Cards">
      <SortSelect onSortSelect={onSortSelect} />
      <PlayerCardsContainer>
        {sortedCards(sortBy, cards)?.map(
          ({ id, player: { firstname, lastname, birthday } }) => (
            <PlayerCard
              key={id}
              name={fullName(firstname, lastname)}
              dob={formattedDate(birthday)}
              image={generateImageUrl(id)}
            />
          ),
        )}
      </PlayerCardsContainer>
    </SectionContainer>
  );
};

export default CollectionPage;
