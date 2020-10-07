import React from 'react';
import { Field } from 'formik';
import BaseField from './base';
import { validatePesel } from './validate';

const PeselField = ({
  id,
  label = 'Pesel',
  placeholder,
  name = 'id_code',
  required = false,
  validate = validatePesel,
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

export default PeselField;
//# sourceMappingURL=PeselField.js.map