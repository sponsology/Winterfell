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

var ReactDOM = require('react-dom');

var _ = require('lodash').noConflict();

var QuestionPanel = require('./questionPanel');

var Winterfell =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Winterfell, _React$Component);

  function Winterfell(props) {
    var _this;

    _classCallCheck(this, Winterfell);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Winterfell).call(this, props));
    _this.formComponent = null; // Set our default values for props.

    var props = _.extend({
      schema: {
        formPanels: [],
        questionPanels: [],
        questionSets: [],
        classes: {}
      },
      questionAnswers: {},
      ref: 'form',
      encType: 'application/x-www-form-urlencoded',
      method: 'POST',
      action: '',
      panelId: undefined,
      disableSubmit: false,
      renderError: undefined,
      renderRequiredAsterisk: undefined,
      buttonState: ''
    }, _this.props);

    _this.panelHistory = [];

    var schema = _.extend({
      classes: {},
      formPanels: [],
      questionPanels: [],
      questionSets: []
    }, props.schema);

    schema.formPanels = schema.formPanels.sort(function (a, b) {
      return a.index > b.index;
    });
    var panelId = typeof props.panelId !== 'undefined' ? props.panelId : schema.formPanels.length > 0 ? schema.formPanels[0].panelId : undefined;
    var currentPanel = typeof schema !== 'undefined' && typeof schema.formPanels !== 'undefined' && typeof panelId !== 'undefined' ? _.find(schema.formPanels, function (panel) {
      return panel.panelId == panelId;
    }) : undefined;

    if (!currentPanel) {
      throw new Error('Winterfell: Could not find initial panel and failed to render.');
    }

    _this.state = {
      schema: schema,
      currentPanel: currentPanel,
      action: props.action,
      questionAnswers: props.questionAnswers,
      buttonState: props.buttonState
    };
    return _this;
  }

  _createClass(Winterfell, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        action: nextProps.action,
        schema: nextProps.schema,
        questionAnswers: Object.assign({}, nextProps.questionAnswers, this.state.questionAnswers),
        buttonState: nextProps.buttonState
      });
    }
  }, {
    key: "handleAnswerChange",
    value: function handleAnswerChange(questionId, questionAnswer) {
      var questionAnswers = _.chain(this.state.questionAnswers).set(questionId, questionAnswer).value();

      this.setState({
        questionAnswers: questionAnswers
      }, this.props.onUpdate.bind(null, questionAnswers));
    }
  }, {
    key: "handleSwitchPanel",
    value: function handleSwitchPanel(panelId, preventHistory) {
      var panel = _.find(this.props.schema.formPanels, {
        panelId: panelId
      });

      if (!panel) {
        throw new Error('Winterfell: Tried to switch to panel "' + panelId + '", which does not exist.');
      }

      if (!preventHistory) {
        this.panelHistory.push(panel.panelId);
      }

      this.setState({
        currentPanel: panel
      }, this.props.onSwitchPanel.bind(null, panel));
    }
  }, {
    key: "handleBackButtonClick",
    value: function handleBackButtonClick() {
      this.panelHistory.pop();
      this.handleSwitchPanel.call(this, this.panelHistory[this.panelHistory.length - 1], true);
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(action) {
      var _this2 = this;

      if (this.props.disableSubmit) {
        this.props.onSubmit(this.state.questionAnswers, action);
        return;
      }
      /*
       * If we are not disabling the functionality of the form,
       * we need to set the action provided in the form, then submit.
       */


      this.setState({
        action: action
      }, function () {
        if (!_this2.formComponent) {
          return;
        }

        _this2.formComponent.submit();
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var currentPanel = _.find(this.state.schema.questionPanels, function (panel) {
        return panel.panelId == _this3.state.currentPanel.panelId;
      });

      return React.createElement("form", {
        method: this.props.method,
        encType: this.props.encType,
        action: this.state.action,
        ref: function ref(_ref) {
          return _this3.formComponent = _ref;
        },
        className: this.state.schema.classes.form
      }, React.createElement("div", {
        className: this.state.schema.classes.questionPanels
      }, React.createElement(QuestionPanel, {
        schema: this.state.schema,
        classes: this.state.schema.classes,
        panelId: currentPanel.panelId,
        panelIndex: currentPanel.panelIndex,
        panelHeader: currentPanel.panelHeader,
        panelText: currentPanel.panelText,
        action: currentPanel.action,
        button: currentPanel.button,
        backButton: currentPanel.backButton,
        questionSets: currentPanel.questionSets,
        questionAnswers: this.state.questionAnswers,
        panelHistory: this.panelHistory,
        renderError: this.props.renderError,
        renderRequiredAsterisk: this.props.renderRequiredAsterisk,
        onAnswerChange: this.handleAnswerChange.bind(this),
        onPanelBack: this.handleBackButtonClick.bind(this),
        onSwitchPanel: this.handleSwitchPanel.bind(this),
        onSubmit: this.handleSubmit.bind(this),
        buttonState: this.state.buttonState
      })));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.panelHistory.push(this.state.currentPanel.panelId);
      this.props.onRender();
    }
  }]);

  return Winterfell;
}(React.Component);

;
Winterfell.inputTypes = require('./inputTypes');
Winterfell.errorMessages = require('./lib/errors');
Winterfell.validation = require('./lib/validation');
Winterfell.addInputType = Winterfell.inputTypes.addInputType;
Winterfell.addInputTypes = Winterfell.inputTypes.addInputTypes;
Winterfell.addErrorMessage = Winterfell.errorMessages.addErrorMessage;
Winterfell.addErrorMessages = Winterfell.errorMessages.addErrorMessages;
Winterfell.addValidationMethod = Winterfell.validation.addValidationMethod;
Winterfell.addValidationMethods = Winterfell.validation.addValidationMethods;
Winterfell.defaultProps = {
  onSubmit: function onSubmit() {},
  onUpdate: function onUpdate() {},
  onSwitchPanel: function onSwitchPanel() {},
  onRender: function onRender() {}
};
module.exports = Winterfell;