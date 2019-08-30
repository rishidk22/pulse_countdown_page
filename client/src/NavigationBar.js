import React, { Component } from 'react';
import ResponsiveMenu from 'react-responsive-navbar';
import {Link} from 'react-router-dom';
import { FaBars, FaAngleUp, FaHome } from 'react-icons/fa';
import styled from 'styled-components';
import logo from './circle-cropped.png';

const Menu = styled.div`
    border-bottom: 2px solid White;
    padding-top: 10px;
    padding-left: 20px;

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
            color: purple;
        }
    }
    
    @media (max-width: 500px) {
        padding: 10px 0;
        li{
            padding: 10px 0;
            display: block;
            margin-left: 0;
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
                        <div>
                            <Menu className='text-left'>
                                <ul>
                                    <li>
                                        <Link to='/'>
                                            Home
                                            {/* <img width="2%" height="2%" src={logo} /> */}
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