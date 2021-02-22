"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// prettier-ignore
var HrLine = _styledComponents.default.hr(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  margin: 25px auto;\n  border-color: ", ";\n  border-width: ", ";\n"])), function (props) {
  return props.theme.hrColor;
}, function (props) {
  return props.theme.hrSize;
});

var Hr = function Hr() {
  return /*#__PURE__*/_react.default.createElement(HrLine, null);
};

var _default = Hr;
exports.default = _default;
//# sourceMappingURL=index.js.map