import React, { Component } from "react";
import ParticleWrapper from "./ParticleWrapper";
import Typist from "react-typist";
import * as C from "./Constants";
import { Button } from 'reactstrap'
import OtherMajorButton from './other_major'
import Dropzone_ from './dropzone'

class Register extends Component {

    state = {
      show_major_list: false,
      other_major: false,
      show_other_major: false
    }


    componentDidUpdate = (prevProps, prevState) => {
        if(prevProps.displayErr !== this.props.displayErr)
            this.forceUpdate()
        if(prevState.other_major !== this.state.other_major) {
          this.forceUpdate();
        }
    }

    componentDidMount = () => {
        this.props.setStartTime()
    }
  
    focusOnInput = () => {
        if(this.props.currPrompt === C.MAJOR) {
          this.refs[C.EMAIL].blur();
        }
        if(this.props.currPrompt !== C.SUBMIT && this.props.currPrompt !== C.MAJOR && this.props.currPrompt !== C.OTHER_MAJOR) {
          this.refs[this.props.currPrompt].focus();
        }
            
  };

  animateButtons = () => {
    this.setState({
      submitButton: 'fade-in'
    })
  }

  lineTyped = (line, lineIdx) => {

  }

  otherPrompt = () => {
    this.setState({other_major: true})
  }

  dimMajors = e => {
    console.log(e)
    for(let index = 0; index < C.MAJOR_LIST.length; index++) {
      if(e != -1) {
        if(C.MAJOR_LIST[index] === e ) {
          this.refs["MAJOR_LIST_"+C.MAJOR_LIST[index]].className = "col-sm-5 major_txt"
        } else {
          this.refs["MAJOR_LIST_"+C.MAJOR_LIST[index]].className = "col-sm-5 dim_major"
        }
      } else {
        this.refs["MAJOR_LIST_"+C.MAJOR_LIST[index]].className = "col-sm-5 dim_major"
      }
    }
  }

