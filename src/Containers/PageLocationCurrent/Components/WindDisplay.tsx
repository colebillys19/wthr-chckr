import { WeatherSvgP } from "../../../svg/Components";

type WindDisplayPropsType = {
  speedStr: string;
  deg: number;
};

function WindDisplay({ speedStr, deg }: WindDisplayPropsType) {
  //

  return (
    <div>
      <div>Wind</div>
      <div><b>{speedStr}</b></div>
      <WeatherSvgP size={60} rotation={deg} />
    </div>
  );
}

export default WindDisplay;
