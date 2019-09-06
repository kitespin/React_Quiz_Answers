//Create a component <HideMe>Blah blah blah</HideMe> that uses children to 
//accept some content. When the component is clicked the content should be hidden.

import React, { Component } from 'react';

class HideMe extends Component {

constructor(props) {
        // make sure you always add this, it makes Component work
        super(props);

        // setup our state. Set initial state to false as not clicked
        this.state = {
            clicked: true,
        };

        // force this to always be *this* this in handleClick
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        //this is what is run when onClick is fired, it changes the state to true.
        this.setState({ clicked: !this.state.clicked });
    }


	render(){

		let { children } = this.props
		return(
			<div>
			<h3>HideMe</h3>
			<div onClick={ this.handleClick } className="jumbotron"> 
				<p> { this.state.clicked ?  children  : "" } </p>
			</div>
			</div>
		);
	}
	
}


export default HideMe;
