export {};

//アクセス修飾
class Person{

  //基本的にpublicは書かないで、privateの時だけ書くことが多い
  public name: string;
  protected age: number;
  protected nationality: string; //継承した場合呼び出しは可能。privateでは呼び出し不可

  //constructorに戻り値は無いので型は指定しない
  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}
//Personクラスを継承するAndroidクラス
class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality);//親クラスと同名のメソッドを呼び出すことができる
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
  }
}

//クラスをインスタンス化(実体化)
let taro = new Person('Taro', 25, 'Japan');
console.log(taro.name);
// console.log(taro.age);
console.log(taro.profile());
