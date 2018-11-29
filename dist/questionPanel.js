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

var _ = require('lodash').noConflict();

var KeyCodez = require('keycodez');

var Validation = require('./lib/validation');

var ErrorMessages = require('./lib/errors');

var Button = require('./button');

var QuestionSet = require('./questionSet');

var QuestionPanel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(QuestionPanel, _React$Component);

  function QuestionPanel(props) {
    var _this;

    _classCallCheck(this, QuestionPanel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(QuestionPanel).call(this, props));
    _this.state = {
      validationErrors: _this.props.validationErrors,
      buttonState: _this.props.buttonState
    };
    return _this;
  }

  _createClass(QuestionPanel, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        validationErrors: nextProps.validationErrors,
        buttonState: nextProps.buttonState
      });
    }
  }, {
    key: "handleAnswerValidate",
    value: function handleAnswerValidate(questionId, questionAnswer, validations) {
      var _this2 = this;

      if (typeof validations === 'undefined' || validations.length === 0) {
        return;
      }
      /*
       * Run the question through its validations and
       * show any error messages if invalid.
       */


      var questionValidationErrors = [];
      validations.forEach(function (validation) {
        if (Validation.validateAnswer(questionAnswer, validation, _this2.props.questionAnswers)) {
          return;
        }

        questionValidationErrors.push({
          type: validation.type,
          message: ErrorMessages.getErrorMessage(validation)
        });
      });

      var validationErrors = _.chain(this.state.validationErrors).set(questionId, questionValidationErrors).value();

      this.setState({
        validationErrors: validationErrors,
        buttonState: 'error'
      });
    }
  }, {
    key: "handleMainButtonClick",
    value: function handleMainButtonClick() {
      var _this3 = this;

      this.setState({
        validationErrors: [],
        buttonState: 'loading'
      });
      var action = this.props.action.default;
      var conditions = this.props.action.conditions || [];
      /*
       * We need to get all the question sets for this panel.
       * Collate a list of the question set IDs required
       * and run through the schema to grab the question sets.
       */

      var questionSetIds = this.props.questionSets.map(function (qS) {
        return qS.questionSetId;
      });

      var questionSets = _.chain(this.props.schema.questionSets).filter(function (qS) {
        return questionSetIds.indexOf(qS.questionSetId) > -1;
      }).value();
      /*
       * Get any incorrect fields that need error messages.
       */


      var invalidQuestions = Validation.getQuestionPanelInvalidQuestions(questionSets, this.props.questionAnswers);
      /*
       * If the panel isn't valid...
       */

      if (Object.keys(invalidQuestions).length > 0) {
        var validationErrors = _.mapValues(invalidQuestions, function (validations) {
          return validations.map(function (validation) {
            return {
              type: validation.type,
              message: ErrorMessages.getErrorMessage(validation)
            };
          });
        });

        this.setState({
          validationErrors: validationErrors,
          buttonState: 'error'
        });
        return;
      }
      /*
       * Panel is valid. So what do we do next?
       * Check our conditions and act upon them, or the default.
       */


      conditions.forEach(function (condition) {
        var answer = _this3.props.questionAnswers[condition.questionId];
        action = answer == condition.value ? {
          action: condition.action,
          target: condition.target
        } : action;
      });
      /*
       * Decide which action to take depending on
       * the action decided upon.
       */

      switch (action.action) {
        case 'GOTO':
          this.props.onSwitchPanel(action.target);
          break;

        case 'SUBMIT':
          this.props.onSubmit(action.target);
          break;
      }
    }
  }, {
    key: "handleBackButtonClick",
    value: function handleBackButtonClick() {
      if (this.props.panelHistory.length == 0) {
        return;
      }

      this.props.onPanelBack();
    }
  }, {
    key: "handleAnswerChange",
    value: function handleAnswerChange(questionId, questionAnswer, validations, validateOn) {
      this.props.onAnswerChange(questionId, questionAnswer);
      this.setState({
        validationErrors: _.chain(this.state.validationErrors).set(questionId, []).value()
      });

      if (validateOn === 'change') {
        this.handleAnswerValidate(questionId, questionAnswer, validations);
      }
    }
  }, {
    key: "handleQuestionBlur",
    value: function handleQuestionBlur(questionId, questionAnswer, validations, validateOn) {
      if (validateOn === 'blur') {
        this.handleAnswerValidate(questionId, questionAnswer, validations);
      }
    }
  }, {
    key: "handleInputKeyDown",
    value: function handleInputKeyDown(e) {
      if (KeyCodez[e.keyCode] === 'enter') {
        e.preventDefault();
        this.handleMainButtonClick.call(this);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var questionSets = this.props.questionSets.map(function (questionSetMeta) {
        var questionSet = _.find(_this4.props.schema.questionSets, {
          questionSetId: questionSetMeta.questionSetId
        });

        if (!questionSet) {
          return undefined;
        }

        return React.createElement(QuestionSet, {
          key: questionSet.questionSetId,
          id: questionSet.questionSetId,
          name: questionSet.name,
          questionSetHeader: questionSet.questionSetHeader,
          questionSetText: questionSet.questionSetText,
          questions: questionSet.questions,
          classes: _this4.props.classes,
          questionAnswers: _this4.props.questionAnswers,
          renderError: _this4.props.renderError,
          renderRequiredAsterisk: _this4.props.renderRequiredAsterisk,
          validationErrors: _this4.state.validationErrors,
          onAnswerChange: _this4.handleAnswerChange.bind(_this4),
          onQuestionBlur: _this4.handleQuestionBlur.bind(_this4),
          onKeyDown: _this4.handleInputKeyDown.bind(_this4)
        });
      });
      return React.createElement("div", {
        className: this.props.classes.questionPanel
      }, typeof this.props.panelHeader !== 'undefined' || typeof this.props.panelText !== 'undefined' ? React.createElement("div", {
        className: this.props.classes.questionPanelHeaderContainer
      }, typeof this.props.panelHeader !== 'undefined' ? React.createElement("h3", {
        className: this.props.classes.questionPanelHeaderText
      }, this.props.panelHeader) : undefined, typeof this.props.panelText !== 'undefined' ? React.createElement("p", {
        className: this.props.classes.questionPanelText
      }, this.props.panelText) : undefined) : undefined, React.createElement("div", {
        className: this.props.classes.questionSets
      }, questionSets), React.createElement("div", {
        className: this.props.classes.buttonBar
      }, this.props.panelHistory.length > 1 && !this.props.backButton.disabled ? React.createElement(Button, {
        text: this.props.backButton.text || 'Back',
        onClick: this.handleBackButtonClick.bind(this),
        className: this.props.classes.backButton
      }) : undefined, !this.props.button.disabled ? React.createElement(Button, {
        text: this.props.button.text,
        onClick: this.handleMainButtonClick.bind(this),
        className: this.props.classes.controlButton,
        buttonState: this.state.buttonState
      }) : undefined));
    }
  }]);

  return QuestionPanel;
}(React.Component);

;
QuestionPanel.defaultProps = {
  validationErrors: {},
  schema: {},
  classes: {},
  panelId: undefined,
  panelIndex: undefined,
  panelHeader: undefined,
  panelText: undefined,
  action: {
    default: {},
    conditions: []
  },
  button: {
    text: 'Submit'
  },
  backButton: {
    text: 'Back'
  },
  questionSets: [],
  questionAnswers: {},
  renderError: undefined,
  renderRequiredAsterisk: undefined,
  onAnswerChange: function onAnswerChange() {},
  onSwitchPanel: function onSwitchPanel() {},
  onPanelBack: function onPanelBack() {},
  panelHistory: []
};
module.exports = QuestionPanel;