import { getIsDayTime } from "../../utils/helpers";
import weatherSvgDict from "../../svg/weatherSvgDict";

type WeatherSvgPropsType = {
  id: number;
  timezoneOffset: number;
  size: number;
};

function WeatherSvg({ id, timezoneOffset, size }: WeatherSvgPropsType) {
  let idToUse: number | string = id;
  if ([800, 801, 802, 803, 804].includes(id)) {
    const isDayTime = getIsDayTime(timezoneOffset);
    idToUse = `${id}${isDayTime ? "d" : "n"}`;
  }
  const SvgComponent = weatherSvgDict[idToUse];
  return <SvgComponent size={size} />;
}

export default WeatherSvg;
