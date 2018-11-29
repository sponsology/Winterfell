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

var Question = require('./question');

var QuestionSet =
/*#__PURE__*/
function (_React$Component) {
  _inherits(QuestionSet, _React$Component);

  function QuestionSet() {
    _classCallCheck(this, QuestionSet);

    return _possibleConstructorReturn(this, _getPrototypeOf(QuestionSet).apply(this, arguments));
  }

  _createClass(QuestionSet, [{
    key: "render",
    value: function render() {
      var _this = this;

      var questions = this.props.questions.map(function (question) {
        return React.createElement(Question, {
          key: question.questionId,
          questionSetId: _this.props.id,
          questionId: question.questionId,
          autoComplete: question.autoComplete,
          question: question.question,
          validateOn: question.validateOn,
          validations: question.validations,
          text: question.text,
          postText: question.postText,
          value: _this.props.questionAnswers[question.questionId],
          input: question.input,
          classes: _this.props.classes,
          renderError: _this.props.renderError,
          renderRequiredAsterisk: _this.props.renderRequiredAsterisk,
          questionAnswers: _this.props.questionAnswers,
          validationErrors: _this.props.validationErrors,
          onAnswerChange: _this.props.onAnswerChange,
          onQuestionBlur: _this.props.onQuestionBlur,
          onKeyDown: _this.props.onKeyDown
        });
      });
      return React.createElement("div", {
        className: this.props.classes.questionSet
      }, typeof this.props.questionSetHeader !== 'undefined' || typeof this.props.questionSetText !== 'undefined' ? React.createElement("div", {
        className: this.props.classes.questionSetHeaderContainer
      }, typeof this.props.questionSetHeader !== 'undefined' ? React.createElement("h4", {
        className: this.props.classes.questionSetHeader
      }, this.props.questionSetHeader) : undefined, typeof this.props.questionSetText !== 'undefined' ? React.createElement("p", {
        className: this.props.classes.questionSetText
      }, this.props.questionSetText) : undefined) : undefined, questions);
    }
  }]);

  return QuestionSet;
}(React.Component);

;
QuestionSet.defaultProps = {
  id: undefined,
  name: '',
  questionSetHeader: undefined,
  questionSetText: undefined,
  questions: [],
  questionAnswers: {},
  classes: {},
  validationErrors: {},
  renderError: undefined,
  renderRequiredAsterisk: undefined,
  onAnswerChange: function onAnswerChange() {},
  onQuestionBlur: function onQuestionBlur() {},
  onKeyDown: function onKeyDown() {}
};
module.exports = QuestionSet;