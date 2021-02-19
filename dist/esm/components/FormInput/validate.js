import { isEmpty, isNotValidLength, isNotValidPhoneNumber, isNotValidEmail, isNotValidNumberBetween1And10Digits, isNotLetter, isNotNumber, isValidPesel, haveSpecialChars, isNotValidZipCode, isValidNIP, isValidBankAccountNumber, isValidIDCard, isNotValidIDCard, isNotValidOption, isAdult } from './validateHelpers';
export const validateText = required => value => {
  const trimedValue = value && value.trim();

  if (!required && !value) {
    return;
  }

  if (required && isEmpty(trimedValue)) {
    return 'To pole jest wymagane';
  }

  if (isNotValidLength(trimedValue)) {
    return 'Pole musi zawierać między 2 - 100 znaków';
  }

  if (isNotLetter(trimedValue)) {
    return 'Podane dane są nieprawidłowe';
  }
};
export const validateEmail = (customErrorMsg = 'Niepoprawny adres email', required) => value => {
  const trimedValue = value && value.trim();

  if (!required && !value) {
    return;
  }

  if (required && isEmpty(trimedValue)) {
    return 'To pole jest wymagane';
  }

  if (isNotValidEmail(trimedValue)) {
    return customErrorMsg;
  }
};
export const validateTelNumber = (required, customErrorMsg) => value => {
  const trimedValue = value && value.trim();

  if (!required && !value) {
    return;
  }

  if (required && isEmpty(trimedValue)) {
    return 'To pole jest wymagane';
  }

  if (isNotValidPhoneNumber(trimedValue)) {
    return customErrorMsg;
  }
};
export const validateCheckbox = required => value => required && !value && 'required' || undefined;
export const validatePesel = required => value => {
  const trimedValue = value && value.trim();

  if (!required && !value) {
    return;
  }

  if (required && isEmpty(trimedValue)) {
    return 'To pole jest wymagane';
  }

  if (isNotNumber(trimedValue)) {
    return 'Podany PESEL jest nieprawidłowy';
  }

  if (!isValidPesel(trimedValue)) {
    return 'Podany PESEL jest nieprawidłowy';
  }
};
export const validateHouseNumber = required => value => {
  const trimedValue = value && value.trim();

  if (!required && !value) {
    return;
  }

  if (required && isEmpty(trimedValue)) {
    return 'To pole jest wymagane';
  }

  if (isNotValidLength(trimedValue, 1, 10)) {
    return 'Podany numer mieszkania jest nieprawidłowy';
  }
};
export const validateCityName = required => value => {
  const trimedValue = value && value.trim();

  if (!required && !value) {
    return;
  }

  if (required && isEmpty(trimedValue)) {
    return 'To pole jest wymagane';
  }

  if (isNotValidLength(trimedValue)) {
    return 'Pole musi zawierać między 2 - 100 znaków';
  }

  if (haveSpecialChars(trimedValue)) {
    return 'Podane dane są nieprawidłowe';
  }
};
export const validateZipCode = required => value => {
  const trimedValue = value && value.trim();

  if (!required && !value) {
    return;
  }

  if (required && isEmpty(trimedValue)) {
    return 'To pole jest wymagane';
  }

  if (isNotValidLength(trimedValue, 1, 10)) {
    return 'Pole musi zawierać między 1 - 10 znaków';
  }

  if (isNotValidZipCode(trimedValue)) {
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
  const trimedValue = value && value.trim();

  if (!required && !value) {
    return;
  }

  if (required && isEmpty(trimedValue)) {
    return 'To pole jest wymagane';
  }

  if (isNotNumber(trimedValue)) {
    return 'Podany numer konta jest nieprawidłowy';
  }

  if (isNotValidLength(trimedValue, 26, 26)) {
    return 'Podany numer konta jest nieprawidłowy';
  }

  if (!isValidBankAccountNumber(trimedValue)) {
    return 'Podany numer konta jest nieprawidłowy';
  }
};
export const validateIDCardNumber = required => value => {
  const trimedValue = value && value.trim();

  if (!required && !value) {
    return;
  }

  if (required && isEmpty(trimedValue)) {
    return 'To pole jest wymagane';
  }

  if (isNotNumber(trimedValue)) {
    return 'Podany numer dowodu jest nieprawidłowy';
  }

  if (isNotValidIDCard(trimedValue)) {
    return 'Podany numer dowodu jest nieprawidłowy';
  }

  if (!isValidIDCard(trimedValue)) {
    return 'Podany numer dowodu jest nieprawidłowy';
  }
};
export const validateOtherLoanAmount = (customErrorMsg = 'Podana kwota jest nieprawidłowa', required) => value => {
  const trimedValue = value && value.trim();

  if (!required && !value) {
    return;
  }

  if (required && isEmpty(trimedValue)) {
    return 'To pole jest wymagane';
  }

  if (isNotValidNumberBetween1And10Digits(trimedValue)) {
    return customErrorMsg;
  }
};
export const validateAmountOfChildren = (customErrorMsg = 'Podana liczba jest nieprawidłowa', required) => value => {
  const trimedValue = value && value.trim();

  if (!required && !value) {
    return;
  }

  if (required && isEmpty(trimedValue)) {
    return 'To pole jest wymagane';
  }

  if (isNotValidNumberBetween1And10Digits(trimedValue)) {
    return customErrorMsg;
  }
};
export const validateIncome = (customErrorMsg = 'Podana kwota jest nieprawidłowa', required) => value => {
  const trimedValue = value && value.trim();

  if (!required && !value) {
    return;
  }

  if (required && isEmpty(trimedValue)) {
    return 'To pole jest wymagane';
  }

  if (isNotValidNumberBetween1And10Digits(trimedValue)) {
    return customErrorMsg;
  }
};
export const validateSelect = (required, options) => value => {
  if (!required && !value) {
    return;
  }

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
export const validateBirthDate = required => value => {
  if (!required && !value) {
    return;
  }

  if (required && isEmpty(value)) {
    return 'To pole jest wymagane';
  }

  if (!isAdult(value)) {
    return 'Musisz mieć skończone 18 lat';
  }
};
//# sourceMappingURL=validate.js.map