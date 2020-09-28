import React from 'react';
import TextField from './TextField';
import { validateHouseNumber } from './validate';

const HouseNumberField = ({
  id,
  label = 'Numer domu',
  placeholder = 'Numer domu',
  name = 'house_number',
  required = true,
  validate = validateHouseNumber,
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

export default HouseNumberField;
//# sourceMappingURL=HouseNumberField.js.map