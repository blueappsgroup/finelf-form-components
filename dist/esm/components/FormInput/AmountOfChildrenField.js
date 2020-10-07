import React from 'react';
import { Field } from 'formik';
import BaseField from './base';
import { validateAmountOfChildren } from './validate';

const AmountOfChildrenField = ({
  id,
  label,
  placeholder,
  errorMsg = 'Podana ilość jest nieprawidłowa',
  name,
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

AmountOfChildrenField.defaultProps = {
  name: 'amount_of_children'
};
export default AmountOfChildrenField;
//# sourceMappingURL=AmountOfChildrenField.js.map