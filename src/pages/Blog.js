import React from 'react';
import styled from 'styled-components';

const StyledBlog = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 15rem;

  .header {
    padding-top: 5rem;
  }
`;


function Blog() {
  return (
    <StyledBlog>
      <div className="header">
        <h1>blog</h1>
      </div>
    </StyledBlog>
  );
}

export default Blog;
