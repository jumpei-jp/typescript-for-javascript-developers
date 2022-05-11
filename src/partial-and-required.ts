export {};

//typescriptが標準で準備してくれているやつ

type Profile = {
  name: string;
  age?: number;
  zipCode: number;
};

//全てのプロパティがオプショナルになる。
type PartialType = Partial<Profile>; //型にProfileを渡す

//全てのプロパティを必須のものにする。
type RequiredType = Required<Profile>;