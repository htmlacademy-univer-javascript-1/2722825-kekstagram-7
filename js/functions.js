/* eslint-disable no-unused-vars */
// 1. проверка длины строки
function lengthCheck(line, maxLength) {
  return line.length <= maxLength;
}

// 2. является ли строка палиндромом

function palindromeCheck(line) {
  const trueLine =  line.replaceAll(' ','').toLowerCase();
  let reversed = '';
  for (let i = trueLine.length - 1; i >= 0; i--) {
    reversed += trueLine[i];
  }
  return trueLine === reversed;
}

// 3. извлечение цифр из строки
function extractDigits(line) {
  const str = line.toString();
  let digits = '';

  for (let i = 0; i < str.length; i++) {
    const digit = parseInt(str[i], 10);
    if (!Number.isNaN(digit)) {
      digits += str[i];
    }
  }

  return parseInt(digits, 10);
}
