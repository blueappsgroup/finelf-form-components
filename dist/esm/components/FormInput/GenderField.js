import React from 'react';
import { Field } from 'formik';
import { BaseSelectField } from './base';
const options = {
  male: 'mężczyzna',
  female: 'kobieta'
};

const GenderField = ({
  id,
  label,
  name,
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

GenderField.defaultProps = {
  name: 'gender'
};
export default GenderField;
//# sourceMappingURL=GenderField.js.map