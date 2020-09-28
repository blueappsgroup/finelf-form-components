import React from 'react';
import { Field } from 'formik';
import CheckboxBase from './CheckBox';
import { validateCheckbox } from './validate';

const CheckboxFormField = ({
  id = 'textField',
  label,
  name = 'text field',
  required = false,
  onChange,
  children
}) => /*#__PURE__*/React.createElement(Field, {
  required: required,
  id: id,
  name: name,
  component: CheckboxBase,
  label: label,
  type: "checkbox",
  validate: validateCheckbox(required),
  onChange: onChange,
  childrenBody: children
});

export default CheckboxFormField;
//# sourceMappingURL=CheckboxField.js.map