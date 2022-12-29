/*
 * Задача 14: «Простые числа»
 *
 * Напишите функцию primes(n). Её единственный аргумент — целое число n.
 * Функция должна возвращать массив простых чисел от 2 до n.
 *
 */

function isPrime(n) {
  if (n == 0) {
    return false
  }
  else {
    if (n == 1) {
      return false
    }
  }
  for (let i = 2; i <= n; i++) {
    if ((n%i == 0) && (i !== n)) {
      return false
    }
    else return true
  }
}

function primes(num) {
  let mass = []
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      mass.push(i)
    } 
  }
  return mass
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(primes(6)) // [2, 3, 5]
console.log(primes(17)) // [2, 3, 5, 7, 11, 13, 17]