  genMajorJSX = () => (
    <div className="majors">
        <div ref="major_list" className="transparent">
          <div className="row">
            {C.MAJOR_LIST.map((e, i) => (<div className={C.MAJOR_LIST_CLASSNAME} ref={"MAJOR_LIST_" + e}  onClick={(e) => {this.props.setInput(e); this.dimMajors(e.target.innerText);}}>{e}</div>)).filter((e, i) => {return ((i % 8) === 0)})} 
          </div>
          <div className="row">
            {C.MAJOR_LIST.map((e, i) => (<div className={C.MAJOR_LIST_CLASSNAME} ref={"MAJOR_LIST_" + e}  onClick={(e) => {this.props.setInput(i); this.dimMajors(e.target.innerText);}}>{e}</div>)).filter((e, i) => {return ((i % 8) === 1)})}
          </div>
          <div className="row">
            {C.MAJOR_LIST.map((e, i) => (<div className={C.MAJOR_LIST_CLASSNAME} ref={"MAJOR_LIST_" + e}  onClick={(e) => {this.props.setInput(i); this.dimMajors(e.target.innerText);}}>{e}</div>)).filter((e, i) => {return ((i % 8) === 2)})}
          </div>
          <div className="row">
            {C.MAJOR_LIST.map((e, i) => (<div className={C.MAJOR_LIST_CLASSNAME} ref={"MAJOR_LIST_" + e}  onClick={(e) => {this.props.setInput(i); this.dimMajors(e.target.innerText);}}>{e}</div>)).filter((e, i) => {return ((i % 8) === 3)})}
          </div>
          <div className="row">
            {C.MAJOR_LIST.map((e, i) => (<div className={C.MAJOR_LIST_CLASSNAME} ref={"MAJOR_LIST_" + e}  onClick={(e) => {this.props.setInput(i); this.dimMajors(e.target.innerText);}}>{e}</div>)).filter((e, i) => {return ((i % 8) === 4)})}
          </div>
          <div className="row">
            {C.MAJOR_LIST.map((e, i) => (<div className={C.MAJOR_LIST_CLASSNAME} ref={"MAJOR_LIST_" + e}  onClick={(e) => {this.props.setInput(i); this.dimMajors(e.target.innerText);}}>{e}</div>)).filter((e, i) => {return ((i % 8) === 5)})} 
          </div>
          <div className="row">
            {C.MAJOR_LIST.map((e, i) => (<div className={C.MAJOR_LIST_CLASSNAME} ref={"MAJOR_LIST_" + e}  onClick={(e) => {this.props.setInput(i); this.dimMajors(e.target.innerText);}}>{e}</div>)).filter((e, i) => {return ((i % 8) === 6)})}
          </div>
          <div className="row">
            {C.MAJOR_LIST.map((e, i) => (<div className={C.MAJOR_LIST_CLASSNAME} ref={"MAJOR_LIST_" + e}  onClick={(e) => {this.props.setInput(i); this.dimMajors(e.target.innerText);}}>{e}</div>)).filter((e, i) => {return ((i % 8) === 7)})}
            <div className="col-sm-5"><OtherMajorButton triggedField={() => {this.setState({show_other_major: !this.state.show_other_major}); this.props.setInput(C.OTHER_MAJOR); this.dimMajors(-1)}} /></div>
          </div>
        </div>
    </div>
  )


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
        detailText = "Emails will be used for checking into the Pulse 2020 conference as well as essential communciations."
        errText = "Hmm... that does not look like a valid email."
        break
      }

      case C.MAJOR: {
        promptText = (<p>What is your <strong>major</strong>?</p>)
        showDetails = true
        detailText = "Please select your major from the list below."
        break
      }

      case C.OTHER_MAJOR: {
        detailText = "Please type in your major."
        showDetails = true
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
      <div style={{paddingTop: "25px"}}>
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
        {/* Email err message */}
        <div className="row transparent" ref="errMessage">
          <div className="col" id="details" style={{marginTop: '5px'}}>
            <p className="fade-in">/* {errText} */</p>
          </div>
        </div>
        <div
          className="row"
          ref={this.props.currPrompt === C.EMAIL ? "email_row" : ""}
          id="input_row"
        >
          <div className="col-sm-2">
            <p className="dollar">pulse2020$</p>
          </div>
          <div className="col-sm-10">
            {this.props.currPrompt !== C.MAJOR ? (this.props.currPrompt !== C.SUBMIT ? (<form
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
            </form>) : (<Button ref={C.SUBMIT} id="submit_registration" onClick={() => this.props.submitForm()}>Yes</Button>)) :
            <Typist
              avgTypingDelay={40}
              cursor={{
                show: false,
                hideWhenDone: true,
                hideWhenDoneDelay: 10
              }}
              onTypingDone={() => {this.refs["cd_college_of_engineering_prompt"].className="dollar"}}
              >
              <Typist.Delay ms={1000} />
              cd College of Engineering
            </Typist>
          }
          </div>
          </div>
          {this.props.currPrompt === C.MAJOR && (<div className="row" style={{marginTop: "-4rem"}}>
            <div className="col-sm-2">
              <p className="transparent" ref="cd_college_of_engineering_prompt">pulse2020$</p>
            </div>
            <div className="col-sm-10">
              <Typist
                avgTypingDelay={100}
                cursor={{
                  show: false,
                  hideWhenDone: true,
                  hideWhenDoneDelay: 10
                }}
                onTypingDone={() => { this.refs["major_list"].className = ""}}
                >
                <Typist.Delay ms={2500} />
                ls
              </Typist>
            {this.genMajorJSX()}
            </div>
          </div>)}
        </div>
    );
    this.props.updatePromptJSX(promptJSX);
    }
    
  };

  render() {
    this.genJSX()
    return (
      <div className="container" style={{marginBottom: '10rem'}} ref="registration_form">
        {this.props.promptJSX}
      </div>
    );
  }
}

export default Register;


// Name email are required 