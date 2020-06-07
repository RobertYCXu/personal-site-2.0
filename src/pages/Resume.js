import React from 'react';
import styled from 'styled-components';

const StyledResume = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 15rem;

  .header {
    padding-top: 5rem;
  }
`;


function Resume() {
  return (
    <StyledResume>
      <div className="header">
        <h1>resume</h1>
      </div>
    </StyledResume>
  );
}

export default Resume;
