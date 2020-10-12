import React from 'react';
import { Field } from 'formik';
import BaseField from './base';
import { validateText } from './validate';

const TextField = ({
  id,
  label,
  placeholder,
  name,
  required = false,
  validate = validateText,
  showError = true
}) => /*#__PURE__*/React.createElement(Field, {
  required: required,
  showError: showError,
  id: id,
  name: name,
  component: BaseField,
  label: label,
  placeholder: placeholder,
  type: "text",
  validate: validate(required)
});

TextField.defaultProps = {
  name: 'text_field'
};
export default TextField;
//# sourceMappingURL=TextField.js.map