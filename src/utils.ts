import React, { Context } from 'react'
import { FormValuesType } from './types'

export const FormContext: Context<{
  id?: string
  stepsLength?: number
  currentStep?: number
  stepsTitleList?: string[]
  nextStep?: Function
  prevStep?: Function
  apiUrl?: string
  fieldsForSkip?: string[]
  addFieldForSkip?: (key: string) => void
  errorFromApi?: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  initialValues?: any
  handleSubmit?: Function
  setInitialValues?: Function
  formStatus?: string
  setFormStatus?: Function
}> = React.createContext({})

export const getFormValuesFromCache = (
  id?: string
): { [key: string]: string | boolean } =>
  (id && JSON.parse(window.sessionStorage.getItem(`form-${id}`) as string)) ||
  {}

export const setFormValuesToCache = (
  values: { [key: string]: string | boolean | undefined },
  formId?: string
): void => {
  const allValues = getFormValuesFromCache(formId)
  formId &&
    window.sessionStorage.setItem(
      `form-${formId}`,
      JSON.stringify({ ...allValues, ...values })
    )
}

export const resetFormValueCache = (id: string): void =>
  window.sessionStorage.setItem(`form-${id}`, '{}')

export const handleSendDataToApi: (
  values: FormValuesType,
  apiUrl: string,
  formId: string,
  fieldsForSkip: string[],
  dataWithUserAgent?: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
) => Promise<any> = (
  values,
  apiUrl,
  formId,
  fieldsForSkip,
  dataWithUserAgent
) => {
  const { agreements, ...rest } = values
  const filteredValues = Object.keys(rest).reduce((acc, key) => {
    if (!fieldsForSkip.includes(key) && rest[key]) {
      acc[key] = typeof rest[key] === 'string' ? rest[key].trim() : rest[key]
    }
    return acc
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }, {} as { [key: string]: any })
  const mappedAgreements =
    agreements &&
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Object.keys(agreements).reduce<any>((acc, key) => {
      if (key !== 'selectAll' && agreements[key]) {
        acc.push(key)
      }
      return acc
    }, [])

  if (dataWithUserAgent) {
    // eslint-disable-next-line @typescript-eslint/camelcase
    filteredValues.user_agent = window.navigator.userAgent
  }

  return fetch(`${apiUrl}/forms/${formId}/data`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      formName: formId,
      data: filteredValues,
      agreements: mappedAgreements,
    }),
  })
}

export const getFieldsValuesFromUrl = (
  paramsList: string[]
): { [key: string]: string | null } =>
  paramsList.reduce((acc, item) => {
    const itemValue = new URLSearchParams(window.location.search).get(item)
    if (itemValue !== null) {
      acc[item] = itemValue
    }
    return acc
  }, {} as { [key: string]: string | null })
