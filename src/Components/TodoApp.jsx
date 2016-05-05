import React, { Component } from 'react';
import { TodoList } from './TodoList';

export class TodoApp extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            text: ''
        };

        this._handleClick = this._handleClick.bind(this);
        this._handleChange = this._handleChange.bind(this);
    }

    componentWillUnmount() {
    }

    componentDidMount() {
    }

    _handleClick() {

    }

    _handleChange(e) {
        this.setState({
            text: e.target.value
        })
    }

    render() {
        return (
            <div>
                <TodoList items={this.state.text} />
                <input onChange={this._handleChange} value={this.state.text} />
                <button onClick={this._handleClick}>Add</button>
            </div>
        );
    }
}

TodoApp.defaultProps = {
}
