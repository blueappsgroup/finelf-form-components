(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react);
    global.undefined = mod.exports;
  }
})(this, function (exports, _react) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.sendDataToAwsSQS = exports.encodeData = exports.resetFormValueCache = exports.getFormValuesFromCache = exports.setFormValuesToCache = exports.FormContext = undefined;

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const FormContext = exports.FormContext = _react2.default.createContext({});

  const setFormValuesToCache = exports.setFormValuesToCache = (values, formId) => {
    formId && window.sessionStorage.setItem(`form-${formId}`, JSON.stringify(values));
  };

  const getFormValuesFromCache = exports.getFormValuesFromCache = id => id && JSON.parse(window.sessionStorage.getItem(`form-${id}`)) || {};

  const resetFormValueCache = exports.resetFormValueCache = id => window.sessionStorage.setItem(`form-${id}`, '{}');

  const encodeData = exports.encodeData = data => {
    return Object.keys(data).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&');
  };

  const sendDataToAwsSQS = exports.sendDataToAwsSQS = (values, queueUrl) => fetch(queueUrl || 'https://sqs.eu-central-1.amazonaws.com/031738021372/finelf-users-queue', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: encodeData({
      Action: 'SendMessage',
      MessageBody: JSON.stringify(values)
    })
  });
});
//# sourceMappingURL=utils.js.map