"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _getYear = _interopRequireDefault(require("date-fns/getYear"));

var _reactDatepicker = _interopRequireWildcard(require("react-datepicker"));

require("react-datepicker/dist/react-datepicker.css");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin: 10px;\n  display: flex;\n  justify-content: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  border: 1px solid\n    ", ";\n  box-sizing: border-box;\n  box-shadow: ", ";\n  border-radius: ", ";\n  width: 100%;\n  display: flex;\n  align-items: center;\n  font-style: ", ";\n  font-weight: ", ";\n  font-size: ", ";\n  line-height: ", ";\n  text-align: ", ";\n  padding: ", ";\n  border-color: ", ";\n  color: ", ";\n\n  &::placeholder {\n    color: ", ";\n    font-size: ", ";\n  }\n\n  &:focus {\n    outline: none;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n\n  & .react-datepicker-wrapper {\n    width: 100% !important;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledWrapper = _styledComponents.default.div(_templateObject());
/* eslint-disable */


var StyledDatePicker = (0, _styledComponents.default)(_reactDatepicker.default)(_templateObject2(), function (props) {
  return props.theme.inputBgColor;
}, function (props) {
  return props.theme.inputBorderColor;
}, function (props) {
  return props.theme.inputBoxShadow;
}, function (props) {
  return props.theme.inputBorderRadius;
}, function (props) {
  return props.theme.inputFontStyle;
}, function (props) {
  return props.theme.inputFontWeight;
}, function (props) {
  return props.theme.inputFontSize;
}, function (props) {
  return props.theme.inputLineHeight;
}, function (props) {
  return props.theme.inputTextAlign;
}, function (props) {
  return props.theme.inputPadding;
}, function (props) {
  return props.error ? props.theme.inputErrorColor : props.theme.inputBorderColor;
}, function (props) {
  return props.error ? props.theme.inputErrorColor : props.theme.inputTextColor;
}, function (props) {
  return props.theme.inputPlaceHolderColor;
}, function (props) {
  return props.theme.inputFontSize;
});
/* eslint-enable */

var StyledHeader = _styledComponents.default.div(_templateObject3());

var range = function range(start, end) {
  return new Array(end - start).fill(0).map(function (_, i) {
    return end - i;
  });
};

var years = range(1940, (0, _getYear.default)(new Date()) - 15);
var months = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'];
var days = ['pon', 'wt', 'śr', 'czw', 'pt', 'sob', 'niedz'];
(0, _reactDatepicker.registerLocale)('pl', {
  localize: {
    month: function month(n) {
      return months[n];
    },
    day: function day(n) {
      return days[n];
    }
  },
  formatLong: {}
}); // eslint-disable-next-line @typescript-eslint/no-explicit-any

var CustomHeader = function CustomHeader(_ref) {
  var date = _ref.date,
      changeYear = _ref.changeYear,
      changeMonth = _ref.changeMonth,
      decreaseMonth = _ref.decreaseMonth,
      increaseMonth = _ref.increaseMonth,
      prevMonthButtonDisabled = _ref.prevMonthButtonDisabled,
      nextMonthButtonDisabled = _ref.nextMonthButtonDisabled;
  return /*#__PURE__*/_react.default.createElement(StyledHeader, null, /*#__PURE__*/_react.default.createElement("button", {
    onClick: decreaseMonth,
    disabled: prevMonthButtonDisabled
  }, '<'), /*#__PURE__*/_react.default.createElement("select", {
    value: (0, _getYear.default)(date) // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ,
    onChange: function onChange(_ref2) {
      var value = _ref2.target.value;
      return changeYear(value);
    }
  }, years.map(function (option) {
    return /*#__PURE__*/_react.default.createElement("option", {
      key: option,
      value: option
    }, option);
  })), /*#__PURE__*/_react.default.createElement("select", {
    value: months[(0, _getYear.default)(date)],
    onChange: function onChange(_ref3) {
      var value = _ref3.target.value;
      return changeMonth(months.indexOf(value));
    }
  }, months.map(function (option) {
    return /*#__PURE__*/_react.default.createElement("option", {
      key: option,
      value: option
    }, option);
  })), /*#__PURE__*/_react.default.createElement("button", {
    onClick: increaseMonth,
    disabled: nextMonthButtonDisabled
  }, '>'));
}; // eslint-disable-next-line @typescript-eslint/no-explicit-any


var DatePickerCore = function DatePickerCore(_ref4) {
  var _ref4$dateFormat = _ref4.dateFormat,
      dateFormat = _ref4$dateFormat === void 0 ? 'dd/MM/yyyy' : _ref4$dateFormat,
      _ref4$openToDate = _ref4.openToDate,
      openToDate = _ref4$openToDate === void 0 ? new Date("01/01/".concat((0, _getYear.default)(new Date()) - 18)) : _ref4$openToDate,
      selected = _ref4.selected,
      props = _objectWithoutProperties(_ref4, ["dateFormat", "openToDate", "selected"]);

  return /*#__PURE__*/_react.default.createElement(StyledWrapper, null, /*#__PURE__*/_react.default.createElement(StyledDatePicker, _extends({}, props, {
    selected: selected,
    dateFormat: dateFormat,
    locale: "pl",
    renderCustomHeader: CustomHeader,
    openToDate: selected || openToDate,
    onFocus: function onFocus(e) {
      return e.target.readOnly = true;
    }
  })));
};

var _default = DatePickerCore;
exports.default = _default;
//# sourceMappingURL=DatePickerCore.js.map