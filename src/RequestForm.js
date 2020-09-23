import React, { Component } from "react"
import axios from "axios"

class RequestForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            description: "",
            latitude: "",
            longitude: "",
            owner_id: "",
            request_type: ""
        };
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
          [name]: value
        })
      };
    
    handleSubmit = (event) => {
        event.preventDefault()
        const {title, description, latitude, longitude, request_type} = this.state
        let request = {
          title: title,
          description: description,
          latitude: latitude,
          longitude: longitude,
          request_type: request_type,
        }

            axios.post("http://localhost:3003/requests", {request},
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

    render() {
        return (
            <div className="Request">
                <form onSubmit={this.handleSubmit}>
                    <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={this.state.title}
                    onChange={this.handleChange}
                    required
                    />

                    <br/>

                    <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={this.state.description}
                    onChange={this.handleChange}
                    required
                    />

                    <br/>

                    <input
                    type="decimal"
                    name="latitude"
                    placeholder="Latitude"
                    value={this.state.latitude}
                    onChange={this.handleChange}
                    required
                    />

                    <br/>

                    <input
                    type="decimal"
                    name="longitude"
                    placeholder="Longitude"
                    value={this.state.longitude}
                    onChange={this.handleChange}
                    required
                    />

                    <br/>

                    <div>
                    <input
                    type="text"
                    name="request_type"
                    value={this.state.request_type}
                    onChange={this.handleChange}
                    required
                    />
                    Material or One-Time
                    </div>

                    <br/>

                    <button type="submit">Submit</button>

                </form>
            </div>
        );
    }
}

export default RequestForm