import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../ui';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink,
} from './Navbar.elements';
import Logo from '../logo/Logo';
import { useMobile } from '../../hooks/useMobile';

const Navbar = () => {
  const [isClicked, setIsClick] = useState(false);

  const { isMobile } = useMobile();

  const handleClick = () => setIsClick(!isClicked);

  const closeMobileMenu = () => setIsClick(false);

  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={closeMobileMenu}>
            <Logo />
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {isClicked ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu onClick={handleClick} isClicked={isClicked}>
            <NavItem>
              <NavLinks to="/" onClick={closeMobileMenu}>
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/collection" onClick={closeMobileMenu}>
                Collection
              </NavLinks>
            </NavItem>

            <NavItemBtn>
              {isMobile ? (
                <NavBtnLink to="/create-card">
                  <Button onClick={closeMobileMenu} fontBig primary>
                    Create Card
                  </Button>
                </NavBtnLink>
              ) : (
                <NavBtnLink to="/create-card">
                  <Button primary>Create Card</Button>
                </NavBtnLink>
              )}
            </NavItemBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
