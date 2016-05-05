'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TodoApp = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TodoList = require('./TodoList');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoApp = exports.TodoApp = function (_Component) {
    _inherits(TodoApp, _Component);

    function TodoApp(props, context) {
        _classCallCheck(this, TodoApp);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TodoApp).call(this, props, context));

        _this.state = {
            text: ''
        };

        _this._handleClick = _this._handleClick.bind(_this);
        _this._handleChange = _this._handleChange.bind(_this);
        return _this;
    }

    _createClass(TodoApp, [{
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {}
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: '_handleClick',
        value: function _handleClick() {}
    }, {
        key: '_handleChange',
        value: function _handleChange(e) {
            this.setState({
                text: e.target.value
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement("div", null, _react2.default.createElement(_TodoList.TodoList, { items: this.state.text }), _react2.default.createElement("input", { onChange: this._handleChange, value: this.state.text }), _react2.default.createElement("button", { onClick: this._handleClick }, "Add"));
        }
    }]);

    return TodoApp;
}(_react.Component);

TodoApp.defaultProps = {};
//# sourceMappingURL=TodoApp.js.map
