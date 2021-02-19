/* eslint-disable @typescript-eslint/camelcase */
import React, { useEffect } from 'react';
import { Field, useFormikContext } from 'formik';
import { BaseSelectField } from './base';
import { validateSelect } from './validate';
import CompanyTax from './CompanyTaxField';
import CompanyNameField from './CompanyNameField';
const options = {
  fixed: 'umowa o pracę na czas nieokreślony',
  temporary: 'umowa o pracę na czas określony',
  self_employed: 'samozatrudnienie',
  fixed_partial: 'umowa o pracę na czas nieokreślony (niepełny etat)',
  government: 'stanowisko rządowe',
  unemployed: 'bezrobotny',
  pension: 'emeryt/rencista',
  agriculture: 'gospodarstwo rolne',
  student: 'student',
  housewife: 'gospodyni domowa',
  other: 'inne',
  service_contract: 'umowa zlecenie / umowa o dzieło'
};
const conditionValueListForCompanyNameField = ['fixed', 'temporary', 'fixed_partial', 'government', 'agriculture', 'service_contract'];

const EmploymentTypeField = ({
  id,
  label,
  name = 'employment_type',
  required = false,
  validate,
  showError = true
}) => {
  const {
    values,
    validateForm
  } = useFormikContext();
  const fieldValue = values[name];
  useEffect(() => {
    validateForm();
  }, [fieldValue, validateForm]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Field, {
    required: required,
    showError: showError,
    id: id,
    name: name,
    component: BaseSelectField,
    label: label,
    type: "select",
    options: options,
    validate: validate && validate(required) || validateSelect(required, options)
  }), name && values[name] === 'self_employed' && /*#__PURE__*/React.createElement(CompanyTax, {
    required: true,
    name: "company_tax_id"
  }), name && conditionValueListForCompanyNameField.includes(values[name]) && /*#__PURE__*/React.createElement(CompanyNameField, {
    required: true,
    name: "company_name"
  }));
};

EmploymentTypeField.defaultProps = {
  name: 'employment_type'
};
export default EmploymentTypeField;
//# sourceMappingURL=EmploymentTypeField.js.map