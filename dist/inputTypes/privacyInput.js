'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var PrivacyInput = (function (_React$Component) {
  _inherits(PrivacyInput, _React$Component);

  function PrivacyInput(props) {
    _classCallCheck(this, PrivacyInput);

    _get(Object.getPrototypeOf(PrivacyInput.prototype), 'constructor', this).call(this, props);

    this.state = {
      checked: props.defaultChecked
    };
  }

  _createClass(PrivacyInput, [{
    key: 'handleChange',
    value: function handleChange(e) {
      var _this = this;

      if (e) {
        this.setState({
          checked: !this.state.checked
        }, function () {
          _this.props.onChange(_this.state.checked ? _this.props.value : undefined);
        });
      } else {
        this.props.onChange(this.state.checked ? this.props.value : undefined);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.state.checked) {
        this.handleChange();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: this.props.classes.checkboxListItem },
        React.createElement(
          'p',
          null,
          'You have set up your Account details.  Now you will step through setting up your Profile to find sponsorship alignment opportunities with Givers.  Next step is payment of your annual subscription.'
        ),
        React.createElement('input', { type: 'checkbox',
          name: this.props.name,
          id: 'id-privacy',
          autoComplete: this.props.autoComplete,
          'aria-labelledby': this.props.labelId,
          className: this.props.classes.checkbox,
          defaultChecked: this.state.checked,
          value: this.props.value,
          required: 'required',
          onChange: this.handleChange.bind(this),
          onBlur: this.props.onBlur.bind(null, this.state.checked ? this.props.value : undefined) }),
        React.createElement(
          'label',
          { className: this.props.classes.checkboxLabel,
            id: this.props.labelId,
            htmlFor: 'id-privacy' },
          'by checking this box, I agree to the terms of the ',
          React.createElement(
            'a',
            { href: '/privacy-policy' },
            'Privacy Policy'
          ),
          ', and the ',
          React.createElement(
            'a',
            { href: '/terms' },
            'Terms and Conditions'
          )
        )
      );
    }
  }]);

  return PrivacyInput;
})(React.Component);

;

PrivacyInput.defaultProps = {
  text: '',
  defaultChecked: false,
  classes: {},
  name: '',
  autoComplete: '',
  value: '',
  onChange: function onChange() {},
  onBlur: function onBlur() {}
};

module.exports = PrivacyInput;