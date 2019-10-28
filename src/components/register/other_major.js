import React from 'react'
import { Button } from 'reactstrap'

class OtherMajorButton extends React.Component {
    state = { hidden: true }
    componentDidMount = () => {setTimeout(() => this.setState({hidden: false}), 2700)}
    render = () => {
        return (!this.state.hidden ? (<Button className="my-auto" style={{width: "100%", fontFamily: "monospace"}} ref={"other_major"} onClick={() => {this.props.triggedField()}}>Other</Button>) : <div></div>)
    }
}

export default OtherMajorButton




