"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _formik = require("formik");

var _base = require("./base");

var _validate = require("./validate");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable @typescript-eslint/camelcase */
var options = {
  bills: 'rachunki',
  other_loans: 'inne pożyczki',
  vacation: 'wakacje',
  education: 'edukacja',
  car: 'samochód',
  medical_expenses: 'wydatki zdrowotne',
  renovation: 'renowacja',
  electronics: 'elektronika',
  furniture: 'meble',
  other: 'inne',
  investment: 'inwestycja',
  tax_payment: 'spłata podatków'
};

var LoanReasonField = function LoanReasonField(_ref) {
  var id = _ref.id,
      label = _ref.label,
      name = _ref.name,
      _ref$required = _ref.required,
      required = _ref$required === void 0 ? false : _ref$required,
      validate = _ref.validate,
      _ref$showError = _ref.showError,
      showError = _ref$showError === void 0 ? true : _ref$showError;
  return /*#__PURE__*/_react.default.createElement(_formik.Field, {
    required: required,
    showError: showError,
    id: id,
    name: name,
    component: _base.BaseSelectField,
    label: label,
    type: "select",
    options: options,
    validate: validate && validate(required) || (0, _validate.validateSelect)(required, options)
  });
};

LoanReasonField.defaultProps = {
  name: 'loan_reason'
};
var _default = LoanReasonField;
exports.default = _default;
//# sourceMappingURL=LoanReasonField.js.map