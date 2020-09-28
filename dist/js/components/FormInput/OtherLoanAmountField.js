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

var OtherLoanAmountField = function OtherLoanAmountField(_ref) {
  var id = _ref.id,
      label = _ref.label,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? 'Kwota obecnych zobowiązań finansowych' : _ref$placeholder,
      _ref$errorMsg = _ref.errorMsg,
      errorMsg = _ref$errorMsg === void 0 ? 'Podany kwota jest nieprawidłowa' : _ref$errorMsg,
      _ref$name = _ref.name,
      name = _ref$name === void 0 ? 'other_loans_amount' : _ref$name,
      _ref$required = _ref.required,
      required = _ref$required === void 0 ? false : _ref$required,
      validate = _ref.validate,
      showError = _ref.showError;
  return /*#__PURE__*/_react.default.createElement(_formik.Field, {
    required: required,
    showError: showError,
    id: id,
    name: name,
    component: _base.default,
    label: label,
    placeholder: placeholder,
    type: "text",
    suffix: 'PLN',
    validate: validate && validate(required) || (0, _validate.validateOtherLoanAmount)(errorMsg, required)
  });
};

var _default = OtherLoanAmountField;
exports.default = _default;
//# sourceMappingURL=OtherLoanAmountField.js.map