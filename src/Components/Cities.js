import React from "react";
import axios from "axios";
import { PowerSelect } from 'react-power-select';
import 'react-power-select/dist/react-power-select.css';

class Cities extends React.Component{

	state = {
		locations: [],
		selectedOption:''
	};

	componentDidMount() {
    axios
      .get('https://data.sfgov.org/resource/wwmu-gmzc.json')
      .then(response => {
		let a = [];
      response.data.map((place)=> {
      			a.push({location:place.locations});
      		})
		this.setState({ locations:a })	
  		
  		})
  	}
  	handleChange = ({ option }) => {
	    this.props.getLocation(option);
	    this.setState({
	      selectedOption: option
	    });
  	};
  	
	render(){
		//console.log("state", this.state); 
		
		return(
			<div>
				<PowerSelect
		          options={this.state.locations.map(place => place.location || '')}
		          selected={this.state.selectedOption}
		          onChange={this.handleChange}
		        />
			</div>
		);
	}
}
export default Cities;
