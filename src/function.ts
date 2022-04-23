export {};

//戻り値の型宣言はfunctionカッコの後
function bmi(height: number, weight: number): number {
  return weight / (height * height);

}

console.log(bmi(1.78, 86));
