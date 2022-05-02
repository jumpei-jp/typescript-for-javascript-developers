export {};

//クラスのプロパティを読み取り専用にする。
class VisaCard {

  //publicの後にreadonlyを書くと読み取り専用にできる。
  constructor(public readonly owner: string){
  }
}

let myVisaCard = new VisaCard('yama');
console.log(myVisaCard.owner);

//変更するようなコードを作成してみる
// myVisaCard.owner = '焼肉'; //読み取り専用なのでエラーが出る。
