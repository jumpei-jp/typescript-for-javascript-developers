//インターフェイス
export {};

class Mahotsukai {}
class Souryo {}

//TypeScriptは一つのクラスしか継承できないが、複数のインターフェイスを継承することは可能
//インターフェイスは全てのメソッドが抽象メソッドのようになっている
class Taro extends Mahotsukai {}

interface Kenja {
  mera(): void; //処理の実態がわからない。シグネチャー
}

interface Senshi {
  kougeki(): void;
}

//インターフェイスを複数実装する
class Jiro implements Kenja, Senshi {
  mera(): void {
    console.log('メラ');
  }

  kougeki(): void {
    console.log('攻撃');
  }
}

const jiro = new Jiro();
jiro.mera();
jiro.kougeki();