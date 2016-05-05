import React, { Component } from 'react';

export class Title extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            data: 0
        };
    }

    tick() {
        this.setState({
            data: this.state.data + 1
        });
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    componentDidMount() {
        this.interval = setInterval(this.tick.bind(this), 1000);
    }

    render() {
        return (
            <div>
                <h1>{this.props.text} by {this.props.author}</h1>
                <h2>{this.state.data}</h2>
            </div>
        );
    }
}

Title.defaultProps = {
    text: 'Hello',
    author: 'React'
}
