import React, { Component } from 'react';
import MapContainer from './Components/MapContainer.js'
import Cities from './Components/Cities.js';
import axios from 'axios';

class App extends Component {
  
  state={
    lat:'',
    lng:''
  };

  getLocation = place =>{
    var x=place.split(" ")
    var y=x.join('+')
    //console.log(y);
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${y}&key=AIzaSyCQHA_QsbDPGtQ9ZJA2N01lKfUr6Fi5xTQ`)
    .then(response => {
        //console.log("response", response.data);
        this.setState({                                                
          lat: response.data.results[0].geometry.location.lat,
          lon: response.data.results[0].geometry.location.lng
        });
      });
  }
  render() {
    console.log("state",this.state);
    return (
      <div>
        <Cities getLocation={this.getLocation}/>
        <MapContainer lat={this.state.lat} lon={this.state.lng}/>
      </div>
    );
  }
}

export default App;
