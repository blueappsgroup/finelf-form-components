import React from 'react';
import { Field } from 'formik';
import BaseField from './base';
import { validateText } from './validate';

const FirstNameField = ({
  id,
  label = 'Imię',
  placeholder,
  name,
  required = false,
  validate = validateText,
  showError = true
}) => /*#__PURE__*/React.createElement(Field, {
  id: id,
  label: label,
  placeholder: placeholder,
  component: BaseField,
  required: required,
  showError: showError,
  name: name,
  validate: validate(required)
});

FirstNameField.defaultProps = {
  name: 'first_name'
};
export default FirstNameField;
//# sourceMappingURL=FirstNameField.js.map