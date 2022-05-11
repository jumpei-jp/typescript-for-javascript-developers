export {};

type Profile = {
  name: string;
  age: number;
};

//全てのプロパティをオプショナルにする
type PartialProfile = Partial<Profile>;
type PropertyTypes = keyof Profile;
