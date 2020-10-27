(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "react-rangeslider", "styled-components", "../../consts/sizes", "../../utils", "./DatePickerCore"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("react-rangeslider"), require("styled-components"), require("../../consts/sizes"), require("../../utils"), require("./DatePickerCore"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactRangeslider, global.styledComponents, global.sizes, global.utils, global.DatePickerCore);
    global.undefined = mod.exports;
  }
})(this, function (exports, _react, _reactRangeslider, _styledComponents, _sizes, _utils, _DatePickerCore) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.BaseRangeField = exports.BaseSelectField = exports.BaseDateField = exports.SliderRow = exports.StyledInput = exports.StyledError = exports.StyledContainer = exports.RowWithFixedColumn = exports.Row = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _reactRangeslider2 = _interopRequireDefault(_reactRangeslider);

  var _styledComponents2 = _interopRequireDefault(_styledComponents);

  var _DatePickerCore2 = _interopRequireDefault(_DatePickerCore);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }
  /* eslint-disable @typescript-eslint/no-explicit-any */


  /* eslint-disable */
  const StyledRow = _styledComponents2.default.div`
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

  const StyledRowRangeField = _styledComponents2.default.div`
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
  const Row = exports.Row = _styledComponents2.default.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  flex-direction: column;
  > * {
      flex-basis: 0;
      flex-grow: 1;
  }

  @media ${_sizes.device.tablet} {
    flex-direction: row;
    justify-content: space-between;
    & > :first-child:not(:last-child) {
      margin-right: ${props => props.theme.marginBetweenRowChildren};
    }

    & > :last-child:not(:first-child) {
      margin-left: ${props => props.theme.marginBetweenRowChildren};
    }
  }
`;
  const RowWithFixedColumn = exports.RowWithFixedColumn = _styledComponents2.default.div` 
  display: flex;
  width: 100%;
  margin: 0 auto;
  
  @media ${_sizes.device.laptopL} {
    & > :first-child {
      position: fixed;
      left: 0;
      width: 50%;
      padding-top: 0;
    }
    
    & > :last-child { 
      position: absolute;
      right: 0;
      width: 50%;
    }
  }
`;
  const StyledContainer = exports.StyledContainer = _styledComponents2.default.div`
  box-sizing: border-box;
  padding: ${props => props.theme.styledContainerMobilePadding};

  @media ${_sizes.device.tablet} {
    padding: ${props => props.theme.styledContainerPadding};
  }
`;
  /* eslint-enable */

  const StyledError = exports.StyledError = _styledComponents2.default.span`
  color: ${props => props.theme.inputErrorColor};
  text-align: ${props => props.theme.inputErrorTextAlign};
  position: absolute;
  width: 100%;
  font-size: ${props => props.theme.inputErrorFontSize};
  bottom: ${props => props.theme.inputErrorBottom};
`;
  const StyledInput = exports.StyledInput = _styledComponents2.default.input`
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

  ${props => props.hasPrefix && 'border-left: none; border-top-left-radius: 0px; border-bottom-left-radius: 0px;'}
  ${props => props.hasSuffix && 'border-right: none; border-top-right-radius: 0px; border-bottom-right-radius: 0px;'}

  &::placeholder {
    color: ${props => props.theme.inputPlaceHolderColor};
    font-size: ${props => props.theme.inputFontSize};
  }

  &:focus {
    outline: none;
  }
`;
  const SliderRow = exports.SliderRow = _styledComponents2.default.div`
  display: flex;
  padding: 25px 0;
  flex-direction: row;
`;
  const SliderInput = _styledComponents2.default.input`
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
  ${props => props.hasSuffix && 'border-right: none; border-top-right-radius: 0px; border-bottom-right-radius: 0px;'}

  &::placeholder {
    color: ${props => props.theme.inputPlaceHolderColor};
  }

  &:focus {
    outline: none;
  }
`;
  /* eslint-disable */

  const StyledSelectContainer = _styledComponents2.default.div`
  position: relative;
  width: 100%;
`;
  const StyledSelect = _styledComponents2.default.select`
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
  const StyledSelectArrow = _styledComponents2.default.span`
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
  const StyledSpan = _styledComponents2.default.span`
  font-size: ${props => props.theme.styledSpanFontSize};
  font-weight: ${props => props.theme.styledSpanFontWeight};
  color: ${props => props.theme.styledSpanFontColor};
