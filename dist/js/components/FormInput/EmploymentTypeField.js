"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _formik = require("formik");

var _base = require("./base");

var _validate = require("./validate");

var _CompanyTaxField = _interopRequireDefault(require("./CompanyTaxField"));

var _CompanyNameField = _interopRequireDefault(require("./CompanyNameField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable @typescript-eslint/camelcase */
var options = {
  fixed: 'umowa o pracę na czas nieokreślony',
  temporary: 'umowa o pracę na czas określony',
  self_employed: 'samozatrudnienie',
  fixed_partial: 'umowa o pracę na czas nieokreślony (niepełny etat)',
  government: 'stanowisko rządowe',
  unemployed: 'bezrobotny',
  pension: 'emeryt/rencista',
  agriculture: 'gospodarstwo rolne',
  student: 'student',
  housewife: 'gospodyni domowa',
  other: 'inne',
  service_contract: 'umowa zlecenie / umowa o dzieło'
};
var conditionValueListForCompanyNameField = ['fixed', 'temporary', 'fixed_partial', 'government', 'agriculture', 'service_contract'];

var EmploymentTypeField = function EmploymentTypeField(_ref) {
  var id = _ref.id,
      label = _ref.label,
      _ref$name = _ref.name,
      name = _ref$name === void 0 ? 'employment_type' : _ref$name,
      _ref$required = _ref.required,
      required = _ref$required === void 0 ? false : _ref$required,
      validate = _ref.validate,
      _ref$showError = _ref.showError,
      showError = _ref$showError === void 0 ? true : _ref$showError;

  var _useFormikContext = (0, _formik.useFormikContext)(),
      values = _useFormikContext.values,
      validateForm = _useFormikContext.validateForm;

  var fieldValue = values[name];
  (0, _react.useEffect)(function () {
    validateForm();
  }, [fieldValue, validateForm]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_formik.Field, {
    required: required,
    showError: showError,
    id: id,
    name: name,
    component: _base.BaseSelectField,
    label: label,
    type: "select",
    options: options,
    validate: validate && validate(required) || (0, _validate.validateSelect)(required, options)
  }), name && values[name] === 'self_employed' && /*#__PURE__*/_react.default.createElement(_CompanyTaxField.default, {
    required: true,
    name: "company_tax_id"
  }), name && conditionValueListForCompanyNameField.includes(values[name]) && /*#__PURE__*/_react.default.createElement(_CompanyNameField.default, {
    required: true,
    name: "company_name"
  }));
};

EmploymentTypeField.defaultProps = {
  name: 'employment_type'
};
var _default = EmploymentTypeField;
exports.default = _default;
//# sourceMappingURL=EmploymentTypeField.js.map