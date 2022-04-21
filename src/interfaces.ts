export {};

//エイリアス
type ObjectType = {
  name: string;
  age: number
};

//インターフェースという構文でもオブジェクト型にも名前を使える
interface ObjectInterface {
  name: string;
  age: number
}

let object: ObjectInterface = {
  name: 'Yama-san',
  age: 24
};