`;
  const StyledInputSuffix = _styledComponents2.default.span`
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
  const StyledSliderInputSuffix = _styledComponents2.default.span`
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
  const StyledInputPrefixContainer = _styledComponents2.default.div`
  background: ${props => props.theme.inputBgColor};
  position: relative;
  left: 0px;
  height: ${props => props.theme.inputHeight};
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  height: ${props => props.theme.inputHeight};
  border: 1px solid ${props => props.error ? props.theme.inputErrorColor : props.theme.inputBorderColor};
  border-right: none;
  border-top-left-radius: ${props => props.theme.inputBorderRadius};
  border-bottom-left-radius: ${props => props.theme.inputBorderRadius};
  color: ${props => props.error ? props.theme.inputErrorColor : props.theme.inputTextColor};
  font-size: ${props => props.theme.inputFontSize};
  font-weight: ${props => props.theme.inputFontWeight};  
`;
  const StyledInputPrefix = _styledComponents2.default.span`
  padding: ${props => props.theme.styledInputPrefixPadding};
  border-right: 1px solid ${props => props.theme.inputBorderColor};
`;
  const SliderWrapper = _styledComponents2.default.div`
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
    background-color: ${props => props.theme.sliderHandleAfterBgColor};
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
  const InputWrapper = _styledComponents2.default.div`
  position: relative;
  display: flex;
  width:100%;
  flex-direction: row;
  svg {
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.theme.inputIconLeft};
    margin: auto;
    padding-right: 20px;
    border-right: 1px solid ${props => props.theme.inputBorderColor};
  }
  input {
    padding: ${props => props.withIcon ? props.theme.inputWithIconPadding : props.theme.inputPadding};
  }
`;
  /* eslint-enable */

  const BaseField = _ref => {
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
    } = (0, _react.useContext)(_utils.FormContext);

    const handleOnBlur = e => {
      (0, _utils.setFormValuesToCache)(values, id);
      field.onBlur && field.onBlur(e);
    };

    return props.visible !== false && /*#__PURE__*/_react2.default.createElement(StyledRow, null, props.label && /*#__PURE__*/_react2.default.createElement("label", {
      htmlFor: field.name
    }, `${props.label}${props.required && '*' || ''}`), /*#__PURE__*/_react2.default.createElement(InputWrapper, {
      withIcon: props.icon !== undefined
    }, props.prefix && /*#__PURE__*/_react2.default.createElement(StyledInputPrefixContainer, {
      error: touched[field.name] && errors[field.name]
    }, /*#__PURE__*/_react2.default.createElement(StyledInputPrefix, null, props.prefix)), props.icon, /*#__PURE__*/_react2.default.createElement(StyledInput, _extends({}, field, props, {
      required: props.required,
      hasPrefix: !!props.prefix,
      hasSuffix: !!props.suffix,
      onBlur: handleOnBlur,
      type: props.type,
      value: field.value && field.value || '',
      error: touched[field.name] && errors[field.name],
      placeholder: props.placeholder && `${props.placeholder}${props.required && '*' || ''}`,
      style: props.prefix && {
        borderBottomLeftRadius: '0px',
        borderTopLeftRadius: '0px'
      }
    })), props.suffix && /*#__PURE__*/_react2.default.createElement(StyledInputSuffix, null, props.suffix)), props.showError && touched[field.name] && errors[field.name] && /*#__PURE__*/_react2.default.createElement(StyledError, null, errors[field.name])) || /*#__PURE__*/_react2.default.createElement(_react2.default.Fragment, null);
  };

  exports.default = BaseField;

  const BaseDateField = exports.BaseDateField = _ref2 => {
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
    } = (0, _react.useContext)(_utils.FormContext);
    const [currntValue, setCurrentValue] = (0, _react.useState)(values[field.name]);

    const handleChange = value => {
      (0, _utils.setFormValuesToCache)(_objectSpread(_objectSpread({}, values), {}, {
        [field.name]: value.toString()
      }), id);
      setCurrentValue(value);
      setFieldTouched(field.name, true);
    };

    const handleBlur = () => {
      setFieldTouched(field.name, true);
    };

    (0, _react.useEffect)(() => {
      setFieldValue(field.name, currntValue);
    }, [currntValue, field.name, setFieldValue]);
    return /*#__PURE__*/_react2.default.createElement(StyledRow, null, props.label && /*#__PURE__*/_react2.default.createElement("label", {
      htmlFor: field.name
    }, `${props.label}${props.required && '*' || ''}`), props.prefix && /*#__PURE__*/_react2.default.createElement(StyledInputPrefix, null, props.prefix), /*#__PURE__*/_react2.default.createElement(_DatePickerCore2.default, {
      placeholderText: props.placeholder,
      required: props.required,
      name: field.name,
      selected: field.value ? new Date(field.value) : null,
      onBlur: handleBlur,
      onChange: handleChange
    }), props.suffix && /*#__PURE__*/_react2.default.createElement(StyledInputSuffix, null, props.suffix), props.showError && touched[field.name] && errors[field.name] && /*#__PURE__*/_react2.default.createElement(StyledError, null, errors[field.name]));
  };

  const BaseSelectField = exports.BaseSelectField = _ref3 => {
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
    } = (0, _react.useContext)(_utils.FormContext);

    const handleOnBlur = e => {
      (0, _utils.setFormValuesToCache)(values, id);
      console.log('blur');
      field.onBlur && field.onBlur(e);
    };

    const options = options => {
      return [/*#__PURE__*/_react2.default.createElement("option", {
        key: "select",
        value: "select",
        disabled: true
      }, `wybierz ${props.required && '*' || ''}`)].concat(Object.keys(options).map(option => {
        return /*#__PURE__*/_react2.default.createElement("option", {
          key: option,
          value: option
        }, options[option]);
      }));
    };

    return /*#__PURE__*/_react2.default.createElement(StyledRow, null, props.label && /*#__PURE__*/_react2.default.createElement("label", {
      htmlFor: field.name
    }, `${props.label}${props.required && '*' || ''}`), /*#__PURE__*/_react2.default.createElement(StyledSelectContainer, null, /*#__PURE__*/_react2.default.createElement(StyledSelect, _extends({}, field, props, {
      onBlur: handleOnBlur,
      type: "text",
      value: field.value && field.value || 'select',
      error: touched[field.name] && errors[field.name],
      placeholder: props.placeholder && `${props.placeholder}${props.required && '*' || ''}`
    }), props.options && options(props.options)), /*#__PURE__*/_react2.default.createElement(StyledSelectArrow, null)), props.showError && touched[field.name] && errors[field.name] && /*#__PURE__*/_react2.default.createElement(StyledError, null, errors[field.name]));
  };

  const BaseRangeField = exports.BaseRangeField = _ref4 => {
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
    } = (0, _react.useContext)(_utils.FormContext);
    const [value, setValue] = (0, _react.useState)(parseInt(field.value) || props.value || 0);

    const handleOnChangeSlider = value => {
      setValue(value);
    };

    const handleOnChangeCompleteSlider = () => {
      (0, _utils.setFormValuesToCache)(_objectSpread(_objectSpread({}, values), {}, {
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
      (0, _utils.setFormValuesToCache)(_objectSpread(_objectSpread({}, values), {}, {
        [field.name]: value
      }), id);
      field.onBlur && field.onBlur(e);
    };

    (0, _react.useLayoutEffect)(() => {
      setFieldValue(field.name, value);
    }, [field.name, value, setFieldValue]);
    return /*#__PURE__*/_react2.default.createElement(StyledRow, null, /*#__PURE__*/_react2.default.createElement(StyledRowRangeField, null, props.label && /*#__PURE__*/_react2.default.createElement("label", {
      htmlFor: field.name
    }, props.label), /*#__PURE__*/_react2.default.createElement(SliderRow, null, /*#__PURE__*/_react2.default.createElement(SliderInput, _extends({}, field, props, {
      onChange: handleOnChange,
      onBlur: handleOnBlur,
      type: props.type,
      value: value,
      error: touched[field.name] && errors[field.name],
      placeholder: props.placeholder && `${props.placeholder}${props.required && '*' || ''}`,
      hasSuffix: props.suffix !== undefined
    })), props.suffix && /*#__PURE__*/_react2.default.createElement(StyledSliderInputSuffix, null, props.suffix))), /*#__PURE__*/_react2.default.createElement(SliderWrapper, null, /*#__PURE__*/_react2.default.createElement(_reactRangeslider2.default, {
      min: props.min,
      max: props.max,
      step: props.step,
      value: value,
      tooltip: false,
      onChange: handleOnChangeSlider,
      onChangeComplete: handleOnChangeCompleteSlider
    })), props.showMinMax && /*#__PURE__*/_react2.default.createElement(StyledRowRangeField, null, /*#__PURE__*/_react2.default.createElement(StyledSpan, null, "Min. ", props.min, " ", props.unit), /*#__PURE__*/_react2.default.createElement(StyledSpan, null, "Max. ", props.max, " ", props.unit)));
  };
});
//# sourceMappingURL=base.js.map