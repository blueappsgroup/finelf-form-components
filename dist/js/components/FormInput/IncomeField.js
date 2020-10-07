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

var IncomeField = function IncomeField(_ref) {
  var id = _ref.id,
      label = _ref.label,
      placeholder = _ref.placeholder,
      _ref$errorMsg = _ref.errorMsg,
      errorMsg = _ref$errorMsg === void 0 ? 'Podana kwota jest nieprawidłowa' : _ref$errorMsg,
      name = _ref.name,
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
    type: "text",
    validate: (0, _validate.validateIncome)(errorMsg, required)
  });
};

IncomeField.defaultProps = {
  name: 'income'
};
var _default = IncomeField;
exports.default = _default;
//# sourceMappingURL=IncomeField.js.map