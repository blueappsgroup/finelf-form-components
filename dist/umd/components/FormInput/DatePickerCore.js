(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "styled-components", "date-fns/getYear", "react-datepicker", "react-datepicker/dist/react-datepicker.css"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("styled-components"), require("date-fns/getYear"), require("react-datepicker"), require("react-datepicker/dist/react-datepicker.css"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.styledComponents, global.getYear, global.reactDatepicker, global.reactDatepicker);
    global.undefined = mod.exports;
  }
})(this, function (exports, _react, _styledComponents, _getYear, _reactDatepicker) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _styledComponents2 = _interopRequireDefault(_styledComponents);

  var _getYear2 = _interopRequireDefault(_getYear);

  var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

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

  const StyledWrapper = _styledComponents2.default.div`
  width: 100%;

  & .react-datepicker-wrapper {
    width: 100% !important;
  }
`;
  /* eslint-disable */

  const StyledDatePicker = (0, _styledComponents2.default)(_reactDatepicker2.default)`
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
  /* eslint-enable */

  const StyledHeader = _styledComponents2.default.div`
  margin: 10px;
  display: flex;
  justify-content: center;
`;

  const range = (start, end) => {
    return new Array(end - start).fill(0).map((_, i) => i + start);
  };

  const years = range(1940, (0, _getYear2.default)(new Date()) + 1);
  const months = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'];
  const days = ['pon', 'wt', 'śr', 'czw', 'pt', 'sob', 'niedz'];
  (0, _reactDatepicker.registerLocale)('pl', {
    localize: {
      month: n => months[n],
      day: n => days[n]
    },
    formatLong: {}
  }); // eslint-disable-next-line @typescript-eslint/no-explicit-any

  const CustomHeader = ({
    date,
    changeYear,
    changeMonth,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled
  }) => /*#__PURE__*/_react2.default.createElement(StyledHeader, null, /*#__PURE__*/_react2.default.createElement("button", {
    onClick: decreaseMonth,
    disabled: prevMonthButtonDisabled
  }, '<'), /*#__PURE__*/_react2.default.createElement("select", {
    value: (0, _getYear2.default)(date) // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ,
    onChange: ({
      target: {
        value
      }
    }) => changeYear(value)
  }, years.map(option => /*#__PURE__*/_react2.default.createElement("option", {
    key: option,
    value: option
  }, option))), /*#__PURE__*/_react2.default.createElement("select", {
    value: months[(0, _getYear2.default)(date)],
    onChange: ({
      target: {
        value
      }
    }) => changeMonth(months.indexOf(value))
  }, months.map(option => /*#__PURE__*/_react2.default.createElement("option", {
    key: option,
    value: option
  }, option))), /*#__PURE__*/_react2.default.createElement("button", {
    onClick: increaseMonth,
    disabled: nextMonthButtonDisabled
  }, '>')); // eslint-disable-next-line @typescript-eslint/no-explicit-any


  const DatePickerCore = _ref => {
    let props = _extends({}, _ref);

    return /*#__PURE__*/_react2.default.createElement(StyledWrapper, null, /*#__PURE__*/_react2.default.createElement(StyledDatePicker, _extends({}, props, {
      locale: "pl",
      renderCustomHeader: CustomHeader,
      dateFormat: "dd-MM-yyyy",
      onFocus: e => e.target.readOnly = true
    })));
  };

  exports.default = DatePickerCore;
});
//# sourceMappingURL=DatePickerCore.js.map