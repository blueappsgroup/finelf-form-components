"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Row = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _sizes = require("../../consts/sizes");

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  border: 1px solid\n    ", ";\n  box-sizing: border-box;\n  box-shadow: 0px 7px 64px rgba(194, 186, 186, 0.07);\n  border-radius: 6px;\n  width: 100%;\n  height: 63px;\n  display: flex;\n  align-items: center;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 24px;\n  padding: 0px 20px;\n  border-color: ", ";\n  color: ", ";\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:focus {\n    outline: none;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  position: absolute;\n  font-size: 10px;\n  bottom: -14px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n\n  @media ", " {\n    flex-direction: row;\n    & ", ":first-of-type {\n      flex-grow: 1;\n      margin-right: 5px;\n    }\n\n    & ", ":last-child {\n      flex-grow: 1;\n      margin-left: 5px;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 12px;\n  position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledRow = _styledComponents.default.div(_templateObject());

var Row = _styledComponents.default.div(_templateObject2(), _sizes.device.tablet, StyledRow, StyledRow);

exports.Row = Row;

var StyledError = _styledComponents.default.span(_templateObject3(), function (props) {
  return props.theme.inputErrorColor;
});

var StyledInput = _styledComponents.default.input(_templateObject4(), function (props) {
  return props.theme.inputBgColor;
}, function (props) {
  return props.theme.inputBorderColor;
}, function (props) {
  return props.error ? props.theme.inputErrorColor : props.theme.inputBorderColor;
}, function (props) {
  return props.error ? props.theme.inputErrorColor : props.theme.inputTextColor;
}, function (props) {
  return props.theme.inputPlaceHolderColor;
});

var BaseField = function BaseField(_ref) {
  var field = _ref.field,
      _ref$form = _ref.form,
      touched = _ref$form.touched,
      errors = _ref$form.errors,
      values = _ref$form.values,
      props = _objectWithoutProperties(_ref, ["field", "form"]);

  var _useContext = (0, _react.useContext)(_utils.FormContext),
      id = _useContext.id;

  var handleOnBlur = function handleOnBlur(e) {
    (0, _utils.setFormValuesToCache)(values, id);
    field.onBlur && field.onBlur(e);
  };

  return /*#__PURE__*/_react.default.createElement(StyledRow, null, props.label && /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: field.name
  }, props.label), /*#__PURE__*/_react.default.createElement(StyledInput, _extends({}, field, props, {
    onBlur: handleOnBlur,
    type: "text",
    value: field.value && field.value || '',
    error: touched[field.name] && errors[field.name],
    placeholder: props.placeholder && "".concat(props.placeholder).concat(props.required && '*' || '')
  })), props.showError && touched[field.name] && errors[field.name] && /*#__PURE__*/_react.default.createElement(StyledError, null, errors[field.name]));
};

var _default = BaseField;
exports.default = _default;
//# sourceMappingURL=base.js.map