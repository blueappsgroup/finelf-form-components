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
  exports.getFieldsValuesFromUrl = exports.handleSendDataToApi = exports.sendDataToAwsSQS = exports.encodeData = exports.resetFormValueCache = exports.getFormValuesFromCache = exports.setFormValuesToCache = exports.FormContext = undefined;

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
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

  const handleSendDataToApi = exports.handleSendDataToApi = (values, apiUrl, formId, fieldsForSkip) => {
    const {
      agreements
    } = values,
          rest = _objectWithoutProperties(values, ["agreements"]);

    const filteredValues = Object.keys(rest).reduce((acc, key) => {
      if (!fieldsForSkip.includes(key)) {
        acc[key] = rest[key];
      }

      return acc; // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }, {}); // eslint-disable-next-line @typescript-eslint/no-explicit-any

    const mappedAgreements = Object.keys(agreements).reduce((acc, key) => {
      if (key !== 'selectAll' && agreements[key]) {
        acc.push(key);
      }

      return acc;
    }, []);
    return fetch(`${apiUrl}/forms/${formId}/data`, {
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

  const getFieldsValuesFromUrl = exports.getFieldsValuesFromUrl = paramsList => paramsList.reduce((acc, item) => {
    const itemValue = new URLSearchParams(window.location.search).get(item);

    if (itemValue !== null) {
      acc[item] = itemValue;
    }

    return acc;
  }, {});
});
//# sourceMappingURL=utils.js.map