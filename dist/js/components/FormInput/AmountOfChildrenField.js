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

var AmountOfChildrenField = function AmountOfChildrenField(_ref) {
  var id = _ref.id,
      label = _ref.label,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? 'Liczba osób na utrzymaniu' : _ref$placeholder,
      _ref$errorMsg = _ref.errorMsg,
      errorMsg = _ref$errorMsg === void 0 ? 'Podana ilość jest nieprawidłowa' : _ref$errorMsg,
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
    validate: (0, _validate.validateAmountOfChildren)(errorMsg, required)
  });
};

AmountOfChildrenField.defaultProps = {
  name: 'amount_of_children'
};
var _default = AmountOfChildrenField;
exports.default = _default;
//# sourceMappingURL=AmountOfChildrenField.js.map