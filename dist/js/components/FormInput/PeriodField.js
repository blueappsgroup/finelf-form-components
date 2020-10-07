"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _formik = require("formik");

var _base = require("./base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PeriodField = function PeriodField(_ref) {
  var id = _ref.id,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? 'Okres spłaty' : _ref$label,
      name = _ref.name,
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
    min: 3,
    max: 60,
    step: 1,
    value: 12,
    suffix: 'Dni',
    unit: 'Dni'
  });
};

PeriodField.defaultProps = {
  name: 'application_period'
};
var _default = PeriodField;
exports.default = _default;
//# sourceMappingURL=PeriodField.js.map