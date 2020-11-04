import React, { FC, ReactElement, useMemo, useState } from 'react'
import { Formik, Form } from 'formik'
import styled from 'styled-components'

import { ThemeProvider } from '../../consts/theme'
import { device } from '../../consts/sizes'
import { FormProps, FormValuesType } from '../../types'
import RedirectPage from '../RedirectPage'
import {
  FormContext,
  getFormValuesFromCache,
  resetFormValueCache,
  handleSendDataToApi,
  getFieldsValuesFromUrl,
} from '../../utils'
import { formStatuses } from '../../consts/form'

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  max-width: ${(props): string => props.theme.formMaxWidth};
  justify-self: center;
  background: ${(props): string => props.theme.formBgColor};
  font-family: ${(props): string => props.theme.fontFamily};
  border-radius: 6px;
  box-shadow: ${(props): string => props.theme.formBoxShadow};
`

const FormWrapper: FC<FormProps> = ({
  children,
  onSubmit,
  customTheme,
  id,
  stepsLength,
  stepsTitles,
  hasRedirect,
  redirectUrl,
  timeToRedirect,
  redirectHeaderText,
  logoImg,
  redirectMainImg,
  redirectBgImg,
  sendDataToApi,
  apiUrl,
  transactionName,
  propertyNamesFromUrl,
  dataWithUserAgent,
}) => {
  const trasationIdValue =
    transactionName &&
    new URLSearchParams(window.location.search).get(transactionName)
  const intialValuesFromUrl = useMemo(
    () =>
      (propertyNamesFromUrl &&
        propertyNamesFromUrl.length > 0 &&
        getFieldsValuesFromUrl(propertyNamesFromUrl)) ||
      {},
    [propertyNamesFromUrl]
  )
  const [redirectUrlPath, setRedirectUrlPath] = useState(redirectUrl)
  const [initialValues, setInitialValues] = useState({
    ...intialValuesFromUrl,
    ...getFormValuesFromCache(id),
    // eslint-disable-next-line @typescript-eslint/camelcase
    trasaction_id: trasationIdValue,
  })
  const [currentStep, setCurrentStep] = useState(0)
  const [fieldsForSkip, setFieldsForSkip] = useState<string[]>([])
  const [errorFromApi, setErrorFromApi] = useState<boolean>(false)
  const shouldRedirect = !errorFromApi && hasRedirect
  const addFieldForSkip = (key: string): void =>
    setFieldsForSkip([...fieldsForSkip, key])

  const handleSubmit = async (
    values: FormValuesType,
    props: {
      resetForm: () => void
      setStatus: (status: string) => void
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): Promise<any> => {
    if (onSubmit) {
      onSubmit(values, props)
    }

    try {
      if (sendDataToApi && apiUrl) {
        const response = await handleSendDataToApi(
          values,
          apiUrl,
          id,
          fieldsForSkip,
          dataWithUserAgent
        )
        const {
          redirectUrl: urlFromApi,
          status: statusFromApi,
        } = await response.json()

        if (statusFromApi === false) {
          setErrorFromApi(true)
          return
        }

        urlFromApi && setRedirectUrlPath(urlFromApi)
      }

      props.resetForm()
      props.setStatus(formStatuses.submited)
    } catch (e) {
      props.setStatus(formStatuses.error)
    }
  }
  const handleReset = (): void => {
    resetFormValueCache(id)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setInitialValues({} as any)
  }

  const prevStep: Function = () => setCurrentStep(currentStep - 1)

  const nextStep: Function = () => setCurrentStep(currentStep + 1)

  return (
    <FormContext.Provider
      value={{
        id,
        apiUrl,
        stepsLength,
        currentStep,
        stepsTitleList: stepsTitles,
        nextStep,
        prevStep,
        fieldsForSkip,
        addFieldForSkip,
        errorFromApi,
      }}
    >
      <ThemeProvider customTheme={{ ...customTheme }}>
        <Formik
          enableReinitialize
          initialValues={initialValues}
          onSubmit={handleSubmit}
          onReset={handleReset}
        >
          {(props): ReactElement =>
            (shouldRedirect && props.status === formStatuses.submited && (
              <RedirectPage
                redirectUrl={redirectUrlPath}
                backgroundImage={redirectBgImg}
                logoImg={logoImg}
                headerText={redirectHeaderText}
                timeToRedirect={timeToRedirect}
                mainImg={redirectMainImg}
              />
            )) || (
              <StyledForm id={id}>
                {children}
              </StyledForm>
            )
          }
        </Formik>
      </ThemeProvider>
    </FormContext.Provider>
  )
}

export default FormWrapper
