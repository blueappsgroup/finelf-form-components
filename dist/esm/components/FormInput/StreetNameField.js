import React from 'react';
import TextField from './TextField';
import { validateCityName } from './validate';

const StreetNameField = ({
  id,
  label = 'Ulica',
  placeholder = 'Ulica',
  name = 'street',
  required = true,
  validate = validateCityName,
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

export default StreetNameField;
//# sourceMappingURL=StreetNameField.js.map