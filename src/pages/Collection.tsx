import { fetchCollection } from '../lib/collection';

import './Collection.css';

export const Collection = () => {
  const collection = fetchCollection();
  const card = collection[0];

  /**
   * Step 1: Render the card
   */
  return <div>{JSON.stringify(card)}</div>;
};
