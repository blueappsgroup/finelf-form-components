import React from 'react';
import TextField from './TextField';

const LastNameField = ({
  id,
  label = 'Nazwisko',
  placeholder = 'Nazwisko',
  name = 'last_name',
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

export default LastNameField;
//# sourceMappingURL=LastNameField.js.map