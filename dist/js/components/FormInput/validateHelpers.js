"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNotValidOption = exports.isNotValidIDCard = exports.isValidIDCard = exports.isValidBankAccountNumber = exports.isValidNIP = exports.isNotValidZipCode = exports.isValidPesel = exports.haveSpecialChars = exports.isNotNumber = exports.isNotLetter = exports.isNotValidNumberBetween1And10Digits = exports.isNotValidEmail = exports.isNotValidPhoneNumber = exports.isNotValidLength = exports.isEmpty = void 0;

var isEmpty = function isEmpty(value) {
  return !value;
};

exports.isEmpty = isEmpty;

var isNotValidLength = function isNotValidLength(value) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var to = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
  return value.length < from || value.length > to;
};

exports.isNotValidLength = isNotValidLength;

var isNotValidPhoneNumber = function isNotValidPhoneNumber(value) {
  return !/^(45|50|51|53|57|60|66|69|72|73|78|79|88)[0-9]{7}$/.test(value);
};

exports.isNotValidPhoneNumber = isNotValidPhoneNumber;

var isNotValidEmail = function isNotValidEmail(value) {
  return !/[a-zA-Z0-9_.+-]+@[a-zAZ0-9-]+\.[a-zA-Z0-9-.]+$/.test(value);
};

exports.isNotValidEmail = isNotValidEmail;

var isNotValidNumberBetween1And10Digits = function isNotValidNumberBetween1And10Digits(value) {
  return !/^[0-9]{1,10}$/.test(value);
};

exports.isNotValidNumberBetween1And10Digits = isNotValidNumberBetween1And10Digits;

var isNotLetter = function isNotLetter(value) {
  return !/[A-Za-z.]$/.test(value);
};

exports.isNotLetter = isNotLetter;

var isNotNumber = function isNotNumber(value) {
  return !/[0-9]$/.test(value);
};

exports.isNotNumber = isNotNumber;

var haveSpecialChars = function haveSpecialChars(value) {
  return !/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ0-9 -]*$$/.test(value);
};

exports.haveSpecialChars = haveSpecialChars;

var isValidPesel = function isValidPesel(value) {
  if (value.length === 11) {
    var weights = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
    var controlNumber = parseInt(value.substring(10, 11));
    var sum = 0;
    var control = 10;
    weights.filter(function (weight, index) {
      return sum += parseInt(value.substring(index, index + 1)) * weight;
    });
    sum = sum % 10;

    if (sum === 0) {
      control = 0;
    }

    return control - sum === controlNumber;
  }

  return false;
};

exports.isValidPesel = isValidPesel;

var isNotValidZipCode = function isNotValidZipCode(value) {
  return !/^[0-9]{2}-[0-9]{3}$/.test(value);
};

exports.isNotValidZipCode = isNotValidZipCode;

var isValidNIP = function isValidNIP(nip) {
  var trimedNip = nip.trim();

  if (trimedNip.length === 10) {
    var weights = [6, 5, 7, 2, 3, 4, 5, 6, 7];
    var controlNumber = parseInt(trimedNip.substring(9, 10));
    var sum = 0;
    weights.forEach(function (weight, index) {
      return sum += parseInt(trimedNip.substring(index, index + 1)) * weight;
    });
    return sum % 11 === controlNumber;
  }

  return false;
};

exports.isValidNIP = isValidNIP;

var isValidBankAccountNumber = function isValidBankAccountNumber(value) {
  if (value.length === 26) {
    var accountNumber = value.slice(2, 27);
    var modifiedAccountNumber = accountNumber.concat('2521', value[0], value[1]);
    var modifiedAccountNumberChunks = [modifiedAccountNumber.slice(0, 10), modifiedAccountNumber.slice(10, 20), modifiedAccountNumber.slice(20, 30)];
    return ((modifiedAccountNumberChunks[0] % 97 + modifiedAccountNumberChunks[1]) % 97 + modifiedAccountNumberChunks[2]) % 97 === 1;
  }

  return false;
};

exports.isValidBankAccountNumber = isValidBankAccountNumber;

var isValidIDCard = function isValidIDCard(value) {
  if (value.length === 9) {
    var idNumber = value.toUpperCase();

    var getLetterValue = function getLetterValue(letter) {
      var letterValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
      return letterValues.findIndex(function (value) {
        return value === letter;
      });
    };

    for (var i = 0; i < 3; i++) {
      if (getLetterValue(idNumber[i]) < 10) return false;
    }

    for (var _i = 3; _i < 9; _i++) {
      if (getLetterValue(idNumber[_i]) < 0 || getLetterValue(idNumber[_i]) > 9) return false;
    }

    var controlSum = 7 * getLetterValue(idNumber[0]) + 3 * getLetterValue(idNumber[1]) + 1 * getLetterValue(idNumber[2]) + 7 * getLetterValue(idNumber[4]) + 3 * getLetterValue(idNumber[5]) + 1 * getLetterValue(idNumber[6]) + 7 * getLetterValue(idNumber[7]) + 3 * getLetterValue(idNumber[8]);
    return controlSum % 10 === getLetterValue(idNumber[3]);
  }

  return false;
};

exports.isValidIDCard = isValidIDCard;

var isNotValidIDCard = function isNotValidIDCard(value) {
  return !/^[A-z]{3}[0-9]{6}$/.test(value);
};

exports.isNotValidIDCard = isNotValidIDCard;

var isNotValidOption = function isNotValidOption(value, options) {
  return !options.hasOwnProperty(value);
};

exports.isNotValidOption = isNotValidOption;
//# sourceMappingURL=validateHelpers.js.map