import React from 'react';
import { Field } from 'formik';
import BaseField from './base';
import { validateTelNumber } from './validate';

const TelephoneField = ({
  id,
  label,
  placeholder,
  errorMsg = 'Podany numer telefonu jest nieprawidłowy',
  name,
  required = false,
  validate = validateTelNumber,
  showError
}) => /*#__PURE__*/React.createElement(Field, {
  required: required,
  showError: showError,
  id: id,
  name: name,
  component: BaseField,
  label: label,
  placeholder: placeholder,
  prefix: "+48",
  type: "tel",
  validate: validate(errorMsg, required)
});

TelephoneField.defaultProps = {
  name: 'telephone'
};
export default TelephoneField;
//# sourceMappingURL=TelephoneField.js.map