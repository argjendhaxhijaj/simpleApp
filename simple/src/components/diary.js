import React, { Component } from "react";
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import fire from './config/fire';
var uid;
fire.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      uid = user.uid
      console.log(user.uid)
    } else {
      // No user is signed in.
    }
  });

  
class Diary extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      pages: '',
      uid: uid,
    };
    this.submitData = this.submitData.bind(this);
    this.inputData = this.inputData.bind(this);
  }



submitData(event) {
  event.preventDefault();
  
  var rootRef = fire.database().ref(`Diary/${this.state.uid}`);
    
  rootRef.push({
      pages: this.state.pages,
    }).then((snap) => {

   }).catch(error => console.log(error));
    this.refs.pages.value = ''
    
}


  create() {
    
    return fire.database().ref(`Diary/${this.state.uid}`).on('value', snapshot => {
      var list = document.getElementById("pagesdisplay");
      /* while (list.hasChildNodes()) {  
        list.removeChild(list.firstChild);
      } */
      list.innerHTML=''

      snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.key;
        var pages = snapshot.child(childKey).child("pages").val();
        console.log(pages)

        var pagesList = [pages]
        var list = document.createElement('ul');
        list.classList.add('row')
        list.classList.add('listatpages')

        var success = document.getElementById("pagesdisplay");
        success.appendChild(list);

        pagesList.forEach(function (pages) {
          var li = document.createElement('textarea');
          var buton = document.createElement('input');
          buton.type = "button";
          buton.value = "x";
          buton.classList.add("butoni1")
          buton.classList.add("btn")
          buton.classList.add('col-lg-12')
          buton.id = "butoni"
          li.textContent = pages;
          li.readOnly=true
          li.classList.add("listatpages1")
          li.classList.add("col-lg-12")
          list.classList.add("ul")
          list.appendChild(buton)
          list.appendChild(li);

          li.setAttribute('data-id', pages)
          if (buton === null){
            console.log("Add up some pages")
          }
          else{
            
            console.log("continue")
              
            buton.addEventListener('click',(e)=>{
              console.log(childKey)
              console.log(pages)

              var r = window.confirm("Are you sure you want to delete this page of your life...");
              if (r === true) {
                return fire.database().ref("/Diary/"+uid+"/"+childKey).remove()
              } else {
                
              }
              
              
            })
            
          }
        });
        });

    });
    

  }


  componentDidMount() {
    fire
      .database()
      .ref(`Diary/${this.state.uid}`)
      .on('value', snap => console.log('from db', snap.val()));
    this.create();
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
    const pages = this.refs.pages.value;
    this.setState({ pages });
  }
  

  render() {
    return (
      <Container fluid>
        <Row class="text-center" style={{ marginTop: "30px", }}>
            <Col xs lg="12">
              <h1>Write</h1>
            </Col>
          </Row>

          <Row>
          <Col xs lg="2"></Col>
          <Col id="pagesdisplay" className="text-center" xs="12" lg="8" style={{height:"450px", overflowY: "auto"}}>

          </Col>
          <Col xs lg="2"></Col>
          </Row>

          <Row>
          <Col xs lg="2"></Col>
          <Col xs="12" lg="8">
          <form onSubmit={this.submitData}>
              <div class="form-group ">
                <label>Write your Day</label>
                {/* <input type="text" class="form-control" onChange={this.inputData} ref="pages" /> */}
                <textarea type="text" class="form-control" onChange={this.inputData} ref="pages" style={{resize: 'none'}} rows="2"></textarea>
                <small id="GoalHelp" class="form-text text-muted" >Write your feelings</small>
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
export default Diary;