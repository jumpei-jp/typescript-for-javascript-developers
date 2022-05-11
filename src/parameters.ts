export {};

const debugProfile = (name: string, age: number) => {
  console.log({ name, age});
};

debugProfile('yama', 25);

//引数のみを取り出す
type Profile = Parameters<typeof debugProfile>;

const profile: Profile = ['Gloria', 76];

//関数を展開
debugProfile(...profile);