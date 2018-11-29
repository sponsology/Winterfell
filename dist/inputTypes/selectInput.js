"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var React = require('react');

var SelectInput =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SelectInput, _React$Component);

  function SelectInput(props) {
    var _this;

    _classCallCheck(this, SelectInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SelectInput).call(this, props));
    _this.state = {
      value: _this.props.value
    };
    return _this;
  }

  _createClass(SelectInput, [{
    key: "handleChange",
    value: function handleChange(e) {
      this.setState({
        value: e.target.value
      }, this.props.onChange.bind(null, e.target.value));
    }
  }, {
    key: "render",
    value: function render() {
      var options = this.props.options.map(function (opt) {
        return React.createElement("option", {
          key: opt.value,
          value: opt.value
        }, opt.text);
      });
      return React.createElement("select", {
        name: this.props.name,
        id: this.props.id,
        className: this.props.classes.select,
        autoComplete: this.props.autoComplete,
        value: this.state.value,
        ref: "select",
        required: this.props.required ? 'required' : undefined,
        onChange: this.handleChange.bind(this),
        onBlur: this.props.onBlur.bind(null, this.state.value)
      }, options);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      /*
       * Selects automatically pick the first item, so
       * make sure we set it.
       */
      this.handleChange({
        target: {
          value: this.refs.select.value
        }
      });
    }
  }]);

  return SelectInput;
}(React.Component);

;
SelectInput.defaultProps = {
  classes: {},
  name: '',
  id: '',
  value: '',
  options: [],
  autoComplete: '',
  onChange: function onChange() {},
  onBlur: function onBlur() {}
};
module.exports = SelectInput;