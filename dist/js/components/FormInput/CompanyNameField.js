"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _base = _interopRequireDefault(require("./base"));

var _validate = require("./validate");

var _formik = require("formik");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CompanyNameField = function CompanyNameField(_ref) {
  var id = _ref.id,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? 'Nazwa pracodawcy' : _ref$label,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? 'Nazwa pracodawcy' : _ref$placeholder,
      _ref$name = _ref.name,
      name = _ref$name === void 0 ? 'company_name' : _ref$name,
      _ref$required = _ref.required,
      required = _ref$required === void 0 ? false : _ref$required,
      _ref$validate = _ref.validate,
      validate = _ref$validate === void 0 ? _validate.validateText : _ref$validate,
      _ref$showError = _ref.showError,
      showError = _ref$showError === void 0 ? true : _ref$showError;
  return /*#__PURE__*/_react.default.createElement(_formik.Field, {
    id: id,
    label: label,
    placeholder: placeholder,
    component: _base.default,
    required: required,
    showError: showError,
    name: name,
    validate: validate(required)
  });
};

CompanyNameField.defaultProps = {
  name: 'company_name'
};
var _default = CompanyNameField;
exports.default = _default;
//# sourceMappingURL=CompanyNameField.js.map