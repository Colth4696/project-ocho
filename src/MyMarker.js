import React from "react"
import { Marker, InfoWindow } from "react-google-maps"
import RedIcon from "./red-user-icon.png"
import GreenIcon from "./green-home-icon.png"
import "./MyMarker.css"
import Chat from "./Chat"
import axios from "axios"

class MyMarker extends React.Component {
  constructor(props) {
    super(props)
    this.state = { flag: false, messages: [], requests: [] }
  }

  getRequests = async () => {
    await axios.get("http://localhost:3003/requests")
    .then(response =>{
      const requests = response.data;
      this.setState=({requests: requests})
    })
  }

  componentDidMount() {
    this.getRequests()
  }

  toggle_open = () => {
    this.setState({ flag: !this.state.flag })
  }

  getIcon = () => {
    if (this.props.request.request_type === "Material" ) { return RedIcon }
    else { return GreenIcon }
  }
  

  render() {
    return (
      <div>
        <Marker
          position={this.props.requests}
          onClick={this.toggle_open}
          icon={this.getIcon()}>

          {this.state.flag && <InfoWindow onCloseClick={this.toggle_open}>

            <div>
              <h1>{this.props.requests.title}</h1>
              <h3>{this.props.requests.description}</h3>
              <Chat requests={this.props.request} user={this.props.user} />
            </div>
          </InfoWindow>}
        </Marker>
      </div>
    )
  }
}

export default MyMarker