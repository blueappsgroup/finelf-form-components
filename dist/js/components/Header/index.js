"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _sizes = require("../../consts/sizes");

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// prettier-ignore
var StyledMainHeader = _styledComponents.default.h2(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-weight: ", ";\n  font-size: ", ";\n  line-height: ", ";\n  text-align: center;\n  margin: ", ";\n  position: relative;\n  display: flex;\n  justify-content: center;\n  color: ", ";\n  position: relative;\n  \n  @media ", " {\n    margin: 0px 0px 50px 0px;\n  }\n\n  &::after {\n    width: 33%;\n    content: '';\n    position: absolute;\n    bottom: 0px;\n    border: ", ";\n    margin: 20px auto 0 auto;\n  }\n"])), function (props) {
  return props.theme.headerFontWeight;
}, function (props) {
  return props.theme.headerFontSize;
}, function (props) {
  return props.theme.headerLineHeight;
}, function (props) {
  return props.theme.headerMargin;
}, function (props) {
  return props.theme.headerTextColor;
}, _sizes.device.tablet, function (props) {
  return props.withBorder ? "3px solid ".concat(props.theme.headerBorderColor) : 'none';
});

var StyledSubHeader = _styledComponents.default.h5(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  color: ", ";\n  font-style: normal;\n  font-weight: 600;\n  font-size: ", ";\n  line-height: ", ";\n  margin: ", ";\n"])), function (props) {
  return props.theme.subheaderTextColor;
}, function (props) {
  return props.theme.subheaderFontSize;
}, function (props) {
  return props.theme.subheaderLineHeight;
}, function (props) {
  return props.theme.subheaderMargin;
});

var Header = function Header(_ref) {
  var text = _ref.text,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'main' : _ref$type,
      withBorder = _ref.withBorder;
  return type === 'main' ? /*#__PURE__*/_react.default.createElement(StyledMainHeader, {
    withBorder: withBorder
  }, text) : /*#__PURE__*/_react.default.createElement(StyledSubHeader, null, text);
};

var _default = Header;
exports.default = _default;
//# sourceMappingURL=index.js.map