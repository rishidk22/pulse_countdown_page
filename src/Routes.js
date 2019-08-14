import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { LayersManager, Layer } from 'react-layers-manager';
import styled from 'styled-components';

import App from './App';
import Schedule from './Schedule';
import Events from './Events';
import Speakers from './Speakers';
import Sponsors from './Sponsors';
import Contact from './Contact';
import About from './About';
import Register from './Register';
import SponsorUs from './SponsorUs'

import Logo from "./circle-cropped.png";
import ParticleWrapper from './ParticleWrapper';
import ResponsiveMenu from 'react-responsive-navbar';
import NavigationBar from './NavigationBar';

class Routes extends Component {
    render() {
      // removed <NavigationBar />

        return (
            <div>
                <Router basename={process.env.PUBLIC_URL}>
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
                        <Route path="/pulse_countdown_page" component={App} />

                    </div>
                </Router>
            </div>
        );
    }
}

export default Routes;
