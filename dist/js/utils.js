"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFieldsValuesFromUrl = exports.handleSendDataToApi = exports.resetFormValueCache = exports.setFormValuesToCache = exports.getFormValuesFromCache = exports.FormContext = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FormContext = /*#__PURE__*/_react.default.createContext({});

exports.FormContext = FormContext;

var getFormValuesFromCache = function getFormValuesFromCache(id) {
  return id && JSON.parse(window.sessionStorage.getItem("form-".concat(id))) || {};
};

exports.getFormValuesFromCache = getFormValuesFromCache;

var setFormValuesToCache = function setFormValuesToCache(values, formId) {
  var allValues = getFormValuesFromCache(formId);
  formId && window.sessionStorage.setItem("form-".concat(formId), JSON.stringify(_objectSpread(_objectSpread({}, allValues), values)));
};

exports.setFormValuesToCache = setFormValuesToCache;

var resetFormValueCache = function resetFormValueCache(id) {
  return window.sessionStorage.setItem("form-".concat(id), '{}');
};

exports.resetFormValueCache = resetFormValueCache;

var handleSendDataToApi = function handleSendDataToApi(values, apiUrl, formId, fieldsForSkip, dataWithUserAgent) {
  var agreements = values.agreements,
      rest = _objectWithoutProperties(values, ["agreements"]);

  var filteredValues = Object.keys(rest).reduce(function (acc, key) {
    if (!fieldsForSkip.includes(key) && rest[key]) {
      acc[key] = typeof rest[key] === 'string' ? rest[key].trim() : rest[key];
    }

    return acc; // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }, {});
  var mappedAgreements = agreements && // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Object.keys(agreements).reduce(function (acc, key) {
    if (key !== 'selectAll' && agreements[key]) {
      acc.push(key);
    }

    return acc;
  }, []);

  if (dataWithUserAgent) {
    // eslint-disable-next-line @typescript-eslint/camelcase
    filteredValues.user_agent = window.navigator.userAgent;
  }

  return fetch("".concat(apiUrl, "/forms/").concat(formId, "/data"), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      formName: formId,
      data: filteredValues,
      agreements: mappedAgreements
    })
  });
};

exports.handleSendDataToApi = handleSendDataToApi;

var getFieldsValuesFromUrl = function getFieldsValuesFromUrl(paramsList) {
  return paramsList.reduce(function (acc, item) {
    var itemValue = new URLSearchParams(window.location.search).get(item);

    if (itemValue !== null) {
      acc[item] = itemValue;
    }

    return acc;
  }, {});
};

exports.getFieldsValuesFromUrl = getFieldsValuesFromUrl;
//# sourceMappingURL=utils.js.map