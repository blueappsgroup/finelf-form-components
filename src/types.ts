import { ReactNode } from 'react'
import { FieldProps } from 'formik'

export type FormValuesType = { [key: string]: string | boolean | undefined }

export type CheckboxFieldProps = {
  id?: string
  label?: string
  name: string
  required?: boolean
  onChange?: Function
}

export type FieldWrapProps = FieldProps & {
  label?: string
  showError?: boolean
  onChange?: Function
  placeholder?: string
  required?: boolean
}

export type SelectFieldWrapProps = FieldProps & {
  label?: string
  showError?: boolean
  onChange?: Function
  placeholder?: string
  required?: boolean
  options: []
}

export type SelectFieldProps = {
  id?: string
  label?: string
  placeholder?: string
  name?: string
  errorMsg?: string
  required?: boolean
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

export type EmailFieldProps = {
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
  submitButtonTextColor?: string
  submitButtonBgColor?: string
}

export type HeaderProps = {
  text: string
  type?: 'main' | 'subheader'
}

export type ButtonProps = {
  text: string
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
}
