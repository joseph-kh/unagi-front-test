import { LogoContainer, LogoImg } from './Logo.elements';
const Logo = () => {
  return (
    <LogoContainer>
      <LogoImg src={require('../../images/logo.svg')} alt="logo" />
    </LogoContainer>
  );
};

export default Logo;
