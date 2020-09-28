import React from 'react';
import TextField from './TextField';
import { validateHouseNumber } from './validate';

const ApartmentNumberField = ({
  id,
  label = 'Numer mieszkania',
  placeholder = 'Numer mieszkania',
  name = 'apartment_number',
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

export default ApartmentNumberField;
//# sourceMappingURL=ApartmentNumberField.js.map