//インデックスシグネチャー
export {};

//interfaceで型宣言を外に出す。
interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile= {name: 'Yama', underTwenty: false};

// How to wirte index signatures
// { [index: typeForIndex ]: typeForValue }
profile.name = 'Yama';
profile.age = 43;
profile.nationality = 'Japan';