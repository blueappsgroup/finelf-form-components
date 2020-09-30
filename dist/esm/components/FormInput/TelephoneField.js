import React from 'react';
import { Field } from 'formik';
import BaseField from './base';
import { validateTelNumber } from './validate';

const TelephoneField = ({
  id,
  label,
  placeholder = 'Telefon',
  errorMsg = 'Podany numer telefonu jest nieprawidłowy',
  name = 'telephone',
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
  prefix: "+48",
  type: "tel",
  validate: validateTelNumber(errorMsg, required)
});

export default TelephoneField;
//# sourceMappingURL=TelephoneField.js.map