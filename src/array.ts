export {};

//数値のみで構成される配列の書き方2つ
let numbers: number[] = [1, 2, 3];

let numbers2: Array<number> = [1, 2, 3];
let strings2: Array<string> = ['tokyo', 'osaka', 'kyoto'];

let strings: string[] = ['TypeScript', 'JavaScript', 'CoffeeScript'];

//2次元配列の型
let twoDimentionalArray: number[][]= [
  [50, 100],
  [150, 300]
];

//要素バラバラ
let hairetu: (string | number | boolean)[] = [1,false, 'Japan'];