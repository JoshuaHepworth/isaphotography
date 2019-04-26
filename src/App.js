import React, { Component } from 'react';
import AppBarComponent from './AppBarComponent'
import ImageContainer from './ImageContainer'
import {Route, Switch} from 'react-router-dom'
import FooterComponent from './FooterComponent'
import Divider from '@material-ui/core/Divider';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'
import { MDBContainer, MDBRow, MDBCol, MDBView } from "mdbreact"
import AboutModal from './AboutModal'

library.add(faIgloo)

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="topPart">
          <AppBarComponent />
          
            <MDBView>
            <MDBContainer className="mt-5">
            <MDBRow>
              <MDBCol>
                <img src="https://i.imgur.com/aZHYl6p.png" className="rounded mx-auto d-block img-fluid" alt="aligment" />
                <AboutModal />
              </MDBCol>
            </MDBRow>
            </MDBContainer>
            </MDBView>
        </div>
            <br/>
                <ImageContainer />
                <br/>
                <br/>
                <br/>
                <Divider />
                <FooterComponent/>
            
            </div>
    );
  }
}

export default App;
