import React, { Component } from "react";
import "./App.css";

import styled from "styled-components";

import djmImg from './DJM-June-2018-1600w.jpg';
import jdcmImg from './JessicaMcKeown_Headshot-Edit-2-4d2839e9-1600w.jpg';
import newdjmImg from './Dan-aboard-by-Jessica-2018-Edit.jpg';

const Altaredwoodcontainer = styled.div`
  border-style: none;
  width: 94vw;
  margin-left: 3vw;
  padding-left: 1vw;
  border-radius: 15px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(10px);
`;

const Altaredwooda = styled.a`
  font-weight: bolder;
  color: white;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  text-decoration: none;
`;

const Altaredwoodimg = styled.img`
  height: auto; /* Make sure images are scaled correctly. */
  max-width: calc(25vw + 4em);
`;

const Altaredwoodimadjusted = styled.img`
  height: auto; /* Make sure images are scaled correctly. */
  max-width: calc(27vw + 3.7em);
`;

const Partnersection = styled.section`
  display: grid;
  grid-template-columns: 46vw 45vw;
  overflow: hidden;
`;

const Partnerdiv = styled.section`
  border: 2px solid gray;
  padding-left: 3vw;
`;

const Altaredwoodh1 = styled.h1`
  font-size: 30px;
  color: white;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`;

const Altaredwoodh2 = styled.h2`
  font-size: 26px;
  color: white;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`;

// const Altaredwoodimgmini = Altaredwoodimg`

// `;

class App extends Component {
  render() {
    return (
      <Altaredwoodcontainer>
        <header className="App-header">
          <Altaredwoodh1 className="App-title">Alta Redwood</Altaredwoodh1>
          <Altaredwoodh2 className="App-description">
            Wellness and Technology Services
          </Altaredwoodh2>
        </header>
        <Partnersection>
          <Partnerdiv>
            <h3 className="partnerh1">
              <Altaredwooda href="http://jessmckeown.com">
                Jess McKeown
              </Altaredwooda>
            </h3>
            <span className="av">
              <Altaredwooda href="http://jessmckeown.com">
                <Altaredwoodimg
                  src={jdcmImg}
                  alt="jess"
                  id="jdc-img"
                />
              </Altaredwooda>
            </span>
          </Partnerdiv>

          <Partnerdiv>
            <h3 className="partnerh1">
              <Altaredwooda href="http://danmckeown.info">
                Dan McKeown
              </Altaredwooda>
            </h3>
            <span className="av">
              <Altaredwooda href="http://danmckeown.info">
                <Altaredwoodimadjusted
                  src={newdjmImg}
                  alt="dan"
                  id="djm-img"
                />
              </Altaredwooda>
            </span>
          </Partnerdiv>
        </Partnersection>
        <footer>
          copyright 2018 <a href="http://altaredwood.work">altaredwood.work</a>
        </footer>
      </Altaredwoodcontainer>
    );
  }
}

export default App;
