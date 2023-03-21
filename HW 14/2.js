indexOf;

let newStr = "hdj?dkksk";
let symbol = "?";
let finishPos = 0;

for (let index = 0; index < newStr.length; index++) {
  if (newStr[index] === symbol) {
    finishPos = index;
    break;
  }
}
console.log(finishPos);
