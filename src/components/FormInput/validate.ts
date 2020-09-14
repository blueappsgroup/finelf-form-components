import {
  isBetweenNumberOfCharacters,
  isRequired,
  isValidEmail,
  isValidPhoneNumber,
} from './validateHelpers'

export const validateText: (
  required: boolean
) => (value: string) => string | undefined = (required: boolean) => (
  value: string
): string | undefined => {
  if (isRequired(value, required)) {
    return 'To pole jest wymagane'
  }

  if (isBetweenNumberOfCharacters(value)) {
    return 'Pole musi zawierać między 2 - 100 znaków'
  }
}

export const validateEmail: (
  customErrorMsg: string | undefined,
  required: boolean
) => (value: string) => string | undefined = (
  customErrorMsg = 'Podany email jest nieprawidłowy',
  required: boolean
) => (value: string): string | undefined => {
  if (isRequired(value, required)) {
    return 'To pole jest wymagane'
  }

  if (isValidEmail(value)) {
    return customErrorMsg
  }
}

export const validateTelNumber: (
  customErrorMsg: string | undefined,
  required: boolean
) => (value: string) => string | undefined = (
  customErrorMsg = 'Podany numer telefonu jest nieprawidłowy',
  required: boolean
) => (value: string): string | undefined => {
  if (isRequired(value, required)) {
    return 'To pole jest wymagane'
  }

  if (isValidPhoneNumber(value)) {
    return customErrorMsg
  }
}

export const validateCheckbox: (
  required: boolean
) => (value: string) => string | undefined = (required: boolean) => (
  value: string
): string | undefined => (required && !value && 'required') || undefined
