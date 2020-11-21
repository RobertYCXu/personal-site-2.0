import React from 'react';
import styled from 'styled-components';
import ScrollableAnchor from 'react-scrollable-anchor'

const StyledTravels = styled.div`
  height: 70%;
  width: 70%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  .content-container {
    display: flex;
    justify-content: flex-end;
  }

  .photos-menu {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    padding-top: 7%;
  }

  .fixed-menu {
    position: fixed;
  }

  .country {
    text-align: right;
    letter-spacing: 2px;
    line-height: 2;
    color: grey;
    cursor: pointer;
    transition: color 200ms ease-in-out;
    display: block;
  }

  .country:hover {
    color: ${({ theme }) => theme.primaryAccent};
  }

  .photos-container {
    max-width: 80%;
  }

  .photo-container {
    padding: 10% 10% 10% 2%;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    display: block;
  }
`;

const numImgsIceland = 9;
const countries = ["iceland", "hawaii", "san francisco", "new york", "toronto", "japan"]

const icelandImgs = [...Array(numImgsIceland).keys()].map(i => {
  if (i) {
    return(
      <div key={i} className="photo-container">
        <img src={require(`../assets/iceland/${i}.jpg`)} alt=""/>
      </div>
    );
  }
  return(
    <ScrollableAnchor id={'iceland-section'}>
      <div key={i} className="photo-container">
        <img src={require(`../assets/iceland/${i}.jpg`)} alt=""/>
      </div>
    </ScrollableAnchor>
  );

});

function Travels() {
  return (
    <StyledTravels>
      <div className="page-container">
        <div className="header">
          <h1>travels</h1>
        </div>
        <div className="content-container">
          <div className="photos-menu">
            <div className="fixed-menu">
              {countries.map(country => (
                <a className="country" href={"#" + country + "-section"}>{country}</a>
              ))}
            </div>
          </div>
          <div className="photos-container">
            { icelandImgs }
          </div>
        </div>
      </div>
    </StyledTravels>
  );
}

export default Travels;
