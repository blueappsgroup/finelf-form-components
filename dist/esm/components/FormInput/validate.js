import { isEmpty, isNotValidLength, isNotValidPhoneNumber, isNotValidEmail, isNotValidNumberBetween1And10Digits, isNotLetter, isNotNumber, isValidPesel, haveSpecialChars, isNotValidZipCode, isValidNIP, isValidBankAccountNumber, isValidIDCard, isNotValidIDCard, isNotValidOption } from './validateHelpers';
export const validateText = required => value => {
  if (!required && !value) {
    return;
  }

  if (required && isEmpty(value)) {
    return 'To pole jest wymagane';
  }

  if (isNotValidLength(value)) {
    return 'Pole musi zawierać między 2 - 100 znaków';
  }

  if (isNotLetter(value)) {
    return 'Podane dane są nieprawidłowe';
  }
};
export const validateEmail = (customErrorMsg = 'Niepoprawny adres email', required) => value => {
  if (!required && !value) {
    return;
  }

  if (required && isEmpty(value)) {
    return 'To pole jest wymagane';
  }

  if (isNotValidEmail(value)) {
    return customErrorMsg;
  }
};
export const validateTelNumber = (required, customErrorMsg) => value => {
  if (!required && !value) {
    return;
  }

  if (required && isEmpty(value)) {
    return 'To pole jest wymagane';
  }

  if (isNotValidPhoneNumber(value)) {
    return customErrorMsg;
  }
};
export const validateCheckbox = required => value => required && !value && 'required' || undefined;
export const validatePesel = required => value => {
  if (!required && !value) {
    return;
  }

  if (required && isEmpty(value)) {
    return 'To pole jest wymagane';
  }

  if (isNotNumber(value)) {
    return 'Podany PESEL jest nieprawidłowy';
  }

  if (!isValidPesel(value)) {
    return 'Podany PESEL jest nieprawidłowy';
  }
};
export const validateHouseNumber = required => value => {
  if (!required && !value) {
    return;
  }

  if (required && isEmpty(value)) {
    return 'To pole jest wymagane';
  }

  if (isNotValidLength(value, 1, 10)) {
    return 'Podany numer mieszkania jest nieprawidłowy';
  }
};
export const validateCityName = required => value => {
  if (!required && !value) {
    return;
  }

  if (required && isEmpty(value)) {
    return 'To pole jest wymagane';
  }

  if (isNotValidLength(value)) {
    return 'Pole musi zawierać między 2 - 100 znaków';
  }

  if (haveSpecialChars(value)) {
    return 'Podane dane są nieprawidłowe';
  }
};
export const validateZipCode = required => value => {
  if (!required && !value) {
    return;
  }

  if (required && isEmpty(value)) {
    return 'To pole jest wymagane';
  }

  if (isNotValidLength(value, 1, 10)) {
    return 'Pole musi zawierać między 1 - 10 znaków';
  }

  if (isNotValidZipCode(value)) {
    return 'Podane dane są nieprawidłowe';
  }
};
export const validateCompanyTax = required => value => {
  if (!required && !value) {
    return;
  }

  if (required && isEmpty(value)) {
    return 'To pole jest wymagane';
  }

  if (!isValidNIP(value)) {
    return 'Podany NIP jest nieprawidłowy';
  }
};
export const validateBankAccountNumber = required => value => {
  if (!required && !value) {
    return;
  }

  if (required && isEmpty(value)) {
    return 'To pole jest wymagane';
  }

  if (isNotNumber(value)) {
    return 'Podany numer konta jest nieprawidłowy';
  }

  if (isNotValidLength(value, 26, 26)) {
    return 'Podany numer konta jest nieprawidłowy';
  }

  if (!isValidBankAccountNumber(value)) {
    return 'Podany numer konta jest nieprawidłowy';
  }
};
export const validateIDCardNumber = required => value => {
  if (!required && !value) {
    return;
  }

  if (required && isEmpty(value)) {
    return 'To pole jest wymagane';
  }

  if (isNotValidIDCard(value)) {
    return 'Podany numer dowodu jest nieprawidłowy';
  }

  if (!isValidIDCard(value)) {
    return 'Podany numer dowodu jest nieprawidłowy';
  }

  if (isNotNumber(value)) {
    return 'Podany numer dowodu jest nieprawidłowy';
  }
};
export const validateOtherLoanAmount = (customErrorMsg = 'Podana kwota jest nieprawidłowa', required) => value => {
  if (!required && !value) {
    return;
  }

  if (required && isEmpty(value)) {
    return 'To pole jest wymagane';
  }

  if (isNotValidNumberBetween1And10Digits(value)) {
    return customErrorMsg;
  }
};
export const validateAmountOfChildren = (customErrorMsg = 'Podana liczba jest nieprawidłowa', required) => value => {
  if (!required && !value) {
    return;
  }

  if (required && isEmpty(value)) {
    return 'To pole jest wymagane';
  }

  if (isNotValidNumberBetween1And10Digits(value)) {
    return customErrorMsg;
  }
};
export const validateIncome = (customErrorMsg = 'Podana kwota jest nieprawidłowa', required) => value => {
  if (!required && !value) {
    return;
  }

  if (required && isEmpty(value)) {
    return 'To pole jest wymagane';
  }

  if (isNotValidNumberBetween1And10Digits(value)) {
    return customErrorMsg;
  }
};
export const validateSelect = (required, options) => value => {
  if (required && isEmpty(value)) {
    return 'To pole jest wymagane';
  }

  if (isNotValidOption(value, options)) {
    return 'Podane dane są nieprawidłowe';
  }
};
export const validateDate = required => value => {
  if (!required && !value) {
    return;
  }

  if (required && isEmpty(value)) {
    return 'To pole jest wymagane';
  }
};
//# sourceMappingURL=validate.js.map