"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _sizes = require("../../consts/sizes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 18px;\n  margin: 10px 0px 20px 0px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-weight: 600;\n  font-size: 25px;\n  line-height: 24px;\n  text-align: center;\n  margin: 0px 0px 20px 0px;\n  padding-bottom: 28px;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  color: ", ";\n\n  @media ", " {\n    margin: 0px 0px 30px 0px;\n  }\n\n  &::after {\n    width: 33%;\n    content: '';\n    position: absolute;\n    bottom: 0px;\n    border: ", ";\n    margin: 0 auto;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// prettier-ignore
var StyledMainHeader = _styledComponents.default.h2(_templateObject(), function (props) {
  return props.theme.headerTextColor;
}, _sizes.device.tablet, function (props) {
  return props.withBorder ? "3px solid ".concat(props.theme.headerBorderColor) : 'none';
});

var StyledSubHeader = _styledComponents.default.h5(_templateObject2(), function (props) {
  return props.theme.subheaderTextColor;
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