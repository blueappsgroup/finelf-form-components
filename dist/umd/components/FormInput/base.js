(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "react-rangeslider", "styled-components", "../../consts/sizes", "../../utils"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("react-rangeslider"), require("styled-components"), require("../../consts/sizes"), require("../../utils"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactRangeslider, global.styledComponents, global.sizes, global.utils);
    global.undefined = mod.exports;
  }
})(this, function (exports, _react, _reactRangeslider, _styledComponents, _sizes, _utils) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.BaseRangeField = exports.BaseSelectField = exports.Row = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _reactRangeslider2 = _interopRequireDefault(_reactRangeslider);

  var _styledComponents2 = _interopRequireDefault(_styledComponents);

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


  const StyledRow = _styledComponents2.default.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  position: relative;
`;
  const Row = exports.Row = _styledComponents2.default.div`
  display: flex;
  flex-direction: column;

  @media ${_sizes.device.tablet} {
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
  const StyledError = _styledComponents2.default.span`
  color: ${props => props.theme.inputErrorColor};
  position: absolute;
  font-size: 10px;
  bottom: -12px;
`;
  const StyledInput = _styledComponents2.default.input`
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
  const StyledSelect = _styledComponents2.default.select`
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
  const StyledSpan = _styledComponents2.default.span`
  font-weight: bold;
`;
  const StyledInputSuffix = _styledComponents2.default.span`
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

  const SliderWrapper = _styledComponents2.default.div`
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

    return /*#__PURE__*/_react2.default.createElement(StyledRow, null, props.label && /*#__PURE__*/_react2.default.createElement("label", {
      htmlFor: field.name
    }, props.label), /*#__PURE__*/_react2.default.createElement(StyledInput, _extends({}, field, props, {
      onBlur: handleOnBlur,
      type: props.type,
      value: field.value && field.value || '',
      error: touched[field.name] && errors[field.name],
      placeholder: props.placeholder && `${props.placeholder}${props.required && '*' || ''}`
    })), props.suffix && /*#__PURE__*/_react2.default.createElement(StyledInputSuffix, null, props.suffix), props.showError && touched[field.name] && errors[field.name] && /*#__PURE__*/_react2.default.createElement(StyledError, null, errors[field.name]));
  };

  exports.default = BaseField;

  const BaseSelectField = exports.BaseSelectField = _ref2 => {
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
    } = (0, _react.useContext)(_utils.FormContext);

    const handleOnBlur = e => {
      (0, _utils.setFormValuesToCache)(values, id);
      field.onBlur && field.onBlur(e);
    };

    const options = options => {
      return [/*#__PURE__*/_react2.default.createElement("option", {
        key: "select",
        value: "select",
        disabled: true
      }, "wybierz")].concat(Object.keys(options).map(option => {
        return /*#__PURE__*/_react2.default.createElement("option", {
          key: option,
          value: option
        }, options[option]);
      }));
    };

    return /*#__PURE__*/_react2.default.createElement(StyledRow, null, props.label && /*#__PURE__*/_react2.default.createElement("label", {
      htmlFor: field.name
    }, props.label), /*#__PURE__*/_react2.default.createElement(StyledSelect, _extends({}, field, props, {
      onBlur: handleOnBlur,
      type: "text",
      value: field.value && field.value || 'select',
      error: touched[field.name] && errors[field.name],
      placeholder: props.placeholder && `${props.placeholder}${props.required && '*' || ''}`
    }), props.options && options(props.options)), props.showError && touched[field.name] && errors[field.name] && /*#__PURE__*/_react2.default.createElement(StyledError, null, errors[field.name]));
  };

  const BaseRangeField = exports.BaseRangeField = _ref3 => {
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

    return /*#__PURE__*/_react2.default.createElement("div", null, /*#__PURE__*/_react2.default.createElement(StyledRow, null, props.label && /*#__PURE__*/_react2.default.createElement("label", {
      htmlFor: field.name
    }, props.label), /*#__PURE__*/_react2.default.createElement(StyledInput, _extends({}, field, props, {
      onChange: handleOnChange,
      onBlur: handleOnBlur,
      type: props.type,
      value: value,
      error: touched[field.name] && errors[field.name],
      placeholder: props.placeholder && `${props.placeholder}${props.required && '*' || ''}`
    })), props.suffix && /*#__PURE__*/_react2.default.createElement(StyledInputSuffix, null, props.suffix)), /*#__PURE__*/_react2.default.createElement(SliderWrapper, null, /*#__PURE__*/_react2.default.createElement(_reactRangeslider2.default, {
      min: props.min,
      max: props.max,
      step: props.step,
      value: value,
      tooltip: false,
      onChange: handleOnChangeSlider,
      onChangeComplete: handleOnChangeCompleteSlider
    })), /*#__PURE__*/_react2.default.createElement(StyledRow, {
      style: {
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/_react2.default.createElement(StyledSpan, null, "Min. ", props.min, " ", props.unit), /*#__PURE__*/_react2.default.createElement(StyledSpan, null, "Max. ", props.max, " ", props.unit)));
  };
});
//# sourceMappingURL=base.js.map