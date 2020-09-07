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
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? 'Email' : _ref$placeholder,
      _ref$errorMsg = _ref.errorMsg,
      errorMsg = _ref$errorMsg === void 0 ? 'Nie poprawny adres email' : _ref$errorMsg,
      _ref$name = _ref.name,
      name = _ref$name === void 0 ? 'email' : _ref$name,
      _ref$required = _ref.required,
      required = _ref$required === void 0 ? false : _ref$required;
  return /*#__PURE__*/_react.default.createElement(_formik.Field, {
    required: required,
    id: id,
    name: name,
    component: _base.default,
    label: label,
    placeholder: placeholder,
    type: "email",
    validate: (0, _validate.validateEmail)(errorMsg, required)
  });
};

var _default = EmailField;
exports.default = _default;
//# sourceMappingURL=EmailField.js.map