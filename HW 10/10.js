//Визначити кількість його парних дільників.

const num = 72;
let count = 0;

for (let i = 0; i <= 72; i++) {
  const toLog = i + 1;

  const result = num / toLog;
  const str = result.toString();
  const res = str.split(".");

  if (!res[1]) {
    if (toLog % 2 == 0) {
      count = count + 1;
    }
    console.log(toLog);
  }
  console.log(count);
}
