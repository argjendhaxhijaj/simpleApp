import React, { Component } from "react";
/* import { useHistory } from "react-router-dom";
import ReactDOM from "react-dom"; */
import Login from './login_page';
import Home from './home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  /* useParams, */
  Link
} from "react-router-dom";

//const Mainnavbar = () => {
//    return React.createElement(
//        'div',
//        {id:'main-navbar', className: 'mainnav'},
//        React.createElement('a', null, 'simple')
//    )
//}

class Mainnavbar extends Component {

  render(){
    return (
      <Router>
      <div class='container-fluid mainnav'>
      <div class='row'>
      <div class='col-lg-6 col-6'>
          <li>
              {/* <a href="#" class="mainnav">Simple</a> */}
              <Link className="mainnav" to="/">Simple</Link>
          </li>
      </div>
      <div class='col-lg-6 col-6 text-right'>
          <ul>
              <li>
                  {/* <a href="#" class='li' style={{color: "#A8CDD6"}}>log in / Sign up</a> */}
                  <Link className="li" to="/login" style={{color: "#A8CDD6"}}>log in / sign up</Link> 
              </li>
          </ul>
      </div>
      </div>
      </div>

      <Switch>
          <Route path="/" exact component= { Home1 }  />
          <Route path="/login" exact component= { Login1 }  />
          <Route path="/profile" exact component= { Login1 }  />
          <Route path="/explore" exact component= { Login1 }  />
      </Switch>

      </Router>
  );
  }
  
}

    function Home1()
    {
        return (
          <Home/>
          
        );
    }
      
      function Login1() {
        return (
          <Login />
        );
      }

export default Mainnavbar;