import { FC, SVGProps } from 'react';

import { getIsDayTime } from "../../utils/helpers";

import {
  WeatherSvgA,
  WeatherSvgB,
  WeatherSvgC,
  WeatherSvgD,
  WeatherSvgE,
  WeatherSvgF,
  WeatherSvgG,
  WeatherSvgH,
  WeatherSvgI,
  WeatherSvgJ,
  WeatherSvgK,
  WeatherSvgL,
  WeatherSvgM,
  WeatherSvgN,
  WeatherSvgO,
} from "../../svg/Components";

type SvgComponentType = FC<SVGProps<SVGSVGElement>>;

type WeatherSvgDictAType = {
  [key: number]: SvgComponentType;
};

const weatherSvgDictA: WeatherSvgDictAType = {
  200: WeatherSvgJ,
  201: WeatherSvgJ,
  202: WeatherSvgJ,
  210: WeatherSvgI,
  211: WeatherSvgJ,
  212: WeatherSvgJ,
  221: WeatherSvgJ,
  230: WeatherSvgI,
  231: WeatherSvgI,
  232: WeatherSvgI,
  300: WeatherSvgG,
  301: WeatherSvgG,
  302: WeatherSvgG,
  310: WeatherSvgG,
  311: WeatherSvgG,
  312: WeatherSvgH,
  313: WeatherSvgG,
  314: WeatherSvgH,
  321: WeatherSvgG,
  500: WeatherSvgG,
  501: WeatherSvgH,
  502: WeatherSvgH,
  503: WeatherSvgH,
  504: WeatherSvgH,
  511: WeatherSvgK,
  520: WeatherSvgH,
  521: WeatherSvgH,
  522: WeatherSvgH,
  531: WeatherSvgH,
  600: WeatherSvgL,
  601: WeatherSvgL,
  602: WeatherSvgL,
  611: WeatherSvgK,
  612: WeatherSvgK,
  613: WeatherSvgK,
  615: WeatherSvgK,
  616: WeatherSvgK,
  620: WeatherSvgL,
  621: WeatherSvgL,
  622: WeatherSvgL,
  701: WeatherSvgO,
  711: WeatherSvgO,
  721: WeatherSvgO,
  731: WeatherSvgO,
  741: WeatherSvgO,
  751: WeatherSvgO,
  761: WeatherSvgO,
  762: WeatherSvgO,
  771: WeatherSvgM,
  781: WeatherSvgN,
};

type WeatherSvgDictBType = {
  [key: string]: SvgComponentType;
};

const weatherSvgDictB: WeatherSvgDictBType = {
  "800d": WeatherSvgA,
  "800n": WeatherSvgB,
  "801d": WeatherSvgC,
  "801n": WeatherSvgD,
  "802d": WeatherSvgE,
  "802n": WeatherSvgE,
  "803d": WeatherSvgF,
  "803n": WeatherSvgF,
  "804d": WeatherSvgF,
  "804n": WeatherSvgF,
};

// const sizeDict = { sm: 60, md: 120, lg: 240 };

type WeatherSvgPropsType = {
  id: number;
  timezoneOffset: number;
  size: "sm" | "md" | "lg";
};

function WeatherSvg({ id, timezoneOffset, size }: WeatherSvgPropsType) {
  // const sizeNum = sizeDict[size];

  if ([800, 801, 802, 803, 804].includes(id)) {
    const isDayTime = getIsDayTime(timezoneOffset);
    const idToUse = `${id}${isDayTime ? "d" : "n"}`;
    // render component and pass size prop
    const SvgComponent = weatherSvgDictB[idToUse];
    return <SvgComponent width={240} height={240} />;
  }

  // render component and pass size prop
  const SvgComponent = weatherSvgDictA[id];
  return <SvgComponent width={240} height={240} />;
}

export default WeatherSvg;

/*

type SvgComponentPropsType = {
  width: number;
  height: number;
};

const SvgComponent = ({ width, height }: SvgComponentPropsType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
  >
    ...
  </svg>
);
export default SvgComponent;


*/
