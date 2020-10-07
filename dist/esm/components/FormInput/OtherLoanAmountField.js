import React from 'react';
import { Field } from 'formik';
import BaseField from './base';
import { validateOtherLoanAmount } from './validate';

const OtherLoanAmountField = ({
  id,
  label,
  placeholder,
  errorMsg = 'Podany kwota jest nieprawidłowa',
  name,
  required = false,
  validate = validateOtherLoanAmount,
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
  validate: validate(errorMsg, required)
});

OtherLoanAmountField.defaultProps = {
  name: 'other_loans_amount'
};
export default OtherLoanAmountField;
//# sourceMappingURL=OtherLoanAmountField.js.map