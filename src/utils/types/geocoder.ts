export type AddressComponentType = {
  long_name: string;
  short_name: string;
  types: string[];
};

export type BoundsType = {
  south: number;
  west: number;
  north: number;
  east: number;
};

export type LocationType = {
  lat: number;
  lng: number;
};

export type Geometry = {
  bounds: BoundsType;
  location: LocationType;
  location_type: string;
  viewport: BoundsType;
};

export type ResultType = {
  address_components: AddressComponentType[];
  formatted_address: string;
  geometry: Geometry;
  place_id: string;
  types: string[];
};

export type ResultsType = ResultType[];

export type NameDataType = { label: string; value: string };
