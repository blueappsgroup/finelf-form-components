import React from 'react';
import { Field } from 'formik';
import BaseField from './base';
import { validateOtherLoanAmount } from './validate';

const OtherLoanAmountField = ({
  id,
  label,
  placeholder = 'Kwota obecnych zobowiązań finansowych',
  errorMsg = 'Podany kwota jest nieprawidłowa',
  name = 'other_loans_amount',
  required = false,
  validate,
  showError
}) => /*#__PURE__*/React.createElement(Field, {
  required: required,
  showError: showError,
  id: id,
  name: name,
  component: BaseField,
  label: label,
  placeholder: placeholder,
  type: "text",
  suffix: 'PLN',
  validate: validate && validate(required) || validateOtherLoanAmount(errorMsg, required)
});

export default OtherLoanAmountField;
//# sourceMappingURL=OtherLoanAmountField.js.map