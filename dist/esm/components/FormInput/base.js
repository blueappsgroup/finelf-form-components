function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, useState } from 'react';
import Slider from 'react-rangeslider';
import styled from 'styled-components';
import { device } from '../../consts/sizes';
import { FormContext, setFormValuesToCache } from '../../utils';
const StyledRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  position: relative;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    flex-direction: row;
    & ${StyledRow}:first-of-type {
      flex-grow: 1;
      margin-right: 5px;
    }

    & ${StyledRow}:last-child {
      flex-grow: 1;
      margin-left: 5px;
    }
  }
`;
const StyledError = styled.span`
  color: ${props => props.theme.inputErrorColor};
  position: absolute;
  font-size: 10px;
  bottom: -12px;
`;
const StyledInput = styled.input`
  background: ${props => props.theme.inputBgColor};
  border: 1px solid
    ${props => props.theme.inputBorderColor};
  box-sizing: border-box;
  box-shadow: 0px 7px 64px rgba(194, 186, 186, 0.07);
  border-radius: 6px;
  width: 100%;
  height: 63px;
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  padding: 0px 20px;
  border-color: ${props => props.error ? props.theme.inputErrorColor : props.theme.inputBorderColor};
  color: ${props => props.error ? props.theme.inputErrorColor : props.theme.inputTextColor};

  &::placeholder {
    color: ${props => props.theme.inputPlaceHolderColor};
  }

  &:focus {
    outline: none;
  }
`;
const StyledSelect = styled.select`
  background: ${props => props.theme.inputBgColor};
  border: 1px solid
    ${props => props.theme.inputBorderColor};
  box-sizing: border-box;
  box-shadow: 0px 7px 64px rgba(194, 186, 186, 0.07);
  border-radius: 6px;
  width: 100%;
  height: 63px;
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  padding: 0px 20px;
  border-color: ${props => props.error ? props.theme.inputErrorColor : props.theme.inputBorderColor};
  color: ${props => props.error ? props.theme.inputErrorColor : props.theme.inputTextColor};

  &::placeholder {
    color: ${props => props.theme.inputPlaceHolderColor};
  }

  &:focus {
    outline: none;
  }
`;
const StyledSpan = styled.span`
  font-weight: bold;
`;
const StyledInputSuffix = styled.span`
  position: absolute;
  right: 0;
  display: inline-flex;
  align-items: center;
  height: 63px;
  background-color: ${props => props.theme.rangeFillBgColor};
  border-radius: 5px;
  padding: 0 15px;
  font-weight: bold;
  font-size: 14px;
  color: ${props => props.theme.inputBgColor};
`;
/* eslint-disable */

const SliderWrapper = styled.div`
 .rangeslider {
  position: relative;
  width: 100%;
  height: 12px;
  border-radius: 10px;
  background-color: ${props => props.theme.inputPlaceHolderColor};
  .rangeslider__fill {
   height: 100%;
   background-color: ${props => props.theme.rangeFillBgColor};
   border-radius: 10px;
  }
  .rangeslider__handle {
   top: -6px;
   width: 24px;
   height: 24px;
   background-color: ${props => props.theme.inputBgColor};
   position: absolute;
   cursor: pointer;
   box-shadow: 0px 3px 6px ${props => props.theme.inputPlaceHolderColor};
   border: 1px solid ${props => props.theme.inputPlaceHolderColor};
   border-radius: 50%;
   &::after {
    width: 7px;
    height: 7px;
    background-color: ${props => props.theme.rangeFillBgColor};
    position: absolute;
    content: '';
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
   }
  }
 }
