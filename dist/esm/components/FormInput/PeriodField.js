import { Field } from 'formik';
import React from 'react';
import { BaseRangeField } from './base';

const PeriodField = ({
  id,
  label = 'Okres spłaty',
  name = 'application_period',
  required = false,
  showError
}) => /*#__PURE__*/React.createElement(Field, {
  required: required,
  showError: showError,
  id: id,
  name: name,
  component: BaseRangeField,
  label: label,
  type: "text",
  min: 3,
  max: 60,
  step: 1,
  value: 12,
  suffix: 'Dni',
  unit: 'Dni'
});

export default PeriodField;
//# sourceMappingURL=PeriodField.js.map