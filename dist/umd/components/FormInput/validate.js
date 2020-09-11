(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.undefined = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  const validateText = exports.validateText = required => value => {
    let error;

    if (!value && required) {
      error = 'Pole wymagane';
    }

    return error;
  };

  const validateEmail = exports.validateEmail = (customErrorMsg = 'Nie poprawny adres email', required) => value => {
    let error;

    if (!value && required) {
      error = 'Pole wymagane';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) && value) {
      error = customErrorMsg;
    }

    return error;
  };

  const validateTelNumber = exports.validateTelNumber = (customErrorMsg = 'Nie poprawny numer telefonu', required) => value => {
    let error;

    if (!value && required) {
      error = 'Pole wymagane';
    } else if (!/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/i.test(value) && value) {
      error = customErrorMsg;
    }

    return error;
  };

  const validateCheckbox = exports.validateCheckbox = required => value => required && !value && 'required' || undefined;
});
//# sourceMappingURL=validate.js.map