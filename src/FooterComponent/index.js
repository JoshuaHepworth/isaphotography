import React from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";

const FooterPage = () => {
  return (

    <MDBFooter color="black" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-center">
        <MDBRow>
          <MDBCol md="4">
            <h2 className="title"><strong>Contact</strong></h2>
            <h4>
              (847) 521 2545
            </h4>
          </MDBCol>
           <MDBCol md="4">
            <h2 className="title"><strong>Questions?</strong></h2>
            <p>
              <h4><a href="mailto:Isabellarmorelli@gmail.com">Email me</a></h4>
            </p>
          </MDBCol>
          <MDBCol md="4">
            <h2 className="title"><strong>Follow me!</strong></h2>
            <MDBBtn size="sm" gradient="purple" a href="https://www.instagram.com/isaxphotography"><MDBIcon fab icon="instagram" size="5x" /></MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;