import React from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class HoverButton extends React.Component {
    render() {
        return (
            <Button id="hoverbutton" className="sponsor_us"><a href="https://drive.google.com/file/d/1CCmoF_RuC-W2bVRUZGWsZsIwMsRSuZzo/view?usp=sharing" target="_blank">Sponsor Us</a>

           </Button>
        )
    }
}

export default HoverButton