import React from 'react';
import Countdown from './Countdown.js'
import Particles from 'react-particles-js';
import Logo from "./circle-cropped.png"
import { LayersManager, Layer } from 'react-layers-manager'

import './App.css';

function App() {
  const currentDate = new Date();
  const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();

  return (
    <div className="mainbody">
      <div className="home_content">
        <img className="logo" src={Logo}/>
        <Countdown date={`${year}-12-24T00:00:00`} />
      </div>
      <Particles className="particles_top"
      params={{
        "particles": {
            "number": {
                "value": 250,
                "density": {
                    "enable": true,
                    "value_area": 850
                }
            },
            "line_linked": {
                "enable": false,
                "opacity": 0.02
            },
            "move": {
                "direction": "up",
                "speed": 2
            },
            "size": {
                "value": 1
            },
            "opacity": {
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.05
                }
            }
        },
        "interactivity": {
            "events": {
                "onclick": {
                    "enable": true,
                    "mode": "push"
                }
            },
            "modes": {
                "push": {
                    "particles_nb": 1
                }
            }
        },
        "retina_detect": true
    }} />
    </div>
  );
}

export default App;
