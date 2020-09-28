import React from 'react';
import TextField from './TextField';
import { validateCompanyTax } from './validate';

const CompanyTaxField = ({
  id,
  label = 'NIP firmy',
  placeholder = 'NIP firmy',
  name = 'company_tax_id',
  required = true,
  validate = validateCompanyTax,
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

export default CompanyTaxField;
//# sourceMappingURL=CompanyTaxField.js.map