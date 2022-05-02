export {};

//ファイルに該当するようなものを作成する。
//namespaceをつけることでフォルダを作るように利用する。
namespace Japanese {
  export namespace Tokyo {
    export class Person { //exportすると外からアクセスできる
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ){}
  }
}

const me = new Japanese.Tokyo.Person('yama');
console.log(me.name);

const micheal = new English.Person('Micheal', 'Joseph', 'Jackson');
console.log(micheal);

