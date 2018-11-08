import React from 'react';
import { render } from 'react-dom';
import { Title } from './Components/Title';
import { Table } from './Components/Table';
import { w3cwebsocket } from 'websocket';

var IoT = React.createClass({
	getInitialState: function() {
		return {
			history: []
		}
	},

	handleData: function(payload) {
		var data = JSON.parse( payload.data );
		var history = this.state.history;

		history.push({
			temperature: data.temperature
		});

		this.setState({ history: history });
	},

	componentDidMount: function() {
		var websocket = new w3cwebsocket(this.props.uri, '');

		websocket.onmessage = this.handleData;
	},

	render: function() {
		return (
			<div>
    			<Table history={this.state.history} />
			</div>
		);
	}
});

render(
	<div>
		<IoT uri='ws://192.168.11.10:8000/object/123456/viewer' />
	</div>,
    document.getElementById('content')
);  