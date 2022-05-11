export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'Yama',
  age: 25,
};

me.age++; //インクリメント 年齢が＋1

console.log(me);

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: 'Takeshi',
  age: 40,
};

type YomitoriSenyo<T> = {
  readonly [P in keyof T]: T[P];
};

type YomitoriSenyoProfile = YomitoriSenyo<Profile>;

