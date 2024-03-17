import {
  WeatherDisplayLarge,
  WeatherDisplaySmallTall,
  WeatherDisplaySmallWide,
} from "./BaseComponents";
import HourlyTall from "./Containers/PageLocationHourly/Components/WeatherDisplayTall";

function BaseUiTest() {
  //

  return (
    <>
      <div className="mt-3 ml-3">
        <WeatherDisplayLarge
          svgId={802}
          isDayTime={false}
          temp="57°F"
          weatherName="Clear"
          feelsLike="54°F"
          windSpeed="5 mph"
          humidity="11%"
        />
      </div>
      <div className="mt-3 ml-3">
        <WeatherDisplaySmallTall
          locationName="Winston-Salem, NC"
          svgId={802}
          isDayTime={true}
          temp="57°F"
          weatherName="Clear"
        />
      </div>
      <div className="mt-3 ml-3">
        <WeatherDisplaySmallWide
          locationName="Winston-Salem, NC"
          svgId={802}
          isDayTime={false}
          temp="57°F"
          weatherName="Clear"
        />
      </div>
      <div className="mt-3 ml-3">
        <HourlyTall
          svdId={802}
          isDayTime={true}
          time="2:00 PM"
          temp="44°F"
          weatherName="Clouds"
          feelsLike="42°F"
          windSpeed="4 mph"
          precChance="9%"
          rainVolume=""
          snowVolume="6 mm/h"
          humidity="1%"
        />
      </div>
    </>
  );
}

export default BaseUiTest;
