import React from 'react';
import styled from 'styled-components';

const StyledTravels = styled.div`
  height: 70%;
  width: 70%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;


function Travels() {
  return (
    <StyledTravels>
      <div className="page-container">
        <div className="header">
          <h1>travels</h1>
        </div>
      </div>
    </StyledTravels>
  );
}

export default Travels;
