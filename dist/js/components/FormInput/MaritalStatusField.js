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

/* eslint-disable @typescript-eslint/camelcase */
var options = {
  unmarried: 'panna/kawaler',
  married: 'mężatka/żonaty',
  divorced: 'rozwiedziona/rozwiedziony',
  widower: 'wdowa/wdowiec',
  with_parents: 'z rodzicami'
};

var MaritalStatusField = function MaritalStatusField(_ref) {
  var id = _ref.id,
      label = _ref.label,
      _ref$name = _ref.name,
      name = _ref$name === void 0 ? 'marital_status' : _ref$name,
      _ref$required = _ref.required,
      required = _ref$required === void 0 ? false : _ref$required,
      validate = _ref.validate,
      _ref$showError = _ref.showError,
      showError = _ref$showError === void 0 ? true : _ref$showError;
  return /*#__PURE__*/_react.default.createElement(_formik.Field, {
    required: required,
    showError: showError,
    id: id,
    name: name,
    component: _base.BaseSelectField,
    label: label,
    type: "select",
    options: options,
    validate: validate && validate(required) || (0, _validate.validateSelect)(required, options)
  });
};

MaritalStatusField.defaultProps = {
  name: 'amount_of_children'
};
var _default = MaritalStatusField;
exports.default = _default;
//# sourceMappingURL=MaritalStatusField.js.map