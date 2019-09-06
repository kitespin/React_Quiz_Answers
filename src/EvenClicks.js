 
import React, { Component } from "react";

class EvenClicks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //Set initial state to 0
            count: 0,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let { count } = this.state;
        // update count to add 1 every time handleClick is fired
        this.setState({ count: count + 1 });
    }

    render() {
        let { count } = this.state;

        return (
            <div className="jumbotron">
                <h3>Odds or Even</h3>
                {/* when onClick get the count and check if it is divisible by 2 if true return even */}
                <p onClick={ this.handleClick }>{ count % 2 === 0 ? "Even" : "Odd" }</p>
            </div>
        );
    }
}

export default EvenClicks;