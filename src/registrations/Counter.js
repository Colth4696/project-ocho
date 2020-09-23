import React, { Component } from 'react'
import axios from 'axios'

class Counter extends Component {
    constructor(props){
        super(props)
        this.state={
            requests:  props.requests
        }
    }

    componentDidMount() 
    {
    axios.get("http://localhost:3003/requests") 
        .then(data => {
            console.log(data)
            this.setState({
                requests: this.state.requests.concat(data)
            });
    });
        }

    render() {
        return(
            <div>
                <h1>
                Amount of Requests: {this.state.requests.length}
                </h1>
            </div>
        )
        
    }
}

export default Counter