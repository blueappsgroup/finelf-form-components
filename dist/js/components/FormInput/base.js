"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseRangeField = exports.BaseSelectField = exports.BaseDateField = exports.default = exports.SliderRow = exports.StyledInput = exports.StyledError = exports.StyledContainer = exports.RowWithFixedColumn = exports.Row = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRangeslider = _interopRequireDefault(require("react-rangeslider"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _sizes = require("../../consts/sizes");

var _utils = require("../../utils");

var _DatePickerCore = _interopRequireDefault(require("./DatePickerCore"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/* eslint-disable */
var StyledRow = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-bottom: ", ";\n  position: relative;\n  flex-wrap: ", ";\n  label {\n    font-size: ", ";\n    padding: ", ";\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.styledRowMarginBottom;
}, function (props) {
  return props.theme.styledRowFlexWrap;
}, function (props) {
  return props.theme.labelFontSize;
}, function (props) {
  return props.theme.styledRowLabelPadding;
}, function (props) {
  return props.theme.styledRowLabelFontColor;
});
/* eslint-disable */


var StyledRowRangeField = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-bottom: ", ";\n  position: relative;\n  flex-wrap: nowrap;\n  width: 100%;\n  justify-content: space-between;\n  label {\n    font-size: ", ";\n    padding: ", ";\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.styledRowMarginBottom;
}, function (props) {
  return props.theme.labelFontSize;
}, function (props) {
  return props.theme.styledRowLabelPadding;
}, function (props) {
  return props.theme.styledRowLabelFontColor;
});

var Row = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  margin: 0 auto;\n  flex-direction: column;\n  & > * {\n      flex-basis: auto;\n      flex-grow: 1;\n  }\n\n  @media ", " {\n    flex-direction: row;\n    justify-content: space-between;\n\n    & > * {\n      flex-basis: 0;\n    }\n\n    & > :first-child:not(:last-child) {\n      margin-right: ", ";\n    }\n\n    & > :last-child:not(:first-child) {\n      margin-left: ", ";\n    }\n  }\n"])), _sizes.device.tablet, function (props) {
  return props.theme.marginBetweenRowChildren;
}, function (props) {
  return props.theme.marginBetweenRowChildren;
});

exports.Row = Row;

var RowWithFixedColumn = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  margin: 0 auto;\n\n  @media ", " {\n    & > :first-child {\n      position: fixed;\n      left: 0;\n      width: 50%;\n      padding-top: 0;\n    }\n\n    & > :last-child {\n      position: absolute;\n      right: 0;\n      width: 50%;\n    }\n  }\n"])), _sizes.device.laptopL);

exports.RowWithFixedColumn = RowWithFixedColumn;

var StyledContainer = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  padding: ", ";\n\n  @media ", " {\n    padding: ", ";\n  }\n"])), function (props) {
  return props.theme.styledContainerMobilePadding;
}, _sizes.device.tablet, function (props) {
  return props.theme.styledContainerPadding;
});
/* eslint-enable */


exports.StyledContainer = StyledContainer;

var StyledError = _styledComponents.default.span(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  color: ", ";\n  text-align: ", ";\n  position: absolute;\n  width: 100%;\n  font-size: ", ";\n  bottom: ", ";\n"])), function (props) {
  return props.theme.inputErrorColor;
}, function (props) {
  return props.theme.inputErrorTextAlign;
}, function (props) {
  return props.theme.inputErrorFontSize;
}, function (props) {
  return props.theme.inputErrorBottom;
});

exports.StyledError = StyledError;

