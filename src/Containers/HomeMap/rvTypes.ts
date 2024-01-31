export type FrameType = {
  time: number;
  path: string;
};

type RadarType = {
  past: FrameType[];
  nowcast: FrameType[];
};

type LayersType = {
  radar: RadarType;
};

type GeometryType = {
  type: string;
  coordinates: number[][];
};

type WeatherMapType = {
  generationtime_ms: number;
  product: string;
  init: string;
  dataseries: number[];
  geometry: GeometryType;
};

export type RainViewerDataType = {
  version: number;
  generated: number;
  host: string;
  radar: RadarType;
  satellite: any;
  layers: LayersType;
  weathermaps: WeatherMapType[];
};
