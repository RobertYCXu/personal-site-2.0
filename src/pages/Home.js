import React from 'react';
import styled from 'styled-components';
import { Link  } from 'react-router-dom';

const StyledHome = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: auto;
    width: 10rem;
    padding-right: 3rem;
    transform: translateY(-10px);
  }
`;

function Home() {
  return (
    <StyledHome>
      <img src="https://image.flaticon.com/icons/svg/2813/2813094.svg" alt="burger icon" />
      <Link to="/">
				<h1>robert xu</h1>
      </Link>
    </StyledHome>
  );
}

export default Home;
