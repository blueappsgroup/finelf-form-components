import React from 'react';
import TextField from './TextField';
import { validateBankAccountNumber } from './validate';

const BankAccountNumberField = ({
  id,
  label = 'Numer konta bankowego',
  placeholder = 'Numer konta bankowego',
  name = 'bank_account_number',
  required = true,
  validate = validateBankAccountNumber,
  showError = true
}) => /*#__PURE__*/React.createElement(TextField, {
  id: id,
  label: label,
  placeholder: placeholder,
  required: required,
  showError: showError,
  name: name,
  validate: validate
});

export default BankAccountNumberField;
//# sourceMappingURL=BankAccountNumberField.js.map