import React from 'react';
import TextField from './TextField';
import { validateIDCardNumber } from './validate';

const IDCardNumberField = ({
  id,
  label = 'Numer dowodu osobistego',
  placeholder = 'Numer dowodu osobistego',
  name = 'id_card_number',
  required = true,
  validate = validateIDCardNumber,
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

export default IDCardNumberField;
//# sourceMappingURL=IDCardNumberField.js.map