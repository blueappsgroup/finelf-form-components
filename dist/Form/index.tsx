import React, { ReactNode, FC } from 'react'
import { Formik, Form } from 'formik'
import styled, { ThemeProvider } from 'styled-components'
import { device } from '../../consts/sizes'
import { theme } from '../../consts/theme'
import { CustomThemeType } from '../FormInput/types'

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

type Props = {
  onSubmit: (values: any, props: any) => void
  children: ReactNode
  customTheme?: CustomThemeType
}

const FormWrapper: FC<Props> = ({ children, onSubmit, customTheme }) => (
  <ThemeProvider theme={{ ...theme, ...customTheme }}>
    <Formik initialValues={{}} onSubmit={onSubmit}>
      <StyledForm>{children}</StyledForm>
    </Formik>
  </ThemeProvider>
)

export default FormWrapper
