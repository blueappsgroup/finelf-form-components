import React from 'react';
import { Field } from 'formik';
import BaseField from './base';
import { validateEmail } from './validate';

const EmailField = ({
  id,
  label,
  placeholder = 'Email',
  errorMsg = 'Nie poprawny adres email',
  name = 'email',
  required = false
}) => /*#__PURE__*/React.createElement(Field, {
  required: required,
  id: id,
  name: name,
  component: BaseField,
  label: label,
  placeholder: placeholder,
  type: "email",
  validate: validateEmail(errorMsg, required)
});

export default EmailField;
//# sourceMappingURL=EmailField.js.map