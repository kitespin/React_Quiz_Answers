import React, { Component } from 'react';

class Multiplier extends Component {
	render(){

		let { x , y } = this.props
		return(
			<div className="jumbotron">
				<h3>Multiplier</h3> 
				<p> { x * y } </p>
			</div>
		);
	}
	
}


export default Multiplier;