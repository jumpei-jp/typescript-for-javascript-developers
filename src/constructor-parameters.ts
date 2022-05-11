export {};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let taro = new Person('Taro', 30);
console.log(taro);

//クラスの型を代入
type PersonType = typeof Person;

//コンストラクターメソッドの引数が
type Profile = ConstructorParameters<PersonType>;

const profile: Profile = ['Yama', 25];
const yama = new Person(...profile);

console.log(yama);