var StyledInput = _styledComponents.default.input(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  background: ", ";\n  border: 1px solid\n    ", ";\n  box-sizing: border-box;\n  box-shadow: ", ";\n  border-radius: ", ";\n  width: 100%;\n  display: flex;\n  align-items: center;\n  font-style: ", ";\n  font-weight: ", ";\n  font-size: ", ";\n  line-height: ", ";\n  text-align: ", ";\n  padding: ", ";\n  border-color: ", ";\n  color: ", ";\n\n  ", "\n  ", "\n\n  &::placeholder {\n    color: ", ";\n    font-size: ", ";\n  }\n\n  &:focus {\n    outline: none;\n  }\n"])), function (props) {
  return props.theme.inputBgColor;
}, function (props) {
  return props.theme.inputBorderColor;
}, function (props) {
  return props.theme.inputBoxShadow;
}, function (props) {
  return props.theme.inputBorderRadius;
}, function (props) {
  return props.theme.inputFontStyle;
}, function (props) {
  return props.theme.inputFontWeight;
}, function (props) {
  return props.theme.inputFontSize;
}, function (props) {
  return props.theme.inputLineHeight;
}, function (props) {
  return props.theme.inputTextAlign;
}, function (props) {
  return props.theme.inputPadding;
}, function (props) {
  return props.error ? props.theme.inputErrorColor : props.theme.inputBorderColor;
}, function (props) {
  return props.error ? props.theme.inputErrorColor : props.theme.inputTextColor;
}, function (props) {
  return props.hasPrefix && 'border-left: none; border-top-left-radius: 0px; border-bottom-left-radius: 0px;';
}, function (props) {
  return props.hasSuffix && 'border-right: none; border-top-right-radius: 0px; border-bottom-right-radius: 0px;';
}, function (props) {
  return props.theme.inputPlaceHolderColor;
}, function (props) {
  return props.theme.inputFontSize;
});

exports.StyledInput = StyledInput;

var SliderRow = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n"])));

exports.SliderRow = SliderRow;

var SliderInput = _styledComponents.default.input(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  background: ", ";\n  border: 1px solid\n    ", ";\n  box-sizing: border-box;\n  box-shadow: ", ";\n  border-radius: ", ";\n  width: 100px;\n  height: ", ";\n  display: flex;\n  align-items: center;\n  font-style: ", ";\n  font-weight: ", ";\n  font-size: ", ";\n  line-height: ", ";\n  text-align: ", ";\n  padding: ", ";\n  border-color: ", ";\n  color: ", ";\n\n  ", "\n  ", "\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:focus {\n    outline: none;\n  }\n"])), function (props) {
  return props.theme.inputBgColor;
}, function (props) {
  return props.theme.inputBorderColor;
}, function (props) {
  return props.theme.inputBoxShadow;
}, function (props) {
  return props.theme.inputBorderRadius;
}, function (props) {
  return props.theme.sliderInputHeight;
}, function (props) {
  return props.theme.inputFontStyle;
}, function (props) {
  return props.theme.inputFontWeight;
}, function (props) {
  return props.theme.inputFontSize;
}, function (props) {
  return props.theme.inputLineHeight;
}, function (props) {
  return props.theme.sliderInputTextAlign;
}, function (props) {
  return props.theme.inputPadding;
}, function (props) {
  return props.error ? props.theme.inputErrorColor : props.theme.inputBorderColor;
}, function (props) {
  return props.error ? props.theme.inputErrorColor : props.theme.inputTextColor;
}, function (props) {
  return props.hasPrefix && 'border-left: none; border-top-left-radius: 0px; border-bottom-left-radius: 0px;';
}, function (props) {
  return props.hasSuffix && 'border-right: none; border-top-right-radius: 0px; border-bottom-right-radius: 0px;';
}, function (props) {
  return props.theme.inputPlaceHolderColor;
});
/* eslint-disable */


var StyledSelectContainer = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n"])));

