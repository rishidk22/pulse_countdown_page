import React, { Component } from 'react';
import Countdown from './Countdown.js'
import Logo from "./circle-cropped.png"
import { LayersManager, Layer } from 'react-layers-manager'
import ParticleWrapper from './ParticleWrapper.js';
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';
import HoverButton from './components/main/hoverbutton'

import './App.css';

class App extends Component {
  render() {
    const currentDate = new Date();
    const year = 2020;

    return (
      <div className="container">
        <HoverButton />
        <div className="row">
        <div className="mainbody">
          <div className="home-content">
            <img className="logo" src={Logo}/>
            <Countdown date={`${year}-01-25T00:00:00`} />
            {/* <a href="https://drive.google.com/file/d/1CCmoF_RuC-W2bVRUZGWsZsIwMsRSuZzo/view?usp=sharing">Sponsor Us</a> */}
            <Link to='/register'><Button style={{color: 'white', fontSize: '12pt'}}>Register</Button></Link>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
