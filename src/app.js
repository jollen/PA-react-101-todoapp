'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _Title = require('./Components/Title');

var _Table = require('./Components/Table');

var _websocket = require('websocket');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IoT = _react2.default.createClass({ displayName: "IoT",
	getInitialState: function getInitialState() {
		return {
			history: []
		};
	},

	handleData: function handleData(payload) {
		var data = JSON.parse(payload.data);
		var history = this.state.history;

		history.push({
			temperature: data.temperature
		});

		this.setState({ history: history });
	},

	componentDidMount: function componentDidMount() {
		var websocket = new _websocket.w3cwebsocket(this.props.uri, '');

		websocket.onmessage = this.handleData;
	},

	render: function render() {
		return _react2.default.createElement("div", null, _react2.default.createElement(_Table.Table, { history: this.state.history }));
	}
});

(0, _reactDom.render)(_react2.default.createElement("div", null, _react2.default.createElement(IoT, { uri: "ws://192.168.11.10:8000/object/123456/viewer" })), document.getElementById('content'));
//# sourceMappingURL=app.js.map
