import React from 'react';
import { Field } from 'formik';
import BaseField from './base';
import { validateCityName } from './validate';

const StreetNameField = ({
  id,
  label = 'Ulica',
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

StreetNameField.defaultProps = {
  name: 'street'
};
export default StreetNameField;
//# sourceMappingURL=StreetNameField.js.map