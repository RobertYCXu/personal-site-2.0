import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { Link  } from 'react-router-dom';

const Menu = ({ open, setOpen, isMobile, ...props }) => {

  let dots;

  if (isMobile) {
    dots = <></>
  }
  else {
    dots = <span onClick={() => setOpen(!open)}>...</span>
  }

  return (
    <StyledMenu open={open} aria-hidden={!open} isMobile={isMobile} {...props}>
      {dots}
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
      <Link to="/travels">travels</Link>
      <Link to="/blog">blog</Link>
      <Link to="/resume">resume</Link>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
  isMobile: bool.isRequired,
}

export default Menu;
