import React, { Component } from "react";
import ParticleWrapper from "./ParticleWrapper";
import Typist from "react-typist";
import * as C from "./Constants";
import { Button } from 'reactstrap'

class Register extends Component {

    componentDidUpdate = prevProps => {
        if(prevProps.displayErr !== this.props.displayErr)
            this.forceUpdate()
    }

    componentDidMount = () => {
        this.props.setStartTime()
    }
  
    focusOnInput = () => {
        if(this.props.currPrompt !== C.SUBMIT)
            this.refs[this.props.currPrompt].focus();
  };

  animateButtons = () => {
    console.log(this.refs)
    this.setState({
      submitButton: 'fade-in'
    })
  }

  genJSX = () => {
    if(!this.props.renderedPrompts.includes(this.props.currPrompt)) {
    let promptText, detailText, errText;
    let showDetails = false
    switch (this.props.currPrompt) {
      case C.FIRSTNAME: {
        promptText = (<p>What is your <strong>first name</strong>?</p>)
        errText = "Please enter your first name before continuing."
        break
      }

      case C.LASTNAME: {
        promptText = (<p>What is your <strong>last name</strong>?</p>);
        errText = "Please enter you last name before continuing."
        break
      }

      case C.EMAIL: {
        promptText = (<p>What is your <strong>email address</strong>?</p>)
        showDetails = true
        errText = "Hmm... that does not look like a valid email."
        detailText = "Emails will be used for checking into the Pulse 2020 conference as well as essential communciations."
        break
      }

      case C.SUBMIT: {
          promptText = (<p>Would you like to <strong>submit your registration</strong>?</p>)
          showDetails = false
          errText = ''
          break
      }
    }

    let promptJSX = (
      <div>
        <div className="row">
          <div className="col">
            <Typist
              avgTypingDelay={40}
              cursor={{
                show: false,
                hideWhenDone: true,
                hideWhenDoneDelay: 10
              }}
              onTypingDone={this.props.currPrompt !== C.SUBMIT ? () => this.focusOnInput() : () => this.animateButtons()}
            >
              {promptText}
            </Typist>
          </div>
        </div>
        {showDetails && 
          <div className="row">
            <div className="col" id="details">
              <p className="fade-in">/* {detailText} */</p>
            </div>
          </div>
        }
        {
          <div className="row transparent" ref="errMessage">
            <div className="col" id="details" style={{marginTop: '5px'}}>
              <p className="fade-in">/* {errText} */</p>
            </div>
          </div>
        }
        <div
          className="row"
          ref={this.props.currPrompt === C.EMAIL ? "email_row" : ""}
          id="input_row"
        >
          <div className="col-sm-2">
            <p className="dollar">pulse2020$</p>
          </div>
          <div className="col-sm-10">
            {this.props.currPrompt !== C.SUBMIT ? (<form
              onSubmit={e => {
                e.preventDefault();
                
                this.props.setInput(this.refs[this.props.currPrompt].value);
                this.props.passRefs(this.refs);
              }}
            >
              <input
                ref={this.props.currPrompt}
                type="text"
                spellCheck="false"
              />
            </form>) : (<Button ref={C.SUBMIT} id="submit_registration" onClick={() => this.props.submitForm()}>Yes</Button>)}
          </div>
        </div>
      </div>
    );
    this.props.updatePromptJSX(promptJSX);
    }
    
  };

  render() {
    this.genJSX()
    return (
      <div className="container" ref="registration_form">
        {this.props.promptJSX}
        <ParticleWrapper />
      </div>
    );
  }
}

export default Register;
