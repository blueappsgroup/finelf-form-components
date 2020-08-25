(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "styled-components", "../../consts/sizes"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("styled-components"), require("../../consts/sizes"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.styledComponents, global.sizes);
    global.undefined = mod.exports;
  }
})(this, function (exports, _react, _styledComponents, _sizes) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Row = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _styledComponents2 = _interopRequireDefault(_styledComponents);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
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
  bottom: -14px;
`;
  const StyledInput = _styledComponents2.default.input`
  background: ${props => props.theme.inputBgColor};
  border: 1px solid ${props => props.theme.inputBorderColor};
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

  const BaseField = _ref => {
    let {
      field,
      form: {
        touched,
        errors
      }
    } = _ref,
        props = _objectWithoutProperties(_ref, ["field", "form"]);

    return /*#__PURE__*/_react2.default.createElement(StyledRow, null, props.label && /*#__PURE__*/_react2.default.createElement("label", {
      htmlFor: field.name
    }, props.label), /*#__PURE__*/_react2.default.createElement(StyledInput, _extends({}, field, props, {
      type: "text",
      value: field.value && field.value || '',
      error: touched[field.name] && errors[field.name],
      placeholder: props.placeholder && `${props.placeholder}${props.required && '*' || ''}`
    })), props.showError && touched[field.name] && errors[field.name] && /*#__PURE__*/_react2.default.createElement(StyledError, null, errors[field.name]));
  };

  exports.default = BaseField;
});
//# sourceMappingURL=base.js.map