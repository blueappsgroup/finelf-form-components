"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _sizes = require("../../consts/sizes");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StepHeader = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  flex-grow: 1;\n  font-size: 16px;\n  letter-spacing: 0px;\n  font-weight: ", ";\n  color: ", ";\n  border-bottom: ", ";\n  margin: 0px 0px 30px;\n  padding-bottom: 10px;\n\n  &:first-of-type {\n    margin-right: 15px;\n  }\n\n  &:last-child {\n    margin-left: 15px;\n  }\n\n  @media ", " {\n    &:first-of-type {\n      margin-right: 15px;\n    }\n\n    &:last-child {\n      margin-left: 15px;\n    }\n  }\n"])), function (props) {
  return props.activeStep ? 800 : 400;
}, function (props) {
  return props.activeStep ? props.theme.stepHeaderActiveColor : props.theme.stepHeaderInActiveColor;
}, function (props) {
  return props.activeStep ? "4px solid ".concat(props.theme.stepHeaderActiveBorderColor) : "2px solid ".concat(props.theme.stepHeaderInActiveBorderColor);
}, _sizes.device.mobileL);

var _default = StepHeader;
exports.default = _default;
//# sourceMappingURL=StepHeader.js.map