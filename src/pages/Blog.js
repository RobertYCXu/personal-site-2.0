import React from 'react';
import styled from 'styled-components';

const StyledBlog = styled.div`
  height: 70%;
  width: 70%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;

`;


function Blog() {
  return (
    <StyledBlog>
      <div className="page-container">
        <div className="header">
          <h1>blog</h1>
        </div>
      </div>
    </StyledBlog>
  );
}

export default Blog;
