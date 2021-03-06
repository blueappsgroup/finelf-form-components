import React from 'react';
import { Field } from 'formik';
import BaseField from './base';
import { validateEmail } from './validate';

const EmailField = ({
  id,
  label,
  placeholder = 'Email',
  errorMsg = 'Podany email jest nieprawidłowy',
  name,
  required = false,
  showError = true,
  icon
}) => /*#__PURE__*/React.createElement(Field, {
  required: required,
  showError: showError,
  id: id,
  name: name,
  component: BaseField,
  label: label,
  placeholder: placeholder,
  type: "email",
  icon: icon,
  validate: validateEmail(errorMsg, required)
});

EmailField.defaultProps = {
  name: 'email'
};
export default EmailField;
//# sourceMappingURL=EmailField.js.map