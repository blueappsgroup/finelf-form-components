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
  var data = _taggedTemplateLiteral(["\n  display: ", ";\n  justify-content: center;\n  width: 100%;\n  margin: 0 auto 15px;\n  align-items: flex-start;\n  \n  img {\n    max-width: 100%;  \n  }\n  \n  @media ", " { \n    display: flex;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// prettier-ignore
var StyledContainer = _styledComponents.default.div(_templateObject(), function (props) {
  return props.hideOnMobile ? 'none' : 'flex';
}, _sizes.device.tablet);

var Image = function Image(_ref) {
  var src = _ref.src,
      alt = _ref.alt,
      hideOnMobile = _ref.hideOnMobile;
  return /*#__PURE__*/_react.default.createElement(StyledContainer, {
    hideOnMobile: hideOnMobile
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: src,
    alt: alt
  }));
};

var _default = Image;
exports.default = _default;
//# sourceMappingURL=index.js.map