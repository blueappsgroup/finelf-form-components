import React from 'react';
import { Field } from 'formik';
import BaseField from './base';
import { validateText } from './validate';

const LastNameField = ({
  id,
  label = 'Nazwisko',
  placeholder = 'Nazwisko',
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

LastNameField.defaultProps = {
  name: 'last_name'
};
export default LastNameField;
//# sourceMappingURL=LastNameField.js.map