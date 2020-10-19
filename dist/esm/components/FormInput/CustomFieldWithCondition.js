import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useEffect, useState } from 'react';
import { Field, useFormikContext } from 'formik';

const CustomFieldWithCondition = props => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const {
    values,
    setFieldError
  } = useFormikContext();
  const [required, setRequired] = useState(props.required || false);
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
  }, [values, props.required, props.requiredCondition, required, props.name, setFieldError]);
  return /*#__PURE__*/React.createElement(Field, _extends({}, props, {
    required: required,
    validate: props.validate(required)
  }));
};

CustomFieldWithCondition.propTypes = {
  requiredCondition: _pt.objectOf(_pt.any)
};
export default CustomFieldWithCondition;
//# sourceMappingURL=CustomFieldWithCondition.js.map