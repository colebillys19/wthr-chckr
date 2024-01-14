import { FC } from 'react';

import WeatherSvgA from "./Components/A";
import WeatherSvgB from "./Components/B";
import WeatherSvgC from "./Components/C";
import WeatherSvgD from "./Components/D";
import WeatherSvgE from "./Components/E";
import WeatherSvgF from "./Components/F";
import WeatherSvgG from "./Components/G";
import WeatherSvgH from "./Components/H";
import WeatherSvgI from "./Components/I";
import WeatherSvgJ from "./Components/J";
import WeatherSvgK from "./Components/K";
import WeatherSvgL from "./Components/L";
import WeatherSvgM from "./Components/M";
import WeatherSvgN from "./Components/N";
import WeatherSvgO from "./Components/O";

type SvgDictType = {
  [key: string]: FC;
};

const svgDict: SvgDictType = {
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

export default svgDict;
