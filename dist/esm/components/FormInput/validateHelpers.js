export const isEmpty = value => !value;
export const isNotValidLength = (value, from = 2, to = 100) => value.length < from || value.length > to;
export const isNotValidPhoneNumber = value => !/^(45|50|51|53|57|60|66|69|72|73|78|79|88)[0-9]{7}$/.test(value);
export const isNotValidEmail = value => !/[a-zA-Z0-9_.+-]+@[a-zAZ0-9-]+\.[a-zA-Z0-9-.]+$/.test(value);
export const isNotValidNumberBetween1And10Digits = value => !/^[0-9]{1,10}$/.test(value);
export const isNotLetter = value => !/[A-Za-z]$/.test(value);
export const isNotNumber = value => !/[0-9]$/.test(value);
export const haveSpecialChars = value => !/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ0-9 -]*$$/.test(value);
export const isValidPesel = value => {
  if (value.length === 11) {
    const weights = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
    const controlNumber = parseInt(value.substring(10, 11));
    let sum = 0;
    let control = 10;
    weights.filter((weight, index) => sum += parseInt(value.substring(index, index + 1)) * weight);
    sum = sum % 10;

    if (sum === 0) {
      control = 0;
    }

    return control - sum === controlNumber;
  }

  return false;
};
export const isNotValidZipCode = value => !/^[0-9]{2}-[0-9]{3}$/.test(value);
export const isValidNIP = nip => {
  if (nip.length === 10) {
    const weights = [6, 5, 7, 2, 3, 4, 5, 6, 7];
    const controlNumber = parseInt(nip.substring(9, 10));
    let sum = 0;
    weights.filter((weight, index) => sum += parseInt(nip.substring(index, index + 1)) * weight);
    return sum % 11 === controlNumber;
  }

  return false;
};
export const isValidBankAccountNumber = value => {
  if (value.length === 26) {
    const accountNumber = value.slice(2, 27);
    const modifiedAccountNumber = accountNumber.concat('2521', value[0], value[1]);
    const modifiedAccountNumberChunks = [modifiedAccountNumber.slice(0, 10), modifiedAccountNumber.slice(10, 20), modifiedAccountNumber.slice(20, 30)];
    return ((modifiedAccountNumberChunks[0] % 97 + modifiedAccountNumberChunks[1]) % 97 + modifiedAccountNumberChunks[2]) % 97 === 1;
  }

  return false;
};
export const isValidIDCard = value => {
  if (value.length === 9) {
    const idNumber = value.toUpperCase();

    const getLetterValue = letter => {
      const letterValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
      return letterValues.findIndex(value => value === letter);
    };

    for (let i = 0; i < 3; i++) {
      if (getLetterValue(idNumber[i]) < 10) return false;
    }

    for (let i = 3; i < 9; i++) {
      if (getLetterValue(idNumber[i]) < 0 || getLetterValue(idNumber[i]) > 9) return false;
    }

    const controlSum = 7 * getLetterValue(idNumber[0]) + 3 * getLetterValue(idNumber[1]) + 1 * getLetterValue(idNumber[2]) + 7 * getLetterValue(idNumber[4]) + 3 * getLetterValue(idNumber[5]) + 1 * getLetterValue(idNumber[6]) + 7 * getLetterValue(idNumber[7]) + 3 * getLetterValue(idNumber[8]);
    return controlSum % 10 === getLetterValue(idNumber[3]);
  }

  return false;
};
export const isNotValidIDCard = value => !/^[A-z]{3}[0-9]{6}$/.test(value);
//# sourceMappingURL=validateHelpers.js.map