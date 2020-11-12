import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { useContext, useEffect, useState } from 'react';
import { Field, useFormikContext } from 'formik';
import { FormContext, setFormValuesToCache } from '../../utils';

const CustomFieldWithCondition = props => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const {
    values,
    errors,
    setErrors,
    setValues,
    setFieldTouched
  } = useFormikContext();
  const {
    id
  } = useContext(FormContext);
  const [required, setRequired] = useState(props.required || false);
  const [visible, setVisible] = useState(props.visibleCondition && false || true);
  useEffect(() => {
    if (!props.required && props.requiredCondition) {
      let isRequired = false;
      Object.keys(props.requiredCondition).some(key => {
        if (props.requiredCondition && props.requiredCondition[key].includes(values[key])) {
          isRequired = true;
          return true;
        }

        return false;
      });

      if (required !== isRequired) {
        setRequired(isRequired);
      }
    }
  }, [values, props.required, props.requiredCondition, required, props.name]);
  useEffect(() => {
    if (props.visibleCondition) {
      let isVisible = false;
      Object.keys(props.visibleCondition).some(key => {
        if (props.visibleCondition && props.visibleCondition[key].includes(values[key])) {
          isVisible = true;
          return true;
        }

        return false;
      });

      if (!isVisible && isVisible !== visible) {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          [props.name]: undefined
        }), false);
        setErrors(_objectSpread(_objectSpread({}, errors), {}, {
          [props.name]: undefined
        }));
        setFormValuesToCache(_objectSpread(_objectSpread({}, values), {}, {
          [props.name]: undefined
        }), id);
        setVisible(isVisible);
      }

      if (isVisible && isVisible !== visible) {
        setVisible(isVisible);
      }
    }
  }, [values, setValues, props.visibleCondition, props.name, visible, errors, setErrors, id, required, setFieldTouched]);
  return /*#__PURE__*/React.createElement(Field, _extends({}, props, {
    required: required && visible,
    validate: props.validate(required && visible),
    visible: visible
  }));
};

CustomFieldWithCondition.propTypes = {
  requiredCondition: _pt.objectOf(_pt.any),
  visibleCondition: _pt.objectOf(_pt.any)
};
export default CustomFieldWithCondition;
//# sourceMappingURL=CustomFieldWithCondition.js.map