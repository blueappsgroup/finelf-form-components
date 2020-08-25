"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _formik = require("formik");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _sizes = require("../../consts/sizes");

var _theme = require("../../consts/theme");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  max-width: 600px;\n  justify-self: center;\n  margin: 0 10px;\n  background: ", ";\n  font-family: 'Manrope', BlinkMacSystemFont, -apple-system, 'Segoe UI',\n    'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',\n    'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;\n  padding: 20px 15px;\n  border-radius: 6px;\n  box-shadow: 0px 20px 60px rgba(0, 0, 0, 0.08);\n\n  @media ", " {\n    padding: 20px 30px;\n    margin: 0 auto;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledForm = (0, _styledComponents.default)(_formik.Form)(_templateObject(), function (props) {
  return props.theme.formBgColor;
}, _sizes.device.tablet);

var FormWrapper = function FormWrapper(_ref) {
  var children = _ref.children,
      onSubmit = _ref.onSubmit,
      customTheme = _ref.customTheme;
  return /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
    theme: _objectSpread(_objectSpread({}, _theme.theme), customTheme)
  }, /*#__PURE__*/_react.default.createElement(_formik.Formik, {
    initialValues: {},
    onSubmit: onSubmit
  }, /*#__PURE__*/_react.default.createElement(StyledForm, null, children)));
};

FormWrapper.propTypes = {
  onSubmit: _propTypes.default.func.isRequired,
  children: _propTypes.default.node.isRequired
};
var _default = FormWrapper;
exports.default = _default;
//# sourceMappingURL=index.js.map