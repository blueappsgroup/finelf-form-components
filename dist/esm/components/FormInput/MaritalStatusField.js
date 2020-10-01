/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import { Field } from 'formik';
import { BaseSelectField } from './base';
const options = {
  unmarried: 'panna/kawaler',
  married: 'mężatka/żonaty',
  divorced: 'rozwiedziona/rozwiedziony',
  widower: 'wdowa/wdowiec',
  with_parents: 'z rodzicami'
};

const MaritalStatusField = ({
  id,
  label,
  name = 'marital_status',
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

MaritalStatusField.defaultProps = {
  name: 'amount_of_children'
};
export default MaritalStatusField;
//# sourceMappingURL=MaritalStatusField.js.map