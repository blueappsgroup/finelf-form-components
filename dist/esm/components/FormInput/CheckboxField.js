import React from 'react';
import { Field } from 'formik';
import CheckboxBase from './CheckBox';
import { validateCheckbox } from './validate';

const CheckboxFormField = ({
  id = 'textField',
  label,
  name = 'checkbox_field',
  required = false,
  onChange,
  children,
  HTMLcontent
}) => /*#__PURE__*/React.createElement(Field, {
  required: required,
  id: id,
  name: name,
  component: CheckboxBase,
  label: label,
  type: "checkbox",
  validate: validateCheckbox(required),
  onChange: onChange,
  childrenBody: children,
  HTMLcontent: HTMLcontent
});

CheckboxFormField.defaultProps = {
  name: 'checkbox_field'
};
export default CheckboxFormField;
//# sourceMappingURL=CheckboxField.js.map