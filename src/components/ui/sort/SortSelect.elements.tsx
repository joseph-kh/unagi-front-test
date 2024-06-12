import styled from 'styled-components';

export const SortContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -1.2rem;
  margin-bottom: 2rem;
`;

export const Select = styled.select`
  padding: 10px 20px;
  border-radius: 2px;
  outline: none;
  border: none;
  width: 100%;
  font-size: 16px;

  border: 1px solid ${(props) => props.theme.colors.white};
  &::placeholder {
    color: ${(props) => props.theme.colors.placeholderText};
  }
`;
