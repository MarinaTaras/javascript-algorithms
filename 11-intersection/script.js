/*
 * Задача 11: «Пересечения массивов»
 *
 * Напишите функцию intersection(arr1, arr2). Она должна принимать
 * на вход два массива целых чисел. Функция должна вернуть новый
 * массив чисел, содержащихся в обоих исходных массивах.
 * 
*/

function intersection(arr1, arr2) {
    const section = []
    for (i = 0; i < arr1.length; i++) {
      for (j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
          section.push(arr1[i])
        }
      }
    }
    return Array.from(new Set(section))
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(intersection([1, 1, 5, 4, 2], [8, 91, 4, 1, 1, 3])); // [4, 1]
console.log(intersection([1, 5, 4, 2], [7, 12])); // []