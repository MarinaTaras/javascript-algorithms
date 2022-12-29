/*
 * Задача 13: «Сумма двух»
 *
 * Напишите функцию sumOfTwo(arr, num). Её аргументы: массив целых чисел arr
 * и целое число num. Функция должна вернуть true, если в переданном массиве
 * есть какие-то два числа, чья сумма равна num. Если же такой пары чисел нет,
 * функция должна вернуть false.
 *
 */

function sumOfTwo(arr, sum) {
  let length = arr.length

  let res = false

  for (i = 0; i <= length; i++) {
    let el = arr.shift()

    if (arr.includes(sum - el)) {
      res = true
    }
  }
  return res
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(sumOfTwo([1, 2, 3, 4, 5], 4)) // true (так как 1 + 3 === 4)
//console.log(sumOfTwo([1, 2, 3, 4, 5], 100)) // false
