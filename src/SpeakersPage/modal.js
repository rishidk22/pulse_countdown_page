import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react';
import Picture from '../Assets/person-512.png';

const ModalExampleTopAligned = () => (
  <Modal trigger={<Button>Learn More</Button>} centered={true} closeIcon>
    <Modal.Header>My Name</Modal.Header>
    <Modal.Content image>
      <Image src={Picture}/>
      <Modal.Description>
        <Header>Person's Name</Header>
        <p>Hello</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default ModalExampleTopAligned