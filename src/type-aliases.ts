export {};

type Mojiretsu = string;

const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hello';

const example1 = {
  name: 'Ham',
  age: 43
};

//型宣言を外だしそのため別でも流用できる
type Profile ={
  name: string;
  age: number;
};

const example2: Profile = {
  name: 'Ham',
  age: 43
};

//example1の構造を型
type Profile2 = typeof example1;