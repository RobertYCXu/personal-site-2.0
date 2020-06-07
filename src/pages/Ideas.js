import React from 'react';
import styled from 'styled-components';

const StyledIdeas = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 15rem;

  .header {
    padding-top: 5rem;
  }
`;


function Ideas() {
  return (
    <StyledIdeas>
      <div className="header">
        <h1>ideas</h1>
      </div>
    </StyledIdeas>
  );
}

export default Ideas;
