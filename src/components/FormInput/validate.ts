export const validateEmail: (
  customErrorMsg: string | undefined,
  required: boolean
) => (value: string) => string | undefined = (
  customErrorMsg = 'Nie poprawny adres email',
  required: boolean
) => (value: string): string | undefined => {
  let error
  if (!value && required) {
    error = 'Pole wymagane'
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) &&
    value
  ) {
    error = customErrorMsg
  }

  return error
}

export const validateTelNumber: (
  customErrorMsg: string | undefined,
  required: boolean
) => (value: string) => string | undefined = (
  customErrorMsg = 'Nie poprawny numer telefonu',
  required: boolean
) => (value: string): string | undefined => {
  let error
  if (!value && required) {
    error = 'Pole wymagane'
  } else if (
    !/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/i.test(
      value
    ) &&
    value
  ) {
    error = customErrorMsg
  }

  return error
}

export const validateCheckbox: (
  required: boolean
) => (value: string) => string | undefined = (required: boolean) => (
  value: string
): string | undefined => (required && !value && 'required') || undefined
