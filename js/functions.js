// Функция для проверки длины строки
function lengthStrings(string, maxLength) {
  // Проверка длины строки
  return string.length <= maxLength; //Функция возвращает результат этого сравнения
}

// console.log(lengthStrings('xyzxyz', 1));

// Проверка строки на палиндромность
function checkPalindrome(string) {
  const newString = string.toLowerCase().replaceAll(/\s/g,'');

  return newString;
}

function returnLast(string) {

  let totalString = 0;

  for (let reverseString = totalString.length; reverseString > 0;reverseString--) {
    const newTotalString = parseInt(string[reverseString], 5);
  }

  totalString += newTotalString

}


console.log(returnLast('Xy x'));
