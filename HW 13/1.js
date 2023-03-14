/* Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] 
Знайти суму та кількість позитивних елементів.
*/

const arr = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];
let sum = 0;
let positiveNumbers = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    sum = sum + arr[i];
  }
}
console.log(sum);

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    positiveNumbers++;
  }
}
console.log(positiveNumbers);
