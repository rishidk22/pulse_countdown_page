import React from 'react';
// import logo from './logo.svg';
import './Speakers.css';
import Picture from '../Assets/person-512.png';
import ProfileModal from './modal';

function Speakers() {

  return (
    <SpeakerPage></SpeakerPage>
  )
}
function SpeakerPage() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Our Speakers</h1>
      </header>
      <Row/>
    </div>
  );
}

function Speaker() {
  return (
    <div className="speaker">
      <img src={ Picture }  className="picture" onClick={ProfileModal}/>
      <h3>Firstname Lastname</h3>
      <p>CEO of company. Nobel Prize Winner. Turing Award Recipient.
        Pulitzer Prize winner,  3x Academy Award Nominee. Olympic Gold Medalist. Youtuber. Mom.
      </p>
      {/* <Button variant="primary" onClick={() => setModalShow(true)}>Read More</Button> */}
      <ProfileModal/>
    </div>
  );
}

function Row() {
  return (
    <div className="row">
      <div className="column">
        <Speaker/>
      </div>
      <div className="column">
        <Speaker/>
      </div>
      <div className="column">
        <Speaker/>
      </div>
    </div>
  )
}

export default Speakers;
