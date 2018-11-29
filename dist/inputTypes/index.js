"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var React = require("react");

var inputTypes = {
  checkboxInput: require("./checkboxInput"),
  checkboxOptionsInput: require("./checkboxOptionsInput"),
  emailInput: require("./emailInput"),
  fileInput: require("./fileInput"),
  hiddenInput: require("./hiddenInput"),
  passwordInput: require("./passwordInput"),
  radioOptionsInput: require("./radioOptionsInput"),
  selectInput: require("./selectInput"),
  textareaInput: require("./textareaInput"),
  textInput: require("./textInput"),
  privacyInput: require("./privacyInput"),
  giverPrivacyInput: require("./giverPrivacyInput")
};
/**
 * Add an input type
 *
 * @param  type      name     Name of InputType
 * @param  Component instance Input Type Component
 */

inputTypes.addInputType = function (name, instance) {
  if (typeof name !== "string") {
    throw new Error("Winterfell: First parameter of addInputType " + "must be of type string");
  }

  if (!React.Component instanceof instance.constructor) {
    throw new Error('Winterfell: Cannot not assign "' + name + '" as an inputType. ' + "Second paramter expects a React component");
  }

  inputTypes[name] = instance;
};
/**
 * Add multiple InputTypes
 *
 * @param  object types InputTypes to add. string => Component
 */


inputTypes.addInputTypes = function (types) {
  if (_typeof(types) !== "object") {
    throw new Error("Winterfell: First parameter of addInputTypes " + "must be of type object");
  }

  for (var type in types) {
    inputTypes.addInputType(type, types[type]);
  }
};

module.exports = inputTypes;