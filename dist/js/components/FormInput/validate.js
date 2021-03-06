"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateBirthDate = exports.validateDate = exports.validateSelect = exports.validateIncome = exports.validateAmountOfChildren = exports.validateOtherLoanAmount = exports.validateIDCardNumber = exports.validateBankAccountNumber = exports.validateCompanyTax = exports.validateZipCode = exports.validateCityName = exports.validateHouseNumber = exports.validatePesel = exports.validateCheckbox = exports.validateTelNumber = exports.validateEmail = exports.validateText = void 0;

var _validateHelpers = require("./validateHelpers");

var validateText = function validateText(required) {
  return function (value) {
    var trimedValue = value && value.trim();

    if (!required && !value) {
      return;
    }

    if (required && (0, _validateHelpers.isEmpty)(trimedValue)) {
      return 'To pole jest wymagane';
    }

    if ((0, _validateHelpers.isNotValidLength)(trimedValue)) {
      return 'Pole musi zawierać między 2 - 100 znaków';
    }

    if ((0, _validateHelpers.isNotLetter)(trimedValue)) {
      return 'Podane dane są nieprawidłowe';
    }
  };
};

exports.validateText = validateText;

var validateEmail = function validateEmail() {
  var customErrorMsg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Niepoprawny adres email';
  var required = arguments.length > 1 ? arguments[1] : undefined;
  return function (value) {
    var trimedValue = value && value.trim();

    if (!required && !value) {
      return;
    }

    if (required && (0, _validateHelpers.isEmpty)(trimedValue)) {
      return 'To pole jest wymagane';
    }

    if ((0, _validateHelpers.isNotValidEmail)(trimedValue)) {
      return customErrorMsg;
    }
  };
};

exports.validateEmail = validateEmail;

var validateTelNumber = function validateTelNumber(required, customErrorMsg) {
  return function (value) {
    var trimedValue = value && value.trim();

    if (!required && !value) {
      return;
    }

    if (required && (0, _validateHelpers.isEmpty)(trimedValue)) {
      return 'To pole jest wymagane';
    }

    if ((0, _validateHelpers.isNotValidPhoneNumber)(trimedValue)) {
      return customErrorMsg;
    }
  };
};

exports.validateTelNumber = validateTelNumber;

var validateCheckbox = function validateCheckbox(required) {
  return function (value) {
    return required && !value && 'required' || undefined;
  };
};

exports.validateCheckbox = validateCheckbox;

var validatePesel = function validatePesel(required) {
  return function (value) {
    var trimedValue = value && value.trim();

    if (!required && !value) {
      return;
    }

    if (required && (0, _validateHelpers.isEmpty)(trimedValue)) {
      return 'To pole jest wymagane';
    }

    if ((0, _validateHelpers.isNotNumber)(trimedValue)) {
      return 'Podany PESEL jest nieprawidłowy';
    }

    if (!(0, _validateHelpers.isValidPesel)(trimedValue)) {
      return 'Podany PESEL jest nieprawidłowy';
    }
  };
};

exports.validatePesel = validatePesel;

var validateHouseNumber = function validateHouseNumber(required) {
  return function (value) {
    var trimedValue = value && value.trim();

    if (!required && !value) {
      return;
    }

    if (required && (0, _validateHelpers.isEmpty)(trimedValue)) {
      return 'To pole jest wymagane';
    }

    if ((0, _validateHelpers.isNotValidLength)(trimedValue, 1, 10)) {
      return 'Podany numer mieszkania jest nieprawidłowy';
    }
  };
};

exports.validateHouseNumber = validateHouseNumber;

var validateCityName = function validateCityName(required) {
  return function (value) {
    var trimedValue = value && value.trim();

    if (!required && !value) {
      return;
    }

    if (required && (0, _validateHelpers.isEmpty)(trimedValue)) {
      return 'To pole jest wymagane';
    }

    if ((0, _validateHelpers.isNotValidLength)(trimedValue)) {
      return 'Pole musi zawierać między 2 - 100 znaków';
    }

    if ((0, _validateHelpers.haveSpecialChars)(trimedValue)) {
      return 'Podane dane są nieprawidłowe';
    }
  };
};

exports.validateCityName = validateCityName;

var validateZipCode = function validateZipCode(required) {
  return function (value) {
    var trimedValue = value && value.trim();

    if (!required && !value) {
      return;
    }

    if (required && (0, _validateHelpers.isEmpty)(trimedValue)) {
      return 'To pole jest wymagane';
    }

    if ((0, _validateHelpers.isNotValidLength)(trimedValue, 1, 10)) {
      return 'Pole musi zawierać między 1 - 10 znaków';
    }

    if ((0, _validateHelpers.isNotValidZipCode)(trimedValue)) {
      return 'Podane dane są nieprawidłowe';
    }
  };
};

exports.validateZipCode = validateZipCode;

