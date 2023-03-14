//Знайти максимальний елемент масиву та його порядковий номер.

const arr = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}
console.log(myArrayMax(arr));

console.log(arr.indexOf(myArrayMax(arr)));
