//Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

{
  let sum = 0;
  for (let i = 1; i <= 500; i++) {
    sum = (sum + i) / 2;
    console.log(sum);
  }
}