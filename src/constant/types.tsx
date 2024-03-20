export interface PopulationState {
  prefectures: Prefecture[];
  isLoading: boolean;
  error: string;
  age: string;
  infos: Info[];
}

export interface Prefecture {
  prefCode: number;
  prefName: string;
}

export interface Info {
  prefCode: number;
  data: Array<{
    label: string;
    data: Array<{
      year: number;
      value: number;
    }>;
  }>;
}
