import React, { Component } from 'react'
import { Form, TextArea } from 'semantic-ui-react'
import axios from 'axios'

class ChatBox extends Component {
  constructor(props){
  super(props)
    this.state= {messages: []}
}

handleChange = (event) => {
  const {name, value} = event.target
  this.setState({
    [name]: value
  })
};

handleClick = (event) => {
  event.preventDefault()
  const {message, sender_id, receiver_id, request_id} = this.state
  let inquiry = {
    message: message,
    sender: sender_id,
    receiver_id: receiver_id,
    request_id: request_id
  }

      axios.post("http://localhost:3003/messages/", {inquiry},
      { withCredentials: true }
      )
      .then(response => {
          if (response.data.status === 'created') {
          this.props.handleSuccessfulAuth(response.data);            
      }
  })        
      .catch(error => {
          console.log("request error", error);
      });
      event.preventDefault();
  };
  
  render(){
    return(
      <Form>
        <header>Message User</header>
        <TextArea defaultValue='Send a message' />
        <button type="submit" onClick={this.handleClick}>Send</button>
      </Form>
    )
  }
}

export default ChatBox