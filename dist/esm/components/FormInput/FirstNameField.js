import React from 'react';
import TextField from './TextField';

const FirstNameField = ({
  id,
  label = 'Imię',
  placeholder = 'Imię',
  name = 'first_name',
  required = true,
  validate,
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

export default FirstNameField;
//# sourceMappingURL=FirstNameField.js.map