/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  ChangeEvent,
  ReactElement,
  useContext,
  useLayoutEffect,
  useState,
} from 'react'
import Slider from 'react-rangeslider'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import styled from 'styled-components'

import { device } from '../../consts/sizes'
import {
  FieldWrapProps,
  FieldDateWrapProps,
  RangeFieldWrapProps,
  SelectFieldOptions,
  SelectFieldWrapProps,
} from '../../types'
import { FormContext, setFormValuesToCache } from '../../utils'

type StyledProps = {
  theme: {
    submitButtonBgColor: string
    inputHeight: string
    inputErrorColor: string
    inputErrorTextAlign: string
    inputErrorFontSize: string
    inputErrorBottom: string
    inputBgColor: string
    inputPlaceHolderColor: string
    inputBorderColor: string
    inputBorderWidth: string
    inputBorderStyle: string
    inputBorderRadius: string
    inputTextColor: string
    inputFontSize: string
    inputFontWeight: string
    inputFontStyle: string
    inputBoxShadow: string
    inputLineHeight: string
    inputPadding: string
    styledRowFlexWrap: string
    styledRowLabelPadding: string
    styledSelectHeight: string
    styledSelectErrorColor: string
    styledSelectErrorTextAlign: string
    styledSelectBgColor: string
    styledSelectPlaceHolderColor: string
    styledSelectBorderColor: string
    styledSelectBorderWidth: string
    styledSelectBorderStyle: string
    styledSelectBorderRadius: string
    styledSelectTextColor: string
    styledSelectFontSize: string
    styledSelectFontWeight: string
    styledSelectFontStyle: string
    styledSelectBoxShadow: string
    styledSelectLineHeight: string
    styledSelectPadding: string
    styledSelectVerticalPadding: string
    styledSelectHorizontalPadding: string
    styledSpanFontSize: string
    styledSpanFontWeight: string
    styledRowMarginBottom: string
    sliderHeight: string
    sliderBorderRadius: string
    sliderBgColor: string
    sliderFillBgColor: string
    sliderHandleBgColor: string
    sliderHandleBorderColor: string
    sliderHandleBoxShadow: string
    sliderHandleBorderWidth: string
    sliderHandleBorderStyle: string
    sliderHandleBorderRadius: string
    sliderHandleWidth: string
    sliderHandleHeight: string
    sliderHandleAfterWidth: string
    sliderHandleAfterHeight: string
    sliderHandleAfterBorderRadius: string
    styledInputSuffixBgColor: string
    styledInputSuffixTextColor: string
    styledInputSuffixFontSize: string
    styledInputSuffixFontWeight: string
    styledInputSuffixBorderRadius: string
    styledInputSuffixVerticalPadding: string
    styledInputSuffixHorizontalPadding: string
    styledInputPrefixPadding: string
  }
  error?: string | boolean
}

/* eslint-disable */
const StyledRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${(props: StyledProps): string => props.theme.styledRowMarginBottom};
  position: relative;
  flex-wrap: ${(props: StyledProps): string => props.theme.styledRowFlexWrap};
  label {
    padding: ${(props: StyledProps): string => props.theme.styledRowLabelPadding};
  }
`
/* eslint-enable */

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
`

const StyledError = styled.span`
  color: ${(props: StyledProps): string => props.theme.inputErrorColor};
  text-align: ${(props: StyledProps): string =>
    props.theme.inputErrorTextAlign};
  position: absolute;
  width: 100%;
  font-size: ${(props: StyledProps): string => props.theme.inputErrorFontSize};
  bottom: ${(props: StyledProps): string => props.theme.inputErrorBottom};
`

