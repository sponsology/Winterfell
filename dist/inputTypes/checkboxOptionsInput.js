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

var React = require("react");

var cloneArray = require("../lib/cloneArray");

var CheckboxOptionsInput =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CheckboxOptionsInput, _React$Component);

  function CheckboxOptionsInput(props) {
    var _this;

    _classCallCheck(this, CheckboxOptionsInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CheckboxOptionsInput).call(this, props));
    _this.state = {
      value: _this.props.value.length > 0 ? cloneArray(_this.props.value) : []
    };
    return _this;
  }

  _createClass(CheckboxOptionsInput, [{
    key: "handleChange",
    value: function handleChange(newVal, e) {
      var currentValue = this.state.value;

      if (e.target.checked) {
        currentValue.push(newVal);
      } else {
        currentValue = currentValue.filter(function (v) {
          return v != newVal;
        });
      }

      this.setState({
        value: currentValue
      }, this.props.onChange.bind(null, currentValue));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement("ul", {
        className: this.props.classes.checkboxList
      }, this.props.options.map(function (opt) {
        return React.createElement("li", {
          key: opt.value,
          className: _this2.props.classes.checkboxListItem
        }, React.createElement("input", {
          type: "checkbox",
          name: _this2.props.name,
          id: "id-" + opt.value.replace(/\s+/g, ""),
          autoComplete: _this2.props.autoComplete,
          "aria-labelledby": _this2.props.labelId,
          value: opt.value,
          checked: _this2.state.value.indexOf(opt.value) > -1,
          className: _this2.props.classes.checkbox,
          required: _this2.props.required ? "required" : undefined,
          onChange: _this2.handleChange.bind(_this2, opt.value),
          onBlur: _this2.props.onBlur.bind(null, _this2.state.value)
        }), React.createElement("label", {
          className: _this2.props.classes.checkboxLabel,
          id: _this2.props.labelId,
          htmlFor: "id-" + opt.value
        }, opt.text));
      }));
    }
  }]);

  return CheckboxOptionsInput;
}(React.Component);

CheckboxOptionsInput.defaultProps = {
  classes: {},
  name: "",
  value: [],
  options: [],
  autoComplete: "",
  onChange: function onChange() {},
  onBlur: function onBlur() {}
};
module.exports = CheckboxOptionsInput;