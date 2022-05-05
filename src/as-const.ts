export {};

let name = 'Yama';

name = 'Hoge';

let nickname = 'Hoge' as const;
nickname = 'Hoge';

//as constにすることでreadonlyにすることができる　どれだけネストされていても全てreadonlyにされる
let profile = {
  name: 'Atsushi',
  height: 178
} as const;

// profile.name = 'Ham';
// profile.height = 180;