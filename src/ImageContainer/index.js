import React, { Component } from "react";
import {
  MDBRow,
  MDBCol,
  MDBContainer
} from "mdbreact";

class CarouselPage extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="12" className="mb-3">
          <img src="https://i.imgur.com/E3Gq7q4.jpg" className="img-fluid z-depth-1" alt="" />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol lg="4" md="12" className="mb-3">
          <img src="https://i.imgur.com/1JIHt7n.jpg" className="img-fluid z-depth-1" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-3">
            <img src="https://i.imgur.com/I5xWjAb.jpg" className="img-fluid z-depth-1" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-3">
            <img src="https://i.imgur.com/AuFFlKH.jpg" className="img-fluid z-depth-1" alt="" />
          </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol md="6" className="mb-3">
          <img src="https://i.imgur.com/Co1snXj.jpg" className="img-fluid z-depth-1" alt="" />
        </MDBCol>
        <MDBCol md="6" className="mb-3">
          <img src="https://i.imgur.com/zlkAIeT.jpg" className="img-fluid z-depth-1" alt="" />
        </MDBCol>
      </MDBRow>
       <MDBRow>
        <MDBCol md="6" className="mb-3">
          <img src="https://i.imgur.com/jI7AniU.jpg" className="img-fluid z-depth-1" alt="" />
        </MDBCol>
        <MDBCol md="6" className="mb-3">
          <img src="https://i.imgur.com/qjcQ3la.jpg" className="img-fluid z-depth-1" alt="" />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    );
  }
}

export default CarouselPage;