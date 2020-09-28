import { Field } from 'formik';
import React from 'react';
import { BaseSelectField } from './base';
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
  name = 'education',
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

export default EducationField;
//# sourceMappingURL=EducationField.js.map