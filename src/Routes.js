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
                <Router>
                    <div class="mainbody">

                        <ParticleWrapper />

                        <Route exact path="" component={App} />
                        <Route exact path="/" component={App} />
                        <Route path="/pulse_countdown_page/schedule" component={Schedule} />
                        <Route path="/pulse_countdown_page/events" component={Events} />
                        <Route path="/pulse_countdown_page/speakers" component={Speakers} />
                        <Route path="/pulse_countdown_page/sponsors" component={Sponsors} />
                        <Route path="/pulse_countdown_page/contact" component={Contact} />
                        <Route path="/pulse_countdown_page/about" component={About} />
                        <Route path="/pulse_countdown_page/register" component={Register} />

                        <Route path="/sponsor_us" component={SponsorUs}/>
                        <Route path="/pulse_countdown_page" component={App} />

                    </div>
                </Router>
            </div>
        );
    }
}

export default Routes;
