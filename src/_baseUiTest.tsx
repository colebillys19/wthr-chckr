import {
  WeatherDisplayLarge,
  WeatherDisplaySmallTall,
  WeatherDisplaySmallWide,
} from "./BaseComponents";
import HourlyTall from "./Containers/PageLocationHourly/Components/WeatherDisplayTall";
import HourlyWide from "./Containers/PageLocationHourly/Components/WeatherDisplayWide";
import DailyTall from "./Containers/PageLocationDaily/Components/WeatherDisplayTall";
import DailyWide from "./Containers/PageLocationDaily/Components/WeatherDisplayWide";
import HomeUserTall from './Containers/HomeUser/Components/WeatherDisplayTall';
import HomeUserWide from './Containers/HomeUser/Components/WeatherDisplayWide';

const mockHourlyData = [
  {
    dt: 1710781200,
    temp: 78.15,
    feels_like: 79.66,
    pressure: 1013,
    humidity: 85,
    dew_point: 73.27,
    uvi: 8.38,
    clouds: 83,
    visibility: 10000,
    wind_speed: 15.5,
    wind_deg: 279,
    wind_gust: 19.95,
    weather: [
      {
        id: 500,
        main: "Rain",
        description: "light rain",
        icon: "10d",
      },
    ],
    pop: 0.89,
    rain: {
      "1h": 0.28,
    },
  },
  {
    dt: 1710784800,
    temp: 77.34,
    feels_like: 78.67,
    pressure: 1013,
    humidity: 83,
    dew_point: 71.78,
    uvi: 8.31,
    clouds: 66,
    visibility: 10000,
    wind_speed: 14.72,
    wind_deg: 295,
    wind_gust: 18.52,
    weather: [
      {
        id: 500,
        main: "Rain",
        description: "light rain",
        icon: "10d",
      },
    ],
    pop: 0.87,
    rain: {
      "1h": 0.11,
    },
  },
  {
    dt: 1710788400,
    temp: 76.3,
    feels_like: 77.43,
    pressure: 1013,
    humidity: 81,
    dew_point: 70.03,
    uvi: 6.92,
    clouds: 78,
    visibility: 10000,
    wind_speed: 17.54,
    wind_deg: 304,
    wind_gust: 20.02,
    weather: [
      {
        id: 803,
        main: "Clouds",
        description: "broken clouds",
        icon: "04d",
      },
    ],
    pop: 0.29,
  },
];

function BaseUiTest() {
  //

  return (
    <>
      <div className="mt-5 ml-5">
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
      <hr className="my-5" />
      <div className="ml-5">
        <WeatherDisplaySmallTall
          mainText="Winston-Salem, NC"
          svgId={802}
          isDayTime={true}
          temp="57°F"
          weatherName="Clear"
        />
      </div>
      <hr className="my-5" />
      <div className="ml-5">
        <WeatherDisplaySmallWide
          mainText="Winston-Salem, NC"
          svgId={802}
          isDayTime={false}
          temp="57°F"
          weatherName="Clear"
        />
      </div>
      <hr className="my-5" />
      <div className="ml-5">
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
      <hr className="my-5" />
      <div className="ml-5">
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
      <hr className="my-5" />
      <div className="ml-5">
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
      <hr className="my-5" />
      <div className="ml-5">
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
      <hr className="my-5" />
      <div className="ml-5">
        <HomeUserTall
          locationName="St. Petersburg, FL"
          currentTime="11:11 PM"
          svgId={802}
          isDayTime={false}
          temp="66°F"
          weatherName="Clouds"
          feelsLike="66°F"
          windSpeed="13 mph"
          humidity="19%"
          hourlyDataArr={mockHourlyData}
          timezoneOffset={-14400}
          sunrise={1710761769}
          sunset={1710805246}
        />
      </div>
      <hr className="my-5" />
      <div className="ml-5">
        <HomeUserWide
          locationName="St. Petersburg, FL"
          currentTime="11:11 PM"
          svgId={802}
          isDayTime={false}
          temp="66°F"
          weatherName="Clouds"
          feelsLike="66°F"
          windSpeed="13 mph"
          humidity="19%"
          hourlyDataArr={mockHourlyData}
          timezoneOffset={-14400}
          sunrise={1710761769}
          sunset={1710805246}
        />
      </div>
    </>
  );
}

export default BaseUiTest;