var StyledSelect = _styledComponents.default.select(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  position: relative;\n  background: ", ";\n  border: ", " ", "\n    ", ";\n  box-sizing: border-box;\n  box-shadow: ", ";\n  border-radius: ", ";\n  width: 100%;\n  display: flex;\n  align-items: center;\n  font-style: ", ";\n  font-weight: ", ";\n  font-size: ", ";\n  line-height: ", ";\n  padding: ", ";\n  border-color: ", ";\n  color: ", ";\n  appearance: none;\n\n  [disabled],\n  option:disabled,\n  option:invalid{\n    color: ", ";\n  }\n\n  &:focus {\n    outline: none;\n  }\n"])), function (props) {
  return props.theme.styledSelectBgColor;
}, function (props) {
  return props.theme.styledSelectBorderWidth;
}, function (props) {
  return props.theme.styledSelectBorderStyle;
}, function (props) {
  return props.theme.styledSelectBorderColor;
}, function (props) {
  return props.theme.styledSelectBoxShadow;
}, function (props) {
  return props.theme.styledSelectBorderRadius;
}, function (props) {
  return props.theme.styledSelectFontStyle;
}, function (props) {
  return props.theme.styledSelectFontWeight;
}, function (props) {
  return props.theme.styledSelectFontSize;
}, function (props) {
  return props.theme.styledSelectLineHeight;
}, function (props) {
  return props.theme.styledSelectPadding;
}, function (props) {
  return props.error ? props.theme.styledSelectErrorColor : props.theme.styledSelectBorderColor;
}, function (props) {
  return props.error ? props.theme.styledSelectErrorColor : props.theme.styledSelectTextColor;
}, function (props) {
  return props.theme.styledSelectPlaceHolderColor;
});

var StyledSelectArrow = _styledComponents.default.span(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  position: absolute;\n  border: solid;\n  border-width: 0 2px 2px 0;\n  border-color: ", ";\n  display: inline-block;\n  padding: 4px;\n  vertical-align: middle;\n  content: ' ';\n  right: ", ";\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  height: 0;\n  transform: rotate(45deg);\n"])), function (props) {
  return props.theme.styledSelectArrowColor;
}, function (props) {
  return props.theme.styledSelectArrowRightPosition;
});

var StyledSelectValueOption = _styledComponents.default.option(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  color: ", ";\n"])), function (props) {
  return props.theme.inputPlaceHolderColor;
});

var StyledSpan = _styledComponents.default.span(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  font-size: ", ";\n  font-weight: ", ";\n  color: ", ";\n"])), function (props) {
  return props.theme.styledSpanFontSize;
}, function (props) {
  return props.theme.styledSpanFontWeight;
}, function (props) {
  return props.theme.styledSpanFontColor;
});

var StyledInputSuffix = _styledComponents.default.span(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding: 0 20px;\n  box-sizing: border-box;\n  background-color: ", ";\n  border-radius: ", ";\n  font-weight: ", ";\n  font-size: ", ";\n  color: ", ";\n  justify-content: center;\n"])), function (props) {
  return props.theme.styledInputSuffixBgColor;
}, function (props) {
  return props.theme.styledInputSuffixBorderRadius;
}, function (props) {
  return props.theme.styledInputSuffixFontWeight;
}, function (props) {
  return props.theme.styledInputSuffixFontSize;
}, function (props) {
  return props.theme.styledInputSuffixTextColor;
});

var StyledSliderInputSuffix = _styledComponents.default.span(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  height: ", ";\n  padding: 0 15px;\n  box-sizing: border-box;\n  background-color: ", ";\n  border-radius: ", ";\n  font-weight: ", ";\n  font-size: ", ";\n  color: ", ";\n  justify-content: center;\n"])), function (props) {
  return props.theme.sliderInputHeight;
}, function (props) {
  return props.theme.styledInputSuffixBgColor;
}, function (props) {
  return props.theme.styledInputSuffixBorderRadius;
}, function (props) {
  return props.theme.styledInputSuffixFontWeight;
}, function (props) {
  return props.theme.styledInputSuffixFontSize;
}, function (props) {
  return props.theme.styledInputSuffixTextColor;
});

var StyledInputPrefixContainer = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  background: ", ";\n  position: relative;\n  left: 0px;\n  box-sizing: border-box;\n  display: inline-flex;\n  align-items: center;\n  border: 1px solid ", ";\n  border-right: none;\n  border-top-left-radius: ", ";\n  border-bottom-left-radius: ", ";\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n"])), function (props) {
  return props.theme.inputBgColor;
}, function (props) {
  return props.error ? props.theme.inputErrorColor : props.theme.inputBorderColor;
}, function (props) {
  return props.theme.inputBorderRadius;
}, function (props) {
  return props.theme.inputBorderRadius;
}, function (props) {
  return props.error ? props.theme.inputErrorColor : props.theme.inputTextColor;
}, function (props) {
  return props.theme.inputFontSize;
}, function (props) {
  return props.theme.inputFontWeight;
});

