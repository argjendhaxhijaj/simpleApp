import React, { Component } from "react";
/* import { useHistory } from "react-router-dom";
import ReactDOM from "react-dom"; */
import Sidebar from "./sidebar";
import Explore from "./event";
import Profile from "./profile";
import Goal from './goal';
import Motivate from './motivate';
import Diary from './diary';
import Meditate from './meditate';
import { Col, Row, Container } from 'react-bootstrap';

import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  /* useParams, */
  Link
} from "react-router-dom";


class Loggednavbar extends Component {
  

  render(){
    return (
      <Router>
      <div class='container-fluid mainnav'>
      <div class='row'>
      <div class='col-lg-6 col-6'>
          <li>
              <Link className="mainnav" to="/">Simple</Link>
          </li>
      </div>
      <div class='col-lg-6 col-6 text-right'>
          <ul style ={{padding:"0px"}}>
              <li class='text-right' style={{display:"inline-block", paddingRight:"10px"}}>
                  {/* <a href="#" class='li' style={{color: "#A8CDD6"}}>log in / Sign up</a> */}
                  <Link className="li" to="/events" style={{color: "#A8CDD6"}}>Events</Link> 
              </li>
              <li class='text-right' style={{display:"inline-block"}}>
                  <Link className="li" to="/profile" style={{color: "#A8CDD6"}}>Profile</Link>
              </li>
          </ul>
      </div>
      </div>
      </div>

      <Switch>
          <Route path="/" exact component= { Home2 }  />
          <Route path="/login" exact component= { Home2 }  />
          <Route path="/events" exact component= { Explore1 }  />
          <Route path="/profile" exact component= { Profile1 }  />

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
          
      </Switch>

      </Router>
  );
  }
  
}

    function Home2()
    {
        return (
          <Sidebar/>
          
        );
    }
      
      function Explore1() {
        return (
          <Explore/>
        );
      }
      function Profile1() {
        return (
          <Profile/>
        );
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

export default Loggednavbar;