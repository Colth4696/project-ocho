import React, { Component } from "react"
import MyMapComponent from "../MapContainer"
import AccordionMenu from "./Accordion"
import Counter from "./Counter"
import Footer from "../Footer"


class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [], requests: [], messages: [], volunteers: []
    }
  }

  render() {
    return (
      <div className="Dashboard">
        <AccordionMenu requests={this.state.requests} messages={this.state.messages} />
        <MyMapComponent requests={this.state.requests} volunteers={this.state.volunteers} user={this.props.user} />
        <Counter requests={this.state.requests} user={this.props.user} />
        <Footer />
      </div>

    );
  }
}

export default Dashboard; 