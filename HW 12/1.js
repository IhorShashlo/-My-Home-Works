let lengthArr = +prompt("Введіть довжину масиву");
let arr = [];

for (let i = 0; i < lengthArr; i++) {
  arr.push(+prompt(`Введіть ${i + 1} елемент`));
}
console.log(arr);

arr.sort((a, b) => {
  return a - b;
});
console.log(arr);

let newArr = arr.slice();
newArr.splice(1, 3);
console.log(newArr);
