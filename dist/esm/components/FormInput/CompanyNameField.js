import React from 'react';
import TextField from './TextField';

const CompanyNameField = ({
  id,
  label = 'Nazwa pracodawcy',
  placeholder = 'Nazwa pracodawcy',
  name = 'company_name',
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

export default CompanyNameField;
//# sourceMappingURL=CompanyNameField.js.map