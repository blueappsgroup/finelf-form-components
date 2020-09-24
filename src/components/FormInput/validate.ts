import {
  isEmpty,
  isNotValidLength,
  isNotValidPhoneNumber,
  isNotValidEmail,
  isNotValidOtherLoanAmount,
  isNotValidAmountOfChildren,
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
  customErrorMsg = 'Niepoprawny adres email',
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
  customErrorMsg = 'Niepoprawny numer telefonu',
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

export const validateOtherLoanAmount: (
  customErrorMsg: string | undefined,
  required: boolean
) => (value: string) => string | undefined = (
  customErrorMsg = 'Podana kwota jest nieprawidłowa',
  required: boolean
) => (value: string): string | undefined => {
  if (required && isEmpty(value)) {
    return 'To pole jest wymagane'
  }

  if (isNotValidOtherLoanAmount(value)) {
    return customErrorMsg
  }
}

export const validateAmountOfChildren: (
  customErrorMsg: string | undefined,
  required: boolean
) => (value: string) => string | undefined = (
  customErrorMsg = 'Podana ilość jest nieprawidłowa',
  required: boolean
) => (value: string): string | undefined => {
  if (required && isEmpty(value)) {
    return 'To pole jest wymagane'
  }

  if (isNotValidAmountOfChildren(value)) {
    return customErrorMsg
  }
}
