//抽象メソッド
export {};

abstract class Animal {
  abstract cry(): string; //抽象メソッドは抽象クラスの中だけで利用できる
}

class Lion extends Animal {
  cry() {
    return 'roar';
  }
}

//抽象クラスで定義したメソッドを実装するのを忘れていたらエラーが出る
class Tiger extends Animal {
  cry() {
    return 'grrrrr';
  }
}