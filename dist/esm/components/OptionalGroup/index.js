import _pt from "prop-types";
import { useFormikContext } from 'formik';
import React from 'react';
import { CheckboxField } from '../';

const OptionalGroup = ({
  name,
  label,
  children
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const {
    values
  } = useFormikContext();
  const groupVisible = !!values[name];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CheckboxField, {
    skipFieldForApi: true,
    id: name,
    name: name,
    label: label
  }), groupVisible && /*#__PURE__*/React.createElement(React.Fragment, null, children));
};

OptionalGroup.propTypes = {
  name: _pt.string.isRequired,
  children: _pt.any.isRequired,
  label: _pt.string.isRequired
};
export default OptionalGroup;
//# sourceMappingURL=index.js.map