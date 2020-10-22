import _pt from "prop-types";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { useContext, useEffect, useMemo } from 'react';
import { useFormikContext } from 'formik';
import { CheckboxField } from '../';
import { FormContext, setFormValuesToCache } from '../../utils';

const OptionalGroup = ({
  name,
  label,
  children,
  hideChecked
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const {
    values,
    setValues
  } = useFormikContext();
  const {
    id
  } = useContext(FormContext);
  const hasManyItems = Array.isArray(children);
  const itemsNames = useMemo(() => hasManyItems ? children && children.map(item => item.props.name) : [children.props.name], [hasManyItems, children]);
  const itemsForResetValues = useMemo(() => itemsNames.reduce((acc, item) => {
    acc[item] = undefined;
    return acc; // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }, {}), [itemsNames]);
  const groupVisible = hideChecked && !values[name] || !hideChecked && values[name];
  useEffect(() => {
    if (!groupVisible) {
      const newValues = _objectSpread(_objectSpread({}, values), itemsForResetValues);

      setValues(newValues, false);
      setFormValuesToCache(newValues, id);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [groupVisible, itemsForResetValues, setValues, values[name]]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CheckboxField, {
    disableCollapse: true,
    skipFieldForApi: true,
    id: name,
    name: name,
    label: label
  }), groupVisible && /*#__PURE__*/React.createElement(React.Fragment, null, children));
};

OptionalGroup.propTypes = {
  name: _pt.string.isRequired,
  children: _pt.any.isRequired,
  label: _pt.string.isRequired,
  groupType: _pt.string,
  hideChecked: _pt.bool
};
OptionalGroup.defaultProps = {
  groupType: 'optionalGroup'
};
export default OptionalGroup;
//# sourceMappingURL=index.js.map