"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _formik = require("formik");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _form = require("../../consts/form");

var _utils = require("../../utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: ", ";\n  color: ", ";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 18px;\n  margin: 10px 0px 20px 0px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledText = _styledComponents.default.span(_templateObject(), function (props) {
  return props.show ? 'block' : 'none';
}, function (props) {
  return props.isError ? props.theme.errorStatusTextColor : props.theme.successStatusTextColor;
});

var FormStatusText = function FormStatusText(_ref) {
  var successText = _ref.successText,
      errorText = _ref.errorText;

  var _useContext = (0, _react.useContext)(_utils.FormContext),
      errorFromApi = _useContext.errorFromApi;

  var _useFormikContext = (0, _formik.useFormikContext)(),
      status = _useFormikContext.status,
      dirty = _useFormikContext.dirty;

  var isError = status === _form.formStatuses.error || errorFromApi === true;
  var showStatusText = status === _form.formStatuses.submited && !dirty || isError;
  return /*#__PURE__*/_react.default.createElement(StyledText, {
    show: showStatusText,
    isError: isError
  }, isError ? errorText : successText);
};

FormStatusText.propTypes = {
  successText: _propTypes.default.string.isRequired,
  errorText: _propTypes.default.string.isRequired
};
var _default = FormStatusText;
exports.default = _default;
//# sourceMappingURL=index.js.map