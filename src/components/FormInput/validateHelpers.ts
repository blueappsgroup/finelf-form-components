export const isEmpty = (value: string): boolean => !value

export const isNotValidLength = (value: string, from = 2, to = 100): boolean =>
  value.length < from || value.length > to

export const isNotValidPhoneNumber = (value: string): boolean =>
  !/^(45|50|51|53|57|60|66|69|72|73|78|79|88)[0-9]{7}$/.test(value)

export const isNotValidEmail = (value: string): boolean =>
  !/[a-zA-Z0-9_.+-]+@[a-zAZ0-9-]+\.[a-zA-Z0-9-.]+$/.test(value)

export const isNotValidOtherLoanAmount = (value: string): boolean =>
  !/^[0-9]{1,10}$/.test(value)
