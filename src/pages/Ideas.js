import React from 'react';
import styled from 'styled-components';

const StyledIdeas = styled.div`
  height: 70%;
  width: 70%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;

`;


function Ideas() {
  return (
    <StyledIdeas>
      <div className="page-container">
        <div className="header">
          <h1>ideas</h1>
        </div>
      </div>
    </StyledIdeas>
  );
}

export default Ideas;
