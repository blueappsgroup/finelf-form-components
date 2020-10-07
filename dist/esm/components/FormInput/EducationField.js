import React from 'react';
import { Field } from 'formik';
import { BaseSelectField } from './base';
import { validateSelect } from './validate';
const options = {
  none: 'brak',
  primary: 'podstawowe',
  vocational: 'zawodowe',
  secondary: 'średnie',
  higher: 'wyższe licencjackie',
  masters: 'wyższe magisterskie',
  phd: 'wyższe doktorskie'
};

const EducationField = ({
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

EducationField.defaultProps = {
  name: 'education'
};
export default EducationField;
//# sourceMappingURL=EducationField.js.map