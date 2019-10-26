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
    email: '',
    major: '', 
    validEmail: null,
  }

  updatePromptJSX = JSX => {
    let index;
    let promptJSX = this.state.promptJSX.slice()
    let renderedPrompts = this.state.renderedPrompts.slice().concat(this.state.currPrompt)
    if(this.state.currPrompt === C.OTHER_MAJOR) {
      if((index = renderedPrompts.indexOf(C.SUBMIT)) > -1) {
        renderedPrompts.splice(index, 1)
      }
    }
    this.setState({
      promptJSX: promptJSX.concat(JSX),
      renderedPrompts
    })
  }

  

  submitForm = () => {
    console.log(this.state.childrenRefs)
    this.postRegistree()
    this.state.childrenRefs.registration_form.classList.add('fade-out')
  }

  checkIfEmailExists = async e => {
    // Create Heades
    let body = {email: e}
    let h = new Headers()
    h.append('Accept', 'application/json')
    h.append('Content-Type', 'application/json')
    // Create Options
    let options = {
      method: 'POST', 
      headers: h,
      body: JSON.stringify(body)
    }
    let request = new Request(C.VERIFY_EMAIL, options)
    let data = await fetch(request)
    .then((response) => {
      if(response.status == 400) {
        console.log("EMAIL IN USE")
        this.displayEmailError('errMessageAlt')
        return false
      } else if(response.status == 200) {
        console.log("UNIQUE EMAIL")
        return true
      }
    })
    return data
  }

  displayEmailError = (type = 'errMessage') => {
    console.log("TYPE", type)
    if(this.state.childrenRefs.email_row.classList.contains('inactive')) {
      this.state.childrenRefs.email_row.classList.add('active')
      this.state.childrenRefs.email_row.classList.remove('inactive')
      this.state.childrenRefs[type].classList.remove('fade-out')
    } else {
      this.state.childrenRefs.email_row.classList.add('active')
    }
    this.state.childrenRefs[type].classList.remove('transparent')
    this.state.childrenRefs[type].classList.add('fade-in')
    this.setState({
      displayErr: true
    })
  }
  
  postRegistree = async () => {
    let body = {email: this.state.childrenRefs[C.EMAIL].value, 
                name: this.state.firstName + ' ' + this.state.lastName,
                major: this.state.major
              }
    // Create Heades
    let h = new Headers()
    h.append('Accept', 'application/json')
    h.append('Content-Type', 'application/json')
    let e = this.state
    // Create Options
    let options = {
      method: 'POST', 
      headers: h,
      body: JSON.stringify(body)
    }
    let request = new Request(C.POST_REGISTREE, options)
    await fetch(request)
    .then((response) => {
      if(response.ok) {
        console.log("SUCCESS")
        return response.json()
      } else {
        console.log("FAIL")
      }
    })
    .catch((err) => {
      console.log("error", err)
    })
  }
    
  // pageScroll = () => {
  //   var scrolldelay
  //   while((window.innerHeight + window.scrollY) <= document.body.scrollHeight) {
  //     window.scrollBy(0, 1);
  //     scrolldelay = setTimeout(this.pageScroll, 10);
  //   }
  //   clearTimeout(scrolldelay)
  // }

  setInput = async e => {
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
        console.log("SPINNER", this.state.childrenRefs.email_spinner)
        this.state.childrenRefs.email_spinner.style.display = ''
        if(this.validateInput(e)) {
          if(!( await this.checkIfEmailExists(e.toLowerCase()))) {
            this.state.childrenRefs.email_spinner.style.display = 'none'
            break
          }
          if(e != this.state.email) {
            this.state.childrenRefs.errMessage.classList.remove('fade-in')
            this.state.childrenRefs.errMessage.classList.add('fade-out')
            this.state.childrenRefs.errMessageAlt.classList.remove('fade-in')
            this.state.childrenRefs.errMessageAlt.classList.add('fade-out')
            if(this.state.childrenRefs.email_row.classList.contains('active')) {
              this.state.childrenRefs.email_row.classList.remove('active')
              this.state.childrenRefs.email_row.classList.add('inactive')
            }
            
            this.setState({
              email: e,
              displayErr: false,
              currPrompt: C.MAJOR
            })
          }
        } else {
          this.displayEmailError()
        }
        this.state.childrenRefs.email_spinner.style.display = 'none'
        break
      }

      case C.MAJOR: {
        if(e == C.OTHER_MAJOR) {
          this.setState({
            currPrompt: C.OTHER_MAJOR,
            displayErr: false
          })
        } else {
          console.log("MAJOR", e.target.innerText)
          this.setState({
            currPrompt: C.SUBMIT,
            major: e.target.innerText,
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
        console.log(this.state.childrenRefs)
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
      return true
    }
    return false
  }

  changeInput = (id, e) => {
    switch(id) {
      case C.FIRSTNAME: {
        this.setState({
          firstName: e
        })
        break;
      }
      case C.LASTNAME: {
        this.setState({
          lastName: e
        })
        break;
      }

      case C.OTHER_MAJOR: {
        this.setState({
          major: e
        })
        //this.pageScroll()
        break;
      }

      case "major": {
        this.setState({
          major: e
        })
        //this.pageScroll()
        break
      }
    }

    //   case C.EMAIL: {
    //     console.group(C.EMAIL)
    //     console.log(e)
    //     console.trace()
    //     console.groupEnd()
    //     this.setState({
    //       email: e
    //     })
    //   }
    // }
}

  render() {
    return (
      <div>
        <dropzone />
        <ParticleWrapper />
        <Register currPrompt={this.state.currPrompt}
                  setCurPrompt={(e) => this.setState({currPrompt: e})} 
                  setInput={(e) => this.setInput(e)}
                  promptJSX={this.state.promptJSX}
                  updatePromptJSX={(JSX) => this.updatePromptJSX(JSX)}
                  renderedPrompts={this.state.renderedPrompts}
                  setStartTime={() => this.setState({formStartTime: new Date()})}
                  passRefs={(refs) => this.setState({childrenRefs: refs})}
                  displayErr={this.state.displayErr}
                  submitForm={() => this.submitForm()}
                  changeInput={(id, text) => this.changeInput(id, text) }
                  />
      </div>

    );
  }
}

export default App;
