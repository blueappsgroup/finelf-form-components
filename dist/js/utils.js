"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFieldsValuesFromUrl = exports.handleSendDataToApi = exports.sendDataToAwsSQS = exports.encodeData = exports.resetFormValueCache = exports.getFormValuesFromCache = exports.setFormValuesToCache = exports.FormContext = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

var encodeData = function encodeData(data) {
  return Object.keys(data).map(function (key) {
    return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
  }).join('&');
};

exports.encodeData = encodeData;

var sendDataToAwsSQS = function sendDataToAwsSQS(values, queueUrl) {
  return fetch(queueUrl || 'https://sqs.eu-central-1.amazonaws.com/031738021372/finelf-users-queue', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: encodeData({
      Action: 'SendMessage',
      MessageBody: JSON.stringify(values)
    })
  });
};

exports.sendDataToAwsSQS = sendDataToAwsSQS;

var handleSendDataToApi = function handleSendDataToApi(values, apiUrl, formId, fieldsForSkip, dataWithUserAgent) {
  var agreements = values.agreements,
      rest = _objectWithoutProperties(values, ["agreements"]);

  var filteredValues = Object.keys(rest).reduce(function (acc, key) {
    if (!fieldsForSkip.includes(key) && rest[key]) {
      acc[key] = rest[key];
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