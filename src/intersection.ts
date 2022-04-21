export {};
//属性を足していって型のメンテナンス性を上げていく

type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

const DaimajinSasaki: Pitcher1 = {
  throwingSpeed: 154
};

const OchiaiHiromitsu: Batter1 = {
  battingAverage: 0.367
};

//投げるのも打つのもできる人
// type TwoWayPlayer = {
//   throwingSpeed: number;
//   battingAverage: number;
// }

//型の足し算
type TwoWayPlayer = Pitcher1 & Batter1;

const OtaniShouhei: TwoWayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.286
};