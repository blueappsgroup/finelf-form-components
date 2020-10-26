"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _sizes = require("../../consts/sizes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  display: ", ";\n  justify-content: center;\n  width: 100%;\n  padding: ", ";\n  margin: 0 auto;\n  align-items: flex-start;\n  box-sizing: border-box;\n  ", "\n  \n  img {\n    max-width: 100%;  \n    box-shadow: ", ";\n  }\n  \n  span {\n    position: absolute;\n    top: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n  }\n  \n  @media ", " { \n    display: flex;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// prettier-ignore
var StyledContainer = _styledComponents.default.div(_templateObject(), function (props) {
  return props.hideOnMobile ? 'none' : 'flex';
}, function (props) {
  return props.theme.imageContainerPadding;
}, function (props) {
  return !props.disableShadow && 'padding-right: 30px;';
}, function (props) {
  return props.disableShadow ? 'none' : props.theme.imageBoxShadow;
}, function (props) {
  return props.theme.imageContainerTextTopPosition;
}, function (props) {
  return props.theme.imageContainerTextFontSize;
}, function (props) {
  return props.theme.imageContainerTextFontWeight;
}, _sizes.device.laptopL);

var Image = function Image(_ref) {
  var src = _ref.src,
      alt = _ref.alt,
      text = _ref.text,
      hideOnMobile = _ref.hideOnMobile,
      disableShadow = _ref.disableShadow;
  return /*#__PURE__*/_react.default.createElement(StyledContainer, {
    hideOnMobile: hideOnMobile,
    disableShadow: disableShadow
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: src,
    alt: alt
  }), text && /*#__PURE__*/_react.default.createElement("span", null, text));
};

var _default = Image;
exports.default = _default;
//# sourceMappingURL=index.js.map