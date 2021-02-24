import React from "react";
import divi from "./divi.svg"
import logo from "./simple-logo.png"
/* import { Container } from 'react-bootstrap'; */
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
/* import { Container } from 'react-bootstrap'; */

export default function Home () {
        return (
        <div class='container-fluid mainnav' style={{marginBottom:"80px"}}>
        <div class='row text-center'>
        <div class='col-lg-12'>
        <img className="slideshow" src={divi} alt="slideshow" />
        </div>
        </div>


        <Row class = "text-center" style={{backgroundColor:"white", marginTop: "30px",}}>
            <Col xs="12" lg="6" className = "text-center">
                <img src={logo} style={{width:"50%", borderRadius: "20px", boxShadow: "5px 10px 50px #888888", marginTop:"10%", marginBottom:"10%"}} alt="Logo" />
            </Col>
            <Col xs lg="1"></Col>
            <Col xs="10" lg="4">
                <p class="text-justify mainnav" style={{marginTop:"30%", marginBottom:"30%"}}>Simple is a frendly platform to help people stay focused, see outside the box, inspire us all and the best part to become stronger.</p>
            </Col>
            <Col xs lg="1"></Col>
        </Row>

        
        
        </div>
        
        );
    }