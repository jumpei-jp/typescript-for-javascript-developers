export {};

// Record<K, T>

type Prefectures = 'Tokyo' | 'Chiba' | 'Osaka' | 'Hyogo';
//それぞれの都道府県に共通のデータ型を持たせたい
type Covid19InfectionInfo = {
  kanji_name: string;
  confirmed_cases: number;
};

//Record型を使っって複数のデータについて型をつけたい
const covid19Japan: Record<Prefectures, Covid19InfectionInfo> = {
  Tokyo: { kanji_name: '東京', confirmed_cases: 1960},
  Chiba: { kanji_name: '千葉', confirmed_cases: 249},
  Osaka: { kanji_name: '大阪', confirmed_cases: 1000},
  Hyogo: { kanji_name: '兵庫', confirmed_cases: 100},
}