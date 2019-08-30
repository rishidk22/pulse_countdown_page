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

import Logo from "./circle-cropped.png";
import ParticleWrapper from './ParticleWrapper';
import ResponsiveMenu from 'react-responsive-navbar';
import NavigationBar from './NavigationBar';

class Routes extends Component {
    render() {
        return (
            <div>
                

                <Router>
                    <div class="mainbody">
                        {/* <Navbar position="absolute">
                            <Navbar.Brand href="/">
                                {'Pulse Visions'}
                            </Navbar.Brand> 
                            <Nav.Link href="/schedule">Schedule</Nav.Link>
                        </Navbar> */}

                        {/* <ResponsiveMenu
                            menuOpenButton={<div />}
                            menuCloseButton={<div />}
                            changeMenuOn="500px"
                            largeMenuClassName="large-menu-classname"
                            smallMenuClassName="small-menu-classname"
                            menu={
                                <ul>
                                    <li>Item 1</li>
                                    <li>Item 2</li>
                                    <li>Item 3</li>
                                    <li>Item 4</li>
                                </ul>
                            }
                        /> */}

                        <NavigationBar />

                        <ParticleWrapper />

                        <Route exact path="/" component={App} />
                        <Route path="/schedule" component={Schedule} />
                        <Route path="/events" component={Events} />
                        <Route path="/speakers" component={Speakers} />
                        <Route path="/sponsors" component={Sponsors} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/about" component={About} />
                        <Route path="/register" component={Register} />
                        

                    </div>
                </Router>
            </div>
        );
    }
}

export default Routes;