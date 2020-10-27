"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _base = _interopRequireDefault(require("./base"));

var _validate = require("./validate");

var _CustomFieldWithCondition = _interopRequireDefault(require("./CustomFieldWithCondition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CompanyTaxField = function CompanyTaxField(_ref) {
  var id = _ref.id,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? 'NIP firmy' : _ref$label,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? 'NIP firmy' : _ref$placeholder,
      _ref$name = _ref.name,
      name = _ref$name === void 0 ? 'company_tax_id' : _ref$name,
      _ref$required = _ref.required,
      required = _ref$required === void 0 ? false : _ref$required,
      _ref$validate = _ref.validate,
      validate = _ref$validate === void 0 ? _validate.validateCompanyTax : _ref$validate,
      _ref$showError = _ref.showError,
      showError = _ref$showError === void 0 ? true : _ref$showError,
      requiredCondition = _ref.requiredCondition,
      visibleCondition = _ref.visibleCondition;
  return /*#__PURE__*/_react.default.createElement(_CustomFieldWithCondition.default, {
    id: id,
    label: label,
    placeholder: placeholder,
    component: _base.default,
    required: required,
    showError: showError,
    name: name,
    validate: validate,
    requiredCondition: requiredCondition,
    visibleCondition: visibleCondition
  });
};

CompanyTaxField.defaultProps = {
  name: 'company_tax_id',
  visibleCondition: {
    // eslint-disable-next-line @typescript-eslint/camelcase
    employment_type: ['self_employed']
  }
};
var _default = CompanyTaxField;
exports.default = _default;
//# sourceMappingURL=CompanyTaxField.js.map