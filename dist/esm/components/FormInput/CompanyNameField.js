import React from 'react';
import BaseField from './base';
import { validateText } from './validate';
import CustomFieldWithCondition from './CustomFieldWithCondition';

const CompanyNameField = ({
  id,
  label = 'Nazwa pracodawcy',
  placeholder = 'Nazwa pracodawcy',
  name = 'company_name',
  required = false,
  validate = validateText,
  showError = true,
  requiredCondition = {
    // eslint-disable-next-line @typescript-eslint/camelcase
    employment_type: ['fixed', 'temporary', 'fixed_partial', 'government', 'agriculture', 'service_contract']
  }
}) => /*#__PURE__*/React.createElement(CustomFieldWithCondition, {
  id: id,
  label: label,
  placeholder: placeholder,
  component: BaseField,
  required: required,
  showError: showError,
  name: name,
  validate: validate,
  requiredCondition: requiredCondition
});

CompanyNameField.defaultProps = {
  name: 'company_name'
};
export default CompanyNameField;
//# sourceMappingURL=CompanyNameField.js.map