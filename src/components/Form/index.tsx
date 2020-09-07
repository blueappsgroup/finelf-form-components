import React, { FC, useState } from 'react'
import { Formik, Form } from 'formik'
import styled, { ThemeProvider } from 'styled-components'
import { device } from '../../consts/sizes'
import { theme } from '../../consts/theme'
import { FormProps, FormValuesType } from '../../types'
import {
  FormContext,
  getFormValuesFromCache,
  resetFormValueCache,
} from '../../utils'

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
}) => {
  const [initialValues, setInitialValues] = useState(getFormValuesFromCache(id))
  const handleSubmit = (
    values: FormValuesType,
    props: {
      resetForm: () => void
      setStatus: (status: string) => void
    }
  ): void => {
    if (onSubmit) {
      onSubmit(values, props)
    }
    props.resetForm()
    props.setStatus('submited')
  }
  const handleReset = (): void => {
    resetFormValueCache(id)
    setInitialValues({})
  }

  return (
    <FormContext.Provider value={{ id }}>
      <ThemeProvider theme={{ ...theme, ...customTheme }}>
        <Formik
          enableReinitialize
          initialValues={initialValues}
          onSubmit={handleSubmit}
          onReset={handleReset}
        >
          <StyledForm id={id}>{children}</StyledForm>
        </Formik>
      </ThemeProvider>
    </FormContext.Provider>
  )
}

export default FormWrapper
