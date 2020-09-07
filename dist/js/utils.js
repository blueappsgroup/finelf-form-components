"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetFormValueCache = exports.getFormValuesFromCache = exports.setFormValuesToCache = exports.FormContext = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormContext = /*#__PURE__*/_react.default.createContext({});

exports.FormContext = FormContext;

var setFormValuesToCache = function setFormValuesToCache(values, formId) {
  formId && window.sessionStorage.setItem("form-".concat(formId), JSON.stringify(values));
};

exports.setFormValuesToCache = setFormValuesToCache;

var getFormValuesFromCache = function getFormValuesFromCache(id) {
  return id && JSON.parse(window.sessionStorage.getItem("form-".concat(id))) || {};
};

exports.getFormValuesFromCache = getFormValuesFromCache;

var resetFormValueCache = function resetFormValueCache(id) {
  return window.sessionStorage.setItem("form-".concat(id), '{}');
};

exports.resetFormValueCache = resetFormValueCache;
//# sourceMappingURL=utils.js.map