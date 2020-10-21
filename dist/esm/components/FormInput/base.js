function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import Slider from 'react-rangeslider';
import styled from 'styled-components';
import { device } from '../../consts/sizes';
import { FormContext, setFormValuesToCache } from '../../utils';
import DatePickerCore from './DatePickerCore';

/* eslint-disable */
const StyledRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${props => props.theme.styledRowMarginBottom};
  position: relative;
  flex-wrap: ${props => props.theme.styledRowFlexWrap};
  label {
    font-size: ${props => props.theme.labelFontSize};
    padding: ${props => props.theme.styledRowLabelPadding};
    color: ${props => props.theme.styledRowLabelFontColor};
  }
`;
/* eslint-disable */

const StyledInputRow = styled(StyledRow)`
  display: ${props => props.visible ? 'flex' : 'none'};
`;
const StyledRowRangeField = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${props => props.theme.styledRowMarginBottom};
  position: relative;
  flex-wrap: nowrap;
  width: 100%;
  justify-content: space-between;
  label {
    font-size: ${props => props.theme.labelFontSize};
    padding: ${props => props.theme.styledRowLabelPadding};
    color: ${props => props.theme.styledRowLabelFontColor};
  }
`;
export const Row = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  flex-direction: column;
  > * {
      flex-basis: 0;
      flex-grow: 1;
  }

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
    & ${StyledRow}:first-of-type:not(:last-child) {
      margin-right: ${props => props.theme.marginBetweenRowChildren};
    }

    & ${StyledRow}:last-child:not(:first-of-type) {
      margin-left: ${props => props.theme.marginBetweenRowChildren};
    }
  }
`;
/* eslint-enable */

export const StyledError = styled.span`
  color: ${props => props.theme.inputErrorColor};
  text-align: ${props => props.theme.inputErrorTextAlign};
  position: absolute;
  width: 100%;
  font-size: ${props => props.theme.inputErrorFontSize};
  bottom: ${props => props.theme.inputErrorBottom};
`;
export const StyledInput = styled.input`
  background: ${props => props.theme.inputBgColor};
  border: 1px solid
    ${props => props.theme.inputBorderColor};
  box-sizing: border-box;
  box-shadow: ${props => props.theme.inputBoxShadow};
  border-radius: ${props => props.theme.inputBorderRadius};
  width: 100%;
  height: ${props => props.theme.inputHeight};
  display: flex;
  align-items: center;
  font-style: ${props => props.theme.inputFontStyle};
  font-weight: ${props => props.theme.inputFontWeight};
  font-size: ${props => props.theme.inputFontSize};
  line-height: ${props => props.theme.inputLineHeight};
  text-align: ${props => props.theme.inputTextAlign};
  padding: ${props => props.theme.inputPadding};
  border-color: ${props => props.error ? props.theme.inputErrorColor : props.theme.inputBorderColor};
  color: ${props => props.error ? props.theme.inputErrorColor : props.theme.inputTextColor};

  &::placeholder {
    color: ${props => props.theme.inputPlaceHolderColor};
    font-size: ${props => props.theme.inputFontSize};
  }

  &:focus {
    outline: none;
  }
`;
export const SliderRow = styled.div`
  display: flex;
  padding: 25px 0;
  flex-direction: row;
`;
const SliderInput = styled.input`
  background: ${props => props.theme.inputBgColor};
  border: 1px solid
    ${props => props.theme.inputBorderColor};
  box-sizing: border-box;
  box-shadow: ${props => props.theme.inputBoxShadow};
  border-radius: ${props => props.theme.inputBorderRadius};
  width: 100px;
  height: ${props => props.theme.sliderInputHeight};
  display: flex;
  align-items: center;
  font-style: ${props => props.theme.inputFontStyle};
  font-weight: ${props => props.theme.inputFontWeight};
  font-size: ${props => props.theme.inputFontSize};
  line-height: ${props => props.theme.inputLineHeight};
  text-align: ${props => props.theme.sliderInputTextAlign};
  padding: ${props => props.theme.inputPadding};
  border-color: ${props => props.error ? props.theme.inputErrorColor : props.theme.inputBorderColor};
  color: ${props => props.error ? props.theme.inputErrorColor : props.theme.inputTextColor};

  ${props => props.hasPrefix && 'border-left: none; border-top-left-radius: 0px; border-bottom-left-radius: 0px;'}
  ${props => props.hasSufix && 'border-right: none; border-top-right-radius: 0px; border-bottom-right-radius: 0px;'}

  &::placeholder {
    color: ${props => props.theme.inputPlaceHolderColor};
  }

  &:focus {
    outline: none;
  }
