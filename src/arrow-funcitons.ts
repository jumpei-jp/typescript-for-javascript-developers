export {};

//bmiに対するアノテーション
let bmi: (height: number, weight: number) => number = (
  height: number,
  weight: number

//↓リターンを1行で書く
): number => weight / (height * height);


console.log(bmi(1.78, 86));
