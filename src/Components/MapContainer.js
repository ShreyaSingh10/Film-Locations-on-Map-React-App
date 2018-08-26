import React from 'react';
import {Map,Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component {
  render() {
    //console.log("lat",this.props.lat);
    //console.log("lng",this.props.lng);

    return (
      <Map google={this.props.google} zoom={14}>
        <Marker position={{lat: this.props.lat, lng: this.props.lng}} />
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyCQHA_QsbDPGtQ9ZJA2N01lKfUr6Fi5xTQ")
})(MapContainer)
