import React from 'react';
import styled from 'styled-components';
import ProfilePic from '../assets/profile.jpeg';
import { Link  } from 'react-router-dom';

const StyledAbout = styled.div`
  height: 70%;
  width: 70%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    display: flex;

    img {
      border-radius: 50%;
      border: 0.8rem solid ${({ theme }) => theme.primaryAccent};
      height: auto;
      width: auto;
      max-height: 15rem;
      max-width: 15rem;
    }

    p {
      padding-left: 5rem;
    }

    a {
      position: relative;
      color: ${({ theme }) => theme.primaryAccent};
      transition: color 200ms ease-in-out;
    }

    a:hover {
      color: red;
    }
  }
`;

function About() {
  return (
    <StyledAbout>
      <div className="page-container">
        <div className="header">
          <h1>about</h1>
        </div>
        <div className="content">
          <img src={ProfilePic} alt="robert xu" />
          <p>
            Hi! I'm a Computer Science student at the University of Waterloo and I'm currently a
            Software Engineer Intern at Facebook on the Warm Storage team. I've previously interned
            at companies like Citadel and Square. I also love travelling, playing piano, and
            messing around with random creative <Link to="/ideas">ideas</Link>. Check
            out my <a id="linkedin" href="https://www.linkedin.com/in/robert-xu/">Linkedin</a>
            &nbsp;and&nbsp;<a href="https://github.com/RobertYCXu">Github</a>!
          </p>
        </div>
      </div>
    </StyledAbout>
  );
}

export default About;
