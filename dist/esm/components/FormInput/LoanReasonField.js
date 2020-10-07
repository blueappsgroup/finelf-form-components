/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import { Field } from 'formik';
import { BaseSelectField } from './base';
import { validateSelect } from './validate';
const options = {
  bills: 'rachunki',
  other_loans: 'inne pożyczki',
  vacation: 'wakacje',
  education: 'edukacja',
  car: 'samochód',
  medical_expenses: 'wydatki zdrowotne',
  renovation: 'renowacja',
  electronics: 'elektronika',
  furniture: 'meble',
  other: 'inne',
  investment: 'inwestycja',
  tax_payment: 'spłata podatków'
};

const LoanReasonField = ({
  id,
  label,
  name,
  required = false,
  validate,
  showError
}) => /*#__PURE__*/React.createElement(Field, {
  required: required,
  showError: showError,
  id: id,
  name: name,
  component: BaseSelectField,
  label: label,
  type: "select",
  options: options,
  validate: validate && validate(required) || validateSelect(required, options)
});

LoanReasonField.defaultProps = {
  name: 'loan_reason'
};
export default LoanReasonField;
//# sourceMappingURL=LoanReasonField.js.map