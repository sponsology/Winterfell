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

var GiverPrivacyInput =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GiverPrivacyInput, _React$Component);

  function GiverPrivacyInput(props) {
    var _this;

    _classCallCheck(this, GiverPrivacyInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GiverPrivacyInput).call(this, props));
    _this.state = {
      checked: props.defaultChecked
    };
    return _this;
  }

  _createClass(GiverPrivacyInput, [{
    key: "handleChange",
    value: function handleChange(e) {
      var _this2 = this;

      if (e) {
        this.setState({
          checked: !this.state.checked
        }, function () {
          _this2.props.onChange(_this2.state.checked ? _this2.props.value : undefined);
        });
      } else {
        this.props.onChange(this.state.checked ? this.props.value : undefined);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.state.checked) {
        this.handleChange();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: this.props.classes.checkboxListItem
      }, React.createElement("p", null, "You have set up your Account details. Now you will step through setting up your Profile to find sponsorship alignment opportunities with Seekers."), React.createElement("input", {
        type: "checkbox",
        name: this.props.name,
        id: "id-privacy",
        autoComplete: this.props.autoComplete,
        "aria-labelledby": this.props.labelId,
        className: this.props.classes.checkbox,
        defaultChecked: this.state.checked,
        value: this.props.value,
        required: "required",
        onChange: this.handleChange.bind(this),
        onBlur: this.props.onBlur.bind(null, this.state.checked ? this.props.value : undefined)
      }), React.createElement("label", {
        className: this.props.classes.checkboxLabel,
        id: this.props.labelId,
        htmlFor: "id-privacy"
      }, "by checking this box, I agree to the terms of the\xA0", React.createElement("a", {
        href: "/privacy-policy"
      }, "Privacy Policy"), ", and the\xA0", React.createElement("a", {
        href: "/terms"
      }, "Terms and Conditions")));
    }
  }]);

  return GiverPrivacyInput;
}(React.Component);

GiverPrivacyInput.defaultProps = {
  text: "",
  defaultChecked: false,
  classes: {},
  name: "",
  autoComplete: "",
  value: "",
  onChange: function onChange() {},
  onBlur: function onBlur() {}
};
module.exports = GiverPrivacyInput;