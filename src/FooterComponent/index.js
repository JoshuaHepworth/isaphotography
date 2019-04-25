import React from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="black" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="4">
            <h4 className="title"><strong>Contact Us</strong></h4>
            <p>
              (630) 232 1172
            </p>
            <p>
              316 Campbell Street,<br/> Geneva, IL, 60134
            </p>
             <p>
            countrynaturals@sbcglobal.net
            </p>
          </MDBCol>
           <MDBCol md="4">
            <h4 className="title"><strong>Store hours</strong></h4>
            <p>
              <strong>Monday - Saturday:</strong> 10:00 am - 5:00 pm
            </p>
            <p>
              <strong>Sunday:</strong> 12:00 pm - 4:00 pm
            </p>
          </MDBCol>
          <MDBCol md="4">
            <h4 className="title"><strong>Follow us</strong></h4>
            <MDBBtn size="md" gradient="indigo" a href="https://www.facebook.com/CountryNaturals/"><MDBIcon fab icon="facebook" size="5x" /></MDBBtn>
            <MDBBtn size="md" gradient="indigo" a href="https://www.instagram.com/countrynaturals/"><MDBIcon fab icon="instagram" size="5x" /></MDBBtn>
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