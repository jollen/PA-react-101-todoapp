import React, { Component } from 'react';

export class Title extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            data: 0
        };
    }

    componentWillUnmount() {
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <i>{this.props.text}{this.props.temperature}</i>
            </div>
        );
    }
}

Title.defaultProps = {
    text: 'Hello',
    author: 'React'
}
