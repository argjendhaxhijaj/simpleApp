import React, { Component } from "react";
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col, Carousel } from 'react-bootstrap';
/* import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
 */
import CardDeck from 'react-bootstrap/CardDeck'
import api_key from './config/config'

//import motivateCard from './motivateCard';

class Events extends Component {

    constructor(props) {
        super(props);
        this.state = {
            eventtable: [],
        };
    }


    componentDidMount() {
        fetch('https://api.airtable.com/v0/appxp2BIVsmKv0FW9/EventTable?'+api_key)
            .then((resp) => resp.json())
            .then(data => {
                this.setState({ eventtable: data.records });
            }).catch(err => {
                // Error :(
            });
    }

    render() {
        return (
            <Container fluid style={{ overflowY: "auto" }} >
                <Row style={{ margin: "10px" }}>
                    <Col xs="12" lg="12">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 eventphoto"
                                    src="https://images.pexels.com/photos/4931334/pexels-photo-4931334.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                    alt="First slide"
                                />
                                {/* <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption> */}
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 eventphoto"
                                    src="https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                    alt="Third slide"
                                />
                                {/* <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption> */}
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 eventphoto"
                                    src="https://images.pexels.com/photos/3023756/pexels-photo-3023756.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                    alt="Third slide"
                                />
                                {/* <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption> */}
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>

                <Row style={{ margin: "10px" }}>
                    <Col xs="12" lg="12">
                        <CardDeck style={{ backgroundColor: "rgb(168, 205, 214)", borderRadius: "3px", paddingBottom: "10px" }} className="text-center  scrolling-wrapper">
                            {this.state.eventtable.map(events => <EventCard {...events.fields} />)}
                        </CardDeck>
                    </Col>
                </Row>

            </Container>

        );
    }
}
export default Events;

/* const EventCardCarousel = ({ EventName, Notes, Attachments, Date }) => (

<img src={Attachments[0].url} class="d-block w-100" alt="..." />

); */


const EventCard = ({ EventName, Notes, Attachments, Date }) => (
    <div class="col-sm-6 col-lg-3">
        <div id="scroll" className="card explorecard">
            <img className="card-img-top explorephoto" src={Attachments[0].url} alt="Movie poster" />
            <div className="card-body">
                <h5 className="card-title">{EventName}</h5>
                <p className="card-text">{Notes}</p>
                <p className="card-text"><time datetime=''>{Date}</time></p>
            </div>
        </div>
    </div>

);


