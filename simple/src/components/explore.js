import React, { Component } from "react";
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
/* import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
 */
import CardDeck from 'react-bootstrap/CardDeck'

//import motivateCard from './motivateCard';

class Explore extends Component {

  constructor(props) {
    super(props);
    this.state = {
      exploretable: [],
      explorename: [],
      exploreimage: [],
      exploredescription: [],
      exploresongstable: [],
      exploresuccesstable: [],
    };
  }
  

  componentDidMount() {
    fetch('https://api.airtable.com/v0/appxp2BIVsmKv0FW9/Explore?api_key=keyWtbCl7BmLhMmtQ')
      .then((resp) => resp.json())
      .then(data => {
        //this.setState({ exploretable: data.records }); bonja koment bre qesej
        //console.log(data.records); 
        let list = [];
        let list1 = [];
        let list2 = [];
        data.records.forEach(element => {
          list.push(element.fields.Name);
        });
        data.records.forEach(element => {
          list1.push(element.fields.imageexplore);
        });
        data.records.forEach(element => {
          list2.push(element.fields.Descriptions);
        });
        this.setState({
          explorename: list,
          exploreimage: list1,
          exploredescription: list2,
        });
      }).catch(err => {
        // Error :(
      });

      fetch('https://api.airtable.com/v0/appxp2BIVsmKv0FW9/Explore?api_key=keyWtbCl7BmLhMmtQ')
      .then((resp) => resp.json())
      .then(data => {
        this.setState({ exploretable: data.records });
      }).catch(err => {
        // Error :(
      });

    

    fetch('https://api.airtable.com/v0/appxp2BIVsmKv0FW9/ExploreSongs?api_key=keyWtbCl7BmLhMmtQ')
      .then((resp) => resp.json())
      .then(data => {
        this.setState({ exploresongstable: data.records });
      }).catch(err => {
        // Error :(
      });

    fetch('https://api.airtable.com/v0/appxp2BIVsmKv0FW9/SuccessStories?api_key=keyWtbCl7BmLhMmtQ')
      .then((resp) => resp.json())
      .then(data => {
        this.setState({ exploresuccesstable: data.records });
      }).catch(err => {
        // Error :(
      });
  }


  componentDidUpdate()
  {
    console.log(this.state.exploreimage);
  }

  
  /* audio(){
    var song = document.getElementById("audio");
    var song1
    var source
    if(song === "")
    {
        console.log('there is no audio')
    }
    else{
    song1.document.createElement('audio');
    song.appendChild(song1)
    source.document.createElement('source');
    source.src= {song}
    song1.appendChild(source)
    }
  } */

  render() {
    return (
      <Container fluid style={{ overflowY: "auto" }} >
        <Row class="text-center" style={{ marginTop: "30px", }}>
          <Col xs lg="12">
            <h1>Explore</h1>
          </Col>
        </Row>
        <Row style={{margin:"10px"}}>
          <Col xs="12" lg="12">
            <CardDeck style={{backgroundColor:"rgb(168, 205, 214)", borderRadius:"3px", paddingBottom:"10px"}} className="text-center scrolling-wrapper">
              {this.state.exploretable.map(explore => <Explorecard  {...explore.fields} />)}
            </CardDeck>
          </Col>
        </Row>

        <Row class="text-center" style={{ marginTop: "30px", }}>
          <Col xs lg="12">
            <h1>Feel the beat</h1>
          </Col>
        </Row>

        <Row style={{margin:"10px"}}>
          <Col xs="12" lg="12">
            <CardDeck style={{backgroundColor:"rgb(168, 205, 214)", borderRadius:"3px", paddingBottom:"10px"}} className="text-center scrolling-wrapper">
              {this.state.exploresongstable.map(explore1 => <Explorecardsong  {...explore1.fields} />)}
            </CardDeck>
          </Col>
        </Row>

        <Row class="text-center" style={{ marginTop: "30px" }}>
          <Col xs lg="12">
            <h1>Success Stories</h1>
          </Col>
        </Row>

        <Row style={{margin:"10px"}}>
          <Col xs="12" lg="12">
            <CardDeck style={{backgroundColor:"rgb(168, 205, 214)", borderRadius:"3px", paddingBottom:"10px"}} className="text-center  scrolling-wrapper">
              {this.state.exploresuccesstable.map(explore2 => <ExplorecardSuccess  {...explore2.fields} />)}
            </CardDeck>
          </Col>
        </Row>

      </Container>

    );
  }
}
export default Explore;

/* function Example1() {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Modal show={show} onHide={handleClose}>
      
        <Modal.Header closeButton>
        <Modal.Title>hello</Modal.Title>
        </Modal.Header>
        <Modal.Body>hello</Modal.Body>
      </Modal>
    </>
  );
} */

const Explorecard = ({ Name, imageexplore, Descriptions }) => (
  <div class="col-sm-6 col-lg-3" >
    <div className="card explorecard">
      <img className="card-img-top explorephoto" src={imageexplore[0].url} alt="Movie poster" />
      <div className="card-body">
        <h5 className="card-title">{Name}</h5>
        <p className="card-text">{Descriptions}</p>
        
    </div>
  </div>
  </div>
);



const Explorecardsong = ({ Name, image, Notes, song }) => (
  <div class="col-sm-6 col-lg-3" >
    <div className="card explorecard">
      <img className="card-img-top explorephoto" src={image[0].url} alt="Movie poster" />
      <div className="card-body">
        <h5 className="card-title">{Name}</h5>
        <p className="card-text">{Notes}</p>
        <audio controls className="audio">
          <source src={song[0].url} />
            Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  </div>

);



const ExplorecardSuccess = ({ Name, Notes, image }) => (
  <div class="col-sm-6 col-lg-3">
    <div id="scroll" className="card explorecard">
      <img className="card-img-top explorephoto" src={image[0].url} alt="Movie poster" />
      <div className="card-body">
        <h5 className="card-title">{Name}</h5>
        <p className="card-text">{Notes}</p>
      </div>
    </div>
  </div>

);


