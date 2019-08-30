import React from 'react';
import {Form, FormGroup, Input, Label, Button} from 'reactstrap';
import {Grid, Cell} from 'react-mdl';
import axios from 'axios'

export default class WebForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      email: '',
      message: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  async handleSubmit(e) {
    {/* e.preventDefault(); */}

    const{name, email, message} = this.state

    this.setState({
      name: '',
      email: '',
      message: '',
    })

    const form = await axios.post('/api/form', {
      name,
      email,
      message
    })
  }


  render() {
    return (
      <Form className = "contact-form" onSubmit = {this.handleSubmit} style = {{width: '600px'}}>
        <Grid>
            <Cell col = {6}>
              <FormGroup>
                <Label for = "name" style = {{color: 'white'}}>*Name</Label>
                <Input
                  type = "text"
                  name = "name"
                  onChange = {this.handleChange}
                />
              </FormGroup>

              <FormGroup>
                <Label for = "email" style = {{color: 'white'}}>*Email</Label>
                <Input
                  type = "text"
                  name = "email"
                  onChange = {this.handleChange}
                />
              </FormGroup>
            </Cell>
            <Cell col = {6}>
              <FormGroup>
                <Label for = "message" style = {{color: 'white'}}>*Message</Label>
                <Input
                  type = "textarea"
                  name = "message"
                  onChange = {this.handleChange}
                />
              </FormGroup>
            </Cell>
        </Grid>

        <Button onClick = {this.onSubmit}>Submit</Button>
      </Form>
    )
  }
}
