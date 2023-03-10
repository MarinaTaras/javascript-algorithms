/*
 * Задача 5: «Найти гласные»
 *
 * Напишите функцию findVowels(str), принимающую на вход кириллическую
 * строку str  и возвращающую количество гласных, содержащихся в этой строке.
 * Для вашего удобства вот массив кириллических гласных:
 *
 * ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'].
 *
 */

function findVowels(str) {
  const vowlets = ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е']
  let num = 0
  const word = str.toLowerCase().split('')
  word.forEach((el) => {
    if (vowlets.includes(el)) {
      num++
    }
  })
  return num
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(findVowels('здравствуй')) // 2
console.log(findVowels('привет')) // 2
console.log(findVowels('хеллоу')) // 3
