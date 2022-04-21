export {};

//自動的に0から値が割り振られる
enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December
};

console.log(Months.January);
console.log(Months.February);
console.log(Months.December);

enum COLORS {
  RED = '#ff0000',
  WHITE = '#ffffff',
  GREEN = '#008000',
  BLUE = '#0000ff',
  BLACK = '#000000'
}

let green = COLORS.GREEN;
console.log({green});

enum COLORS {
  YELLOW = '#FFFF00'
}

COLORS.YELLOW;