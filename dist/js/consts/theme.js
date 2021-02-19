"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemeProvider = exports.theme = exports.colors = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var colors = {
  mainGrey: 'rgba(0, 0, 0, 0.7)',
  ligthGrey: '#ecebed',
  grey: '#B9BABD',
  mediumGrey: '#7C7878',
  darkGrey: '#0f0f0f',
  errorRed: '#FF0000',
  lightRed: '#e2070e',
  mediumRed: '#f20f0f',
  white: '#FFF',
  black: '#000'
};
exports.colors = colors;
var theme = {
  fontFamily: '"Manrope", BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
  formBoxShadow: '0px 20px 60px rgba(0, 0, 0, 0.08)',
  formMaxWidth: '600px',
  styledContainerMobilePadding: '20px 15px',
  styledContainerPadding: '20px 15px',
  formBgColor: colors.white,
  inputTextColor: colors.mainGrey,
  inputPlaceHolderColor: colors.mainGrey,
  inputErrorColor: colors.errorRed,
  inputErrorTextAlign: 'left',
  inputErrorFontSize: '12px',
  inputErrorBottom: '-17px',
  inputBorderColor: colors.ligthGrey,
  inputBorderWidth: '1px',
  inputBorderStyle: 'solid',
  inputBorderRadius: '6px',
  inputBgColor: colors.white,
  inputBoxShadow: '0px 7px 64px rgba(194, 186, 186, 0.07)',
  inputFontSize: '16px',
  datePickerFontSize: '16px',
  inputFontWeight: '500',
  inputFontStyle: 'normal',
  inputLineHeight: '16px',
  inputTextAlign: 'left',
  inputPadding: '15px 10px',
  labelFontSize: '16px',
  styledRowFlexWrap: 'no-wrap',
  styledRowLabelPadding: '10px',
  styledRowLabelFontColor: colors.black,
  styledSelectTextColor: colors.mainGrey,
  styledSelectPlaceHolderColor: colors.mainGrey,
  styledSelectArrowColor: colors.black,
  styledSelectArrowRightPosition: '15px',
  styledSelectErrorColor: colors.errorRed,
  styledSelectErrorTextAlign: 'left',
  styledSelectBorderColor: colors.ligthGrey,
  styledSelectBorderWidth: '1px',
  styledSelectBorderStyle: 'solid',
  styledSelectBorderRadius: '6px',
  styledSelectBgColor: colors.white,
  styledSelectBoxShadow: '0px 7px 64px rgba(194, 186, 186, 0.07)',
  styledSelectFontSize: '14px',
  styledSelectFontWeight: '500',
  styledSelectFontStyle: 'normal',
  styledSelectLineHeight: '16px',
  styledSelectPadding: '15px 40px 15px 10px',
  styledSpanFontColor: colors.black,
  styledSpanFontWeight: 'bold',
  styledRowMarginBottom: '12px',
  checkboxLabelArrowColor: colors.mediumGrey,
  checkboxBgColor: colors.white,
  checkboxCheckedBgColor: colors.white,
  checkboxBorderColor: colors.black,
  checkboxBorderWidth: '1px',
  checkboxLabelFontSize: '13px',
  checkboxLinkColor: colors.mediumRed,
  checkboxBorderErrorColor: colors.errorRed,
  checkboxLabelTextColor: colors.darkGrey,
  checkboxMarkColor: colors.lightRed,
  headerTextColor: colors.black,
  headerBorderColor: colors.errorRed,
  headerFontWeight: '600',
  headerFontSize: '25px',
  headerLineHeight: '24px',
  headerMargin: '0px 0px 30px 0px',
  subheaderBorderColor: colors.black,
  subheaderFontSize: '16px',
  subheaderLineHeight: '18px',
  subheaderMargin: '10px 0px 20px 0px',
  buttonTextColor: colors.white,
  buttonBgColor: colors.mediumRed,
  buttonBorderColor: colors.mediumRed,
  successTextColor: colors.black,
  stepHeaderActiveColor: colors.mediumRed,
  stepHeaderInActiveColor: colors.grey,
  stepHeaderActiveBorderColor: colors.mediumRed,
  stepHeaderInActiveBorderColor: colors.grey,
  buttonSecondaryTextColor: colors.mediumRed,
  buttonSecondaryBgColor: colors.white,
  buttonSecondaryBorderColor: colors.mediumRed,
  redirectPageHeaderTextColor: colors.black,
  redirectPageRedirectTextColor: colors.black,
  redirectPageCounterTextColor: colors.mediumRed,
  successStatusTextColor: colors.black,
  errorStatusTextColor: colors.errorRed,
  sliderHeight: '12px',
  sliderInputTextAlign: 'left',
  sliderBorderRadius: '10px',
  sliderBgColor: colors.mainGrey,
  sliderFillBgColor: colors.mediumRed,
  sliderHandleBgColor: colors.white,
  sliderHandleBorderColor: colors.mainGrey,
  sliderHandleBoxShadow: '0px 7px 64px rgba(194, 186, 186, 0.07)',
  sliderHandleBorderWidth: '1px',
  sliderHandleBorderStyle: 'solid',
  sliderHandleBorderRadius: '50%',
  sliderHandleWidth: '24px',
  sliderHandleHeight: '24px',
  sliderHandleAfterBgColor: colors.mediumRed,
  sliderHandleAfterWidth: '7px',
  sliderHandleAfterHeight: '7px',
  sliderHandleAfterBorderRadius: '50%',
  styledInputSuffixBgColor: colors.mediumRed,
  styledInputSuffixTextColor: colors.white,
  styledInputSuffixFontSize: '14px',
  styledInputSuffixFontWeight: 'bold',
  styledInputSuffixBorderRadius: '0 5px 5px 0',
  styledInputPrefixPadding: '0 10px',
  marginBetweenRowChildren: '5px',
  hrColor: colors.mainGrey,
  hrSize: '1px',
  imageContainerPadding: '0px',
  imageContainerTextTopPosition: '230px',
  imageContainerTextFontSize: '45px',
  imageContainerTextFontWeight: '900',
  imageBoxShadow: 'none',
  inputIconLeft: '10px',
  inputWithIconPadding: '15px 10px 15px 55px'
};
exports.theme = theme;

var ThemeProvider = function ThemeProvider(_ref) {
  var children = _ref.children,
      customTheme = _ref.customTheme;
  return /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
    theme: _objectSpread(_objectSpread({}, theme), customTheme)
  }, children && children);
};

exports.ThemeProvider = ThemeProvider;
ThemeProvider.propTypes = {
  children: _propTypes.default.any.isRequired
};
//# sourceMappingURL=theme.js.map