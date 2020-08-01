import React from 'react';
import styled from 'styled-components';

const StyledTravels = styled.div`
  height: 70%;
  width: 70%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  .photo-container {
    padding: 10%;
  }
  img {
    max-width: 100%;
    max-height: 100%;
    display: block;
  }
`;

const numImgs = 9;

const imgs = [...Array(numImgs).keys()].map(i => {
  return(
    <div key={i} className="photo-container">
      <img src={require(`../assets/iceland/${i}.jpg`)} alt=""/>
    </div>
  );
});

function Travels() {
  return (
    <StyledTravels>
      <div className="page-container">
        <div className="header">
          <h1>travels</h1>
        </div>
        <div className="content-container">
          { imgs }
        </div>
      </div>
    </StyledTravels>
  );
}

export default Travels;
