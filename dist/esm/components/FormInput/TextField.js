import React from 'react';
import { Field } from 'formik';
import BaseField from './base';
import { validateText } from './validate';

const TextField = ({
  id,
  label,
  placeholder = 'Text',
  name = 'text field',
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
  validate: validate && validate(required) || validateText(required)
});

export default TextField;
//# sourceMappingURL=TextField.js.map