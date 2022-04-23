export {};
//オーバーロード

//シグネチャー(宣言) number,string以外の引数は受け付けなくなる
function double(value: number): number;
function double(value: string): string;

//値を受け取ると２倍にして返す関数 (型の定義はシグネチャーに定義しているのでanyでOK)
function double(value: any): any {
  console.log(typeof value); //型を確認
  if (typeof value === 'number') {
    return value * 2;
  } else {
    return value + value;
  }
}

console.log(double(100));
console.log(double('Go '));
// console.log(double(true));
