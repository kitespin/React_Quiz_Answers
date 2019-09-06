 
import React, { Component } from "react";

class EvenClicks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let { count } = this.state;
        this.setState({ count: count + 1 });
    }

    render() {
        let { count } = this.state;

        return (
            <div className="jumbotron">
                <h3>Odds or Even</h3>
                <p onClick={ this.handleClick }>{ count % 2 === 0 ? "Even" : "Odd" }</p>
            </div>
        );
    }
}

export default EvenClicks;