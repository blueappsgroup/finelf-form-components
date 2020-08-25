"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  border-radius: 4px;\n  border: none;\n  color: ", ";\n  outline: 0;\n  letter-spacing: 0.5px;\n  font-style: normal;\n  font-weight: 800;\n  font-size: 20px;\n  line-height: 16px;\n  padding: 28px;\n  margin-top: 20px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledButton = _styledComponents.default.button(_templateObject(), function (props) {
  return props.theme.submitButtonBgColor;
}, function (props) {
  return props.theme.submitButtonTextColor;
});

var Button = function Button(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/_react.default.createElement(StyledButton, {
    type: "submit"
  }, text);
};

Button.propTypes = {
  text: _propTypes.default.string.isRequired
};
var _default = Button;
exports.default = _default;
//# sourceMappingURL=index.js.map