import {
  isEmpty,
  isNotValidLength,
  isNotValidPhoneNumber,
  isNotValidEmail,
} from './validateHelpers'

export const validateText: (
  required: boolean
) => (value: string) => string | undefined = (required: boolean) => (
  value: string
): string | undefined => {
  if (required && isEmpty(value)) {
    return 'To pole jest wymagane'
  }

  if (isNotValidLength(value)) {
    return 'Pole musi zawierać między 2 - 100 znaków'
  }
}

export const validateEmail: (
  customErrorMsg: string | undefined,
  required: boolean
) => (value: string) => string | undefined = (
  customErrorMsg = 'Nie poprawny adres email',
  required: boolean
) => (value: string): string | undefined => {
  if (required && isEmpty(value)) {
    return 'To pole jest wymagane'
  }

  if (isNotValidEmail(value)) {
    return customErrorMsg
  }
}

export const validateTelNumber: (
  customErrorMsg: string | undefined,
  required: boolean
) => (value: string) => string | undefined = (
  customErrorMsg = 'Nie poprawny numer telefonu',
  required: boolean
) => (value: string): string | undefined => {
  if (required && isEmpty(value)) {
    return 'To pole jest wymagane'
  }

  if (isNotValidPhoneNumber(value)) {
    return customErrorMsg
  }
}

export const validateCheckbox: (
  required: boolean
) => (value: string) => string | undefined = (required: boolean) => (
  value: string
): string | undefined => (required && !value && 'required') || undefined
