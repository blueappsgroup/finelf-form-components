export const isEmpty = (value: string): boolean => !value

export const isNotValidLength = (value: string, from = 2, to = 100): boolean =>
  value.length < from || value.length > to

export const isNotValidPhoneNumber = (value: string): boolean =>
  !/^(45|50|51|53|57|60|66|69|72|73|78|79|88)[0-9]{7}$/.test(value)

export const isNotValidEmail = (value: string): boolean =>
  !/[a-zA-Z0-9_.+-]+@[a-zAZ0-9-]+\.[a-zA-Z0-9-.]+$/.test(value)

export const isNotLetter = (value: string): boolean => !/[A-Za-z]$/.test(value)

export const isNotNumber = (value: string): boolean => !/[0-9]$/.test(value)

export const haveSpecialChars = (value: string): boolean =>
  !/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ0-9 -]*$$/.test(value)

export const isValidPesel = (value: string): boolean => {
  if (value.length === 11) {
    const weights = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3]
    const controlNumber = parseInt(value.substring(10, 11))
    let sum = 0
    let control = 10

    weights.filter(
      (weight, index) =>
        (sum += parseInt(value.substring(index, index + 1)) * weight)
    )
    sum = sum % 10

    if (sum === 0) {
      control = 0
    }

    return control - sum === controlNumber
  }

  return false
}
