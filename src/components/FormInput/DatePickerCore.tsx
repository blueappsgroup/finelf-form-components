import React, { FC } from 'react'
import styled from 'styled-components'
import getYear from 'date-fns/getYear'
import getMonth from 'date-fns/getYear'
import DatePicker, { registerLocale } from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

import { StyledProps } from './base'
const StyledWrapper = styled.div`
  width: 100%;

  & .react-datepicker-wrapper {
    width: 100% !important;
  }
`

/* eslint-disable */
const StyledDatePicker = styled(DatePicker)`
  background: ${(props: StyledProps): string => props.theme.inputBgColor};
  border: 1px solid
    ${(props: StyledProps): string => props.theme.inputBorderColor};
  box-sizing: border-box;
  box-shadow: ${(props: StyledProps): string => props.theme.inputBoxShadow};
  border-radius: ${(props: StyledProps): string =>
    props.theme.inputBorderRadius};
  width: 100%;
  height: ${(props: StyledProps): string => props.theme.inputHeight};
  display: flex;
  align-items: center;
  font-style: ${(props: StyledProps): string => props.theme.inputFontStyle};
  font-weight: ${(props: StyledProps): string => props.theme.inputFontWeight};
  font-size: ${(props: StyledProps): string => props.theme.inputFontSize};
  line-height: ${(props: StyledProps): string => props.theme.inputLineHeight};
  text-align: ${(props: StyledProps): string => props.theme.inputTextAlign};
  padding: ${(props: StyledProps): string => props.theme.inputPadding};
  border-color: ${(props: StyledProps): string =>
    props.error ? props.theme.inputErrorColor : props.theme.inputBorderColor};
  color: ${(props: any): string =>
    props.error ? props.theme.inputErrorColor : props.theme.inputTextColor};

  &::placeholder {
    color: ${(props: StyledProps): string => props.theme.inputPlaceHolderColor};
    font-size: ${(props: StyledProps): string => props.theme.inputFontSize};
  }

  &:focus {
    outline: none;
  }
`
/* eslint-enable */

const StyledHeader = styled.div`
  margin: 10px;
  display: flex;
  justify-content: center;
`

const range = (start: number, end: number): number[] => {
  return new Array(end - start).fill(0).map((_, i) => i + start)
}

const years = range(1940, getYear(new Date()) + 1)
const months = [
  'Styczeń',
  'Luty',
  'Marzec',
  'Kwiecień',
  'Maj',
  'Czerwiec',
  'Lipiec',
  'Sierpień',
  'Wrzesień',
  'Październik',
  'Listopad',
  'Grudzień',
]

const days = ['pon', 'wt', 'śr', 'czw', 'pt', 'sob', 'niedz']

registerLocale('pl', {
  localize: {
    month: (n: number): string => months[n],
    day: (n: number): string => days[n],
  },
  formatLong: {},
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomHeader: FC<any> = ({
  date,
  changeYear,
  changeMonth,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}) => (
  <StyledHeader>
    <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
      {'<'}
    </button>
    <select
      value={getYear(date)}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onChange={({ target: { value } }): void => changeYear(value as any)}
    >
      {years.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>

    <select
      value={months[getMonth(date)]}
      onChange={({ target: { value } }): void =>
        changeMonth(months.indexOf(value))
      }
    >
      {months.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>

    <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
      {'>'}
    </button>
  </StyledHeader>
)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DatePickerCore: FC<any> = ({ ...props }) => (
  <StyledWrapper>
    <StyledDatePicker
      {...props}
      locale="pl"
      renderCustomHeader={CustomHeader}
      dateFormat="dd-MM-yyyy"
      onFocus={(e): boolean => (e.target.readOnly = true)}
    />
  </StyledWrapper>
)

export default DatePickerCore
