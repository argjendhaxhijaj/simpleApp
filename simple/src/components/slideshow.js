import React from "react";
import divi from "./divi.svg"
/* import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
 */
function Foto(){
        return (
            <div class='container-fluid mainnav' style={{marginBottom:"80px"}}>
            <div class='row text-center'>
            <div class='col-lg-12'>
            <img src={divi} alt="slideshow" />
            </div>
            </div>
            {/* <Button variant="primary">login</Button>
            <Container fluid>
                <Row class = "text-center">
                    <Col xs lg="6">
                        <img src={divi} alt="slideshow" />
                    </Col>
                </Row>
            </Container> */}
            </div>
        );
    }
export default Foto;