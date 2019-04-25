import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import './styles.css'

class ModalPage extends Component {
state={
  modal5: false
}

toggle = nr => () => {
  let modalNumber = 'modal' + nr
  this.setState({
    [modalNumber]: !this.state[modalNumber]
  });
}

render() {
  return (
    <MDBContainer>
      <MDBBtn className="button" color="black" onClick={this.toggle(5)}>Learn more</MDBBtn>
      <MDBModal isOpen={this.state.modal5} toggle={this.toggle(5)} size="fluid">
        <MDBModalHeader toggle={this.toggle(5)}><h1><strong>About us</strong></h1></MDBModalHeader>
        <MDBModalBody>
        <h2>
         <strong>Discover the warmth of this circa 1850 historic 12 room house filled with farmhouse accents, candles, natural soaps, florals, primitives, garden and vintage finds.</strong>
         <br/>
         <br/>
         <strong>Visit this charming two level shop around the corner for unique gifts and selfish necessities.</strong>
        </h2>
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="black" onClick={this.toggle(5)}>Close</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    );
  }
}

export default ModalPage;