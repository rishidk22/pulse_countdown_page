import React from 'react';
import Countdown from './Countdown.js'
import Particles from 'react-particles-js';
import Logo from "./circle-cropped.png"
import { LayersManager, Layer } from 'react-layers-manager'
import ParticleWrapper from './ParticleWrapper.js';


import './App.css';

function App() {
  const currentDate = new Date();
  const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();

  return (
    <div className="mainbody">
      <div className="home_content">
        <img className="logo" src={Logo} alt=""/>
        <Countdown date={`${year}-12-24T00:00:00`} />
      </div>
    </div>
  );
}

export default App;
