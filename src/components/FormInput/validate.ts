import {
  isEmpty,
  isNotValidLength,
  isNotValidPhoneNumber,
  isNotValidEmail,
  isNotLetter,
  isNotNumber,
  isValidPesel,
  haveSpecialChars,
  isNotValidZipCode,
  isValidNIP,
  isValidBankAccountNumber,
  isValidIDCard,
  isNotValidIDCard,
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

export const validateCityName: (
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

  if (haveSpecialChars(value)) {
    return 'Podane dane są nieprawidłowe'
  }
}

export const validateZipCode: (
  required: boolean
) => (value: string) => string | undefined = (required: boolean) => (
  value: string
): string | undefined => {
  if (required && isEmpty(value)) {
    return 'To pole jest wymagane'
  }

  if (isNotValidLength(value, 1, 10)) {
    return 'Pole musi zawierać między 1 - 10 znaków'
  }

  if (isNotValidZipCode(value)) {
    return 'Podane dane są nieprawidłowe'
  }
}

export const validateCompanyTax: (
  required: boolean
) => (value: string) => string | undefined = (required: boolean) => (
  value: string
): string | undefined => {
  if (required && isEmpty(value)) {
    return 'To pole jest wymagane'
  }

  if (isNotNumber(value)) {
    return 'Podany NIP jest nieprawidłowy'
  }

  if (isNotValidLength(value, 10, 10)) {
    return 'Podany NIP jest nieprawidłowy'
  }
  if (!isValidNIP(value)) {
    return 'Podany NIP jest nieprawidłowy'
  }
}

export const validateBankAccountNumber: (
  required: boolean
) => (value: string) => string | undefined = (required: boolean) => (
  value: string
): string | undefined => {
  if (required && isEmpty(value)) {
    return 'To pole jest wymagane'
  }

  if (isNotNumber(value)) {
    return 'Podany numer konta jest nieprawidłowy'
  }

  if (isNotValidLength(value, 26, 26)) {
    return 'Podany numer konta jest nieprawidłowy'
  }
  if (!isValidBankAccountNumber(value)) {
    return 'Podany numer konta jest nieprawidłowy'
  }
}

export const validateIDCardNumber: (
  required: boolean
) => (value: string) => string | undefined = (required: boolean) => (
  value: string
): string | undefined => {
  if (required && isEmpty(value)) {
    return 'To pole jest wymagane'
  }

  if (isNotValidIDCard(value)) {
    return 'Podany numer dowodu jest nieprawidłowy'
  }

  if (!isValidIDCard(value)) {
    return 'Podany numer dowodu jest nieprawidłowy'
  }

  if (isNotNumber(value)) {
    return 'Podany numer dowodu jest nieprawidłowy'
  }
}
