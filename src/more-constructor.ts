export {};

class Person {
  //初期化処理をconstructorメソッドの引数で行う
  constructor(public name:string, protected age:number){}
}

const me = new Person('じゅん', 25);
console.log(me);
