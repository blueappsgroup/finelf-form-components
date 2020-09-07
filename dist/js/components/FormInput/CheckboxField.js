"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _formik = require("formik");

var _CheckBox = _interopRequireDefault(require("./CheckBox"));

var _validate = require("./validate");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CheckboxFormField = function CheckboxFormField(_ref) {
  var _ref$id = _ref.id,
      id = _ref$id === void 0 ? 'textField' : _ref$id,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? 'Text checkbox' : _ref$label,
      _ref$name = _ref.name,
      name = _ref$name === void 0 ? 'text field' : _ref$name,
      _ref$required = _ref.required,
      required = _ref$required === void 0 ? false : _ref$required;
  return /*#__PURE__*/_react.default.createElement(_formik.Field, {
    required: required,
    id: id,
    name: name,
    component: _CheckBox.default,
    label: label,
    type: "checkbox",
    validate: (0, _validate.validateCheckbox)(required)
  });
};

var _default = CheckboxFormField;
exports.default = _default;
//# sourceMappingURL=CheckboxField.js.map