const StyledInput = styled.input<any>`
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
  padding: ${(props: StyledProps): string => props.theme.inputPadding};
  border-color: ${(props: StyledProps): string =>
    props.error ? props.theme.inputErrorColor : props.theme.inputBorderColor};
  color: ${(props: any): string =>
    props.error ? props.theme.inputErrorColor : props.theme.inputTextColor};

  &::placeholder {
    color: ${(props: StyledProps): string => props.theme.inputPlaceHolderColor};
  }

  &:focus {
    outline: none;
  }
`

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
  padding: ${(props: StyledProps): string => props.theme.inputPadding};
  border-color: ${(props: StyledProps): string =>
    props.error ? props.theme.inputErrorColor : props.theme.inputBorderColor};
  color: ${(props: any): string =>
    props.error ? props.theme.inputErrorColor : props.theme.inputTextColor};

  &::placeholder {
    color: ${(props: StyledProps): string => props.theme.inputPlaceHolderColor};
  }

  &:focus {
    outline: none;
  }
`

/* eslint-disable */
const StyledSelect = styled.select<any>`
  background: ${(props: StyledProps): string => props.theme.styledSelectBgColor};
  border: ${(props: StyledProps): string => props.theme.styledSelectBorderWidth} ${(props: StyledProps): string => props.theme.styledSelectBorderStyle}
    ${(props: StyledProps): string => props.theme.styledSelectBorderColor};
  box-sizing: border-box;
  box-shadow: ${(props: StyledProps): string => props.theme.styledSelectBoxShadow};
  border-radius: ${(props: StyledProps): string => props.theme.styledSelectBorderRadius};
  width: 100%;
  height: ${(props: StyledProps): string => props.theme.styledSelectHeight};
  display: flex;
  align-items: center;
  font-style: ${(props: StyledProps): string => props.theme.styledSelectFontStyle};
  font-weight: ${(props: StyledProps): string => props.theme.styledSelectFontWeight};
  font-size: ${(props: StyledProps): string => props.theme.styledSelectFontSize};
  line-height: ${(props: StyledProps): string => props.theme.styledSelectLineHeight};
  padding: ${(props: StyledProps): string => props.theme.styledSelectVerticalPadding} ${(props: StyledProps): string => props.theme.styledSelectHorizontalPadding};
  border-color: ${(props: StyledProps): string =>
    props.error ? props.theme.styledSelectErrorColor : props.theme.styledSelectBorderColor};
  color: ${(props: any): string =>
    props.error ? props.theme.styledSelectErrorColor : props.theme.styledSelectTextColor};

  &::placeholder {
    color: ${(props: StyledProps): string => props.theme.styledSelectPlaceHolderColor};
  }

  &:focus {
    outline: none;
  }
`

const StyledSpan = styled.span`
  font-size: ${(props: StyledProps): string => props.theme.styledSpanFontSize};
  font-weight: ${(props: StyledProps): string => props.theme.styledSpanFontWeight};
`

const StyledInputSuffix = styled.span`
  position: relative;
  right: 0;
  display: inline-flex;
  align-items: center;
  height: ${(props: StyledProps): string => props.theme.inputHeight};
  background-color: ${(props: StyledProps): string => props.theme.styledInputSuffixBgColor};
  border-radius: ${(props: StyledProps): string => props.theme.styledInputSuffixBorderRadius};
  padding: ${(props: StyledProps): string => props.theme.styledInputSuffixVerticalPadding} ${(props: StyledProps): string => props.theme.styledInputSuffixHorizontalPadding};
  font-weight: ${(props: StyledProps): string => props.theme.styledInputSuffixFontWeight};
  font-size: ${(props: StyledProps): string => props.theme.styledInputSuffixFontSize};
  color: ${(props: StyledProps): string => props.theme.styledInputSuffixTextColor};
`

const StyledInputPrefix = styled.span`
  position: relative;
  left: 0;
  display: inline-flex;
  align-items: center;
  height: ${(props: StyledProps): string => props.theme.inputHeight};
  border: 1px solid ${(props: StyledProps): string => props.theme.inputBorderColor};
  border-top-left-radius: ${(props: StyledProps): string => props.theme.inputBorderRadius};
  border-bottom-left-radius: ${(props: StyledProps): string => props.theme.inputBorderRadius};
    padding: ${(props: StyledProps): string => props.theme.styledInputPrefixPadding};
