/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import { Field } from 'formik';
import { BaseSelectField } from './base';
const options = {
  propety: 'mieszkanie własne',
  with_parent: 'mieszkanie rodziców',
  rental: 'mieszkanie wynajmowane',
  room: 'pokój'
};

const HousingStatusField = ({
  id,
  label,
  name,
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

HousingStatusField.defaultProps = {
  name: 'housing_status'
};
export default HousingStatusField;
//# sourceMappingURL=HousingStatusField.js.map