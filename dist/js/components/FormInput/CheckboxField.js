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
      label = _ref.label,
      _ref$name = _ref.name,
      name = _ref$name === void 0 ? 'checkbox_field' : _ref$name,
      _ref$required = _ref.required,
      required = _ref$required === void 0 ? false : _ref$required,
      onChange = _ref.onChange,
      children = _ref.children,
      HTMLcontent = _ref.HTMLcontent,
      skipFieldForApi = _ref.skipFieldForApi;
  return /*#__PURE__*/_react.default.createElement(_formik.Field, {
    required: required,
    id: id,
    name: name,
    component: _CheckBox.default,
    label: label,
    type: "checkbox",
    validate: (0, _validate.validateCheckbox)(required),
    onChange: onChange,
    childrenBody: children,
    HTMLcontent: HTMLcontent,
    skipFieldForApi: skipFieldForApi
  });
};

CheckboxFormField.defaultProps = {
  name: 'checkbox_field'
};
var _default = CheckboxFormField;
exports.default = _default;
//# sourceMappingURL=CheckboxField.js.map