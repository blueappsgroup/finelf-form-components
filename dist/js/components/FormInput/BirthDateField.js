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

var BirthDateField = function BirthDateField(_ref) {
  var id = _ref.id,
      label = _ref.label,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? 'Data urodzenia' : _ref$placeholder,
      name = _ref.name,
      _ref$required = _ref.required,
      required = _ref$required === void 0 ? false : _ref$required,
      _ref$showError = _ref.showError,
      showError = _ref$showError === void 0 ? true : _ref$showError,
      dateFormat = _ref.dateFormat;
  return /*#__PURE__*/_react.default.createElement(_formik.Field, {
    required: required,
    showError: showError,
    id: id,
    component: _base.BaseDateField,
    name: name,
    label: label,
    placeholder: placeholder,
    validate: (0, _validate.validateDate)(required),
    dateFormat: dateFormat
  });
};

BirthDateField.defaultProps = {
  name: 'date_of_birth'
};
var _default = BirthDateField;
exports.default = _default;
//# sourceMappingURL=BirthDateField.js.map