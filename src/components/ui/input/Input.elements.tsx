import styled from 'styled-components';

export const InputContainer = styled.div`
  margin-bottom: 1.5rem;
`;

export const InputLabel = styled.p`
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 0.5rem;
  text-align: left;
`;

export const FormInput = styled.input`
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
