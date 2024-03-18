import {
  WeatherDisplayLarge,
  WeatherDisplaySmallTall,
  WeatherDisplaySmallWide,
} from "./BaseComponents";
import HourlyTall from "./Containers/PageLocationHourly/Components/WeatherDisplayTall";
import HourlyWide from "./Containers/PageLocationHourly/Components/WeatherDisplayWide";
import DailyTall from "./Containers/PageLocationDaily/Components/WeatherDisplayTall";
import DailyWide from "./Containers/PageLocationDaily/Components/WeatherDisplayWide";

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
      <div className="mt-3 ml-3">
        <HourlyWide
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
      <div className="mt-3 ml-3">
        <DailyTall
          dayName="Wednesday"
          svgId={802}
          summary="You can expect partly cloudy with rain in the morning, with snow in the afternoon."
          tempMax="44°F"
          tempMin="39°F"
          feelsLikeMax="41°F"
          feelsLikeMin="35°F"
          precChance="27%"
          windSpeed="13 mph"
          humidity="19%"
          rainVolume="1 mm/h"
          snowVolume=""
        />
      </div>
      <div className="mt-3 ml-3">
        <DailyWide
          dayName="Wednesday"
          svgId={802}
          summary="You can expect partly cloudy with rain in the morning, with snow in the afternoon."
          tempMax="44°F"
          tempMin="39°F"
          feelsLikeMax="41°F"
          feelsLikeMin="35°F"
          precChance="27%"
          windSpeed="13 mph"
          humidity="19%"
          rainVolume="1 mm/h"
          snowVolume=""
        />
      </div>
    </>
  );
}

export default BaseUiTest;
