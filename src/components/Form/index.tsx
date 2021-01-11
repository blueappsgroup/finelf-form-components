import React, { FC, useMemo, useState } from 'react'
import { Formik, Form } from 'formik'
import styled from 'styled-components'

import { ThemeProvider } from '../../consts/theme'
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

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  max-width: ${(props): string => props.theme.formMaxWidth};
  justify-self: center;
  background: ${(props): string => props.theme.formBgColor};
  font-family: ${(props): string => props.theme.fontFamily};
  border-radius: 6px;
  box-shadow: ${(props): string => props.theme.formBoxShadow};
`

const FormWrapper2: FC<FormProps> = ({
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
  const [formStatus, setFormStatus] = useState<string>()
  const shouldRedirect = !errorFromApi && hasRedirect
  const showForm = formStatus !== formStatuses.submited || !shouldRedirect
  const addFieldForSkip = (key: string): void =>
    setFieldsForSkip([...fieldsForSkip, key])

  const handleReset = (): void => {
    resetFormValueCache(id)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setInitialValues({
      ...intialValuesFromUrl,
      // eslint-disable-next-line @typescript-eslint/camelcase
      trasaction_id: trasationIdValue,
    })
  }
  const handleSubmit = async (
    _: FormValuesType,
    props: {
      resetForm: () => void
      setStatus: (status: string) => void
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): Promise<any> => {
    const valuesForSubmit = { ...initialValues, ...getFormValuesFromCache(id) }
    if (onSubmit) {
      onSubmit(valuesForSubmit, props)
    }

    try {
      if (sendDataToApi && apiUrl) {
        const response = await handleSendDataToApi(
          valuesForSubmit,
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

      handleReset()

      setFormStatus(formStatuses.submited)
    } catch (e) {
      setFormStatus(formStatuses.error)
    }
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
        initialValues,
        setInitialValues,
        handleSubmit,
        formStatus,
        setFormStatus,
      }}
    >
      <ThemeProvider customTheme={{ ...customTheme }}>
        {shouldRedirect && formStatus === formStatuses.submited && (
          <RedirectPage
            redirectUrl={redirectUrlPath}
            backgroundImage={redirectBgImg}
            logoImg={logoImg}
            headerText={redirectHeaderText}
            timeToRedirect={timeToRedirect}
            mainImg={redirectMainImg}
          />
        )}
        {!stepsLength && showForm && (
          <Formik
            validateOnMount
            enableReinitialize
            initialValues={initialValues}
            onSubmit={handleSubmit}
          >
            <StyledForm id={id}>{children}</StyledForm>
          </Formik>
        )}
        {stepsLength && showForm && children}
      </ThemeProvider>
    </FormContext.Provider>
  )
}

export default FormWrapper2
