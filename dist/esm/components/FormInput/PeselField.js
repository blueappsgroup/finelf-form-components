import React from 'react';
import TextField from './TextField';
import { validatePesel } from './validate';

const PeselField = ({
  id,
  label = 'Pesel',
  placeholder = 'Pesel',
  name = 'id_code',
  required = true,
  validate = validatePesel,
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

export default PeselField;
//# sourceMappingURL=PeselField.js.map