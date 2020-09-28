/* eslint-disable @typescript-eslint/camelcase */
import { Field } from 'formik';
import React from 'react';
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

export default MaritalStatusField;
//# sourceMappingURL=MaritalStatusField.js.map