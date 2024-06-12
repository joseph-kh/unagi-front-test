import styled from 'styled-components';

export const ErrorMessage = styled.p<{ fontSize?: number }>`
  color: ${(props) => props.theme.colors.error};
  font-size: ${({ fontSize }) => `${fontSize}px`};
`;

export default ErrorMessage;
