(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./validateHelpers"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./validateHelpers"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.validateHelpers);
    global.undefined = mod.exports;
  }
})(this, function (exports, _validateHelpers) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.validateDate = exports.validateSelect = exports.validateIncome = exports.validateAmountOfChildren = exports.validateOtherLoanAmount = exports.validateIDCardNumber = exports.validateBankAccountNumber = exports.validateCompanyTax = exports.validateZipCode = exports.validateCityName = exports.validateHouseNumber = exports.validatePesel = exports.validateCheckbox = exports.validateTelNumber = exports.validateEmail = exports.validateText = undefined;

  const validateText = exports.validateText = required => value => {
    if (!required && !value) {
      return;
    }

    if (required && (0, _validateHelpers.isEmpty)(value)) {
      return 'To pole jest wymagane';
    }

    if ((0, _validateHelpers.isNotValidLength)(value)) {
      return 'Pole musi zawierać między 2 - 100 znaków';
    }

    if ((0, _validateHelpers.isNotLetter)(value)) {
      return 'Podane dane są nieprawidłowe';
    }
  };

  const validateEmail = exports.validateEmail = (customErrorMsg = 'Niepoprawny adres email', required) => value => {
    if (!required && !value) {
      return;
    }

    if (required && (0, _validateHelpers.isEmpty)(value)) {
      return 'To pole jest wymagane';
    }

    if ((0, _validateHelpers.isNotValidEmail)(value)) {
      return customErrorMsg;
    }
  };

  const validateTelNumber = exports.validateTelNumber = (required, customErrorMsg) => value => {
    if (!required && !value) {
      return;
    }

    if (required && (0, _validateHelpers.isEmpty)(value)) {
      return 'To pole jest wymagane';
    }

    if ((0, _validateHelpers.isNotValidPhoneNumber)(value)) {
      return customErrorMsg;
    }
  };

  const validateCheckbox = exports.validateCheckbox = required => value => required && !value && 'required' || undefined;

  const validatePesel = exports.validatePesel = required => value => {
    if (!required && !value) {
      return;
    }

    if (required && (0, _validateHelpers.isEmpty)(value)) {
      return 'To pole jest wymagane';
    }

    if ((0, _validateHelpers.isNotNumber)(value)) {
      return 'Podany PESEL jest nieprawidłowy';
    }

    if (!(0, _validateHelpers.isValidPesel)(value)) {
      return 'Podany PESEL jest nieprawidłowy';
    }
  };

  const validateHouseNumber = exports.validateHouseNumber = required => value => {
    if (!required && !value) {
      return;
    }

    if (required && (0, _validateHelpers.isEmpty)(value)) {
      return 'To pole jest wymagane';
    }

    if ((0, _validateHelpers.isNotValidLength)(value, 1, 10)) {
      return 'Podany numer mieszkania jest nieprawidłowy';
    }
  };

  const validateCityName = exports.validateCityName = required => value => {
    if (!required && !value) {
      return;
    }

    if (required && (0, _validateHelpers.isEmpty)(value)) {
      return 'To pole jest wymagane';
    }

    if ((0, _validateHelpers.isNotValidLength)(value)) {
      return 'Pole musi zawierać między 2 - 100 znaków';
    }

    if ((0, _validateHelpers.haveSpecialChars)(value)) {
      return 'Podane dane są nieprawidłowe';
    }
  };

  const validateZipCode = exports.validateZipCode = required => value => {
    if (!required && !value) {
      return;
    }

    if (required && (0, _validateHelpers.isEmpty)(value)) {
      return 'To pole jest wymagane';
    }

    if ((0, _validateHelpers.isNotValidLength)(value, 1, 10)) {
      return 'Pole musi zawierać między 1 - 10 znaków';
    }

    if ((0, _validateHelpers.isNotValidZipCode)(value)) {
      return 'Podane dane są nieprawidłowe';
    }
  };

  const validateCompanyTax = exports.validateCompanyTax = required => value => {
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

  const validateBankAccountNumber = exports.validateBankAccountNumber = required => value => {
    if (!required && !value) {
      return;
    }

    if (required && (0, _validateHelpers.isEmpty)(value)) {
      return 'To pole jest wymagane';
    }

    if ((0, _validateHelpers.isNotNumber)(value)) {
      return 'Podany numer konta jest nieprawidłowy';
    }

    if ((0, _validateHelpers.isNotValidLength)(value, 26, 26)) {
      return 'Podany numer konta jest nieprawidłowy';
    }

    if (!(0, _validateHelpers.isValidBankAccountNumber)(value)) {
      return 'Podany numer konta jest nieprawidłowy';
    }
  };

  const validateIDCardNumber = exports.validateIDCardNumber = required => value => {
    if (!required && !value) {
      return;
    }

    if (required && (0, _validateHelpers.isEmpty)(value)) {
      return 'To pole jest wymagane';
    }

    if ((0, _validateHelpers.isNotValidIDCard)(value)) {
      return 'Podany numer dowodu jest nieprawidłowy';
    }

    if (!(0, _validateHelpers.isValidIDCard)(value)) {
      return 'Podany numer dowodu jest nieprawidłowy';
    }

    if ((0, _validateHelpers.isNotNumber)(value)) {
      return 'Podany numer dowodu jest nieprawidłowy';
    }
  };

  const validateOtherLoanAmount = exports.validateOtherLoanAmount = (customErrorMsg = 'Podana kwota jest nieprawidłowa', required) => value => {
    if (!required && !value) {
      return;
    }

    if (required && (0, _validateHelpers.isEmpty)(value)) {
      return 'To pole jest wymagane';
    }

    if ((0, _validateHelpers.isNotValidNumberBetween1And10Digits)(value)) {
      return customErrorMsg;
    }
  };

  const validateAmountOfChildren = exports.validateAmountOfChildren = (customErrorMsg = 'Podana liczba jest nieprawidłowa', required) => value => {
    if (!required && !value) {
      return;
    }

    if (required && (0, _validateHelpers.isEmpty)(value)) {
      return 'To pole jest wymagane';
    }

    if ((0, _validateHelpers.isNotValidNumberBetween1And10Digits)(value)) {
      return customErrorMsg;
    }
  };

  const validateIncome = exports.validateIncome = (customErrorMsg = 'Podana kwota jest nieprawidłowa', required) => value => {
    if (!required && !value) {
      return;
    }

    if (required && (0, _validateHelpers.isEmpty)(value)) {
      return 'To pole jest wymagane';
    }

    if ((0, _validateHelpers.isNotValidNumberBetween1And10Digits)(value)) {
      return customErrorMsg;
    }
  };

  const validateSelect = exports.validateSelect = (required, options) => value => {
    if (required && (0, _validateHelpers.isEmpty)(value)) {
      return 'To pole jest wymagane';
    }

    if ((0, _validateHelpers.isNotValidOption)(value, options)) {
      return 'Podane dane są nieprawidłowe';
    }
  };

  const validateDate = exports.validateDate = required => value => {
    if (!required && !value) {
      return;
    }

    if (required && (0, _validateHelpers.isEmpty)(value)) {
      return 'To pole jest wymagane';
    }
  };
});
//# sourceMappingURL=validate.js.map