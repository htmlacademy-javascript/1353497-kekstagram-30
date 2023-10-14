// Функция для проверки длины строки
function isLengthString(string, length) {
  return string.length <= length;
}

isLengthString('проверяемая строка', 20);
isLengthString('проверяемая строка', 18);
isLengthString('проверяемая строка', 10);

// Проверка строки на палиндромность
function isPalindrome(randomString) {
  const string = randomString.toLowerCase().replaceAll(' ','');
  for (let i = 0; i < string.length / 2; i++) {
    if (string.at(i) !== string.at(-i - 1)) {
      return false;
    }
  }
  return true;
}

isPalindrome('топот');
isPalindrome('ДовОд');
isPalindrome('Кекс');
isPalindrome('Лёша на полке клопа нашёл ');

function extractNumber(arg) {
  const string = arg.toString();
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN (parseInt(string[i], 10))) {
      result += string[i];
    }
  }

  return parseInt(result, 10);
}

// extractNumber('2023 год');
// extractNumber('ECMAScript 2022');
// extractNumber('1 кефир, 0.5 батона');
// extractNumber('я томат');
// extractNumber(2023);
// extractNumber(-1);
// extractNumber(1.5);и
