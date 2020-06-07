import React from 'react';
import styled from 'styled-components';
import ProfilePic from '../assets/profile.jpeg';
import { Link  } from 'react-router-dom';

const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 15rem;

  .header {
    padding-top: 5rem;
  }

  .content {
    margin-top: 2%;
    display: flex;

    img {
      border-radius: 50%;
      border: 0.8rem solid ${({ theme }) => theme.primaryAccent};
      margin-left: 25%;
      margin-top: 2%;
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
		}

    a:after {
			position: absolute;
      content: '';
      display: block;
      background: ${({ theme }) => theme.primaryAccent};
			bottom:0;
			left: 0%;
      height: 4px;
			width: 19px;
			transition: width 250ms ease-in-out;
    }

    a:hover:after {
      width: 100%;
    }
  }
`;

function About() {
  return (
    <StyledAbout>
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
    </StyledAbout>
  );
}

export default About;
