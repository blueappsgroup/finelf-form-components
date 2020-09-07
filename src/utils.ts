import React, { Context } from 'react'

export const FormContext: Context<{ id?: string }> = React.createContext({})

export const setFormValuesToCache = (
  values: { [key: string]: string | boolean | undefined },
  formId?: string
): void => {
  formId &&
    window.sessionStorage.setItem(`form-${formId}`, JSON.stringify(values))
}

export const getFormValuesFromCache = (
  id?: string
): { [key: string]: string | boolean } =>
  (id && JSON.parse(window.sessionStorage.getItem(`form-${id}`) as string)) ||
  {}

export const resetFormValueCache = (id: string): void =>
  window.sessionStorage.setItem(`form-${id}`, '{}')
