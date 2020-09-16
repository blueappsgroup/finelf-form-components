/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactElement, useContext, ChangeEvent } from 'react'
import styled from 'styled-components'
import { FieldWrapProps, SelectFieldWrapProps } from '../../types'
import { device } from '../../consts/sizes'
import { FormContext, setFormValuesToCache } from '../../utils'

type StyledProps = {
  theme: {
    inputErrorColor: string
    inputBgColor: string
    inputPlaceHolderColor: string
    inputBorderColor: string
    inputTextColor: string
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

  const options = (options: []): Array<JSX.Element> => {
    const opts = []

    for (const option in options) {
      opts.push(
        <option key={option} value={option}>
          {options[option]}
        </option>
      )
    }

    return opts
  }

  return (
    <StyledRow>
      {props.label && <label htmlFor={field.name}>{props.label}</label>}
      <StyledSelect
        {...field}
        {...props}
        onBlur={handleOnBlur}
        type="text"
        value={(field.value && field.value) || ''}
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
