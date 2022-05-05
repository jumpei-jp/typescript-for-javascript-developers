//型の互換性
export {};

let fooCompatible: any;
let barCompatible: string = 'TypeScript';

console.log(typeof fooCompatible);

//any型はstring型と互換性があるのでエラーが出ない
fooCompatible = barCompatible;
console.log(typeof fooCompatible);

let fooIncompatible: string;
let barIncompatible: number = 1;

//string型にnumber型は代入できない。
// fooIncompatible = barIncompatible;

let fooString: string;
let barString: string = 'string';

//同じ型の代入なので問題ない
fooString = barString;

let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLiteral;

let fooNumber: number;
let fooNumberLiteral: 1976 = 1976;
fooNumber = fooNumberLiteral;

interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}

let me: Animal;
me = new Person(43, 'Jiro');