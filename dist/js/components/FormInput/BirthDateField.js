"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _formik = require("formik");

var _base = _interopRequireDefault(require("./base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BirthDateField = function BirthDateField(_ref) {
  var id = _ref.id,
      label = _ref.label,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? 'BirthDate' : _ref$placeholder,
      _ref$errorMsg = _ref.errorMsg,
      errorMsg = _ref$errorMsg === void 0 ? 'Podana data urodzenia jest nieprawidłowa' : _ref$errorMsg,
      _ref$name = _ref.name,
      name = _ref$name === void 0 ? 'date_of_birth' : _ref$name,
      _ref$required = _ref.required,
      required = _ref$required === void 0 ? false : _ref$required,
      showError = _ref.showError;
  return /*#__PURE__*/_react.default.createElement(_formik.Field, {
    required: required,
    showError: showError,
    id: id,
    name: name,
    component: _base.default,
    label: label,
    placeholder: placeholder,
    type: "date"
  });
};

var _default = BirthDateField;
exports.default = _default;
//# sourceMappingURL=BirthDateField.js.map