import React from 'react';
import { Field } from 'formik';
import { BaseDateField } from './base';
import { validateDate } from './validate';

const BirthDateField = ({
  id,
  label,
  placeholder = 'Data urodzenia',
  name,
  required = false,
  showError = true,
  dateFormat
}) => /*#__PURE__*/React.createElement(Field, {
  required: required,
  showError: showError,
  id: id,
  component: BaseDateField,
  name: name,
  label: label,
  placeholder: placeholder,
  validate: validateDate(required),
  dateFormat: dateFormat
});

BirthDateField.defaultProps = {
  name: 'date_of_birth'
};
export default BirthDateField;
//# sourceMappingURL=BirthDateField.js.map