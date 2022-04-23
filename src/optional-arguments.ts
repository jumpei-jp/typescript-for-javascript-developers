export {};

//optional引数とは、引数として存在しても存在していなくても良いやつのことを指す

let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
): number => {
  const bmi: number = weight / (height * height);
  if (printable) {
    console.log(bmi);
  }
  return bmi;
};

bmi(1.78, 86, true);

//optional引数の要件
//bmi(身長、体重、console.logで出力するかどうか)