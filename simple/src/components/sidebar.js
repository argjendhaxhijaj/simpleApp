import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  /* useParams, */
  Link
} from "react-router-dom";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

import Goal from './goal';
import Motivate from './motivate';
import Diary from './diary';
import Meditate from './meditate';

class Sidebar extends Component {

  render(){
    return (
      <Router>
      <Container fluid>
      <Row>
      <Col xs='12' lg="2">
        <div class="text1">
          <ul style={{padding:'0px'}}>
              <li className="sidebari-elements">
                  <Link className="li1 li3 navbaritems" to="/set-a-goal" style={{color: "#A8CDD6"}}><FontAwesomeIcon icon={faBullseye}/><span className="li2"> Set a goal</span></Link> 
              </li>
              <li className="sidebari-elements">
                    <Link className="li1 li3 navbaritems" to="/meditation" style={{color: "#A8CDD6"}}><FontAwesomeIcon icon={faMoon}/><span className="li2"> Meditation</span></Link> 
              </li>
              <li className="sidebari-elements">
              <Link className="li1 li3 navbaritems" to="/write-diary" style={{color: "#A8CDD6"}}><FontAwesomeIcon icon={faBook}/><span className="li2"> Write diary</span></Link> 
              </li>
              <li className="sidebari-elements">
              <Link className="li1 li3" to="/motivate-yourself" style={{color: "#A8CDD6"}}><FontAwesomeIcon icon={faLeaf}/><span className="li2"> Motivate yourself</span></Link> 
              </li>
              
          </ul>
      </div>
      </Col>
      <Col xs='12' lg="9" style={{backgroundColor:"#BCD9E0", height:"700px", borderRadius:"20px"}}>
          <Switch>
          <Route path="/" exact component= { Goal0 }  />
          <Route path="/login" exact component= { Goal0 }  />
          <Route path="/set-a-goal" exact component= { Goal1 }  />
          <Route path="/meditation" exact component= { Meditate1 }  />
          <Route path="/write-diary" exact component= { Write }  />
          <Route path="/motivate-yourself" exact component= { Motivate1 }  />
          </Switch>
      </Col>
      <Col lg="1"></Col>
      </Row>
      </Container>
      </Router>
  );
  }
  
}

function Goal0()
    {
        return (
            <div>
                <Goal/>
            </div>
        );
    }

    function Goal1()
    {
        return (
            <div>
                <Goal/>
            </div>
        );
    }
      
      
      function Write() {
        return (
            <Diary/>
        );
      }
      function Motivate1() {
        return (
            <div>
                <Motivate/>
            </div>
        );
      }
      function Meditate1() {
        return (
            <div>
                <Meditate/>
            </div>
        );
      }
export default Sidebar;