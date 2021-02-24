import React, { Component } from "react";
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import fire from './config/fire';
var uid;
var key;
fire.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      uid = user.uid
      console.log(user.uid)
    } else {
      // No user is signed in.
    }
  });

  
class Goal extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      goals: '',
      uid: uid,
    };
    this.submitData = this.submitData.bind(this);
    this.inputData = this.inputData.bind(this);
  }



submitData(event) {
  event.preventDefault();
  
  var rootRef = fire.database().ref(`Goals/${this.state.uid}`);
    
  rootRef.push({
      goals: this.state.goals,
    }).then((snap) => {
      key = snap.key 
      console.log(key)
   }).catch(error => console.log(error));
    this.refs.goals.value = ''
    
}

  


  componentDidMount() {
    fire
      .database()
      .ref(`Goals/${this.state.uid}`)
      .on('value', snap => console.log('from db', snap.val()));
    this.create();
  }

 
create() {
    var list = document.getElementById("goalsdisplay");
    return fire.database().ref(`Goals/${this.state.uid}`).on('value', snapshot => {
      
      
      list.innerHTML = ''
      
      snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.key;
        var goals = childSnapshot.child("goals").val();

        /* var goals = snapshot.child(childKey).child("goals").val(); */
        console.log(goals)

        var goalsList = [goals]
        var list = document.createElement('ul');

        var success = document.getElementById("goalsdisplay");
        success.appendChild(list);

        console.log(list)

        goalsList.forEach(function (goals) {
          var li = document.createElement('li');
          var buton = document.createElement('input');
          buton.type = "button";
          buton.value = "x";
          buton.classList.add("butoni")
          buton.classList.add("btn")
          buton.id = "butoni"
          li.textContent = "I want to " + goals;
          li.classList.add("listat")
          list.classList.add("ul")
          list.appendChild(buton)
          list.appendChild(li);
          li.setAttribute('data-id', goals)
          if (buton === null){
            console.log("Add up some goals")
          }
          else{
            
            console.log("continue")
              
            buton.addEventListener('click',(e)=>{
              console.log(childKey)
              console.log(goals)
              return fire.database().ref("/Goals/"+uid+"/"+childKey).remove()
              
            })
            
          }
        });
        });

    });
  }
  

  /* submitData(event) {
    event.preventDefault();
    var ref = fire.database().ref(`Goals/${this.state.uid}`)
      
    key = ref.push({
        goals: this.state.goals,
      }).catch(error => console.log(error));
      this.refs.goals.value = ''
  } */

  
  inputData(event) {
    const goals = this.refs.goals.value;
    this.setState({ goals });
  }
  

  render() {
    return (
      <Container fluid>
        <Row class="text-center" style={{ marginTop: "30px", }}>
            <Col xs lg="12">
              <h1>Goals</h1>
            </Col>
          </Row>

          <Row>
          <Col xs lg="2"></Col>
          <Col id="goalsdisplay" xs="12" lg="8" style={{height:"450px", overflowY: "auto"}}>

          </Col>
          <Col xs lg="2"></Col>
          </Row>

          <Row>
          <Col xs lg="2"></Col>
          <Col xs="12" lg="8">
          <form onSubmit={this.submitData}>
              <div class="form-group ">
                <label>Write your Goal</label>
                <input type="text" class="form-control" placeholder="I want to" onChange={this.inputData} ref="goals" />
                <small id="GoalHelp" class="form-text text-muted" >Make that dream come true...</small>
                <input type="submit" value="Save" class="btn" style={{backgroundColor:"#D04540", color:"white", fontFamily:"Hartwell Alt semibold", width:"100%"}} />
              </div>
          </form>
          </Col>
          <Col xs lg="2"></Col>
          </Row>


          </Container>
          
    );
  }
}
export default Goal;