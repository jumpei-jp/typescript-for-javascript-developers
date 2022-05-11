export {};

type DetailedProfile = {
  name: string;
  height: number;
  weight: number;
}

//欲しいものだけを指定する型
type SimpleProfile = Pick<DetailedProfile, 'name' | 'weight'>;

//ブラックリスト式
type SmallProfile = Omit<DetailedProfile, 'height'>;

//omitを解剖してみる
type MyOmit = Pick<DetailedProfile,'name' | 'weight'>;
type MySmallProfile = MyOmit ;