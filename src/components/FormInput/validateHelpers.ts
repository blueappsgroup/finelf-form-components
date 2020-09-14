export const isRequired = (value: string, required: boolean): boolean =>
  !value && required

export const isBetweenNumberOfCharacters = (
  value: string,
  from = 2,
  to = 100
): boolean => value.length < from || value.length > to

export const isValidPhoneNumber = (value: string): boolean =>
  !/^(45|50|51|53|57|60|66|69|72|73|78|79|88)[0-9]{7}$/.test(value)

export const isValidEmail = (value: string): boolean =>
  !/[a-zA-Z0-9_.+-]+@[a-zAZ0-9-]+\.[a-zA-Z0-9-.]+$/.test(value)
