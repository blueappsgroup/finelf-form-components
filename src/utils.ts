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
}> = React.createContext({})

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

export const encodeData: (data: FormValuesType) => string | undefined = (
  data
) => {
  return Object.keys(data)
    .map(
      (key) =>
        encodeURIComponent(key) + '=' + encodeURIComponent(data[key] as string)
    )
    .join('&')
}

export const sendDataToAwsSQS: (
  values: FormValuesType,
  queueUrl?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
) => Promise<any> = (values, queueUrl) =>
  fetch(
    queueUrl ||
      'https://sqs.eu-central-1.amazonaws.com/031738021372/finelf-users-queue',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: encodeData({
        Action: 'SendMessage',
        MessageBody: JSON.stringify(values),
      }),
    }
  )

export const handleSendDataToApi: (
  values: FormValuesType,
  apiUrl: string,
  formId: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
) => Promise<any> = (values, apiUrl, formId) => {
  const { agreements, ...rest } = values
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mappedAgreements = Object.keys(agreements).reduce<any>((acc, key) => {
    if (key !== 'selectAll' && agreements[key]) {
      acc.push(key)
    }
    return acc
  }, [])

  return fetch(`${apiUrl}/forms/${formId}/data`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      formName: formId,
      data: rest,
      agreements: mappedAgreements,
    }),
  })
}
