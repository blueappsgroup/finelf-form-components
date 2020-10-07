import React from 'react';
import { Field } from 'formik';
import { BaseSelectField } from './base';
import { validateSelect } from './validate';
const options = {
  male: 'mężczyzna',
  female: 'kobieta'
};

const GenderField = ({
  id,
  label,
  name,
  required = false,
  validate,
  showError = true
}) => /*#__PURE__*/React.createElement(Field, {
  required: required,
  showError: showError,
  id: id,
  name: name,
  component: BaseSelectField,
  label: label,
  type: "select",
  options: options,
  validate: validate && validate(required) || validateSelect(required, options)
});

GenderField.defaultProps = {
  name: 'gender'
};
export default GenderField;
//# sourceMappingURL=GenderField.js.map