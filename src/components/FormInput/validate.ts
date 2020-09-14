export const validateText: (
  required: boolean
) => (value: string) => string | undefined = (required: boolean) => (
  value: string
): string | undefined => {
  let error
  if (!value && required) {
    error = 'To pole jest wymagane'
  }

  return error
}

export const validateEmail: (
  customErrorMsg: string | undefined,
  required: boolean
) => (value: string) => string | undefined = (
  customErrorMsg = 'Podany email jest nieprawidłowy',
  required: boolean
) => (value: string): string | undefined => {
  if (!value && required) {
    return 'To pole jest wymagane'
  }

  if (!/[a-zA-Z0-9_.+-]+@[a-zAZ0-9-]+\.[a-zA-Z0-9-.]+$/.test(value) && value) {
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
  if (!value && required) {
    return 'To pole jest wymagane'
  }

  if (
    !/^(45|50|51|53|57|60|66|69|72|73|78|79|88)[0-9]{7}$/.test(value) &&
    value
  ) {
    return customErrorMsg
  }
}

export const validateCheckbox: (
  required: boolean
) => (value: string) => string | undefined = (required: boolean) => (
  value: string
): string | undefined => (required && !value && 'required') || undefined
