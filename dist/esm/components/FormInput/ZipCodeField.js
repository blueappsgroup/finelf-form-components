import React from 'react';
import TextField from './TextField';
import { validateZipCode } from './validate';

const ZipCodeField = ({
  id,
  label = 'Kod pocztowy',
  placeholder = 'Kod pocztowy',
  name = 'text_zip',
  required = true,
  validate = validateZipCode,
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

export default ZipCodeField;
//# sourceMappingURL=ZipCodeField.js.map