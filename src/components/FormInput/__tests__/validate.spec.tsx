import {
  validateAmountOfChildren,
  validateBankAccountNumber,
  validateBirthDate,
  validateCheckbox,
  validateCityName,
  validateCompanyTax,
  validateDate,
  validateEmail,
  validateHouseNumber,
  validateIDCardNumber,
  validateIncome,
  validateOtherLoanAmount,
  validatePesel,
  validateSelect,
  validateTelNumber,
  validateText,
  validateZipCode,
} from '../validate'

describe('validate', () => {
  it('validateText undefined', () => {
    const required = false
    const value = ''
    expect(validateText(required)(value)).toBe(undefined)
  })

  it('validateText required', () => {
    const required = true
    const value = ''
    expect(validateText(required)(value)).toBe('To pole jest wymagane')
  })

  it('validateText isNotValidLength', () => {
    const required = true
    const value = 'a'
    expect(validateText(required)(value)).toBe(
      'Pole musi zawierać między 2 - 100 znaków'
    )
  })

  it('validateText isNotLetter', () => {
    const required = true
    const value = '11'
    expect(validateText(required)(value)).toBe('Podane dane są nieprawidłowe')
  })

  it('validateEmail undefined', () => {
    const required = false
    const value = ''
    expect(validateEmail('Niepoprawny email', required)(value)).toBe(undefined)
  })

  it('validateEmail required', () => {
    const required = true
    const value = ''
    expect(validateEmail('Niepoprawny email', required)(value)).toBe(
      'To pole jest wymagane'
    )
  })

  it('validateEmail isNotValidEmail', () => {
    const required = true
    const value = 'a'
    expect(validateEmail('Niepoprawny email', required)(value)).toBe(
      'Niepoprawny email'
    )
  })

  it('validateTelNumber undefined', () => {
    const required = false
    const value = ''
    expect(
      validateTelNumber(required, 'Niepoprawny numer telefonu')(value)
    ).toBe(undefined)
  })

  it('validateTelNumber required', () => {
    const required = true
    const value = ''
    expect(
      validateTelNumber(required, 'Niepoprawny numer telefonu')(value)
    ).toBe('To pole jest wymagane')
  })

  it('validateTelNumber isNotValidPhoneNumber', () => {
    const required = true
    const value = 'a'
    expect(
      validateTelNumber(required, 'Niepoprawny numer telefonu')(value)
    ).toBe('Niepoprawny numer telefonu')
  })

  it('validateCheckbox required', () => {
    const required = true
    const value = ''
    expect(validateCheckbox(required)(value)).toBe('required')
  })

  it('validatePesel undefined', () => {
    const required = false
    const value = ''
    expect(validatePesel(required)(value)).toBe(undefined)
  })

  it('validatePesel required', () => {
    const required = true
    const value = ''
    expect(validatePesel(required)(value)).toBe('To pole jest wymagane')
  })

  it('validatePesel isNotNumber', () => {
    const required = true
    const value = 'test'
    expect(validatePesel(required)(value)).toBe(
      'Podany PESEL jest nieprawidłowy'
    )
  })

  it('validatePesel !isValidPesel', () => {
    const required = true
    const value = '123'
    expect(validatePesel(required)(value)).toBe(
      'Podany PESEL jest nieprawidłowy'
    )
  })

  it('validateHouseNumber undefined', () => {
    const required = false
    const value = ''
    expect(validateHouseNumber(required)(value)).toBe(undefined)
  })

  it('validateHouseNumber required', () => {
    const required = true
    const value = ''
    expect(validateHouseNumber(required)(value)).toBe('To pole jest wymagane')
  })

  it('validateHouseNumber isNotValidLength', () => {
    const required = true
    const value = '12345678910'
    expect(validateHouseNumber(required)(value)).toBe(
      'Podany numer mieszkania jest nieprawidłowy'
    )
  })

  it('validateCityName undefined', () => {
    const required = false
    const value = ''
    expect(validateCityName(required)(value)).toBe(undefined)
  })

  it('validateCityName required', () => {
    const required = true
    const value = ''
    expect(validateCityName(required)(value)).toBe('To pole jest wymagane')
  })

  it('validateCityName isNotValidLength', () => {
    const required = true
    const value = 'a'
    expect(validateCityName(required)(value)).toBe(
      'Pole musi zawierać między 2 - 100 znaków'
    )
  })

  /* it('validateCityName haveSpecialChars', () => {
    const required = true
    const value = 'ąbśćźąeę'
    expect(validateCityName(required)(value)).toBe('Podane dane są nieprawidłowe')
  }) */

  it('validateZipCode undefined', () => {
    const required = false
    const value = ''
    expect(validateZipCode(required)(value)).toBe(undefined)
  })

  it('validateZipCode required', () => {
    const required = true
    const value = ''
    expect(validateZipCode(required)(value)).toBe('To pole jest wymagane')
  })

  it('validateZipCode isNotValidLength', () => {
    const required = true
    const value = '12345678910'
    expect(validateZipCode(required)(value)).toBe(
      'Pole musi zawierać między 1 - 10 znaków'
    )
  })

  it('validateZipCode isNotValidZipCode', () => {
    const required = true
    const value = '123456789'
    expect(validateZipCode(required)(value)).toBe(
      'Podane dane są nieprawidłowe'
    )
  })

  it('validateCompanyTax undefined', () => {
    const required = false
    const value = ''
    expect(validateCompanyTax(required)(value)).toBe(undefined)
  })

  it('validateCompanyTax required', () => {
    const required = true
    const value = ''
    expect(validateCompanyTax(required)(value)).toBe('To pole jest wymagane')
  })

  it('validateCompanyTax !isValidNIP', () => {
    const required = true
    const value = '12345678910'
    expect(validateCompanyTax(required)(value)).toBe(
      'Podany NIP jest nieprawidłowy'
    )
  })

  it('validateBankAccountNumber undefined', () => {
    const required = false
    const value = ''
    expect(validateBankAccountNumber(required)(value)).toBe(undefined)
  })

  it('validateBankAccountNumber required', () => {
    const required = true
    const value = ''
    expect(validateBankAccountNumber(required)(value)).toBe(
      'To pole jest wymagane'
    )
  })

  it('validateBankAccountNumber isNotNumber', () => {
    const required = true
    const value = 'aaa'
    expect(validateBankAccountNumber(required)(value)).toBe(
      'Podany numer konta jest nieprawidłowy'
    )
  })

  it('validateBankAccountNumber isNotValidLength', () => {
    const required = true
    const value = '123'
    expect(validateBankAccountNumber(required)(value)).toBe(
      'Podany numer konta jest nieprawidłowy'
    )
  })

  it('validateBankAccountNumber !isValidBankAccountNumber', () => {
    const required = true
    const value = '12345678912345678912345678'
    expect(validateBankAccountNumber(required)(value)).toBe(
      'Podany numer konta jest nieprawidłowy'
    )
  })

  it('validateIDCardNumber undefined', () => {
    const required = false
    const value = ''
    expect(validateIDCardNumber(required)(value)).toBe(undefined)
  })

  it('validateIDCardNumber required', () => {
    const required = true
    const value = ''
    expect(validateIDCardNumber(required)(value)).toBe('To pole jest wymagane')
  })

  it('validateIDCardNumber isNotNumber', () => {
    const required = true
    const value = 'aaa'
    expect(validateIDCardNumber(required)(value)).toBe(
      'Podany numer dowodu jest nieprawidłowy'
    )
  })

  it('validateIDCardNumber isNotValidIDCard', () => {
    const required = true
    const value = '123'
    expect(validateIDCardNumber(required)(value)).toBe(
      'Podany numer dowodu jest nieprawidłowy'
    )
  })

  it('validateIDCardNumber !isValidIDCard', () => {
    const required = true
    const value = 'ABC987654'
    expect(validateIDCardNumber(required)(value)).toBe(
      'Podany numer dowodu jest nieprawidłowy'
    )
  })

  it('validateOtherLoanAmount undefined', () => {
    const required = false
    const value = ''
    expect(
      validateOtherLoanAmount(
        'Podana kwota jest nieprawidłowa',
        required
      )(value)
    ).toBe(undefined)
  })

  it('validateOtherLoanAmount required', () => {
    const required = true
    const value = ''
    expect(
      validateOtherLoanAmount(
        'Podana kwota jest nieprawidłowa',
        required
      )(value)
    ).toBe('To pole jest wymagane')
  })

  it('validateOtherLoanAmount isNotValidNumberBetween1And10Digits', () => {
    const required = true
    const value = '1234567891011'
    expect(
      validateOtherLoanAmount(
        'Podana kwota jest nieprawidłowa',
        required
      )(value)
    ).toBe('Podana kwota jest nieprawidłowa')
  })

  it('validateAmountOfChildren undefined', () => {
    const required = false
    const value = ''
    expect(
      validateAmountOfChildren(
        'Podana ilość jest nieprawidłowa',
        required
      )(value)
    ).toBe(undefined)
  })

  it('validateAmountOfChildren required', () => {
    const required = true
    const value = ''
    expect(
      validateAmountOfChildren(
        'Podana ilość jest nieprawidłowa',
        required
      )(value)
    ).toBe('To pole jest wymagane')
  })

  it('validateAmountOfChildren isNotValidNumberBetween1And10Digits', () => {
    const required = true
    const value = '1234567891011'
    expect(
      validateAmountOfChildren(
        'Podana ilość jest nieprawidłowa',
        required
      )(value)
    ).toBe('Podana ilość jest nieprawidłowa')
  })

  it('validateIncome undefined', () => {
    const required = false
    const value = ''
    expect(
      validateIncome('Podana kwota jest nieprawidłowa', required)(value)
    ).toBe(undefined)
  })

  it('validateIncome required', () => {
    const required = true
    const value = ''
    expect(
      validateIncome('Podana kwota jest nieprawidłowa', required)(value)
    ).toBe('To pole jest wymagane')
  })

  it('validateIncome isNotValidNumberBetween1And10Digits', () => {
    const required = true
    const value = '1234567891011'
    expect(
      validateIncome('Podana kwota jest nieprawidłowa', required)(value)
    ).toBe('Podana kwota jest nieprawidłowa')
  })

  it('validateSelect undefined', () => {
    const required = false
    const options = {
      a: 'test',
      b: 'test2',
    }
    const value = ''
    expect(validateSelect(required, options)(value)).toBe(undefined)
  })

  it('validateSelect required', () => {
    const required = true
    const options = {
      a: 'test',
      b: 'test2',
    }
    const value = ''
    expect(validateSelect(required, options)(value)).toBe(
      'To pole jest wymagane'
    )
  })

  it('validateSelect isNotValidOption', () => {
    const required = true
    const options = {
      a: 'test',
      b: 'test2',
    }
    const value = 'c'
    expect(validateSelect(required, options)(value)).toBe(
      'Podane dane są nieprawidłowe'
    )
  })

  it('validateDate undefined', () => {
    const required = false
    const value = ''
    expect(validateDate(required)(value)).toBe(undefined)
  })

  it('validateDate required', () => {
    const required = true
    const value = ''
    expect(validateDate(required)(value)).toBe('To pole jest wymagane')
  })

  it('validateBirthDate undefined', () => {
    const required = false
    const value = ''
    expect(validateBirthDate(required)(value)).toBe(undefined)
  })

  it('validateBirthDate required', () => {
    const required = true
    const value = ''
    expect(validateBirthDate(required)(value)).toBe('To pole jest wymagane')
  })

  it('validateBirthDate isAdult', () => {
    const required = true
    const value = '17'
    expect(validateBirthDate(required)(value)).toBe(
      'Musisz mieć skończone 18 lat'
    )
  })
})
