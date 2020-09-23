import React, { Component } from 'react';
import axios from 'axios';

class MessageForm extends Component {
  constructor(props) {
    super(props)
    this.state =
    {
      message: "",
      sender_id: localStorage.getItem("user_id"),
      receiver_id: this.props.requests.owner_id,
      request_id: this.props.requests.id
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({ messages: event.target.value })
  };

  handleSubmit = event => {
    event.preventDefault();

    axios.post("http://localhost:3003/messages")
      .then(res => {
        const messageSent = res.data;
        console.log(messageSent);
        this.setState({
          message: messageSent.message,
          sender_id: messageSent.sender_id,
          receiver_id: messageSent.receiver_id,
          request_id: messageSent.request_id
        })

      })

  }



  render() {
    return (
      <div className="MessageDoc">
        <form onSubmit={this.handleSubmit}>
          <input
            name="sender_id"
            value={this.state.sender_id}
            onChange={this.handleChange}
            required
          />

          <br />

          <input
            name="receiver_id"
            value={this.state.receiver_id}
            onChange={this.handleChange}
            required
          />

          <br />

          <input
            type="text"
            name="message"
            placeholder="message"
            value={this.state.message}
            onChange={this.handleChange}
            required
          />

          <br />

          <input
            name="request_id"
            value={this.state.request_id}
            onChange={this.handleChange}
            required
          />

          <br />

          <button type="submit">Send</button>

        </form>
      </div>
    );
  }
}

export default MessageForm;