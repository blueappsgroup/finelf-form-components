import {
  isEmpty,
  isNotValidLength,
  isNotValidPhoneNumber,
  isNotValidEmail,
  isNotLetter,
  isNotNumber,
  isValidPesel,
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

  if (isNotLetter(value)) {
    return 'Podane dane są nieprawidłowe'
  }
}

export const validateEmail: (
  customErrorMsg: string | undefined,
  required: boolean
) => (value: string) => string | undefined = (
  customErrorMsg = 'Podany email jest nieprawidłowy',
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
  customErrorMsg = 'Podany numer telefonu jest nieprawidłowy',
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

export const validatePesel: (
  required: boolean
) => (value: string) => string | undefined = (required: boolean) => (
  value: string
): string | undefined => {
  if (required && isEmpty(value)) {
    return 'To pole jest wymagane'
  }

  if (isNotNumber(value)) {
    return 'Podany PESEL jest nieprawidłowy'
  }

  if (!isValidPesel(value)) {
    return 'Podany PESEL jest nieprawidłowy'
  }
}

export const validateHouseNumber: (
  required: boolean
) => (value: string) => string | undefined = (required: boolean) => (
  value: string
): string | undefined => {
  if (required && isEmpty(value)) {
    return 'To pole jest wymagane'
  }

  if (isNotValidLength(value, 1, 10)) {
    return 'Podany numer mieszkania jest nieprawidłowy'
  }
}
