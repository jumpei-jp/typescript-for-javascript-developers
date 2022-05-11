export {};

//関数のリターン値を返してくれる
function add(a: number, b: number) {
  return a + b;
}

console.log(add(1, 2));

//returnがnumberであることが正しい
type ReturnTypeFromAdd = ReturnType<typeof add>;

type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
  ) => infer R
   ? R
   : any;