var StyledInputPrefix = _styledComponents.default.span(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  padding: ", ";\n  border-right: 1px solid ", ";\n  color: ", ";\n"])), function (props) {
  return props.theme.styledInputPrefixPadding;
}, function (props) {
  return props.theme.inputBorderColor;
}, function (props) {
  return props.theme.inputPlaceHolderColor;
});

var SliderWrapper = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n padding-bottom: 25px;\n width: 100%;\n .rangeslider {\n  position: relative;\n  width: 100%;\n  height: ", ";\n  border-radius: ", ";\n  background-color: ", ";\n  .rangeslider__fill {\n   height: 100%;\n   background-color: ", ";\n   border-radius: ", ";\n  }\n  .rangeslider__handle {\n   top: 0;\n   bottom: 0;\n   margin: auto;\n   width: ", ";\n   height: ", ";\n   background-color: ", ";\n   position: absolute;\n   cursor: pointer;\n   box-shadow: ", ";\n   border: ", " ", " ", ";\n   border-radius: ", ";\n   &::after {\n    width: ", ";\n    height: ", ";\n    background-color: ", ";\n    border-radius: ", ";\n    position: absolute;\n    content: '';\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: auto;\n   }\n  }\n }\n"])), function (props) {
  return props.theme.sliderHeight;
}, function (props) {
  return props.theme.sliderBorderRadius;
}, function (props) {
  return props.theme.sliderBgColor;
}, function (props) {
  return props.theme.sliderFillBgColor;
}, function (props) {
  return props.theme.sliderBorderRadius;
}, function (props) {
  return props.theme.sliderHandleWidth;
}, function (props) {
  return props.theme.sliderHandleHeight;
}, function (props) {
  return props.theme.sliderHandleBgColor;
}, function (props) {
  return props.theme.sliderHandleBoxShadow;
}, function (props) {
  return props.theme.sliderHandleBorderWidth;
}, function (props) {
  return props.theme.sliderHandleBorderStyle;
}, function (props) {
  return props.theme.sliderHandleBorderColor;
}, function (props) {
  return props.theme.sliderHandleBorderRadius;
}, function (props) {
  return props.theme.sliderHandleAfterWidth;
}, function (props) {
  return props.theme.sliderHandleAfterHeight;
}, function (props) {
  return props.theme.sliderHandleAfterBgColor;
}, function (props) {
  return props.theme.sliderHandleAfterBorderRadius;
});

var InputWrapper = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  width:100%;\n  flex-direction: row;\n  svg {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: ", ";\n    margin: auto;\n    padding-right: ", ";\n    border-right: 1px solid ", ";\n    fill: ", ";\n  }\n  input {\n    padding: ", ";\n  }\n"])), function (props) {
  return props.theme.inputIconLeft;
}, function (props) {
  return props.theme.inputIconLeft;
}, function (props) {
  return props.theme.inputBorderColor;
}, function (props) {
  return props.theme.inputPlaceHolderColor;
}, function (props) {
  return props.withIcon ? props.theme.inputWithIconPadding : props.theme.inputPadding;
});
/* eslint-enable */


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

  return props.visible !== false && /*#__PURE__*/_react.default.createElement(StyledRow, null, props.label && /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: field.name
  }, "".concat(props.label).concat(props.required && '*' || '')), /*#__PURE__*/_react.default.createElement(InputWrapper, {
    withIcon: props.icon !== undefined
  }, props.prefix && /*#__PURE__*/_react.default.createElement(StyledInputPrefixContainer, {
    error: touched[field.name] && errors[field.name]
  }, /*#__PURE__*/_react.default.createElement(StyledInputPrefix, null, props.prefix)), props.icon, /*#__PURE__*/_react.default.createElement(StyledInput, _extends({}, field, props, {
    required: props.required,
    hasPrefix: !!props.prefix,
    hasSuffix: !!props.suffix,
    onBlur: handleOnBlur,
    type: props.type,
    value: field.value && field.value || '',
    error: touched[field.name] && errors[field.name],
    placeholder: props.placeholder && "".concat(props.placeholder).concat(props.required && '*' || ''),
    style: props.prefix && {
      borderBottomLeftRadius: '0px',
      borderTopLeftRadius: '0px'
    }
  })), props.suffix && /*#__PURE__*/_react.default.createElement(StyledInputSuffix, null, props.suffix)), props.showError && touched[field.name] && errors[field.name] && /*#__PURE__*/_react.default.createElement(StyledError, null, errors[field.name])) || /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
};

