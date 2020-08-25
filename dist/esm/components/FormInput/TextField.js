import React from 'react';
import { Field } from 'formik';
import BaseField from './base';

const TextField = ({
  id,
  label,
  placeholder = 'Text',
  name = 'text field',
  required = false,
  validate
}) => /*#__PURE__*/React.createElement(Field, {
  required: required,
  id: id,
  name: name,
  component: BaseField,
  label: label,
  placeholder: placeholder,
  type: "text",
  validate: validate
});

export default TextField;
//# sourceMappingURL=TextField.js.map