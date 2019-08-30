import React, {Component} from 'react';
import ParticleWrapper from './ParticleWrapper';
import {Grid, Cell} from 'react-mdl';
import WebForm from './Form';

class Contact extends Component {
  render() {
    return (
        <div>
            <Grid>
                <Cell col = {12}>
                    <WebForm />
                </Cell>
            </Grid>
        </div>
    );
  }
}

export default Contact;
