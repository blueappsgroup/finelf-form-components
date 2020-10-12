import React from 'react';
import { Field } from 'formik';
import BaseField from './base';

const BirthDateField = ({
  id,
  label,
  placeholder = 'Data urodzenia',
  name,
  required = false,
  showError = true
}) => /*#__PURE__*/React.createElement(Field, {
  required: required,
  showError: showError,
  id: id,
  name: name,
  component: BaseField,
  label: label,
  placeholder: placeholder,
  type: "date"
});

BirthDateField.defaultProps = {
  name: 'date_of_birth'
};
export default BirthDateField;
//# sourceMappingURL=BirthDateField.js.map