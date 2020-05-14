import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { NavLink  } from 'react-router-dom';

const Menu = ({ open, setOpen, isMobile, ...props }) => {

  let dots;
  let closeMenu = () => setOpen(!open);
  let closeMenuIfMobile = () => isMobile ? closeMenu() : undefined;
  let routes = [
    { path: '/', name: 'home' },
    { path: '/about', name: 'about' },
    { path: '/travels', name: 'travels' },
    { path: '/blog', name: 'blog' },
    { path: '/resume', name: 'resume' }
  ]

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
