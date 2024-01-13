export const formatLocationName = (results: google.maps.GeocoderResult[]) => {
  //
  const adminLevel2Res = results.find((result) =>
    result.types.includes("administrative_area_level_2")
  );
  const adminLevel2Obj = adminLevel2Res?.address_components.find((result) =>
    result.types.includes("administrative_area_level_2")
  );
  const adminLevel2 = adminLevel2Obj?.short_name || "";

  //
  const adminLevel1Res = results.find((result) =>
    result.types.includes("administrative_area_level_1")
  );
  const adminLevel1Obj = adminLevel1Res?.address_components.find((result) =>
    result.types.includes("administrative_area_level_1")
  );
  const adminLevel1 = adminLevel1Obj?.short_name || "";

  //
  const localityRes = results.find((result) =>
    result.types.includes("locality")
  );
  const localityObj = localityRes?.address_components.find((result) =>
    result.types.includes("locality")
  );
  const locality = localityObj?.short_name || "";

  //
  const neighborhoodRes = results.find((result) =>
    result.types.includes("neighborhood")
  );
  const neighborhoodObj = neighborhoodRes?.address_components.find((result) =>
    result.types.includes("neighborhood")
  );
  const neighborhood = neighborhoodObj?.short_name || "";

  if (neighborhood) {
    return `${neighborhood}, ${locality}, ${adminLevel1}`;
  }

  return `${locality || adminLevel2}, ${adminLevel1}`;
};
