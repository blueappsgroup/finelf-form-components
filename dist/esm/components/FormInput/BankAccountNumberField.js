import React from 'react';
import { Field } from 'formik';
import BaseField from './base';
import { validateBankAccountNumber } from './validate';

const BankAccountNumberField = ({
  id,
  label = 'Numer konta bankowego',
  placeholder,
  name,
  required = false,
  validate = validateBankAccountNumber,
  showError = true
}) => /*#__PURE__*/React.createElement(Field, {
  id: id,
  label: label,
  placeholder: placeholder,
  component: BaseField,
  required: required,
  showError: showError,
  name: name,
  validate: validate(required)
});

BankAccountNumberField.defaultProps = {
  name: 'bank_account_number'
};
export default BankAccountNumberField;
//# sourceMappingURL=BankAccountNumberField.js.map