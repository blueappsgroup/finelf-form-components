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
  exports.getFieldsValuesFromUrl = exports.handleSendDataToApi = exports.resetFormValueCache = exports.setFormValuesToCache = exports.getFormValuesFromCache = exports.FormContext = undefined;

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

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  const FormContext = exports.FormContext = _react2.default.createContext({});

  const getFormValuesFromCache = exports.getFormValuesFromCache = id => id && JSON.parse(window.sessionStorage.getItem(`form-${id}`)) || {};

  const setFormValuesToCache = exports.setFormValuesToCache = (values, formId) => {
    const allValues = getFormValuesFromCache(formId);
    formId && window.sessionStorage.setItem(`form-${formId}`, JSON.stringify(_objectSpread(_objectSpread({}, allValues), values)));
  };

  const resetFormValueCache = exports.resetFormValueCache = id => window.sessionStorage.setItem(`form-${id}`, '{}');

  const handleSendDataToApi = exports.handleSendDataToApi = (values, apiUrl, formId, fieldsForSkip, dataWithUserAgent) => {
    const {
      agreements
    } = values,
          rest = _objectWithoutProperties(values, ["agreements"]);

    const filteredValues = Object.keys(rest).reduce((acc, key) => {
      if (!fieldsForSkip.includes(key) && rest[key]) {
        acc[key] = typeof rest[key] === 'string' ? rest[key].trim() : rest[key];
      }

      return acc; // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }, {});
    const mappedAgreements = agreements && // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Object.keys(agreements).reduce((acc, key) => {
      if (key !== 'selectAll' && agreements[key]) {
        acc.push(key);
      }

      return acc;
    }, []);

    if (dataWithUserAgent) {
      // eslint-disable-next-line @typescript-eslint/camelcase
      filteredValues.user_agent = window.navigator.userAgent;
    }

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