var _default = BaseField;
exports.default = _default;

var BaseDateField = function BaseDateField(_ref2) {
  var field = _ref2.field,
      _ref2$form = _ref2.form,
      touched = _ref2$form.touched,
      errors = _ref2$form.errors,
      values = _ref2$form.values,
      setFieldValue = _ref2$form.setFieldValue,
      setFieldTouched = _ref2$form.setFieldTouched,
      props = _objectWithoutProperties(_ref2, ["field", "form"]);

  var _useContext2 = (0, _react.useContext)(_utils.FormContext),
      id = _useContext2.id;

  var _useState = (0, _react.useState)(values[field.name]),
      _useState2 = _slicedToArray(_useState, 2),
      currntValue = _useState2[0],
      setCurrentValue = _useState2[1];

  var handleChange = function handleChange(value) {
    (0, _utils.setFormValuesToCache)(_objectSpread(_objectSpread({}, values), {}, _defineProperty({}, field.name, value.toString())), id);
    setCurrentValue(value);
    setFieldTouched(field.name, true);
  };

  var handleBlur = function handleBlur() {
    setFieldTouched(field.name, true);
  };

  (0, _react.useEffect)(function () {
    setFieldValue(field.name, currntValue);
  }, [currntValue, field.name, setFieldValue]);
  return /*#__PURE__*/_react.default.createElement(StyledRow, null, props.label && /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: field.name
  }, "".concat(props.label).concat(props.required && '*' || '')), props.prefix && /*#__PURE__*/_react.default.createElement(StyledInputPrefix, null, props.prefix), /*#__PURE__*/_react.default.createElement(_DatePickerCore.default, {
    placeholderText: props.placeholder,
    required: props.required,
    name: field.name,
    selected: field.value ? new Date(field.value) : null,
    onBlur: handleBlur,
    onChange: handleChange
  }), props.suffix && /*#__PURE__*/_react.default.createElement(StyledInputSuffix, null, props.suffix), props.showError && touched[field.name] && errors[field.name] && /*#__PURE__*/_react.default.createElement(StyledError, null, errors[field.name]));
};

exports.BaseDateField = BaseDateField;

var BaseSelectField = function BaseSelectField(_ref3) {
  var field = _ref3.field,
      _ref3$form = _ref3.form,
      touched = _ref3$form.touched,
      errors = _ref3$form.errors,
      values = _ref3$form.values,
      props = _objectWithoutProperties(_ref3, ["field", "form"]);

  var _useContext3 = (0, _react.useContext)(_utils.FormContext),
      id = _useContext3.id;

  var handleOnBlur = function handleOnBlur(e) {
    (0, _utils.setFormValuesToCache)(values, id);
    field.onBlur && field.onBlur(e);
  };

  var options = function options(_options) {
    return [/*#__PURE__*/_react.default.createElement(StyledSelectValueOption, {
      key: "select",
      value: "select",
      disabled: true,
      selected: true
    }, "wybierz ".concat(props.required && '*' || ''))].concat(Object.keys(_options).map(function (option) {
      return /*#__PURE__*/_react.default.createElement("option", {
        key: option,
        value: option
      }, _options[option]);
    }));
  };

  return /*#__PURE__*/_react.default.createElement(StyledRow, null, props.label && /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: field.name
  }, "".concat(props.label).concat(props.required && '*' || '')), /*#__PURE__*/_react.default.createElement(StyledSelectContainer, null, /*#__PURE__*/_react.default.createElement(StyledSelect, _extends({}, field, props, {
    onBlur: handleOnBlur,
    type: "text",
    value: field.value && field.value || 'select',
    error: touched[field.name] && errors[field.name],
    placeholder: props.placeholder && "".concat(props.placeholder).concat(props.required && '*' || '')
  }), props.options && options(props.options)), /*#__PURE__*/_react.default.createElement(StyledSelectArrow, null)), props.showError && touched[field.name] && errors[field.name] && /*#__PURE__*/_react.default.createElement(StyledError, null, errors[field.name]));
};

