export type NumObjType = {
  [key: string]: number;
};

export type GetTimeDataPropsType = {
  dtSec: number;
  apiTimezoneOffsetSec: number;
  sunriseSec?: number;
  sunsetSec?: number;
  timeType: string;
};