`

const SliderWrapper = styled.div`
 .rangeslider {
  position: relative;
  width: 100%;
  height: ${(props: StyledProps): string => props.theme.sliderHeight};
  border-radius: ${(props: StyledProps): string => props.theme.sliderBorderRadius};
  background-color: ${(props: StyledProps): string => props.theme.sliderBgColor};
  .rangeslider__fill {
   height: 100%;
   background-color: ${(props: StyledProps): string => props.theme.sliderFillBgColor};
   border-radius: ${(props: StyledProps): string => props.theme.sliderBorderRadius};
  }
  .rangeslider__handle {
   top: -6px;
   width: ${(props: StyledProps): string => props.theme.sliderHandleWidth};
   height: ${(props: StyledProps): string => props.theme.sliderHandleHeight};
   background-color: ${(props: StyledProps): string => props.theme.sliderHandleBgColor};
   position: absolute;
   cursor: pointer;
   box-shadow: ${(props: StyledProps): string => props.theme.sliderHandleBoxShadow};
   border: ${(props: StyledProps): string => props.theme.sliderHandleBorderWidth} ${(props: StyledProps): string => props.theme.sliderHandleBorderStyle} ${(props: StyledProps): string => props.theme.sliderHandleBorderColor};
   border-radius: ${(props: StyledProps): string => props.theme.sliderHandleBorderRadius};
   &::after {
    width: ${(props: StyledProps): string => props.theme.sliderHandleAfterWidth};
    height: ${(props: StyledProps): string => props.theme.sliderHandleAfterHeight};
    background-color: ${(props: StyledProps): string => props.theme.sliderFillBgColor};
    border-radius: ${(props: StyledProps): string => props.theme.sliderHandleAfterBorderRadius};
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
`
/* eslint-enable */

const BaseField: (props: FieldWrapProps) => ReactElement = ({
  field,
  form: { touched, errors, values },
  ...props
}) => {
  const { id } = useContext(FormContext)
  const handleOnBlur = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormValuesToCache(values, id)
    field.onBlur && field.onBlur(e)
  }

  return (
    <StyledRow>
      {props.label && (
        <label htmlFor={field.name}>{`${props.label}${
          (props.required && '*') || ''
        }`}</label>
      )}
      {props.prefix && <StyledInputPrefix>{props.prefix}</StyledInputPrefix>}
      <StyledInput
        {...field}
        {...props}
        onBlur={handleOnBlur}
        type={props.type}
        value={(field.value && field.value) || ''}
        error={touched[field.name] && errors[field.name]}
        placeholder={
          props.placeholder &&
          `${props.placeholder}${(props.required && '*') || ''}`
        }
      />
      {props.suffix && <StyledInputSuffix>{props.suffix}</StyledInputSuffix>}
      {props.showError && touched[field.name] && errors[field.name] && (
        <StyledError>{errors[field.name]}</StyledError>
      )}
    </StyledRow>
  )
}

export default BaseField

export const BaseDateField: (props: FieldDateWrapProps) => ReactElement = ({
  field,
  form: { touched, errors, values },
  ...props
}) => {
  const { id } = useContext(FormContext)
  const handleOnBlur = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormValuesToCache(values, id)
    field.onBlur && field.onBlur(e)
  }

  return (
    <StyledRow>
      {props.label && (
        <label htmlFor={field.name}>{`${props.label}${
          (props.required && '*') || ''
        }`}</label>
      )}
      {props.prefix && <StyledInputPrefix>{props.prefix}</StyledInputPrefix>}
      <StyledDatePicker
        {...field}
        {...props}
        selected={(field.value && new Date(field.value)) || new Date()}
        onBlur={handleOnBlur}
        onChange={(e) => {
          setFormValuesToCache(values, id)
          field.onBlur && field.onBlur(e)
        }}
      />
      {props.suffix && <StyledInputSuffix>{props.suffix}</StyledInputSuffix>}
      {props.showError && touched[field.name] && errors[field.name] && (
        <StyledError>{errors[field.name]}</StyledError>
      )}
    </StyledRow>
  )
}

export const BaseSelectField: (props: SelectFieldWrapProps) => ReactElement = ({
  field,
  form: { touched, errors, values },
  ...props
}) => {
  const { id } = useContext(FormContext)
  const handleOnBlur = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormValuesToCache(values, id)
    field.onBlur && field.onBlur(e)
  }

  const options = (options: SelectFieldOptions): Array<JSX.Element> => {
    return [
      <option key="select" value="select" disabled>
        {`wybierz ${(props.required && '*') || ''}`}
      </option>,
    ].concat(
      Object.keys(options).map((option) => {
        return (
          <option key={option} value={option}>
            {options[option]}
          </option>
        )
      })
    )
  }

  return (
    <StyledRow>
      {props.label && (
        <label htmlFor={field.name}>{`${props.label}${
          (props.required && '*') || ''
        }`}</label>
      )}
      <StyledSelect
        {...field}
        {...props}
        onBlur={handleOnBlur}
        type="text"
        value={(field.value && field.value) || 'select'}
        error={touched[field.name] && errors[field.name]}
        placeholder={
          props.placeholder &&
          `${props.placeholder}${(props.required && '*') || ''}`
        }
      >
        {props.options && options(props.options)}
      </StyledSelect>
      {props.showError && touched[field.name] && errors[field.name] && (
        <StyledError>{errors[field.name]}</StyledError>
      )}
    </StyledRow>
  )
}

export const BaseRangeField: (props: RangeFieldWrapProps) => ReactElement = ({
  field,
  form: { touched, errors, values, setFieldValue },
  ...props
}) => {
  const { id } = useContext(FormContext)
  const [value, setValue] = useState(parseInt(field.value) || props.value || 0)
  const handleOnChangeSlider = (value: number): void => {
    setValue(value)
  }
  const handleOnChangeCompleteSlider = (): void => {
    setFormValuesToCache(
      {
        ...values,
        [field.name]: value,
      },
      id
    )
  }
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = parseInt(e.target.value) || 0
    setValue(value)
    field.onChange && field.onChange(e)
  }
  const handleOnBlur = (e: ChangeEvent<HTMLInputElement>): void => {
    let value = parseInt(e.target.value) || 0

    if (props.min && props.min > value) {
      value = props.min
    }

    if (props.max && props.max < value) {
      value = props.max
    }

    value = props.step ? Math.ceil(value / props.step) * props.step : value

    setValue(value)
    setFormValuesToCache(
      {
        ...values,
        [field.name]: value,
      },
      id
    )
    field.onBlur && field.onBlur(e)
  }

  useLayoutEffect(() => {
    setFieldValue(field.name, value)
  }, [field.name, value, setFieldValue])

  return (
    <div>
      <StyledRow>
        {props.label && <label htmlFor={field.name}>{props.label}</label>}
        <StyledInput
          {...field}
          {...props}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
          type={props.type}
          value={value}
          error={touched[field.name] && errors[field.name]}
          placeholder={
            props.placeholder &&
            `${props.placeholder}${(props.required && '*') || ''}`
          }
        />
        {props.suffix && <StyledInputSuffix>{props.suffix}</StyledInputSuffix>}
      </StyledRow>
      <SliderWrapper>
        <Slider
          min={props.min}
          max={props.max}
          step={props.step}
          value={value}
          tooltip={false}
          onChange={handleOnChangeSlider}
          onChangeComplete={handleOnChangeCompleteSlider}
        />
      </SliderWrapper>
      {props.showMinMax && (
        <StyledRow style={{ justifyContent: 'space-between' }}>
          <StyledSpan>
            Min. {props.min} {props.unit}
          </StyledSpan>
          <StyledSpan>
            Max. {props.max} {props.unit}
          </StyledSpan>
        </StyledRow>
      )}
    </div>
  )
}