`;
/* eslint-disable */

const StyledSelectContainer = styled.div`
  position: relative;
  width: 100%;
`;
const StyledSelect = styled.select`
  position: relative;
  background: ${props => props.theme.styledSelectBgColor};
  border: ${props => props.theme.styledSelectBorderWidth} ${props => props.theme.styledSelectBorderStyle}
    ${props => props.theme.styledSelectBorderColor};
  box-sizing: border-box;
  box-shadow: ${props => props.theme.styledSelectBoxShadow};
  border-radius: ${props => props.theme.styledSelectBorderRadius};
  width: 100%;
  height: ${props => props.theme.styledSelectHeight};
  display: flex;
  align-items: center;
  font-style: ${props => props.theme.styledSelectFontStyle};
  font-weight: ${props => props.theme.styledSelectFontWeight};
  font-size: ${props => props.theme.styledSelectFontSize};
  line-height: ${props => props.theme.styledSelectLineHeight};
  padding: ${props => props.theme.styledSelectPadding};
  border-color: ${props => props.error ? props.theme.styledSelectErrorColor : props.theme.styledSelectBorderColor};
  color: ${props => props.error ? props.theme.styledSelectErrorColor : props.theme.styledSelectTextColor};
  appearance: none;

  option:disabled {
    color: ${props => props.theme.styledSelectPlaceHolderColor};
  }

  &:focus {
    outline: none;
  }
`;
const StyledSelectArrow = styled.span`
  position: absolute;
  border: solid;
  border-width: 0 2px 2px 0;
  border-color: ${props => props.theme.styledSelectArrowColor}; 
  display: inline-block;
  padding: 4px;
  vertical-align: middle;
  content: ' ';
  right: ${props => props.theme.styledSelectArrowRightPosition};
  top: 0;
  bottom: 0;
  margin: auto;
  height: 0;
  transform: rotate(45deg);
`;
const StyledSpan = styled.span`
  font-size: ${props => props.theme.styledSpanFontSize};
  font-weight: ${props => props.theme.styledSpanFontWeight};
  color: ${props => props.theme.styledSpanFontColor};
`;
const StyledInputSuffix = styled.span`
  display: flex;
  align-items: center;
  height: ${props => props.theme.inputHeight};
  width: ${props => props.theme.styledInputSuffixWidth};
  box-sizing: border-box;
  background-color: ${props => props.theme.styledInputSuffixBgColor};
  border-radius: ${props => props.theme.styledInputSuffixBorderRadius};
  font-weight: ${props => props.theme.styledInputSuffixFontWeight};
  font-size: ${props => props.theme.styledInputSuffixFontSize};
  color: ${props => props.theme.styledInputSuffixTextColor};
  justify-content: center;
`;
const StyledSliderInputSuffix = styled.span`
  display: flex;
  align-items: center;
  height: ${props => props.theme.sliderInputHeight};
  width: ${props => props.theme.styledInputSuffixWidth};
  box-sizing: border-box;
  background-color: ${props => props.theme.styledInputSuffixBgColor};
  border-radius: ${props => props.theme.styledInputSuffixBorderRadius};
  font-weight: ${props => props.theme.styledInputSuffixFontWeight};
  font-size: ${props => props.theme.styledInputSuffixFontSize};
  color: ${props => props.theme.styledInputSuffixTextColor};
  justify-content: center;
