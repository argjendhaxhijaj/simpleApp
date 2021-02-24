import React,{Component} from "react";
import { Form } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import fire from './config/fire'
import login from "./loginphoto.png"


class Login extends Component {
        constructor(props)
        {
            super(props);
            this.login = this.login.bind(this);
            this.signup = this.signup.bind(this);
            this.handleChange = this.handleChange.bind(this);
            this.state={
                email : '',
                password : '',
            };
        }

        login(e) {
            e.preventDefault();
            fire.auth().signInWithEmailAndPassword (this.state.email, this.state.password).catch(function(error) {
                var errorMessage = error.message;
                document.getElementById('error').innerHTML = errorMessage;
                document.getElementById('error').style.color = 'rgb(208, 69, 64)';
              });
        }

        handleChange(e){
            this.setState({
                [e.target.name] : e.target.value
            })
        }

        signup = (e) => {
            e.preventDefault();
            fire.auth().createUserWithEmailAndPassword (this.state.email, this.state.password).then((u)=>{
                console.log(u)
            }).catch((err)=>{
                console.log(err);
                var errorMessage = err.message;
                document.getElementById('error').innerHTML = errorMessage;
                document.getElementById('error').style.color = 'rgb(208, 69, 64)';
            })
        }
        

        render() {
            return (
                <div>
                    <Container fluid>
                        <Row className = "row-login" style={{ marginTop: "30px",marginLeft: "10px"}}>
                            <Col xs='12' lg="6">
                                
                                <Row>
                                    <Col xs lg="12">
                                    <p class="text-justify mainnav" style={{}}>Welcome wonderful person....</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs='12' lg="8">
                                    <Form.Group controlId="email">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type ="email" name="email" class="form-control" id="email" placeholder="Enter email" onChange={this.handleChange} defaultValue={this.state.email}/>
                                        <Form.Text id="error" className="information-text" style={{color:'#6c757d'}}>
                                        We'll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group controlId="password">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type ="password" name="password" class="form-control" id="password" placeholder="Password" onChange={this.handleChange} defaultValue={this.state.password}/>
                                    </Form.Group>
                                    </Col>
                                    <Col xs='12' lg="4"></Col>
                                </Row>
                                
                                <Row>
                                    <Col xs="6" lg="4">

                                    <button class="btn" style={{backgroundColor:"#E2A19A", color:"white", fontFamily:"Hartwell Alt semibold", width:"100%"}} onClick={this.login}>Log in</button>
                                    {/* <Button style={{width:"100%"}} onClick={this.login}>Log in</Button> */}

                                    </Col>
                                    <Col xs="6" lg="4" /* style={{textAlign:"right"}} */ class="butoni">

                                    <button class="btn" style={{backgroundColor:"#E2A19A", color:"white", fontFamily:"Hartwell Alt semibold", width:"100%"}} onClick={this.signup}>Sign up</button>
                                    {/* <Button style={{width:"100%"}} onClick={this.signup}>Sign up</Button> */}

                                    </Col>
                                    <Col xs lg="4"></Col>
                                </Row>
                            </Col>

                            <Col xs lg="6" className="text-center">
                                <img src={login}  style={{width:"80%", margin:"0px"}} alt="quote" />
                            </Col>
                        </Row>
                    </Container>

                    {/* <form>
                        <div class="form-group">
                            <input type ="email" name="email" class="form-control" id="email" placeholder="enter email" onChange={this.handleChange} defaultValue={this.state.email}/>
                            <input type ="password" name="password" class="form-control" id="password" placeholder="enter password" onChange={this.handleChange} defaultValue={this.state.password}/>

                            <button onClick={this.login}>Log in</button>
                            <button onClick={this.signup}>Sign up</button>
                        </div>
                        
                    </form> */}
                </div>
            );
        }
        }

export default Login;