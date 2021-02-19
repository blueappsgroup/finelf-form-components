import React from 'react';
import BaseField from './base';
import { validateCompanyTax } from './validate';
import { Field } from 'formik';

const CompanyTaxField = ({
  id,
  label = 'NIP firmy',
  placeholder = 'NIP firmy',
  name = 'company_tax_id',
  required = false,
  validate = validateCompanyTax,
  showError = true
}) => /*#__PURE__*/React.createElement(Field, {
  id: id,
  label: label,
  placeholder: placeholder,
  component: BaseField,
  required: required,
  showError: showError,
  name: name,
  validate: validate(required)
});

CompanyTaxField.defaultProps = {
  name: 'company_tax_id'
};
export default CompanyTaxField;
//# sourceMappingURL=CompanyTaxField.js.map