import React, { Component } from 'react';
import Countdown from './Countdown.js'
import Logo from "./circle-cropped.png"
import { LayersManager, Layer } from 'react-layers-manager'
import ParticleWrapper from './ParticleWrapper.js';
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import Register from './register_'
import * as C from './Constants'
import Typist from 'react-typist'



import './App.css';
import { thisExpression } from '@babel/types';

class App extends Component {

  render() {
    return (
      <div>
        <Register />
      </div>

    );
  }
}

export default App;
