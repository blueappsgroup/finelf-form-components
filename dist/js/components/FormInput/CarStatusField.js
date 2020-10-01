"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _formik = require("formik");

var _base = require("./base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options = {
  yes: 'tak',
  no: 'nie'
};

var CarStatusField = function CarStatusField(_ref) {
  var id = _ref.id,
      label = _ref.label,
      _ref$name = _ref.name,
      name = _ref$name === void 0 ? 'car_status' : _ref$name,
      _ref$required = _ref.required,
      required = _ref$required === void 0 ? false : _ref$required,
      showError = _ref.showError;
  return /*#__PURE__*/_react.default.createElement(_formik.Field, {
    required: required,
    showError: showError,
    id: id,
    name: name,
    component: _base.BaseSelectField,
    label: label,
    type: "select",
    options: options
  });
};

CarStatusField.defaultProps = {
  name: 'car_status'
};
var _default = CarStatusField;
exports.default = _default;
//# sourceMappingURL=CarStatusField.js.map