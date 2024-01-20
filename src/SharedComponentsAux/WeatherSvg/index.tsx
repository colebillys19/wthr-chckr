import weatherSvgDict from "../../svg/weatherSvgDict";

type WeatherSvgPropsType = {
  id: number;
  isDayTime: boolean;
  size: number;
};

function WeatherSvg({ id, isDayTime, size }: WeatherSvgPropsType) {
  let idToUse: number | string = id;
  if ([800, 801, 802, 803, 804].includes(id)) {
    idToUse = `${id}${isDayTime ? "d" : "n"}`;
  }
  const SvgComponent = weatherSvgDict[idToUse];
  return <SvgComponent size={size} />;
}

export default WeatherSvg;