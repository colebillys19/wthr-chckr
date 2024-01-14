import { getIsDayTime } from "../../utils/helpers";
import svgDict from "../../svg/svgDict";

type WeatherSvgProps = {
  id: number;
  timezoneOffset: number;
};

function WeatherSvg({ id, timezoneOffset }: WeatherSvgProps) {
  if ([800, 801, 802, 803].includes(id)) {
    const isDayTime = getIsDayTime(timezoneOffset);
    const variableId = `${id}${isDayTime ? "d" : "n"}`;
    const ComponentToRender = svgDict[variableId];
    return <ComponentToRender />;
  }

  const ComponentToRender = svgDict[id];
  return <ComponentToRender />;
}

export default WeatherSvg;
