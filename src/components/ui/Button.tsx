import styled from 'styled-components';

interface Props {
  primary?: boolean;
  big?: boolean;
  fontBig?: boolean;
}

const Button = styled.button<Props>`
  border-radius: 4px;
  background: ${({ primary, theme }) =>
    primary ? theme.colors.btnPrimary : theme.colors.btnSecondary};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: ${({ primary, theme }) =>
    primary ? theme.colors.black : theme.colors.white};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: ${(props) => props.theme.colors.primary};
    background-color: ${({ primary, theme }) =>
      primary ? theme.colors.btnHoverPrimary : theme.colors.btnHoverSecondary};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.colors.disabled};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export default Button;
