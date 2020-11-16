import {
  isAdult,
  isEmpty,
  isNotLetter,
  isNotNumber,
  isNotValidEmail,
  isNotValidIDCard,
  isNotValidLength,
  isNotValidNumberBetween1And10Digits,
  isNotValidOption,
  isNotValidPhoneNumber,
  isNotValidZipCode,
  isValidBankAccountNumber,
  isValidIDCard,
  isValidNIP,
  isValidPesel,
} from '../validateHelpers'

describe('validateHelpers', () => {
  it('isEmpty true', () => {
    const value = ''
    expect(isEmpty(value)).toBeTruthy()
  })

  it('isEmpty false', () => {
    const value = 'aaa'
    expect(isEmpty(value)).toBeFalsy()
  })

  it('isNotValidLength true', () => {
    const value = ''
    expect(isNotValidLength(value)).toBeTruthy()
  })

  it('isNotValidLength false', () => {
    const value = 'test'
    expect(isNotValidLength(value)).toBeFalsy()
  })

  it('isNotValidPhoneNumber true', () => {
    const value = '771222333'
    expect(isNotValidPhoneNumber(value)).toBeTruthy()
  })

  it('isNotValidPhoneNumber false', () => {
    const value = '881222444'
    expect(isNotValidPhoneNumber(value)).toBeFalsy()
  })

  it('isNotValidEmail true', () => {
    const value = 'test'
    expect(isNotValidEmail(value)).toBeTruthy()
  })

  it('isNotValidEmail false', () => {
    const value = 'test@test.pl'
    expect(isNotValidEmail(value)).toBeFalsy()
  })

  it('isNotValidNumberBetween1And10Digits true', () => {
    const value = 'test'
    expect(isNotValidNumberBetween1And10Digits(value)).toBeTruthy()
  })

  it('isNotValidNumberBetween1And10Digits false', () => {
    const value = '123'
    expect(isNotValidNumberBetween1And10Digits(value)).toBeFalsy()
  })

  it('isNotLetter true', () => {
    const value = '1'
    expect(isNotLetter(value)).toBeTruthy()
  })

  it('isNotLetter false', () => {
    const value = 'a'
    expect(isNotLetter(value)).toBeFalsy()
  })

  it('isNotNumber true', () => {
    const value = 'test'
    expect(isNotNumber(value)).toBeTruthy()
  })

  it('isNotNumber false', () => {
    const value = '123'
    expect(isNotNumber(value)).toBeFalsy()
  })

  it('isValidPesel true', () => {
    const value = '00000000000'
    expect(isValidPesel(value)).toBeTruthy()
  })

  it('isValidPesel false', () => {
    const value = '07110693935'
    expect(isValidPesel(value)).toBeFalsy()
  })

  it('isNotValidZipCode true', () => {
    const value = 'test'
    expect(isNotValidZipCode(value)).toBeTruthy()
  })

  it('isNotValidZipCode false', () => {
    const value = '12-345'
    expect(isNotValidZipCode(value)).toBeFalsy()
  })

  it('isValidNIP true', () => {
    const value = '7965820704'
    expect(isValidNIP(value)).toBeTruthy()
  })

  it('isValidNIP false', () => {
    const value = '12345'
    expect(isValidNIP(value)).toBeFalsy()
  })

  it('isValidBankAccountNumber true', () => {
    const value = '34109000332804643426782471'
    expect(isValidBankAccountNumber(value)).toBeTruthy()
  })

  it('isValidBankAccountNumber false', () => {
    const value = '12345'
    expect(isValidBankAccountNumber(value)).toBeFalsy()
  })

  it('isValidIDCard true', () => {
    const value = 'SAS726535'
    expect(isValidIDCard(value)).toBeTruthy()
  })

  it('isValidIDCard false', () => {
    const value = 'SAS7A6535'
    const valueLessThan9Chars = 'SAS72653'
    const valueIncorrectCharacter = '1AS7A6535'
    expect(isValidIDCard(value)).toBeFalsy()
    expect(isValidIDCard(valueLessThan9Chars)).toBeFalsy()
    expect(isValidIDCard(valueIncorrectCharacter)).toBeFalsy()
  })

  it('isNotValidIDCard true', () => {
    const value = 'ABC'
    expect(isNotValidIDCard(value)).toBeTruthy()
  })

  it('isNotValidIDCard false', () => {
    const value = 'SAS726535'
    expect(isNotValidIDCard(value)).toBeFalsy()
  })

  it('isNotValidOption true', () => {
    const value = 'abc'
    const options = {
      a: 'test',
      b: 'test',
    }
    expect(isNotValidOption(value, options)).toBeTruthy()
  })

  it('isNotValidOption false', () => {
    const value = 'abc'
    const options = {
      abc: 'test',
    }
    expect(isNotValidOption(value, options)).toBeFalsy()
  })

  it('isAdult true', () => {
    const value = '1990-12-31'
    expect(isAdult(value)).toBeTruthy()
  })

  it('isAdult false', () => {
    const value = new Date().toDateString()
    expect(isAdult(value)).toBeFalsy()
  })
})
