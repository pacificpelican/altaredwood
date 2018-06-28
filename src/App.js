import React, { Component } from 'react';
import logo from './logo.svg';
//  import './App.css';

import styled from 'styled-components';

const Altaredwoodcontainer = styled.div`
  border-style: none;
  width: 94vw;
  background-color: #4c8df7;
`;

const Altaredwooda = styled.a`
  font-weight: bolder;
`;

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
          </div>
          <div id="dan">
            <h3 className="partnerh1"><Altaredwooda href="http://danmckeown.info">Dan McKeown</Altaredwooda></h3>
          </div>
        </section>
      </Altaredwoodcontainer>
    );
  }
}

export default App;
