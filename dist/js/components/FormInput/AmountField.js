"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _formik = require("formik");

var _base = require("./base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AmountField = function AmountField(_ref) {
  var id = _ref.id,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? 'Kwota pożyczki' : _ref$label,
      name = _ref.name,
      _ref$required = _ref.required,
      required = _ref$required === void 0 ? false : _ref$required,
      _ref$showError = _ref.showError,
      showError = _ref$showError === void 0 ? true : _ref$showError,
      _ref$showMinMax = _ref.showMinMax,
      showMinMax = _ref$showMinMax === void 0 ? true : _ref$showMinMax,
      _ref$min = _ref.min,
      min = _ref$min === void 0 ? 300 : _ref$min,
      _ref$max = _ref.max,
      max = _ref$max === void 0 ? 10000 : _ref$max,
      _ref$step = _ref.step,
      step = _ref$step === void 0 ? 100 : _ref$step,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? 2000 : _ref$value,
      _ref$suffix = _ref.suffix,
      suffix = _ref$suffix === void 0 ? 'PLN' : _ref$suffix,
      _ref$unit = _ref.unit,
      unit = _ref$unit === void 0 ? 'zł' : _ref$unit;
  return /*#__PURE__*/_react.default.createElement(_formik.Field, {
    required: required,
    showError: showError,
    showMinMax: showMinMax,
    id: id,
    name: name,
    component: _base.BaseRangeField,
    label: label,
    type: "text",
    min: min,
    max: max,
    step: step,
    value: value,
    suffix: suffix,
    unit: unit
  });
};

AmountField.defaultProps = {
  name: 'amount'
};
var _default = AmountField;
exports.default = _default;
//# sourceMappingURL=AmountField.js.map