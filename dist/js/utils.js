"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendDataToAwsSQS = exports.encodeData = exports.resetFormValueCache = exports.getFormValuesFromCache = exports.setFormValuesToCache = exports.FormContext = void 0;

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
//# sourceMappingURL=utils.js.map