import React, { Component } from "react";
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
/* import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
 */
import api_key from './config/config'
import CardDeck from 'react-bootstrap/CardDeck'

//import motivateCard from './motivateCard';

class Explore extends Component {

  constructor(props) {
    super(props);
    this.state = {
      meditateTable: []
    };
  }
  

  componentDidMount() {

      fetch('https://api.airtable.com/v0/appxp2BIVsmKv0FW9/MeditateCard?'+api_key)
      .then((resp) => resp.json())
      .then(data => {
        this.setState({ meditateTable: data.records });
      }).catch(err => {
        // Error :(
      });
    }

  render() {
    return (
      <Container fluid id="mainmotivate" style={{height:"680px", overflowY: "auto"}} >
        <Row class="text-center" style={{ marginTop: "30px", }}>
          <Col xs lg="12">
            <h3>Be happy... meditate...</h3>
          </Col>
        </Row>
        <Row >
          <Col xs="12" lg="12">
            <CardDeck style={{borderRadius:"3px", paddingBottom:"10px"}} className="text-center">
              {this.state.meditateTable.map(meditate => <MeditateCard  {...meditate.fields} />)}
            </CardDeck>
          </Col>
        </Row>
      </Container>

    );
  }
}
export default Explore;

const MeditateCard = ({ Name, Notes, Attachments, Images}) => (
  <div class="col-sm-6 col-lg-4" >
    <div id="scroll" className="card explorecard" style={{overflowY:"scroll"}}>
      {Images == null ? 
      <video className="card-img-top explorephoto1" width="320" height="240" preload="metadata" controls>
        <source src={Attachments[0].url+"#t=0.001"} type="video/mp4"/>
        Your browser does not support the video tag.
    </video>: 
    <img className="card-img-top explorephoto" src={Images[0].url} alt="Movie poster" />}
    

    



    <div className="card-body">
        <h5 className="card-title">{Name}</h5>
        <p className="card-text">{Notes}</p>
    </div>
  </div>
  </div>
);