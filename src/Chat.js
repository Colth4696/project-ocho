import React, { Component } from 'react'
import MessageForm from './MessageForm'
import axios from 'axios'

const AcceptRequest = ({ onDoubleClick, handleVolunteers }) => 
(
  <button className="accept" 
  onDoubleClick={onDoubleClick}
  onClick={handleVolunteers}>
    Accept
  </button>
)

const MessageBox = ({ onClick, request }) => 
(
  <div className="M-Form">
  <CloseBox onClick={onClick} request={request} />
  </div>
)

const CloseBox = ({ onClick, request }) => {
console.log(request)
return(
  <div>
    <MessageForm request={request}/>
  <button className="Close" 
  onClick={onClick}>X</button>
  </div>
)
}
class Chat extends Component{
  constructor(props){
    super(props)

    this.state={
      showMessage: false
    }

    this.boundShowMessage = this.showMessage.bind(this)
    this.boundHideMessage = this.hideMessage.bind(this)
    this.boundHandleVolunteers = this.handleVolunteers.bind(this)
  }

  handleVolunteers = (event) => {
    event.preventDefault()
    const {sender_id, request_id} = this.props
    const volunteer = 
    {
      sender_id: sender_id,
      request_id: request_id
    } 
    console.log("volunteer", volunteer)
    axios.post("http://localhost:3003/volunteers", {volunteer},
    { withCredentials: true }
    )
    .then(response => {
      console.log("created", response)
  })        
    .catch(error => {
        console.log("message error", error);
    });
    event.preventDefault();
  };

    showMessage() {
      this.setState({ showMessage: true })
    }

    hideMessage() {
      this.setState({ showMessage: false })
    }

    render(){

      return(
        <div>
          <AcceptRequest onDoubleClick={this.boundShowMessage} handleVolunteers={this.boundHandleVolunteers}/>
          {this.state.showMessage && <MessageBox request={this.props.request} onClick={this.boundHideMessage}/>}
        </div>
      )
    }
}

export default Chat