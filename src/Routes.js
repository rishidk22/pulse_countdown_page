import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from './App';
import Schedule from './Schedule';
import Events from './Events';
import Speakers from './Speakers';
import Sponsors from './Sponsors';
import Contact from './Contact';
import About from './About';
import Register from './Register';
import SponsorUs from './SponsorUs'
import ParticleWrapper from './ParticleWrapper';

class Routes extends Component {
    render() {


        return (
            <div>
                <Router basename="/pulse_countdown_page">

                    <div class="mainbody">
                        <ParticleWrapper />

                        <Route exact path="/" component={App} />
                        <Route path="/schedule" component={Schedule} />
                        <Route path="/events" component={Events} />
                        <Route path="/speakers" component={Speakers} />
                        <Route path="/sponsors" component={Sponsors} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/about" component={About} />
                        <Route path="/register" component={Register} />

                        <Route path="/sponsor_us" component={SponsorUs}/>
                        {/* <Route path="/pulse_countdown_page" component={App} /> */}

                    </div>
                </Router>
            </div>
        );
    }
}

export default Routes;
