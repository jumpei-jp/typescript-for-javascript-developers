//継承
export {};

class Animal {
  constructor(public name: string){}
  run(){
    return 'I can run';
  }
}

//継承
class Lion extends Animal {
  public speed: number;
  constructor(name: string, speed: number){
    super(name); //nameの初期化処理は親クラスがやってくれる

    this.speed = speed; //speedの初期化処理はこのクラスで行う
  }
  run(): string{
    const parentMessage = super.run(); //superを使って親のメソッドを呼び出す
    return `${super.run()} ${this.speed}.km/h.`;
  }
}

// //インスタンスの作成
// let animal = new Animal();
// console.log(animal.run());

// let lion = new Lion();
// console.log(lion.run());

console.log(new Animal('Mickey').run());
console.log(new Lion('John', 120).run());
