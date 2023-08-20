import './App.css';
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  // Person ={ fullName,bio, imgSrc, profession} and a boolean shows
  state = {
    fullName: "Fawole Akeeb",
    bio: "i am a web developer",
    imgSrc: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    profession: "web developer",
    isShows: true,
  };

 handleShow =()=> {
  this.setState({
    isShows: !this.state.isShows,
  });
};

render() {
  let showOrDont;
  if(this.state.isShows){
    showOrDont = {display: "inline"}
  } else {
    showOrDont = {display: "none"}
  }
  // if this.state.isShows is false, showOrDont should display none
  // if this.state.isShows is true, showOrDont should display inline
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.state.imgSrc} style={showOrDont}/>
        <Card.Body>
          <Card.Title style={showOrDont}>{this.state.fullName}</Card.Title><br/>
          <Card.Text style={showOrDont}>{this.state.bio}</Card.Text><br/>
          <Card.Text style={showOrDont}>{this.state.profession}</Card.Text><br/>
          <Button variant="primary" onClick={this.handleShow}>show or dont show</Button>
        </Card.Body>
      </Card>
    </div>
  )
}
}

export default App;
