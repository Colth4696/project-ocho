import React from "react";
import MyMarker from "./MyMarker"
import axios from "axios";

class RequestMarkers extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      requests: []
  }
};

  fetchdata =  () => {
    const current_user = localStorage.getItem("current_user")
    axios.get("http://localhost:3003/requests.json?user_id="+current_user)
        .then(data => {
        console.log(data)
        this.setState({
          requests: this.state.requests
        })
      })
  };

  componentDidMount() {
    localStorage.setItem("current_user", "*")
    this.fetchdata()
  };

  render() {
    return (
      <div>
        {this.state.requests.map(request => {
          console.log(request)

          return (<MyMarker position={{ latitude:request.latitude, longitude:request.longitude }}
            title={request.title} description={request.description}
            request={request}
            key={request.id} 
            request_id={request.id}
            user={this.props.user} />)
        })
        }
      </div>
    )
  }
}

export default RequestMarkers;


// requests.find_by(owner_id: session_params[:userid])
// rewrite callbacks to use async await for axios 
// setState feature
