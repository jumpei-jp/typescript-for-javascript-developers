export {};

//アノテーションが甘い
let profile1: object = { name: 'HAM'};
profile1 = { birthYear: 1976};

//オブジェクトの詳細を型宣言
let profile2: {
  name: string;
} = { name: 'HAM'};
profile2 = { name: 'Yama'};