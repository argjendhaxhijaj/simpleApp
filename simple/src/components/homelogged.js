import React, { Component } from "react";
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Sidebar  from './sidebar'



class Homelogged extends Component {
        render(){
            return (
            <div>
                <Container fluid>
                        <Row class = "text-center">
                            <Col xs='12' lg="12">
                                <Sidebar/>
                            </Col>
                        </Row>
                </Container>    
            </div>
            
        );
        }
        
    }

export default Homelogged;