import React, { Component } from 'react';
import ResponsiveMenu from 'react-responsive-navbar';
import {Link} from 'react-router-dom';
import { FaBars, FaAngleUp, FaHome } from 'react-icons/fa';
import styled from 'styled-components';
import logo from './circle-cropped.png';

const Menu = styled.div`
    // Solid white line
    border-bottom: 2px solid White;

    // Cut line off at ends
    margin-left: 50px;
    margin-right: 50px;

    padding-top: 10px;

    ul {
        padding: 0;
    }
     
    li {
        display: inline;
        font-size= 10px;
        list-style-type: none;
        margin-right: 30px;
    } 
    
    a { 
        text-decoration: none;
        font-size: 20px;
        color: White;
        
        &:hover {
            color: rgb(212, 7, 212);
        }
    }
    
    @media (max-width: 500px) {
        padding: 10px 0;
        li{
            padding: 10px 0;
            display: block;
            margin-right: 0;
        }
    }
    `;


class NavigationBar extends Component {
    constructor(){
        super();
    }

    render() {
        return (
            <div class="overlay">
                <ResponsiveMenu
                    menuOpenButton={<FaBars size={30}/>}
                    menuCloseButton={<FaAngleUp size={30}/>}
                    menu={
                        <div className="menuContainer">
                            <Menu className='text-right menuComponent'>
                                <ul>
                                    <li className="cornerIcon">
                                    <Link to='/' className="cornerIcon">
                                        <img width="100%" height="100%" src={logo} alt="Home" />
                                    </Link>
                                    </li>
                                    <li>
                                        <Link to='/schedule'>Schedule</Link>
                                    </li>
                                    <li>
                                        <Link to='/events'>Events</Link>
                                    </li>
                                    <li>
                                        <Link to='/speakers'>Speakers</Link>
                                    </li>
                                    <li>
                                        <Link to='/sponsors'>Sponsors</Link>
                                    </li>
                                    <li>
                                        <Link to='/contact'>Contact</Link>
                                    </li>
                                    <li>
                                        <Link to='/about'>About</Link>
                                    </li>
                                    <li>
                                        <Link to='/register'>Register</Link>
                                    </li>
                                </ul>
                            </Menu>
                        </div>
                    }
                />
            </div>
        )
    }
}

export default NavigationBar;