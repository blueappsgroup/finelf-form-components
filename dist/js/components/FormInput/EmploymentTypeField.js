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
  fixed: 'umowa o pracę na czas nieokreślony',
  temporary: 'umowa o pracę na czas określony',
  self_employed: 'samozatrudnienie',
  fixed_partial: 'wdowa/wdowiec',
  government: 'stanowisko rządowe',
  unemployed: 'bezrobotny',
  pension: 'emeryt/rencista',
  agriculture: 'gospodarstwo rolne',
  student: 'student',
  housewife: 'gospodyni domowa',
  other: 'inne',
  service_contract: 'umowa zlecenie / umowa o dzieło'
};

var EmploymentTypeField = function EmploymentTypeField(_ref) {
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

EmploymentTypeField.defaultProps = {
  name: 'employment_type'
};
var _default = EmploymentTypeField;
exports.default = _default;
//# sourceMappingURL=EmploymentTypeField.js.map