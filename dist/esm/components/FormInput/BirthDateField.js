import React from 'react';
import { Field } from 'formik';
import { BaseDateField } from './base';
import { validateBirthDate } from './validate';

const BirthDateField = ({
  id,
  label,
  placeholder = 'Data urodzenia',
  name,
  required = false,
  showError = true,
  dateFormat,
  openToDate
}) => /*#__PURE__*/React.createElement(Field, {
  required: required,
  showError: showError,
  id: id,
  component: BaseDateField,
  name: name,
  label: label,
  placeholder: placeholder,
  validate: validateBirthDate(required),
  dateFormat: dateFormat,
  openToDate: openToDate
});

BirthDateField.defaultProps = {
  name: 'date_of_birth'
};
export default BirthDateField;
//# sourceMappingURL=BirthDateField.js.map