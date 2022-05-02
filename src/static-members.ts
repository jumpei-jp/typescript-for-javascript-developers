export {};

//静的メンバー
//いつも変化のないメンバーにアクセスしたい。newなしでアクセスしたい。

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Atsushi';
  static lastName: string = 'Ishida';

  static work (){
    return `Hey, ${this.firstName} let's study TypeSscript`;
  }
}

// let me = new Me();
// console.log(me.isProgrammer);
console.log(Me.isProgrammer);
console.log(Me.work());