var validateCompanyTax = function validateCompanyTax(required) {
  return function (value) {
    if (!required && !value) {
      return;
    }

    if (required && (0, _validateHelpers.isEmpty)(value)) {
      return 'To pole jest wymagane';
    }

    if (!(0, _validateHelpers.isValidNIP)(value)) {
      return 'Podany NIP jest nieprawidłowy';
    }
  };
};

exports.validateCompanyTax = validateCompanyTax;

var validateBankAccountNumber = function validateBankAccountNumber(required) {
  return function (value) {
    var trimedValue = value && value.trim();

    if (!required && !value) {
      return;
    }

    if (required && (0, _validateHelpers.isEmpty)(trimedValue)) {
      return 'To pole jest wymagane';
    }

    if ((0, _validateHelpers.isNotNumber)(trimedValue)) {
      return 'Podany numer konta jest nieprawidłowy';
    }

    if ((0, _validateHelpers.isNotValidLength)(trimedValue, 26, 26)) {
      return 'Podany numer konta jest nieprawidłowy';
    }

    if (!(0, _validateHelpers.isValidBankAccountNumber)(trimedValue)) {
      return 'Podany numer konta jest nieprawidłowy';
    }
  };
};

exports.validateBankAccountNumber = validateBankAccountNumber;

var validateIDCardNumber = function validateIDCardNumber(required) {
  return function (value) {
    var trimedValue = value && value.trim();

    if (!required && !value) {
      return;
    }

    if (required && (0, _validateHelpers.isEmpty)(trimedValue)) {
      return 'To pole jest wymagane';
    }

    if ((0, _validateHelpers.isNotNumber)(trimedValue)) {
      return 'Podany numer dowodu jest nieprawidłowy';
    }

    if ((0, _validateHelpers.isNotValidIDCard)(trimedValue)) {
      return 'Podany numer dowodu jest nieprawidłowy';
    }

    if (!(0, _validateHelpers.isValidIDCard)(trimedValue)) {
      return 'Podany numer dowodu jest nieprawidłowy';
    }
  };
};

exports.validateIDCardNumber = validateIDCardNumber;

var validateOtherLoanAmount = function validateOtherLoanAmount() {
  var customErrorMsg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Podana kwota jest nieprawidłowa';
  var required = arguments.length > 1 ? arguments[1] : undefined;
  return function (value) {
    var trimedValue = value && value.trim();

    if (!required && !value) {
      return;
    }

    if (required && (0, _validateHelpers.isEmpty)(trimedValue)) {
      return 'To pole jest wymagane';
    }

    if ((0, _validateHelpers.isNotValidNumberBetween1And10Digits)(trimedValue)) {
      return customErrorMsg;
    }
  };
};

exports.validateOtherLoanAmount = validateOtherLoanAmount;

var validateAmountOfChildren = function validateAmountOfChildren() {
  var customErrorMsg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Podana liczba jest nieprawidłowa';
  var required = arguments.length > 1 ? arguments[1] : undefined;
  return function (value) {
    var trimedValue = value && value.trim();

    if (!required && !value) {
      return;
    }

    if (required && (0, _validateHelpers.isEmpty)(trimedValue)) {
      return 'To pole jest wymagane';
    }

    if ((0, _validateHelpers.isNotValidNumberBetween1And10Digits)(trimedValue)) {
      return customErrorMsg;
    }
  };
};

exports.validateAmountOfChildren = validateAmountOfChildren;

var validateIncome = function validateIncome() {
  var customErrorMsg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Podana kwota jest nieprawidłowa';
  var required = arguments.length > 1 ? arguments[1] : undefined;
  return function (value) {
    var trimedValue = value && value.trim();

    if (!required && !value) {
      return;
    }

    if (required && (0, _validateHelpers.isEmpty)(trimedValue)) {
      return 'To pole jest wymagane';
    }

    if ((0, _validateHelpers.isNotValidNumberBetween1And10Digits)(trimedValue)) {
      return customErrorMsg;
    }
  };
};

exports.validateIncome = validateIncome;

var validateSelect = function validateSelect(required, options) {
  return function (value) {
    if (!required && !value) {
      return;
    }

    if (required && (0, _validateHelpers.isEmpty)(value)) {
      return 'To pole jest wymagane';
    }

    if ((0, _validateHelpers.isNotValidOption)(value, options)) {
      return 'Podane dane są nieprawidłowe';
    }
  };
};

exports.validateSelect = validateSelect;

var validateDate = function validateDate(required) {
  return function (value) {
    if (!required && !value) {
      return;
    }

    if (required && (0, _validateHelpers.isEmpty)(value)) {
      return 'To pole jest wymagane';
    }
  };
};

exports.validateDate = validateDate;

var validateBirthDate = function validateBirthDate(required) {
  return function (value) {
    if (!required && !value) {
      return;
    }

    if (required && (0, _validateHelpers.isEmpty)(value)) {
      return 'To pole jest wymagane';
    }

    if (!(0, _validateHelpers.isAdult)(value)) {
      return 'Musisz mieć skończone 18 lat';
    }
  };
};

exports.validateBirthDate = validateBirthDate;
//# sourceMappingURL=validate.js.map