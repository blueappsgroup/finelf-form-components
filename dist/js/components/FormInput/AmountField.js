"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _formik = require("formik");

var _react = _interopRequireDefault(require("react"));

var _base = require("./base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AmountField = function AmountField(_ref) {
  var id = _ref.id,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? 'Kwota pożyczki' : _ref$label,
      _ref$name = _ref.name,
      name = _ref$name === void 0 ? 'amount' : _ref$name,
      _ref$required = _ref.required,
      required = _ref$required === void 0 ? false : _ref$required,
      showError = _ref.showError,
      _ref$showMinMax = _ref.showMinMax,
      showMinMax = _ref$showMinMax === void 0 ? true : _ref$showMinMax;
  return /*#__PURE__*/_react.default.createElement(_formik.Field, {
    required: required,
    showError: showError,
    showMinMax: showMinMax,
    id: id,
    name: name,
    component: _base.BaseRangeField,
    label: label,
    type: "text",
    min: 300,
    max: 10000,
    step: 100,
    value: 2000,
    suffix: 'PLN',
    unit: 'zł'
  });
};

var _default = AmountField;
exports.default = _default;
//# sourceMappingURL=AmountField.js.map