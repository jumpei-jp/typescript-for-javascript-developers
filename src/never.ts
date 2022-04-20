export {};

//呼び元に戻ってこない関数
function error(message: string): never{
  //例外を発生させる
  throw new Error(message);
}

//errorハンドリング
try{
  let result = error('test');
  console.log({ result });
} catch(error){
  console.log({ error });
}

let foo: void = undefined;
let bar: never = error('only me!'); //neverには値の概念がないのでundefinedでもエラーが出る

