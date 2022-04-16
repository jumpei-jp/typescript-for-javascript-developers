export {};

//関数からのreturnがない時はvoid型
function returnNothing(): void {
  console.log('I do not return anything!');
}

console.log(returnNothing());
