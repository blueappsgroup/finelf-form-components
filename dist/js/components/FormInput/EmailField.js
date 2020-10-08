"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _formik = require("formik");

var _base = _interopRequireDefault(require("./base"));

var _validate = require("./validate");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EmailField = function EmailField(_ref) {
  var id = _ref.id,
      label = _ref.label,
      placeholder = _ref.placeholder,
      _ref$errorMsg = _ref.errorMsg,
      errorMsg = _ref$errorMsg === void 0 ? 'Podany email jest nieprawidłowy' : _ref$errorMsg,
      name = _ref.name,
      _ref$required = _ref.required,
      required = _ref$required === void 0 ? false : _ref$required,
      _ref$showError = _ref.showError,
      showError = _ref$showError === void 0 ? true : _ref$showError;
  return /*#__PURE__*/_react.default.createElement(_formik.Field, {
    required: required,
    showError: showError,
    id: id,
    name: name,
    component: _base.default,
    label: label,
    placeholder: placeholder,
    type: "email",
    validate: (0, _validate.validateEmail)(errorMsg, required)
  });
};

EmailField.defaultProps = {
  name: 'email'
};
var _default = EmailField;
exports.default = _default;
//# sourceMappingURL=EmailField.js.map