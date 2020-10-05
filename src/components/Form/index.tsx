import React, { FC, ReactElement, useState } from 'react'
import { Formik, Form } from 'formik'
import styled from 'styled-components'

import { ThemeProvider } from '../../consts/theme'
import { device } from '../../consts/sizes'
import { FormProps, FormValuesType } from '../../types'
import RedirectPage from '../RedirectPage'
import TransactionId from '../TransactionId'
import {
  FormContext,
  getFormValuesFromCache,
  resetFormValueCache,
  sendDataToAwsSQS,
} from '../../utils'
import { formStatuses } from '../../consts/form'

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  justify-self: center;
  margin: 0 10px;
  background: ${(props): string => props.theme.formBgColor};
  font-family: 'Manrope', BlinkMacSystemFont, -apple-system, 'Segoe UI',
    'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
    'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  padding: 20px 15px;
  border-radius: 6px;
  box-shadow: 0px 20px 60px rgba(0, 0, 0, 0.08);

  @media ${device.tablet} {
    padding: 20px 30px;
    margin: 0 auto;
  }
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
  queueUrl,
  sendDataToSQS,
  transactionName,
}) => {
  const trasationIdValue =
    transactionName &&
    new URLSearchParams(window.location.search).get(transactionName)
  console.log(trasationIdValue)
  const [initialValues, setInitialValues] = useState({
    ...getFormValuesFromCache(id),
    // eslint-disable-next-line @typescript-eslint/camelcase
    trasaction_id: trasationIdValue,
  })
  const [currentStep, setCurrentStep] = useState(0)

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
      if (sendDataToSQS) {
        await sendDataToAwsSQS(values, queueUrl)
      }

      props.resetForm()
      props.setStatus(formStatuses.submited)
    } catch (e) {
      console.log(e)
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
        stepsLength,
        currentStep,
        stepsTitleList: stepsTitles,
        nextStep,
        prevStep,
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
            (hasRedirect && props.status === formStatuses.submited && (
              <RedirectPage
                redirectUrl={redirectUrl}
                backgroundImage={redirectBgImg}
                logoImg={logoImg}
                headerText={redirectHeaderText}
                timeToRedirect={timeToRedirect}
                mainImg={redirectMainImg}
              />
            )) || (
              <StyledForm id={id}>
                <TransactionId />
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
