import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { NavLink  } from 'react-router-dom';
import { routes } from '../../global';

const Menu = ({ open, setOpen, isMobile, ...props }) => {

  let dots;
  let closeMenu = () => setOpen(!open);
  let closeMenuIfMobile = () => isMobile ? closeMenu() : undefined;

  if (isMobile) {
    dots = <></>
  }
  else {
    dots = <span onClick={closeMenu}>...</span>
  }

  return (
    <StyledMenu open={open} aria-hidden={!open} isMobile={isMobile} {...props}>
      {dots}
      {routes.map(route => (
        <NavLink
          to={route.path}
          activeClassName="active"
          exact
          onClick={closeMenuIfMobile}
          key={route.name}
        >
          {route.name}
        </NavLink>
      ))}
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
  isMobile: bool.isRequired,
}

export default Menu;
