import React from 'react';
import { Field } from 'formik';
import BaseField from './base';
import { validateAmountOfChildren } from './validate';

const AmountOfChildrenField = ({
  id,
  label,
  placeholder = 'Liczba osób na utrzymaniu',
  errorMsg = 'Podana ilość jest nieprawidłowa',
  name = 'amount_of_children',
  required = false,
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
  validate: validateAmountOfChildren(errorMsg, required)
});

export default AmountOfChildrenField;
//# sourceMappingURL=AmountOfChildrenField.js.map