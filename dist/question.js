"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var InputTypes = require('./inputTypes');

var Question =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Question, _React$Component);

  function Question() {
    _classCallCheck(this, Question);

    return _possibleConstructorReturn(this, _getPrototypeOf(Question).apply(this, arguments));
  }

  _createClass(Question, [{
    key: "handleInputChange",
    value: function handleInputChange(questionId, value) {
      this.props.onAnswerChange(questionId, value, this.props.validations, this.props.validateOn);
    }
  }, {
    key: "handleInputBlur",
    value: function handleInputBlur(questionId, value) {
      this.props.onQuestionBlur(questionId, value, this.props.validations, this.props.validateOn);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var Input = InputTypes[this.props.input.type];

      if (!Input) {
        throw new Error('Winterfell: Input Type "' + this.props.input.type + '" not defined as Winterfell Input Type');
      }
      /*
       * Conditional Questions
       *
       * Go through the inputs options and filter them down
       * to options where the value matches the current questions
       * value. If we have conditional questions on a given option,
       * then render this component with the props for the conditional
       * question.
       */


      var conditionalItems = [];

      if (typeof this.props.input.options !== 'undefined') {
        this.props.input.options.filter(function (option) {
          return _this.props.value instanceof Array ? _this.props.value.indexOf(option.value) > -1 : _this.props.value == option.value;
        }).filter(function (option) {
          return typeof option.conditionalQuestions !== 'undefined' && option.conditionalQuestions.length > 0;
        }).forEach(function (option) {
          return [].forEach.bind(option.conditionalQuestions, function (conditionalQuestion) {
            conditionalItems.push(React.createElement(Question, {
              key: conditionalQuestion.questionId,
              questionSetId: _this.props.questionSetId,
              questionId: conditionalQuestion.questionId,
              autoComplete: conditionalQuestion.autoComplete,
              question: conditionalQuestion.question,
              text: conditionalQuestion.text,
              postText: conditionalQuestion.postText,
              validateOn: conditionalQuestion.validateOn,
              validations: conditionalQuestion.validations,
              value: _this.props.questionAnswers[conditionalQuestion.questionId],
              input: conditionalQuestion.input,
              classes: _this.props.classes,
              renderError: _this.props.renderError,
              questionAnswers: _this.props.questionAnswers,
              validationErrors: _this.props.validationErrors,
              onAnswerChange: _this.props.onAnswerChange,
              onQuestionBlur: _this.props.onQuestionBlur,
              onKeyDown: _this.props.onKeyDown
            }));
          })();
        });
      } // Get the current value. If none is set, then use
      // the default if given.


      var value = typeof this.props.value !== 'undefined' ? this.props.value : typeof this.props.input.default !== 'undefined' ? this.props.input.default : undefined; // Retrieve the validation errors for the
      // current question and map them in to
      // error-message blocks.

      var validationErrors = typeof this.props.validationErrors[this.props.questionId] !== 'undefined' ? this.props.validationErrors[this.props.questionId].map(function (error) {
        return typeof _this.props.renderError === 'function' ? _this.props.renderError(error, _this.props.questionId) : React.createElement("div", {
          key: _this.props.questionId + 'Error' + error.type,
          className: _this.props.classes.errorMessage
        }, error.message);
      }) : [];
      var labelId = "".concat(this.props.questionId, "-label");
      return React.createElement("div", {
        className: this.props.classes.question
      }, !!this.props.question ? React.createElement("label", {
        className: this.props.classes.label,
        id: labelId,
        htmlFor: this.props.questionId
      }, this.props.question, typeof this.props.renderRequiredAsterisk !== 'undefined' && this.props.input.required ? this.props.renderRequiredAsterisk() : undefined) : undefined, !!this.props.text ? React.createElement("p", {
        className: this.props.classes.questionText
      }, this.props.text) : undefined, validationErrors, React.createElement(Input, _extends({
        name: this.props.questionId,
        id: this.props.questionId,
        autoComplete: this.props.autoComplete,
        labelId: labelId,
        value: value,
        text: this.props.input.text,
        options: this.props.input.options,
        placeholder: this.props.input.placeholder,
        required: this.props.input.required,
        classes: this.props.classes,
        onChange: this.handleInputChange.bind(this, this.props.questionId),
        onBlur: this.handleInputBlur.bind(this, this.props.questionId),
        onKeyDown: this.props.onKeyDown
      }, _typeof(this.props.input.props) === 'object' ? this.props.input.props : {})), !!this.props.postText ? React.createElement("p", {
        className: this.props.classes.questionPostText
      }, this.props.postText) : undefined, conditionalItems);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (typeof this.props.input.default === 'undefined' || this.props.input.type === 'checkboxInput' && typeof this.props.questionAnswers[this.props.questionId] === 'undefined') {
        return;
      }

      this.handleInputChange.call(this, this.props.questionId, this.props.input.default);
    }
  }]);

  return Question;
}(React.Component);

;
Question.defaultProps = {
  questionSetId: undefined,
  questionId: undefined,
  question: '',
  validateOn: 'blur',
  validations: [],
  text: undefined,
  postText: undefined,
  value: undefined,
  autoComplete: undefined,
  input: {
    default: undefined,
    type: 'textInput',
    limit: undefined,
    placeholder: undefined
  },
  classes: {},
  questionAnswers: {},
  validationErrors: {},
  onAnswerChange: function onAnswerChange() {},
  onQuestionBlur: function onQuestionBlur() {},
  onKeyDown: function onKeyDown() {},
  renderError: undefined,
  renderRequiredAsterisk: undefined
};
module.exports = Question;