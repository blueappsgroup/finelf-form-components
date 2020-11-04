"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  border-radius: 4px;\n  border: ", ";\n  color: ", ";\n  outline: 0;\n  letter-spacing: 0.5px;\n  font-style: normal;\n  font-weight: 800;\n  font-size: 20px;\n  line-height: 16px;\n  padding: 20px;\n  margin-top: 20px;\n\n  &:disabled {\n    background: silver;\n  }\n\n  &:hover {\n    cursor: pointer;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledButton = _styledComponents.default.button(_templateObject(), function (props) {
  return props.variant === 'primary' ? props.theme.buttonBgColor : props.theme.buttonSecondaryBgColor;
}, function (props) {
  return props.variant === 'primary' ? 'none' : "4px solid ".concat(props.theme.buttonSecondaryBorderColor);
}, function (props) {
  return props.variant === 'primary' ? props.theme.buttonTextColor : props.theme.buttonSecondaryTextColor;
});

var Button = function Button(_ref) {
  var text = _ref.text,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'button' : _ref$type,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'primary' : _ref$variant,
      onClick = _ref.onClick,
      disabled = _ref.disabled;
  return /*#__PURE__*/_react.default.createElement(StyledButton, {
    disabled: disabled,
    variant: variant,
    type: type,
    onClick: onClick
  }, text);
};

var _default = Button;
exports.default = _default;
//# sourceMappingURL=index.js.map