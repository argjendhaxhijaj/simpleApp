import React, { Component } from 'react';
import './App.css';
import Mainnavbar from './components/nav'
import Footer from './components/footer'
/* import ReactDOM from 'react-dom'; */
import fire from './components/config/fire'
import Loggednavbar from "./components/loggednavbar";
/* import './fonts/Hartwell-Alt-semibold.ttf'
 */


class App extends Component {
  constructor(props){
    super(props);

    this.state={
      user: {},
    }
      this.authListener = this.authListener.bind(this);

    }
    componentDidMount()
    {
      this.authListener();

      

    }
    authListener(){
      fire.auth().onAuthStateChanged((user) => {
        if (user) {
          
          this.setState({ user: true });
        }

        else {
          this.setState({ user: null });
        }
      })
    }


render(){
      switch (this.state.user) {
        case true:
          return (
            <div>
              <Loggednavbar/>
              <Footer/>
            </div>
          );
        default:
          return (
            <div>
              <Mainnavbar/>
              <Footer/>
            </div>
            
          );
      }
    }
      
}


      

export default App;
