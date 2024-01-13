const locationTypes = [
  "neighborhood",
  "sublocality",
  "locality",
  "administrative_area_level_2",
  "administrative_area_level_1",
  "country",
];

type NameDataType = { label: string; value: string }[];

export const getLocationNameData = (results: google.maps.GeocoderResult[]) => {
  const dataArr: NameDataType = [];

  locationTypes.forEach((locationType) => {
    const res = results.find((result) => result.types.includes(locationType));
    const obj = res?.address_components.find((result) =>
      result.types.includes(locationType)
    );
    if (obj?.short_name) {
      dataArr.push({ label: locationType, value: obj?.short_name });
    }
  });

  return dataArr;
};
