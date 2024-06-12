import styled from 'styled-components';

export const CreateCardForm = styled.form`
  border: 1px solid rgb(29, 30, 30);
  border-radius: 26px;
  padding: 4rem;
  margin: 1.5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-width: 550px;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;
  }
`;
