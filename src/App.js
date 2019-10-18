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
import dropzone from './dropzone'



import './App.css';
import { thisExpression } from '@babel/types';

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

  submitForm = () => {
    console.log(this.state.childrenRefs)
    this.state.childrenRefs.registration_form.classList.add('fade-out')
  }

  checkIfEmailExists = async e => {
    // Create Body
    let body = {"email": e}
    // Create Heades
    let h = new Headers()
    h.append('Accept', 'application/json')
    h.append('Content-Type', 'application/json')
    // Create Options
    let options = {
      method: 'POST', 
      headers: h,
      mode: 'no-cors',
      body: body
    }
    let request = new Request(C.VERIFY_EMAIL, options)
    await fetch(request)
    .then((response) => {
      if(response.ok) {
        console.log("SUCCESS")
      } else {
        console.log("FAIL")
      }
    })
    .catch((err) => {
      console.log("error", err)
    })
  }  
    

  setInput = e => {
    switch(this.state.currPrompt) {
      case C.FIRSTNAME: {
        if (/^[A-Za-z\s]+$/.test(e)) {
          this.setState({
            firstName: e,
            currPrompt: C.LASTNAME,
            displayErr: false
          })
        } else {
          this.setState({
            displayErr: true
          })
        }
        break
      }

      case C.LASTNAME: {
        if (/^[A-Za-z\s]+$/.test(e)) {
          this.setState({
            lastName: e,
            currPrompt: C.EMAIL,
            displayErr: false
          })
        } else {
          this.setState({
            displayErr: true
          })
        }
        break
      }

      case C.EMAIL: {
        if(this.validateInput(e)) {
          console.log( this.checkIfEmailExists(e))
          this.state.childrenRefs.errMessage.classList.remove('fade-in')
          this.state.childrenRefs.errMessage.classList.add('fade-out')
          if(this.state.childrenRefs.email_row.classList.contains('active')) {
            this.state.childrenRefs.email_row.classList.remove('active')
            this.state.childrenRefs.email_row.classList.add('inactive')
          }

          //this.state.childrenRefs.errMessage.classList.add('transparent')
          this.setState({
            email: e,
            displayErr: false,
            currPrompt: C.MAJOR
          })
        } else {
          //console.log(this.state.childrenRefs)
          console.log(this.state.childrenRefs)
          if(this.state.childrenRefs.email_row.classList.contains('inactive')) {
            this.state.childrenRefs.email_row.classList.add('active')
            this.state.childrenRefs.email_row.classList.remove('inactive')
            this.state.childrenRefs.errMessage.classList.remove('fade-out')
          } else {
            this.state.childrenRefs.email_row.classList.add('active')
          }
          this.state.childrenRefs.errMessage.classList.remove('transparent')
          this.state.childrenRefs.errMessage.classList.add('fade-in')
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

      case C.MAJOR: {
        if(e == C.OTHER_MAJOR) {
          this.setState({
            currPrompt: C.OTHER_MAJOR,
            displayErr: false
          })
        } else {
          this.setState({
            currPrompt: C.SUBMIT,
            major: e,
            displayErr: false
          })
        }
        break
      }

      case C.SUBMIT: {
        this.setState({
          displayErr: false
        })
        break
      }

      case C.OTHER_MAJOR: {
        this.setState({
          currPrompt: C.SUBMIT,
          major: e
        })
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
        <dropzone />
        <ParticleWrapper />
        <Register currPrompt={this.state.currPrompt} 
                  setInput={(e) => this.setInput(e)}
                  promptJSX={this.state.promptJSX}
                  updatePromptJSX={(JSX) => this.updatePromptJSX(JSX)}
                  renderedPrompts={this.state.renderedPrompts}
                  setStartTime={() => this.setState({formStartTime: new Date()})}
                  passRefs={(refs) => this.setState({childrenRefs: refs})}
                  displayErr={this.state.displayErr}
                  submitForm={() => this.submitForm()}
                  />
      </div>

    );
  }
}

export default App;
