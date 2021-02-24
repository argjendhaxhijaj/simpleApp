import React, { Component } from "react";
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import CardDeck from 'react-bootstrap/CardDeck'
import api_key from './config/config'

class Motivate extends Component {

  constructor(props) {
    super(props);
    this.state = {
      motivateTable: []
    };
  }

  componentDidMount() {
    fetch('https://api.airtable.com/v0/appxp2BIVsmKv0FW9/Motivation?'+api_key)
      .then((resp) => resp.json())
      .then(data => {
        this.setState({ motivateTable: data.records });
      }).catch(err => {
        // Error :(
      });
  }

  render() {
    return (
      <Container fluid id="mainmotivate" style={{ height: "680px", overflowY: "auto" }}>
        <Row class="text-center" style={{ marginTop: "30px", }}>
          <Col xs lg="12">
            <h1>Motivate</h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="12">
            <CardDeck className="text-center">
              {this.state.motivateTable.map(motivate => <Motivatecard  {...motivate.fields} />)}
            </CardDeck>
          </Col>
        </Row>
      </Container>

    );
  }
}
export default Motivate;

const Motivatecard = ({ Simplequotes, Quotes, Videoquotes, Author, Videoauthor, Quotesimg, Videourl, Imageurl }) => (
  <>
    {Quotesimg == null && Quotes == null && Author == null ?
      null : <div class="col-sm-6 col-lg-4" >
        <div className="card karta">
          <img className="card-img-top explorephoto" src={Quotesimg[0].url} alt="Motivation" />
          <div className="card-body scrolldiv text-justify">
            <h5 className="card-title">{Quotes}</h5>
            <p>{Author}</p>
          </div>
        </div>
      </div>}

    {Quotesimg == null && Quotes == null && Author == null && Videourl == null ? <div class="col-sm-6 col-lg-4" >
      <div className="card karta">
        <img className="card-img-top explorephoto" src={Imageurl[0].url} alt="Motivation" />
        <div className="card-body scrolldiv text-justify">
          <h5 className="card-title">{Simplequotes}</h5>
        </div>
      </div>
    </div> : null}

    {Quotesimg == null && Quotes == null && Author == null && Simplequotes == null ?
      <div class="col-sm-6 col-lg-4" >
        <div className="card karta">
          <video className="card-img-top explorephoto1" width="320" height="240" preload="metadata" controls>
            <source src={Videourl[0].url + "#t=0.001"} type="video/mp4" />
        Your browser does not support the video tag.
    </video>
          <div className="card-body scrolldiv text-justify">
            <h5 className="card-title">{Videoquotes}</h5>
            <p>{Videoauthor}</p>
          </div>
        </div>
      </div> : null}
  </>
)