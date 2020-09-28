/* eslint-disable @typescript-eslint/camelcase */
import { Field } from 'formik';
import React from 'react';
import { BaseSelectField } from './base';
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
  name = 'loan_reason',
  required = false,
  showError
}) => /*#__PURE__*/React.createElement(Field, {
  required: required,
  showError: showError,
  id: id,
  name: name,
  component: BaseSelectField,
  label: label,
  type: "select",
  options: options
});

export default LoanReasonField;
//# sourceMappingURL=LoanReasonField.js.map