exports.BaseSelectField = BaseSelectField;

var BaseRangeField = function BaseRangeField(_ref4) {
  var field = _ref4.field,
      _ref4$form = _ref4.form,
      touched = _ref4$form.touched,
      errors = _ref4$form.errors,
      values = _ref4$form.values,
      setFieldValue = _ref4$form.setFieldValue,
      props = _objectWithoutProperties(_ref4, ["field", "form"]);

  var _useContext4 = (0, _react.useContext)(_utils.FormContext),
      id = _useContext4.id;

  var _useState3 = (0, _react.useState)(parseInt(field.value) || props.value || 0),
      _useState4 = _slicedToArray(_useState3, 2),
      value = _useState4[0],
      setValue = _useState4[1];

  var handleOnChangeSlider = function handleOnChangeSlider(value) {
    setValue(value);
  };

  var handleOnChangeCompleteSlider = function handleOnChangeCompleteSlider() {
    (0, _utils.setFormValuesToCache)(_objectSpread(_objectSpread({}, values), {}, _defineProperty({}, field.name, value)), id);
  };

  var handleOnChange = function handleOnChange(e) {
    var value = parseInt(e.target.value) || 0;
    setValue(value);
    field.onChange && field.onChange(e);
  };

  var handleOnBlur = function handleOnBlur(e) {
    var value = parseInt(e.target.value) || 0;

    if (props.min && props.min > value) {
      value = props.min;
    }

    if (props.max && props.max < value) {
      value = props.max;
    }

    value = props.step ? Math.ceil(value / props.step) * props.step : value;
    setValue(value);
    (0, _utils.setFormValuesToCache)(_objectSpread(_objectSpread({}, values), {}, _defineProperty({}, field.name, value)), id);
    field.onBlur && field.onBlur(e);
  };

  (0, _react.useLayoutEffect)(function () {
    setFieldValue(field.name, value);
  }, [field.name, value, setFieldValue]);
  return /*#__PURE__*/_react.default.createElement(StyledRow, null, /*#__PURE__*/_react.default.createElement(StyledRowRangeField, null, props.label && /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: field.name
  }, props.label), /*#__PURE__*/_react.default.createElement(SliderRow, null, /*#__PURE__*/_react.default.createElement(SliderInput, _extends({}, field, props, {
    onChange: handleOnChange,
    onBlur: handleOnBlur,
    type: props.type,
    value: value,
    error: touched[field.name] && errors[field.name],
    placeholder: props.placeholder && "".concat(props.placeholder).concat(props.required && '*' || ''),
    hasSuffix: props.suffix !== undefined
  })), props.suffix && /*#__PURE__*/_react.default.createElement(StyledSliderInputSuffix, null, props.suffix))), /*#__PURE__*/_react.default.createElement(SliderWrapper, null, /*#__PURE__*/_react.default.createElement(_reactRangeslider.default, {
    min: props.min,
    max: props.max,
    step: props.step,
    value: value,
    tooltip: false,
    onChange: handleOnChangeSlider,
    onChangeComplete: handleOnChangeCompleteSlider
  })), props.showMinMax && /*#__PURE__*/_react.default.createElement(StyledRowRangeField, null, /*#__PURE__*/_react.default.createElement(StyledSpan, null, "Min. ", props.min, " ", props.unit), /*#__PURE__*/_react.default.createElement(StyledSpan, null, "Max. ", props.max, " ", props.unit)));
};

exports.BaseRangeField = BaseRangeField;
//# sourceMappingURL=base.js.map