`;
/* eslint-enable */

const BaseField = (_ref) => {
  let {
    field,
    form: {
      touched,
      errors,
      values
    }
  } = _ref,
      props = _objectWithoutProperties(_ref, ["field", "form"]);

  const {
    id
  } = useContext(FormContext);

  const handleOnBlur = e => {
    setFormValuesToCache(values, id);
    field.onBlur && field.onBlur(e);
  };

  return /*#__PURE__*/React.createElement(StyledRow, null, props.label && /*#__PURE__*/React.createElement("label", {
    htmlFor: field.name
  }, props.label), /*#__PURE__*/React.createElement(StyledInput, _extends({}, field, props, {
    onBlur: handleOnBlur,
    type: props.type,
    value: field.value && field.value || '',
    error: touched[field.name] && errors[field.name],
    placeholder: props.placeholder && `${props.placeholder}${props.required && '*' || ''}`
  })), props.suffix && /*#__PURE__*/React.createElement(StyledInputSuffix, null, props.suffix), props.showError && touched[field.name] && errors[field.name] && /*#__PURE__*/React.createElement(StyledError, null, errors[field.name]));
};

export default BaseField;
export const BaseSelectField = (_ref2) => {
  let {
    field,
    form: {
      touched,
      errors,
      values
    }
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["field", "form"]);

  const {
    id
  } = useContext(FormContext);

  const handleOnBlur = e => {
    setFormValuesToCache(values, id);
    field.onBlur && field.onBlur(e);
  };

  const options = options => {
    return [/*#__PURE__*/React.createElement("option", {
      key: "select",
      value: "select",
      disabled: true
    }, "wybierz")].concat(Object.keys(options).map(option => {
      return /*#__PURE__*/React.createElement("option", {
        key: option,
        value: option
      }, options[option]);
    }));
  };

  return /*#__PURE__*/React.createElement(StyledRow, null, props.label && /*#__PURE__*/React.createElement("label", {
    htmlFor: field.name
  }, props.label), /*#__PURE__*/React.createElement(StyledSelect, _extends({}, field, props, {
    onBlur: handleOnBlur,
    type: "text",
    value: field.value && field.value || 'select',
    error: touched[field.name] && errors[field.name],
    placeholder: props.placeholder && `${props.placeholder}${props.required && '*' || ''}`
  }), props.options && options(props.options)), props.showError && touched[field.name] && errors[field.name] && /*#__PURE__*/React.createElement(StyledError, null, errors[field.name]));
};
export const BaseRangeField = (_ref3) => {
  let {
    field,
    form: {
      touched,
      errors,
      values
    }
  } = _ref3,
      props = _objectWithoutProperties(_ref3, ["field", "form"]);

  const {
    id
  } = useContext(FormContext);
  const [value, setValue] = useState(parseInt(field.value) || props.value || 0);

  const handleOnChangeSlider = value => {
    setValue(value);
  };

  const handleOnChangeCompleteSlider = () => {
    setFormValuesToCache(_objectSpread(_objectSpread({}, values), {}, {
      [field.name]: value
    }), id);
  };

  const handleOnChange = e => {
    const value = parseInt(e.target.value) || 0;
    setValue(value);
    field.onChange && field.onChange(e);
  };

  const handleOnBlur = e => {
    let value = parseInt(e.target.value) || 0;

    if (props.min && props.min > value) {
      value = props.min;
    }

    if (props.max && props.max < value) {
      value = props.max;
    }

    value = props.step ? Math.ceil(value / props.step) * props.step : value;
    setValue(value);
    setFormValuesToCache(_objectSpread(_objectSpread({}, values), {}, {
      [field.name]: value
    }), id);
    field.onBlur && field.onBlur(e);
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StyledRow, null, props.label && /*#__PURE__*/React.createElement("label", {
    htmlFor: field.name
  }, props.label), /*#__PURE__*/React.createElement(StyledInput, _extends({}, field, props, {
    onChange: handleOnChange,
    onBlur: handleOnBlur,
    type: props.type,
    value: value,
    error: touched[field.name] && errors[field.name],
    placeholder: props.placeholder && `${props.placeholder}${props.required && '*' || ''}`
  })), props.suffix && /*#__PURE__*/React.createElement(StyledInputSuffix, null, props.suffix)), /*#__PURE__*/React.createElement(SliderWrapper, null, /*#__PURE__*/React.createElement(Slider, {
    min: props.min,
    max: props.max,
    step: props.step,
    value: value,
    tooltip: false,
    onChange: handleOnChangeSlider,
    onChangeComplete: handleOnChangeCompleteSlider
  })), /*#__PURE__*/React.createElement(StyledRow, {
    style: {
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(StyledSpan, null, "Min. ", props.min, " ", props.unit), /*#__PURE__*/React.createElement(StyledSpan, null, "Max. ", props.max, " ", props.unit)));
};
//# sourceMappingURL=base.js.map