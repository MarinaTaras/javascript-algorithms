/*
 * Задача 2: «FizzBuzz»
 *
 * Напишите функцию fizzBuzz(n), принимающую как аргумент натуральное число.
 * Функция должна выводить в консоль числа от 1 до n, заменяя числа:
 *
 * • кратные трём — на fizz;
 * • кратные пяти — на buzz;
 * • кратные и трём, и пяти одновременно — на fizzbuzz.
 *
 */

function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    let zzz
    if (i % 3 == 0) {
      zzz = 'fizz'
      if (i % 5 == 0) zzz = 'fizzbuzz' 
    } else {
      if (i % 5 == 0) zzz = 'buzz'
    }
    console.log(zzz || i)
  }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fizzBuzz(15))
