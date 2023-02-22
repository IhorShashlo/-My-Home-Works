// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.


const num = 72;

for (let i = 0; i <= 72; i++) {
  const toLog = i + 1;

  const result = num / toLog;
  const str = result.toString();
  const res = str.split(".");

  if (!res[1]) {
    console.log(toLog);
  }
}
