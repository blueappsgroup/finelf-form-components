import {
  isEmpty,
  isNotValidLength,
  isNotValidPhoneNumber,
  isNotValidEmail,
  isNotValidNumberBetween1And10Digits,
  isNotLetter,
  isNotNumber,
  isValidPesel,
  haveSpecialChars,
  isNotValidZipCode,
  isValidNIP,
  isValidBankAccountNumber,
  isValidIDCard,
  isNotValidIDCard,
  isNotValidOption,
  isAdult,
} from './validateHelpers'

export const validateText: (
  required: boolean
) => (value: string) => string | undefined = (required: boolean) => (
  value: string
): string | undefined => {
  const trimedValue = value && value.trim()
  if (!required && !value) {
    return
  }

  if (required && isEmpty(trimedValue)) {
    return 'To pole jest wymagane'
  }

  if (isNotValidLength(trimedValue)) {
    return 'Pole musi zawierać między 2 - 100 znaków'
  }

  if (isNotLetter(trimedValue)) {
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
  const trimedValue = value && value.trim()
  if (!required && !value) {
    return
  }

  if (required && isEmpty(trimedValue)) {
    return 'To pole jest wymagane'
  }

  if (isNotValidEmail(trimedValue)) {
    return customErrorMsg
  }
}

export const validateTelNumber: (
  required: boolean,
  customErrorMsg: string | undefined
) => (value: string) => string | undefined = (
  required: boolean,
  customErrorMsg
) => (value: string): string | undefined => {
  const trimedValue = value && value.trim()
  if (!required && !value) {
    return
  }

  if (required && isEmpty(trimedValue)) {
    return 'To pole jest wymagane'
  }

  if (isNotValidPhoneNumber(trimedValue)) {
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
  const trimedValue = value && value.trim()
  if (!required && !value) {
    return
  }

  if (required && isEmpty(trimedValue)) {
    return 'To pole jest wymagane'
  }

  if (isNotNumber(trimedValue)) {
    return 'Podany PESEL jest nieprawidłowy'
  }

  if (!isValidPesel(trimedValue)) {
    return 'Podany PESEL jest nieprawidłowy'
  }
}

export const validateHouseNumber: (
  required: boolean
) => (value: string) => string | undefined = (required: boolean) => (
  value: string
): string | undefined => {
  const trimedValue = value && value.trim()
  if (!required && !value) {
    return
  }

  if (required && isEmpty(trimedValue)) {
    return 'To pole jest wymagane'
  }

  if (isNotValidLength(trimedValue, 1, 10)) {
    return 'Podany numer mieszkania jest nieprawidłowy'
  }
}

export const validateCityName: (
  required: boolean
) => (value: string) => string | undefined = (required: boolean) => (
  value: string
): string | undefined => {
  const trimedValue = value && value.trim()
  if (!required && !value) {
    return
  }

  if (required && isEmpty(trimedValue)) {
    return 'To pole jest wymagane'
  }

  if (isNotValidLength(trimedValue)) {
    return 'Pole musi zawierać między 2 - 100 znaków'
  }

  if (haveSpecialChars(trimedValue)) {
    return 'Podane dane są nieprawidłowe'
  }
}

export const validateZipCode: (
  required: boolean
) => (value: string) => string | undefined = (required: boolean) => (
  value: string
): string | undefined => {
  const trimedValue = value && value.trim()
  if (!required && !value) {
    return
  }

  if (required && isEmpty(trimedValue)) {
    return 'To pole jest wymagane'
  }

  if (isNotValidLength(trimedValue, 1, 10)) {
    return 'Pole musi zawierać między 1 - 10 znaków'
  }

  if (isNotValidZipCode(trimedValue)) {
    return 'Podane dane są nieprawidłowe'
  }
}

export const validateCompanyTax: (
  required: boolean
) => (value: string) => string | undefined = (required: boolean) => (
  value: string
): string | undefined => {
  if (!required && !value) {
    return
  }

  if (required && isEmpty(value)) {
    return 'To pole jest wymagane'
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
  const trimedValue = value && value.trim()
  if (!required && !value) {
    return
  }

  if (required && isEmpty(trimedValue)) {
    return 'To pole jest wymagane'
  }

  if (isNotNumber(trimedValue)) {
    return 'Podany numer konta jest nieprawidłowy'
  }

  if (isNotValidLength(trimedValue, 26, 26)) {
    return 'Podany numer konta jest nieprawidłowy'
  }
  if (!isValidBankAccountNumber(trimedValue)) {
    return 'Podany numer konta jest nieprawidłowy'
  }
}

export const validateIDCardNumber: (
  required: boolean
) => (value: string) => string | undefined = (required: boolean) => (
  value: string
): string | undefined => {
  const trimedValue = value && value.trim()
  if (!required && !value) {
    return
  }

  if (required && isEmpty(trimedValue)) {
    return 'To pole jest wymagane'
  }

  if (isNotValidIDCard(trimedValue)) {
    return 'Podany numer dowodu jest nieprawidłowy'
  }

  if (!isValidIDCard(trimedValue)) {
    return 'Podany numer dowodu jest nieprawidłowy'
  }

  if (isNotNumber(trimedValue)) {
    return 'Podany numer dowodu jest nieprawidłowy'
  }
}

export const validateOtherLoanAmount: (
  customErrorMsg: string | undefined,
  required: boolean
) => (value: string) => string | undefined = (
  customErrorMsg = 'Podana kwota jest nieprawidłowa',
  required: boolean
) => (value: string): string | undefined => {
  const trimedValue = value && value.trim()
  if (!required && !value) {
    return
  }

  if (required && isEmpty(trimedValue)) {
    return 'To pole jest wymagane'
  }

  if (isNotValidNumberBetween1And10Digits(trimedValue)) {
    return customErrorMsg
  }
}

export const validateAmountOfChildren: (
  customErrorMsg: string | undefined,
  required: boolean
) => (value: string) => string | undefined = (
  customErrorMsg = 'Podana liczba jest nieprawidłowa',
  required: boolean
) => (value: string): string | undefined => {
  const trimedValue = value && value.trim()
  if (!required && !value) {
    return
  }

  if (required && isEmpty(trimedValue)) {
    return 'To pole jest wymagane'
  }

  if (isNotValidNumberBetween1And10Digits(trimedValue)) {
    return customErrorMsg
  }
}

export const validateIncome: (
  customErrorMsg: string | undefined,
  required: boolean
) => (value: string) => string | undefined = (
  customErrorMsg = 'Podana kwota jest nieprawidłowa',
  required: boolean
) => (value: string): string | undefined => {
  const trimedValue = value && value.trim()
  if (!required && !value) {
    return
  }

  if (required && isEmpty(trimedValue)) {
    return 'To pole jest wymagane'
  }

  if (isNotValidNumberBetween1And10Digits(trimedValue)) {
    return customErrorMsg
  }
}

export const validateSelect: (
  required: boolean,
  options: object
) => (value: string) => string | undefined = (
  required: boolean,
  options: object
) => (value: string): string | undefined => {
  if (!required && !value) {
    return
  }

  if (required && isEmpty(value)) {
    return 'To pole jest wymagane'
  }

  if (isNotValidOption(value, options)) {
    return 'Podane dane są nieprawidłowe'
  }
}

export const validateDate: (
  required: boolean
) => (value: string) => string | undefined = (required: boolean) => (
  value: string
): string | undefined => {
  if (!required && !value) {
    return
  }

  if (required && isEmpty(value)) {
    return 'To pole jest wymagane'
  }
}

export const validateBirthDate: (
  required: boolean
) => (value: string) => string | undefined = (required: boolean) => (
  value: string
): string | undefined => {
  if (!required && !value) {
    return
  }

  if (required && isEmpty(value)) {
    return 'To pole jest wymagane'
  }

  if (!isAdult(value)) {
    return 'Musisz mieć skończone 18 lat'
  }
}
