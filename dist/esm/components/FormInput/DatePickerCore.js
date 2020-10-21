function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import styled from 'styled-components';
import getYear from 'date-fns/getYear';
import getMonth from 'date-fns/getYear';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const StyledWrapper = styled.div`
  width: 100%;

  & .react-datepicker-wrapper {
    width: 100% !important;
  }
`;
/* eslint-disable */

const StyledDatePicker = styled(DatePicker)`
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

const StyledHeader = styled.div`
  margin: 10px;
  display: flex;
  justify-content: center;
`;

const range = (start, end) => {
  return new Array(end - start).fill(0).map((_, i) => i + start);
};

const years = range(1940, getYear(new Date()) + 1);
const months = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'];
const days = ['pon', 'wt', 'śr', 'czw', 'pt', 'sob', 'niedz'];
registerLocale('pl', {
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
}) => /*#__PURE__*/React.createElement(StyledHeader, null, /*#__PURE__*/React.createElement("button", {
  onClick: decreaseMonth,
  disabled: prevMonthButtonDisabled
}, '<'), /*#__PURE__*/React.createElement("select", {
  value: getYear(date) // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ,
  onChange: ({
    target: {
      value
    }
  }) => changeYear(value)
}, years.map(option => /*#__PURE__*/React.createElement("option", {
  key: option,
  value: option
}, option))), /*#__PURE__*/React.createElement("select", {
  value: months[getMonth(date)],
  onChange: ({
    target: {
      value
    }
  }) => changeMonth(months.indexOf(value))
}, months.map(option => /*#__PURE__*/React.createElement("option", {
  key: option,
  value: option
}, option))), /*#__PURE__*/React.createElement("button", {
  onClick: increaseMonth,
  disabled: nextMonthButtonDisabled
}, '>')); // eslint-disable-next-line @typescript-eslint/no-explicit-any


const DatePickerCore = (_ref) => {
  let props = _extends({}, _ref);

  return /*#__PURE__*/React.createElement(StyledWrapper, null, /*#__PURE__*/React.createElement(StyledDatePicker, _extends({}, props, {
    locale: "pl",
    renderCustomHeader: CustomHeader,
    dateFormat: "dd-MM-yyyy",
    onFocus: e => e.target.readOnly = true
  })));
};

export default DatePickerCore;
//# sourceMappingURL=DatePickerCore.js.map