import styled from 'styled-components';

export const SectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.primary};
  margin: 0 auto;
  padding-bottom: 2.5rem;
  padding-top: 2.5rem;
  align-items: center;
  height: auto;
  min-height: 75vh;
  text-align: center;
`;

export const SectionTitle = styled.h1`
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  font-size: 32px;
  line-height: 1.1;
  font-weight: 600;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.white};
`;
