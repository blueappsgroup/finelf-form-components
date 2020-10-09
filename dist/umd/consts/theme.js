(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "styled-components"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("styled-components"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.styledComponents);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _styledComponents) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ThemeProvider = exports.theme = exports.colors = undefined;

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _react2 = _interopRequireDefault(_react);

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

  const colors = exports.colors = {
    mainGrey: 'rgba(0, 0, 0, 0.7)',
    ligthGrey: '#ecebed',
    grey: '#B9BABD',
    mediumGrey: '#7C7878',
    darkGrey: '#0f0f0f',
    errorRed: '#FF0000',
    lightRed: '#e2070e',
    mediumRed: '#f20f0f',
    white: '#FFF',
    black: '#000'
  };
  const theme = exports.theme = {
    formMaxWidth: '600px',
    formBgColor: colors.white,
    inputHeight: '63px',
    inputTextColor: colors.mainGrey,
    inputPlaceHolderColor: colors.mainGrey,
    inputErrorColor: colors.errorRed,
    inputErrorTextAlign: 'left',
    inputErrorFontSize: '10px',
    inputErrorBottom: '-12px',
    inputBorderColor: colors.ligthGrey,
    inputBorderWidth: '1px',
    inputBorderStyle: 'solid',
    inputBorderRadius: '6px',
    inputBgColor: colors.white,
    inputBoxShadow: '0px 7px 64px rgba(194, 186, 186, 0.07)',
    inputFontSize: '14px',
    inputFontWeight: '500',
    inputFontStyle: 'normal',
    inputLineHeight: '24px',
    inputTextAlign: 'left',
    inputPadding: '0 20px',
    labelFontSize: '16px',
    styledRowFlexWrap: 'nowrap',
    styledRowLabelPadding: '10px',
    styledRowLabelFontColor: colors.black,
    styledSelectHeight: '63px',
    styledSelectTextColor: colors.mainGrey,
    styledSelectPlaceHolderColor: colors.mainGrey,
    styledSelectErrorColor: colors.errorRed,
    styledSelectErrorTextAlign: 'left',
    styledSelectBorderColor: colors.ligthGrey,
    styledSelectBorderWidth: '1px',
    styledSelectBorderStyle: 'solid',
    styledSelectBorderRadius: '6px',
    styledSelectBgColor: colors.white,
    styledSelectBoxShadow: '0px 7px 64px rgba(194, 186, 186, 0.07)',
    styledSelectFontSize: '14px',
    styledSelectFontWeight: '500',
    styledSelectFontStyle: 'normal',
    styledSelectLineHeight: '24px',
    styledSelectVerticalPadding: '0px',
    styledSelectHorizontalPadding: '20px',
    styledSpanFontSize: '16px',
    styledSpanFontColor: colors.black,
    styledSpanFontWeight: 'bold',
    styledRowMarginBottom: '12px',
    checkboxLabelArrowColor: colors.mediumGrey,
    checkboxBgColor: colors.white,
    checkboxBorderColor: colors.black,
    checkboxBorderWidth: '1px',
    checkboxLabelFontSize: '12px',
    checkboxLinkColor: colors.mediumRed,
    checkboxBorderErrorColor: colors.errorRed,
    checkboxLabelTextColor: colors.darkGrey,
    checkboxMarkColor: colors.lightRed,
    headerTextColor: colors.black,
    headerBorderColor: colors.errorRed,
    headerFontSize: '25px',
    headerMargin: '0px 0px 20px 0px',
    subheaderBorderColor: colors.black,
    subheaderFontSize: '16px',
    subheaderMargin: '10px 0px 20px 0px',
    buttonTextColor: colors.white,
    buttonBgColor: colors.mediumRed,
    buttonBorderColor: colors.mediumRed,
    successTextColor: colors.black,
    stepHeaderActiveColor: colors.mediumRed,
    stepHeaderInActiveColor: colors.grey,
    stepHeaderActiveBorderColor: colors.mediumRed,
    stepHeaderInActiveBorderColor: colors.grey,
    buttonSecondaryTextColor: colors.mediumRed,
    buttonSecondaryBgColor: colors.white,
    buttonSecondaryBorderColor: colors.mediumRed,
    redirectPageHeaderTextColor: colors.black,
    redirectPageRedirectTextColor: colors.black,
    redirectPageCounterTextColor: colors.mediumRed,
    successStatusTextColor: colors.black,
    errorStatusTextColor: colors.errorRed,
    sliderHeight: '12px',
    sliderInputHeight: '63px',
    sliderInputTextAlign: 'left',
    sliderBorderRadius: '10px',
    sliderBgColor: colors.mainGrey,
    sliderFillBgColor: colors.mediumRed,
    sliderHandleBgColor: colors.white,
    sliderHandleBorderColor: colors.mainGrey,
    sliderHandleBoxShadow: '0px 7px 64px rgba(194, 186, 186, 0.07)',
    sliderHandleBorderWidth: '1px',
    sliderHandleBorderStyle: 'solid',
    sliderHandleBorderRadius: '50%',
    sliderHandleWidth: '24px',
    sliderHandleHeight: '24px',
    sliderHandleAfterWidth: '7px',
    sliderHandleAfterHeight: '7px',
    sliderHandleAfterBorderRadius: '50%',
    styledInputSuffixBgColor: colors.mediumRed,
    styledInputSuffixTextColor: colors.white,
    styledInputSuffixFontSize: '14px',
    styledInputSuffixFontWeight: 'bold',
    styledInputSuffixBorderRadius: '0 5px 5px 0',
    styledInputPrefixPadding: '0 15px',
    marginBetweenRowChildren: '5px'
  };

  const ThemeProvider = exports.ThemeProvider = ({
    children,
    customTheme
  }) => /*#__PURE__*/_react2.default.createElement(_styledComponents.ThemeProvider, {
    theme: _objectSpread(_objectSpread({}, theme), customTheme)
  }, children);

  ThemeProvider.propTypes = {
    children: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.arrayOf(_propTypes2.default.element)]).isRequired
  };
});
//# sourceMappingURL=theme.js.map