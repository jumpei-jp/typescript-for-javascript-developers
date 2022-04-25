export {};

//クラスを作ってみる
class Person{
  name: string;
  age: number;

  //constructorに戻り値は無いので型は指定しない
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

//クラスをインスタンス化(実体化)
let taro = new Person('Taro', 25);
console.log(taro.profile());
