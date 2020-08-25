export const validateEmail = (customErrorMsg = 'Nie poprawny adres email', required) => value => {
  let error;

  if (!value && required) {
    error = 'Pole wymagane';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) && value) {
    error = customErrorMsg;
  }

  return error;
};
export const validateTelNumber = (customErrorMsg = 'Nie poprawny numer telefonu', required) => value => {
  let error;

  if (!value && required) {
    error = 'Pole wymagane';
  } else if (!/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/i.test(value) && value) {
    error = customErrorMsg;
  }

  return error;
};
export const validateCheckbox = required => value => required && !value && 'required' || undefined;
//# sourceMappingURL=validate.js.map