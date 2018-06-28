import React, { Component } from 'react';
import logo from './logo.svg';
//  import './App.css';

import styled from 'styled-components';

const Altaredwoodcontainer = styled.div`
  border-style: none;
  width: 94vw;
  background-color: #4c8df7;
  margin-left: 3vw;
  padding-left: 1vw;
  border-radius: 5px;
`;

const Altaredwooda = styled.a`
  font-weight: bolder;
  color: darkgreen;
`;

const Altaredwoodimg = styled.img`
  height: auto; /* Make sure images are scaled correctly. */
  max-width: calc(20vw + 10em);
`;

// const Altaredwoodimgmini = Altaredwoodimg`

// `;

class App extends Component {
  render() {
    return (
      <Altaredwoodcontainer>
        <header className="App-header">
          <h1 className="App-title">Alta Redwood</h1>
          <h2 className="App-description">Wellness and Technology Services</h2>
        </header>
        <section id="partners">
          <div id="jess">
            <h3 className="partnerh1"><Altaredwooda href="http://jessmckeown.com">Jess McKeown</Altaredwooda></h3>
            <span className="av">
              <Altaredwooda href="http://jessmckeown.com">
                <Altaredwoodimg src="http://jessmckeown.com/static/media/JessicaMcKeown_Headshot-Edit-2.4d2839e9.jpg" alt="jess" id="jdc-img" />
              </Altaredwooda>
            </span>
          </div>
          <hr />
          <div id="dan">
            <h3 className="partnerh1"><Altaredwooda href="http://danmckeown.info">Dan McKeown</Altaredwooda></h3>
            <span className="av">
              <Altaredwooda href="http://danmckeown.info">
                <Altaredwoodimg src="https://djmblog.com/assets/files/DJM-June-2018.jpg" alt="dan" id="djm-img" />
              </Altaredwooda>
            </span>
          </div>
          <hr />
        </section>
        <footer>
            copyright 2018 <a href="http://altaredwood.work">altaredwood.work</a>
        </footer>
      </Altaredwoodcontainer>
    );
  }
}

export default App;
