"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _TextField = _interopRequireDefault(require("./TextField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CompanyNameField = function CompanyNameField(_ref) {
  var id = _ref.id,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? 'Nazwa pracodawcy' : _ref$label,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? 'Nazwa pracodawcy' : _ref$placeholder,
      _ref$name = _ref.name,
      name = _ref$name === void 0 ? 'company_name' : _ref$name,
      _ref$required = _ref.required,
      required = _ref$required === void 0 ? true : _ref$required,
      validate = _ref.validate,
      _ref$showError = _ref.showError,
      showError = _ref$showError === void 0 ? true : _ref$showError;
  return /*#__PURE__*/_react.default.createElement(_TextField.default, {
    id: id,
    label: label,
    placeholder: placeholder,
    required: required,
    showError: showError,
    name: name,
    validate: validate
  });
};

var _default = CompanyNameField;
exports.default = _default;
//# sourceMappingURL=CompanyNameField.js.map