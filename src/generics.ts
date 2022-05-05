//ジェネリクス型
//実装コストを大幅に削減できる。
export {};

// const echo = (arg: number): number => {
//   return arg;
// };

// const echo = (arg: string): string => {
//   return arg;
// };

//Tでジェネリクスの宣言をする。<T>を型引数と呼ぶ
const echo = <T>(arg: T): T => {
  return arg;
};

console.log(echo<number>(100)); //100を返す
console.log(echo<string>('Hello!'));
console.log(echo<boolean>(true));

//ジェネリクスを適用
class Mirror<T> {
  constructor(public value: T) {}
  echo(): T {
    return this.value;
  }
}

console.log(new Mirror<number>(123).echo());
console.log(new Mirror<string>('こんにちは').echo());
console.log(new Mirror<boolean>(true).echo());

