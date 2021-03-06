import React from 'react';
import BaseField from './base';
import { validateText } from './validate';
import { Field } from 'formik';

const CompanyNameField = ({
  id,
  label = 'Nazwa pracodawcy',
  placeholder = 'Nazwa pracodawcy',
  name = 'company_name',
  required = false,
  validate = validateText,
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

CompanyNameField.defaultProps = {
  name: 'company_name'
};
export default CompanyNameField;
//# sourceMappingURL=CompanyNameField.js.map