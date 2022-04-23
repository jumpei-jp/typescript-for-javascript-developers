export {};

//引数をデフォルトで指定する
const nextYearSalary = (currentSalary: number, rate: number = 1.1) => {
  return currentSalary * rate;
}

console.log(nextYearSalary(1000, 1.05));
