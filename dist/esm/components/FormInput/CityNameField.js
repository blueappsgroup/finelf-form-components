import React from 'react';
import TextField from './TextField';
import { validateCityName } from './validate';

const CityNameField = ({
  id,
  label = 'Miasto',
  placeholder = 'Miasto',
  name = 'text_city',
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

export default CityNameField;
//# sourceMappingURL=CityNameField.js.map