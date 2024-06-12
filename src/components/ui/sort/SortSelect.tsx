import React from 'react';
import { Select, SortContainer } from './SortSelect.elements';
import { SortTypes } from '../../../types';

interface Props {
  onSortSelect: (value: SortTypes) => void;
}

const SortSelect = ({ onSortSelect }: Props) => {
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as SortTypes;
    onSortSelect(value);
  };

  return (
    <SortContainer>
      <Select defaultValue="none" onChange={onChange}>
        <option value="default">Sort By: Default</option>
        <option value="first_name_asc">Sort By: First Name: Ascending</option>
        <option value="first_name_des">Sort By: First Name: Descending</option>
        <option value="last_name_asc">Sort By: Last Name: Ascending</option>
        <option value="last_name_des">Sort By: Last Name: Descending</option>
        <option value="birthday_asc">Sort By: Birthday: Ascending</option>
        <option value="birthday_desc">Sort By: Birthday: Descending</option>
      </Select>
    </SortContainer>
  );
};

export default SortSelect;
