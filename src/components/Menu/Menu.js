import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open, setOpen, isMobile, ...props }) => {

  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;
  let dots;
  if (isMobile) {
    dots = <span />
  }
  else {
    dots = <span onClick={() => setOpen(!open)}>...</span>
  }

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      {dots}
      <a href="/" tabIndex={tabIndex}>
        about
      </a>
      <a href="/" tabIndex={tabIndex}>
        travels
      </a>
      <a href="/" tabIndex={tabIndex}>
        blog
      </a>
      <a href="/" tabIndex={tabIndex}>
        resume
      </a>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
  isMobile: bool.isRequired,
}

export default Menu;
