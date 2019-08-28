import React, { Component } from 'react';
import Countdown from './Countdown.js'
import Logo from "./circle-cropped.png"
import { LayersManager, Layer } from 'react-layers-manager'
import ParticleWrapper from './ParticleWrapper.js';
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
// import Speakers from './SpeakersPage/Speakers';



import './App.css';

class App extends Component {
  render() {
    const currentDate = new Date();
    const year = 2020;

    return (
      <div className="mainbody">
        <div className="home-content">
          <img className="logo" src={Logo}/>
          <Countdown date={`${year}-01-25T00:00:00`} />
          <Button class="sponsor_us_button">
            <a href="https://drive.google.com/file/d/1CCmoF_RuC-W2bVRUZGWsZsIwMsRSuZzo/view?usp=sharing">Sponsor Us</a>
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
