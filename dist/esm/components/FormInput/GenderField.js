import { Field } from 'formik';
import React from 'react';
import { BaseSelectField } from './base';
const options = {
  male: 'mężczyzna',
  female: 'kobieta'
};

const GenderField = ({
  id,
  label,
  name = 'gender',
  required = false,
  showError
}) => /*#__PURE__*/React.createElement(Field, {
  required: required,
  showError: showError,
  id: id,
  name: name,
  component: BaseSelectField,
  label: label,
  type: "select",
  options: options
});

export default GenderField;
//# sourceMappingURL=GenderField.js.map