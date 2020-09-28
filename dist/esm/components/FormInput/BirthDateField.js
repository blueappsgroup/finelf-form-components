import React from 'react';
import { Field } from 'formik';
import BaseField from './base';

const BirthDateField = ({
  id,
  label,
  placeholder = 'BirthDate',
  errorMsg = 'Podana data urodzenia jest nieprawidłowa',
  name = 'date_of_birth',
  required = false,
  showError
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

export default BirthDateField;
//# sourceMappingURL=BirthDateField.js.map