`;
const StyledInputPrefix = styled.span`
  background: ${props => props.theme.inputBgColor};
  position: relative;
  left: 0px;
  height: ${props => props.theme.inputHeight};
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  height: ${props => props.theme.inputHeight};
  border: 1px solid ${props => props.theme.inputBorderColor};
  border-top-left-radius: ${props => props.theme.inputBorderRadius};
  border-bottom-left-radius: ${props => props.theme.inputBorderRadius};
  padding: ${props => props.theme.styledInputPrefixPadding};
  color: ${props => props.error ? props.theme.inputErrorColor : props.theme.inputTextColor};
  font-weight: ${props => props.theme.inputFontWeight};  
  border-top-color: ${props => props.error ? props.theme.inputErrorColor : props.theme.inputBorderColor};
  border-bottom-color: ${props => props.error ? props.theme.inputErrorColor : props.theme.inputBorderColor};
  border-left-color: ${props => props.error ? props.theme.inputErrorColor : props.theme.inputBorderColor};
`;
const SliderWrapper = styled.div`
 padding-bottom: 25px;
 width: 100%;
 .rangeslider {
  position: relative;
  width: 100%;
  height: ${props => props.theme.sliderHeight};
  border-radius: ${props => props.theme.sliderBorderRadius};
  background-color: ${props => props.theme.sliderBgColor};
  .rangeslider__fill {
   height: 100%;
   background-color: ${props => props.theme.sliderFillBgColor};
   border-radius: ${props => props.theme.sliderBorderRadius};
  }
  .rangeslider__handle {
   top: 0;
   bottom: 0;
   margin: auto;
   width: ${props => props.theme.sliderHandleWidth};
   height: ${props => props.theme.sliderHandleHeight};
   background-color: ${props => props.theme.sliderHandleBgColor};
   position: absolute;
   cursor: pointer;
   box-shadow: ${props => props.theme.sliderHandleBoxShadow};
   border: ${props => props.theme.sliderHandleBorderWidth} ${props => props.theme.sliderHandleBorderStyle} ${props => props.theme.sliderHandleBorderColor};
   border-radius: ${props => props.theme.sliderHandleBorderRadius};
   &::after {
    width: ${props => props.theme.sliderHandleAfterWidth};
    height: ${props => props.theme.sliderHandleAfterHeight};
    background-color: ${props => props.theme.sliderFillBgColor};
    border-radius: ${props => props.theme.sliderHandleAfterBorderRadius};
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
const InputWrapper = styled.div`
  position: relative;
  display: flex;
  width:100%;
  flex-direction: row;
  img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.theme.inputIconLeft};
    margin: auto;
  }
  input {
    padding: ${props => props.withIcon ? props.theme.inputWithIconPadding : props.theme.inputPadding};
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

  return /*#__PURE__*/React.createElement(StyledInputRow, {
    visible: props.visible !== false
  }, props.label && /*#__PURE__*/React.createElement("label", {
    htmlFor: field.name
  }, `${props.label}${props.required && '*' || ''}`), /*#__PURE__*/React.createElement(InputWrapper, {
    withIcon: props.icon !== undefined
  }, props.prefix && /*#__PURE__*/React.createElement(StyledInputPrefix, {
    error: touched[field.name] && errors[field.name]
  }, props.prefix), props.icon && /*#__PURE__*/React.createElement("img", {
    src: props.icon
  }), /*#__PURE__*/React.createElement(StyledInput, _extends({}, field, props, {
    required: props.required,
    hasPrefix: !!props.prefix,
    hasSufix: !!props.suffix,
    onBlur: handleOnBlur,
    type: props.type,
    value: field.value && field.value || '',
    error: touched[field.name] && errors[field.name],
    placeholder: props.placeholder && `${props.placeholder}${props.required && '*' || ''}`,
    style: props.prefix && {
      borderBottomLeftRadius: '0px',
      borderTopLeftRadius: '0px'
    }
  })), props.suffix && /*#__PURE__*/React.createElement(StyledInputSuffix, null, props.suffix)), props.showError && touched[field.name] && errors[field.name] && /*#__PURE__*/React.createElement(StyledError, null, errors[field.name]));
};

export default BaseField;
export const BaseDateField = (_ref2) => {
  let {
    field,
    form: {
      touched,
      errors,
      values,
      setFieldValue,
      setFieldTouched
    }
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["field", "form"]);

  const {
    id
  } = useContext(FormContext);
  const [currntValue, setCurrentValue] = useState(values[field.name]);

  const handleChange = value => {
    setFormValuesToCache(_objectSpread(_objectSpread({}, values), {}, {
      [field.name]: value.toString()
    }), id);
    setCurrentValue(value);
    setFieldTouched(field.name, true);
  };

  const handleBlur = () => {
    setFieldTouched(field.name, true);
  };

  useEffect(() => {
    setFieldValue(field.name, currntValue);
  }, [currntValue, field.name, setFieldValue]);
  return /*#__PURE__*/React.createElement(StyledRow, null, props.label && /*#__PURE__*/React.createElement("label", {
    htmlFor: field.name
  }, `${props.label}${props.required && '*' || ''}`), props.prefix && /*#__PURE__*/React.createElement(StyledInputPrefix, null, props.prefix), /*#__PURE__*/React.createElement(DatePickerCore, {
    placeholderText: props.placeholder,
    required: props.required,
    name: field.name,
    selected: field.value ? new Date(field.value) : null,
    onBlur: handleBlur,
    onChange: handleChange
  }), props.suffix && /*#__PURE__*/React.createElement(StyledInputSuffix, null, props.suffix), props.showError && touched[field.name] && errors[field.name] && /*#__PURE__*/React.createElement(StyledError, null, errors[field.name]));
};
export const BaseSelectField = (_ref3) => {
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

  const handleOnBlur = e => {
    setFormValuesToCache(values, id);
    field.onBlur && field.onBlur(e);
  };

  const options = options => {
    return [/*#__PURE__*/React.createElement("option", {
      key: "select",
      value: "select",
      disabled: true
    }, `wybierz ${props.required && '*' || ''}`)].concat(Object.keys(options).map(option => {
      return /*#__PURE__*/React.createElement("option", {
        key: option,
        value: option
      }, options[option]);
    }));
  };

  return /*#__PURE__*/React.createElement(StyledRow, null, props.label && /*#__PURE__*/React.createElement("label", {
    htmlFor: field.name
  }, `${props.label}${props.required && '*' || ''}`), /*#__PURE__*/React.createElement(StyledSelectContainer, null, /*#__PURE__*/React.createElement(StyledSelect, _extends({}, field, props, {
    onBlur: handleOnBlur,
    type: "text",
    value: field.value && field.value || 'select',
    error: touched[field.name] && errors[field.name],
    placeholder: props.placeholder && `${props.placeholder}${props.required && '*' || ''}`
  }), props.options && options(props.options)), /*#__PURE__*/React.createElement(StyledSelectArrow, null)), props.showError && touched[field.name] && errors[field.name] && /*#__PURE__*/React.createElement(StyledError, null, errors[field.name]));
};
export const BaseRangeField = (_ref4) => {
  let {
    field,
    form: {
      touched,
      errors,
      values,
      setFieldValue
    }
  } = _ref4,
      props = _objectWithoutProperties(_ref4, ["field", "form"]);

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

  useLayoutEffect(() => {
    setFieldValue(field.name, value);
  }, [field.name, value, setFieldValue]);
  return /*#__PURE__*/React.createElement(StyledRow, null, /*#__PURE__*/React.createElement(StyledRowRangeField, null, props.label && /*#__PURE__*/React.createElement("label", {
    htmlFor: field.name
  }, props.label), /*#__PURE__*/React.createElement(SliderRow, null, /*#__PURE__*/React.createElement(SliderInput, _extends({}, field, props, {
    onChange: handleOnChange,
    onBlur: handleOnBlur,
    type: props.type,
    value: value,
    error: touched[field.name] && errors[field.name],
    placeholder: props.placeholder && `${props.placeholder}${props.required && '*' || ''}`
  })), props.suffix && /*#__PURE__*/React.createElement(StyledSliderInputSuffix, null, props.suffix))), /*#__PURE__*/React.createElement(SliderWrapper, null, /*#__PURE__*/React.createElement(Slider, {
    min: props.min,
    max: props.max,
    step: props.step,
    value: value,
    tooltip: false,
    onChange: handleOnChangeSlider,
    onChangeComplete: handleOnChangeCompleteSlider
  })), props.showMinMax && /*#__PURE__*/React.createElement(StyledRowRangeField, null, /*#__PURE__*/React.createElement(StyledSpan, null, "Min. ", props.min, " ", props.unit), /*#__PURE__*/React.createElement(StyledSpan, null, "Max. ", props.max, " ", props.unit)));
};
//# sourceMappingURL=base.js.map