export {};

const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu(); //この変数は何かわからない

let sumAny = numberAny + 10;

//unknownでも計算
//型ガードを使ってエラーを防ぐ
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10;
}
