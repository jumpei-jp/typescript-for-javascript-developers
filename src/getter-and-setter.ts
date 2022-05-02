export {};

/**
 * ■ owner
 *  所有者
 *  初期化時に設定できる。
 *  途中で変更できない。
 *  参照できる
 * ■ secretNumber
 *  個人番号
 *  初期化時に設定できる
 *  途中で変更できる。
 *  参照できない。
 */
class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  //参照専用のメソッド
  //参照専用のメソッドをゲッターという。
  get owner() {
    return this._owner;
  }

  //セッター
  //更新する時に制御するメソッド
  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  //debug用メソッド
  debugPrint(){
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard('ヤマさん', 1234567890);
// card.owner = 'Ham'; //途中変更できないか確認
// card._secretNumber;
console.log(card.owner);
console.log(card.debugPrint());
card.secretNumber = 1111111;
console.log(card.debugPrint());

// console.log(card.secretNumber);


