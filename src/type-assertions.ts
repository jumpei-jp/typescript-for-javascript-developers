//型アサーション
//互換性のある時のみ

export {};

let name: any = 'Yama';

// let length = name.length as number; //文字の長さを求める as numberと書いて型アサーション
// let length = (name as string).length;
let length = (<string>name).length; //jsxの記法と似ているので推奨されていない
length = 'foo';

console.log(length);