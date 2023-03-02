/* Дане деяке число. Визначити,
 чи можна одержати це число шляхом зведення числа 3 у деякий ступінь.
 (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
 */

const num = 100;
const x = 3;

function pow(x, n) {
  let result = x;

  for (let i = 1; i <= n; i++) {
    result *= x;
  }
  return result;
}
console.log(pow(num));
