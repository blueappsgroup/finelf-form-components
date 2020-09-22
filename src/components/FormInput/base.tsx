/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ChangeEvent, ReactElement, useContext, useState } from 'react'
import Slider from 'react-rangeslider'
import styled from 'styled-components'
import { device } from '../../consts/sizes'
import {
  FieldWrapProps,
  RangeFieldWrapProps,
  SelectFieldOptions,
  SelectFieldWrapProps,
} from '../../types'
import { FormContext, setFormValuesToCache } from '../../utils'

type StyledProps = {
  theme: {
    inputErrorColor: string
    inputBgColor: string
    inputPlaceHolderColor: string
    inputBorderColor: string
    inputTextColor: string
    submitButtonBgColor: string
    rangeFillBgColor: string
  }
  error?: string | boolean
}

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  position: relative;
`

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
  position: absolute;
  font-size: 10px;
  bottom: -12px;
`

const StyledInput = styled.input<any>`
  background: ${(props: StyledProps): string => props.theme.inputBgColor};
  border: 1px solid
    ${(props: StyledProps): string => props.theme.inputBorderColor};
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

const StyledSelect = styled.select<any>`
  background: ${(props: StyledProps): string => props.theme.inputBgColor};
  border: 1px solid
    ${(props: StyledProps): string => props.theme.inputBorderColor};
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

const StyledSpan = styled.span`
  font-weight: bold;
`

const RangeInputSuffix = styled.span`
  display: inline-flex;
  align-items: center;
  height: 63px;
  background-color: ${(props: StyledProps): string =>
    props.theme.rangeFillBgColor};
  border-radius: 5px;
  padding: 0 15px;
  font-weight: bold;
  font-size: 14px;
  color: ${(props: StyledProps): string => props.theme.inputBgColor};
`

/* eslint-disable */
const SliderWrapper = styled.div`
 .rangeslider {
  position: relative;
  width: 100%;
  height: 12px;
  border-radius: 10px;
  background-color: ${(props: StyledProps): string =>
  props.theme.inputPlaceHolderColor};
  .rangeslider__fill {
   height: 100%;
   background-color: ${(props: StyledProps): string =>
  props.theme.submitButtonBgColor};
   border-radius: 10px;
  }
  .rangeslider__handle {
   top: -6px;
   width: 24px;
   height: 24px;
   background-color: ${(props: StyledProps): string =>
  props.theme.inputBgColor};
   position: absolute;
   cursor: pointer;
   box-shadow: 0px 3px 6px ${(props: StyledProps): string => props.theme.inputPlaceHolderColor};
   border: 1px solid ${(props: StyledProps): string => props.theme.inputPlaceHolderColor};
   border-radius: 50%;
   &::after {
    width: 7px;
    height: 7px;
    background-color: ${(props: StyledProps): string =>
  props.theme.rangeFillBgColor};
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
      {props.label && <label htmlFor={field.name}>{props.label}</label>}
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
      {props.showError && touched[field.name] && errors[field.name] && (
        <StyledError>{errors[field.name]}</StyledError>
      )}
    </StyledRow>
  )
}

export default BaseField

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
        wybierz
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
      {props.label && <label htmlFor={field.name}>{props.label}</label>}
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
  form: { touched, errors },
  ...props
}) => {
  const [value, setValue] = useState(props.value || 0)
  const [timer, setTimer] = useState(0)
  const handleOnChangeSlider = (value: number): void => {
    setValue(value)
  }
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = parseInt(e.target.value) || 0

    clearTimeout(timer)
    setValue(value)
    setTimer(
      setTimeout(
        (value: number) => {
          if (props.min && props.min > value) {
            return setValue(props.min)
          }

          if (props.max && props.max < value) {
            return setValue(props.max)
          }

          value = props.step
            ? Math.ceil(value / props.step) * props.step
            : value

          return setValue(value)
        },
        1000,
        value
      )
    )
  }

  return (
    <div>
      <StyledRow>
        {props.label && <label htmlFor={field.name}>{props.label}</label>}
        <StyledInput
          {...field}
          {...props}
          onChange={handleOnChange}
          type={props.type}
          value={value}
          error={touched[field.name] && errors[field.name]}
          placeholder={
            props.placeholder &&
            `${props.placeholder}${(props.required && '*') || ''}`
          }
        />
        {props.suffix && <RangeInputSuffix>{props.suffix}</RangeInputSuffix>}
      </StyledRow>
      <SliderWrapper>
        <Slider
          min={props.min}
          max={props.max}
          step={props.step}
          value={value}
          tooltip={false}
          onChange={handleOnChangeSlider}
        />
      </SliderWrapper>
      <StyledRow style={{ justifyContent: 'space-between' }}>
        <StyledSpan>
          Min. {props.min} {props.unit}
        </StyledSpan>
        <StyledSpan>
          Max. {props.max} {props.unit}
        </StyledSpan>
      </StyledRow>
    </div>
  )
}
