import React from 'react';
import { Field } from 'formik';
import BaseField from './base';
import { validateIncome } from './validate';

const IncomeField = ({
  id,
  label,
  placeholder = 'Dochód',
  errorMsg = 'Podana kwota jest nieprawidłowa',
  name,
  required = false,
  showError = true,
  suffix
}) => /*#__PURE__*/React.createElement(Field, {
  required: required,
  showError: showError,
  id: id,
  name: name,
  component: BaseField,
  label: label,
  placeholder: placeholder,
  type: "text",
  validate: validateIncome(errorMsg, required),
  suffix: suffix
});

IncomeField.defaultProps = {
  name: 'income'
};
export default IncomeField;
//# sourceMappingURL=IncomeField.js.map