import React, { Component } from 'react';
import Countdown from './Countdown.js'
import Logo from "./circle-cropped.png"
import { LayersManager, Layer } from 'react-layers-manager'
import ParticleWrapper from './ParticleWrapper.js';
import { Button } from 'semantic-ui-react'


import './App.css';

class App extends Component {
  render() {
    const currentDate = new Date();
    const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();

    return (
      <div className="mainbody">
        <div className="home-content">
          <img className="logo" src={Logo}/>
          <Countdown date={`${year}-12-24T00:00:00`} />
          <Button class="sponsor_us_button">
            <span> <a href="./sponsor_us">Sponsor Us</a></span>
          </Button>
        </div>

      </div>
    );
  }
}

export default App;
