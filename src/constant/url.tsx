import { DashStyleValue } from 'highcharts';

export const ageList = ['総人口', '年少人口', '生産年齢人口', '老年人口'];

export const prefectureURL =
  'https://opendata.resas-portal.go.jp/api/v1/prefectures';

export const populationURL =
  'https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=';

export const dashStyles: Array<DashStyleValue> = [
  'Solid',
  'Dash',
  'Dot',
  'ShortDash',
  'LongDash',
  'ShortDot',
];
