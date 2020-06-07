import React from 'react';
import styled from 'styled-components';

const StyledTravels = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 15rem;

  .header {
    padding-top: 5rem;
  }
`;


function Travels() {
  return (
    <StyledTravels>
      <div className="header">
        <h1>travels</h1>
      </div>
    </StyledTravels>
  );
}

export default Travels;
