import React, { Component } from 'react';

class CountBy extends Component {

    constructor(props) {
        super(props);

        this.state = {
        // setup our state. Set initial state to 0
            counter: 0,
        };

        // force this to always be *this* this in handleClick
        this.handleClick = this.handleClick.bind(this);
 
    }

    handleClick() {
        // get current value of counter
        let current = this.state.counter;
        //update state adding the prop steps every time the handleClick is fired
        this.setState({ counter: current + this.props.step }); 
    }




    render(){
        return(
            <div className= "jumbotron" >
                {/* display counter */}
                <h3>CountBy</h3>
                <h3>{ this.state.counter }</h3> 
            {/* when onClick is fired adds this.prop.step to counter */}
                <button className ="btn btn-primary" onClick = { this.handleClick}>+</button>
               
            </div> 
        );
    }
}


export default CountBy;
