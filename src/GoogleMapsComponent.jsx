import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        request: {} 
        };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    
    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    render() {
        return (
            <Map
            google={this.props.google}
            zoom={16}
            initialCenter={{
                lat: -104.948516,
                lng: 39.889986
            }} >
            <Marker
                onClick={this.onMarkerClick}
                name={this.props.request} />
            
            <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}
                onClose={this.state.onClose} >

            <div>
                <h4>{this.state.requests}</h4>
            </div>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyB465RpcGT8xIHfVYXmsDZP657fvRgqQr0"
})(MapContainer);