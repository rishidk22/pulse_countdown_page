import React, { Component } from 'react';
import Countdown from './Countdown.js'
import Logo from "./circle-cropped.png"
import { LayersManager, Layer } from 'react-layers-manager'
import ParticleWrapper from './ParticleWrapper.js';
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import Register from './Register'
import * as C from './Constants'
import Typist from 'react-typist'




import './App.css';

class App extends Component {

  state = {
    formStartTime: {},
    formEndTime: {},
    currPrompt: C.FIRSTNAME,
    promptJSX: [],
    renderedPrompts: [],
    displayErr: false,
    firstName: '',
    lastName: '',

  }

  updatePromptJSX = JSX => {
    let promptJSX = this.state.promptJSX.slice()
    let renderedPrompts = this.state.renderedPrompts.slice()
    this.setState({
      promptJSX: promptJSX.concat(JSX),
      renderedPrompts: renderedPrompts.concat(this.state.currPrompt)
    })
  }

  setInput = e => {
    switch(this.state.currPrompt) {
      case C.FIRSTNAME: {
        if (/^[A-Za-z\s]+$/.test(e)) {
          this.setState({
            firstName: e,
            currPrompt: C.LASTNAME
          })
        } else {
          this.setState({
            displayErr: true
          })
        }
        break
      }

      case C.LASTNAME: {
        this.setState({
          lastName: e,
          currPrompt: C.EMAIL
        })
        break
      }

      case C.EMAIL: {
        if(this.validateInput(e)) {
          this.setState({
            email: e
          })
        } else {
          //console.log(this.state.childrenRefs)
          this.state.childrenRefs.email_row.classList.add('active')
          this.setState({
            displayErr: true
          })
        }
        // this.setState({
        //   email: e,
        //   currPrompt: C.EMAIL
        // })
        break
      }
    }
  }

  validateInput = email => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return (true)
    }
    return (false)
  }

  render() {

    return (
      <div>
        <Register currPrompt={this.state.currPrompt} 
                  setInput={(e) => this.setInput(e)}
                  promptJSX={this.state.promptJSX}
                  updatePromptJSX={(JSX) => this.updatePromptJSX(JSX)}
                  renderedPrompts={this.state.renderedPrompts}
                  setStartTime={() => this.setState({formStartTime: new Date()})}
                  passRefs={(refs) => this.setState({childrenRefs: refs})}
                  displayErr={this.state.displayErr}
                  />
      </div>
    );
  }
}

export default App;
