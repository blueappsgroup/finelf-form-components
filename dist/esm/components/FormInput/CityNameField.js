import { Field } from 'formik';
import React from 'react';
import BaseField from './base';
import { validateCityName } from './validate';

const CityNameField = ({
  id,
  label = 'Miasto',
  placeholder,
  name,
  required = false,
  validate = validateCityName,
  showError = true
}) => /*#__PURE__*/React.createElement(Field, {
  id: id,
  label: label,
  placeholder: placeholder,
  component: BaseField,
  required: required,
  showError: showError,
  name: name,
  validate: validate(required)
});

CityNameField.defaultProps = {
  name: 'text_city'
};
export default CityNameField;
//# sourceMappingURL=CityNameField.js.map