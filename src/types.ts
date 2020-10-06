import { ReactElement, ReactNode } from 'react'
import { FieldProps } from 'formik'

export type FormValuesType = { [key: string]: string | boolean | undefined }

export type CheckboxFieldProps = {
  id?: string
  label?: string
  name: string
  required?: boolean
  onChange?: Function
  children?: ReactElement | ReactElement[]
}

export type FieldWrapProps = FieldProps & {
  label?: string
  showError?: boolean
  onChange?: Function
  placeholder?: string
  required?: boolean
  children?: ReactElement | ReactElement[]
  childrenBody?: ReactElement | ReactElement[]
  type?: string
  suffix?: string
}

export type SelectFieldOptions = {
  [key: string]: string
}

export type SelectFieldWrapProps = FieldProps & {
  label?: string
  showError?: boolean
  onChange?: Function
  placeholder?: string
  required?: boolean
  options: SelectFieldOptions
}

export type RangeFieldWrapProps = FieldProps & {
  label?: string
  showError?: boolean
  onChange?: Function
  placeholder?: string
  required?: boolean
  type?: string
  min?: number
  max?: number
  step?: number
  value?: number
  suffix?: string
  unit?: string
}

export type SelectFieldProps = {
  id?: string
  label?: string
  name?: string
  errorMsg?: string
  required?: boolean
  validate?: Function
  showError?: boolean
}

export type TextFieldProps = {
  id?: string
  label?: string
  placeholder?: string
  name: string
  required?: boolean
  validate?: Function
  showError?: boolean
}

export type RangeFieldProps = {
  id?: string
  label?: string
  name?: string
  errorMsg?: string
  required?: boolean
  showError?: boolean
}

export type EmailFieldProps = {
  id?: string
  label?: string
  placeholder?: string
  name?: string
  errorMsg?: string
  required?: boolean
  showError?: boolean
}

export type AmountOfChildrenFieldProps = {
  id?: string
  label?: string
  placeholder?: string
  name?: string
  errorMsg?: string
  required?: boolean
  showError?: boolean
}

export type IncomeFieldProps = {
  id?: string
  label?: string
  placeholder?: string
  name?: string
  errorMsg?: string
  required?: boolean
  showError?: boolean
}

export type BirthDateFieldProps = {
  id?: string
  label?: string
  placeholder?: string
  name?: string
  errorMsg?: string
  required?: boolean
  showError?: boolean
}

export type TelephoneFieldProps = {
  id?: string
  label?: string
  placeholder?: string
  name?: string
  errorMsg?: string
  required?: boolean
  showError?: boolean
  validate?: Function
}

export type OtherLoanAmountFieldProps = {
  id?: string
  label?: string
  placeholder?: string
  name?: string
  errorMsg?: string
  required?: boolean
  showError?: boolean
  validate?: Function
}

export type CustomThemeType = {
  formBgColor?: string
  inputTextColor?: string
  inputPlaceHolderColor?: string
  inputErrorColor?: string
  inputBorderColor?: string
  inputBgColor?: string
  checkboxLabelArrowColor?: string
  checkboxBgColor?: string
  checkboxBorderColor?: string
  checkboxBorderErrorColor?: string
  checkboxLabelTextColor?: string
  checkboxMarkColor?: string
  headerTextColor?: string
  headerBorderColor?: string
  subheaderBorderColor?: string
  buttonTextColor?: string
  buttonBgColor?: string
  buttonBorderColor?: string
  stepHeaderActiveColor?: string
  stepHeaderInActiveColor?: string
  buttonSecondaryTextColor?: string
  buttonSecondaryBgColor?: string
  buttonSecondaryBorderColor?: string
  redirectPageHeaderTextColor?: string
  redirectPageRedirectTextColor?: string
  redirectPageCounterTextColor?: string
  successStatusTextColor?: string
  errorStatusTextColor?: string
}

export type HeaderProps = {
  text: string
  type?: 'main' | 'subheader'
  withBorder?: boolean
}

export type ButtonProps = {
  text: string
  variant?: 'primary' | 'secondary'
  type?: 'submit' | 'button'
  size?: 'large | medium | small'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: any
  disabled?: boolean
}

export type FormProps = {
  onSubmit: (
    values: FormValuesType,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    props?: any
  ) => void
  children: ReactNode
  customTheme?: CustomThemeType
  id: string
  stepsLength?: number
  stepsTitles?: string[]
  hasRedirect?: boolean
  redirectUrl?: string
  timeToRedirect?: number
  redirectHeaderText?: string
  logoImg?: string
  redirectMainImg?: string
  redirectBgImg?: string
  queueUrl?: string
  sendDataToSQS?: boolean
}

export type RedirectPagePropsTypes = {
  headerText?: string
  backgroundImage?: string
  mainImg?: string
  logoImg?: string
  timeToRedirect?: number
  redirectUrl?: string
}
