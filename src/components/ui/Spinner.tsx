import styled, { keyframes } from 'styled-components';
import SectionContainer from './section-container/SectionContainer';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid ${(props) => props.theme.colors.white};
  border-right: 2px solid ${(props) => props.theme.colors.white};
  border-bottom: 2px solid ${(props) => props.theme.colors.white};
  border-left: 4px solid ${(props) => props.theme.colors.black};
  background: transparent;
  width: 72px;
  height: 72px;
  border-radius: 50%;
`;

const Spinner = () => (
  <SectionContainer title="loading...">
    <Loader />
  </SectionContainer>
);

export default Spinner;
