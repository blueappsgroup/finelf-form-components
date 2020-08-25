"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateCheckbox = exports.validateTelNumber = exports.validateEmail = void 0;

var validateEmail = function validateEmail() {
  var customErrorMsg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Nie poprawny adres email';
  var required = arguments.length > 1 ? arguments[1] : undefined;
  return function (value) {
    var error;

    if (!value && required) {
      error = 'Pole wymagane';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) && value) {
      error = customErrorMsg;
    }

    return error;
  };
};

exports.validateEmail = validateEmail;

var validateTelNumber = function validateTelNumber() {
  var customErrorMsg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Nie poprawny numer telefonu';
  var required = arguments.length > 1 ? arguments[1] : undefined;
  return function (value) {
    var error;

    if (!value && required) {
      error = 'Pole wymagane';
    } else if (!/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/i.test(value) && value) {
      error = customErrorMsg;
    }

    return error;
  };
};

exports.validateTelNumber = validateTelNumber;

var validateCheckbox = function validateCheckbox(required) {
  return function (value) {
    return required && !value && 'required' || undefined;
  };
};

exports.validateCheckbox = validateCheckbox;
//# sourceMappingURL=validate.js.map