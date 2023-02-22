//Знайти суму його парних дільників.
// Парні дільники числа - це 2 дільники числа , добуток яких дорівнює самому числу.

const num = 72;
let count = 0;
let sum = 0;

for (let i = 0; i <= 72; i++) {
  const toLog = i + 1;

  const result = num / toLog;
  const str = result.toString();
  const res = str.split(".");

  if (!res[1]) {
    if (toLog % 2 == 0) {
      count = count + 1;
      sum = sum + toLog;
    }
    console.log(toLog);
  }
  console.log(count);
}
console.log(sum);
