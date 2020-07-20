import React from 'react';
import styled from 'styled-components';

const StyledResume = styled.div`
  height: 70%;
  width: 70%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;

`;


function Resume() {
  return (
    <StyledResume>
      <div className="page-container">
        <div className="header">
          <h1>resume</h1>
        </div>
      </div>
    </StyledResume>
  );
}

export default Resume;
