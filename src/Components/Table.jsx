import React, { Component } from 'react';

export class Table extends Component {
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
                <table>
                <tbody>
                {this.props.history.map(function (data) {
                    return (
                        <tr>
                            <td>{data.temperature}</td>
                        </tr>
                    );
                })}
                </tbody>
                </table>
            </div>
        );
    }
}

Table.defaultProps = {
    text: 'Hello',
    author: 'React'
}
