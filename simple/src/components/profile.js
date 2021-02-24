import React, { Component } from "react";
import fire from "./config/fire";
/* import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
 */
import quote from "./profilephoto2.png"

class Profile extends Component {

        logOut(){
            fire.auth().signOut();
        }
        render(){
            return (

                /* <html>
                <body id="Body" style={{backgroundImage:`url(${man})`, backgroundRepeat:"no-repeat",backgroundSize:"450px",backgroundPositionX:"right",backgroundPositionY:"40px"}}>
                <div class="container-fluid text-center">
                    <p class="mainnav" style={{textAlign:'center'}}>Hope to see you again...</p>
                    <div className="row">
                        <div class="col-12 col-lg-12">
                        <img src={quote} id="Dream"style={{width:"800px", margin:"0px"}} alt="quote" />
                        </div>
                    </div>
                    <form>
                        <button class="btn" style={{backgroundColor:"#D04540", color:"white", fontFamily:"Hartwell Alt semibold"}} onClick={this.logOut}>Log out</button>
                    </form>
                </div>
                </body>
              </html> */

              <html >
                <body>
                <div class="container-fluid text-center profile-html" style={{height:"65vh"}}>
                    <p class="mainnav" style={{textAlign:'center'}}>Have a great day...</p>
                    <div className="row" >
                        <div class="col-12 col-lg-12">
                        <img src={quote} id="Dream" style={{width:"90%"}} alt="quote" />
                        </div>
                    </div>
                    <form>
                        <button class="btn" style={{backgroundColor:"#D04540", color:"white", fontFamily:"Hartwell Alt semibold"}} onClick={this.logOut}>Log out</button>
                    </form>
                </div>
                </body>
              </html>
            
            
        );
        }
        
    }

export default Profile;