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
  exports.validateBirthDate = exports.validateDate = exports.validateSelect = exports.validateIncome = exports.validateAmountOfChildren = exports.validateOtherLoanAmount = exports.validateIDCardNumber = exports.validateBankAccountNumber = exports.validateCompanyTax = exports.validateZipCode = exports.validateCityName = exports.validateHouseNumber = exports.validatePesel = exports.validateCheckbox = exports.validateTelNumber = exports.validateEmail = exports.validateText = undefined;

  const validateText = exports.validateText = required => value => {
    const trimedValue = value && value.trim();

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

  const validateEmail = exports.validateEmail = (customErrorMsg = 'Niepoprawny adres email', required) => value => {
    const trimedValue = value && value.trim();

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

  const validateTelNumber = exports.validateTelNumber = (required, customErrorMsg) => value => {
    const trimedValue = value && value.trim();

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

  const validateCheckbox = exports.validateCheckbox = required => value => required && !value && 'required' || undefined;

  const validatePesel = exports.validatePesel = required => value => {
    const trimedValue = value && value.trim();

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

  const validateHouseNumber = exports.validateHouseNumber = required => value => {
    const trimedValue = value && value.trim();

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

  const validateCityName = exports.validateCityName = required => value => {
    const trimedValue = value && value.trim();

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

  const validateZipCode = exports.validateZipCode = required => value => {
    const trimedValue = value && value.trim();

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
    const trimedValue = value && value.trim();

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

  const validateIDCardNumber = exports.validateIDCardNumber = required => value => {
    const trimedValue = value && value.trim();

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

  const validateOtherLoanAmount = exports.validateOtherLoanAmount = (customErrorMsg = 'Podana kwota jest nieprawidłowa', required) => value => {
    const trimedValue = value && value.trim();

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

  const validateAmountOfChildren = exports.validateAmountOfChildren = (customErrorMsg = 'Podana liczba jest nieprawidłowa', required) => value => {
    const trimedValue = value && value.trim();

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

  const validateIncome = exports.validateIncome = (customErrorMsg = 'Podana kwota jest nieprawidłowa', required) => value => {
    const trimedValue = value && value.trim();

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

  const validateSelect = exports.validateSelect = (required, options) => value => {
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

  const validateDate = exports.validateDate = required => value => {
    if (!required && !value) {
      return;
    }

    if (required && (0, _validateHelpers.isEmpty)(value)) {
      return 'To pole jest wymagane';
    }
  };

  const validateBirthDate = exports.validateBirthDate = required => value => {
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
});
//# sourceMappingURL=validate.js.map