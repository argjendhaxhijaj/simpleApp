import React from "react";
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlusSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Footer(){
    return (
        <div>
            <Container fluid>
            <Row class = "text-center" style={{marginTop: "30px",}}>
                <Col xs="12" lg="3"></Col>
                <Col xs="12" lg="6">
                    <p class="mainnav text-center">Simple</p>
                </Col>
                <Col xs="12" lg="3"></Col>
            </Row>

            <Row class = "text-center" style={{marginTop: "10px", marginBottom: "10px", textAlign:"center"}}>
                <Col xs lg="6" >
                <button href="www.facebook.com" class='btn li' style={{color: "#A8CDD6", textDecoration:"none",}} disabled>EN / AL</button>
                </Col>
                <Col xs lg="6">
                <a href="www.facebook.com" class='li' style={{color: "#A8CDD6", textDecoration:"none", margin: "5px", fontSize:"25px"}}><FontAwesomeIcon icon={faFacebookSquare} /></a>
                <a href="www.facebook.com" class='li' style={{color: "#A8CDD6", textDecoration:"none", margin: "5px", fontSize:"25px"}}><FontAwesomeIcon icon={faInstagramSquare} /></a>
                <a href="www.facebook.com" class='li' style={{color: "#A8CDD6", textDecoration:"none", margin: "5px", fontSize:"25px"}}><FontAwesomeIcon icon={faTwitterSquare} /></a>
                <a href="www.facebook.com" class='li' style={{color: "#A8CDD6", textDecoration:"none", margin: "5px", fontSize:"25px"}}><FontAwesomeIcon icon={faGooglePlusSquare} /></a>
                </Col>
            </Row>
        </Container>
        </div>
    );
}
export default Footer;