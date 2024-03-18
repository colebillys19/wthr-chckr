import { useRef } from "react";

import ArrowIcon from "./svg/iconSvgs/Components/Arrow";
// import BackIconA from "./svg/iconSvgs/Components/BackA";
// import BackIconB from "./svg/iconSvgs/Components/BackB";
import BackIconC from "./svg/iconSvgs/Components/BackC";
import BurgerIcon from "./svg/iconSvgs/Components/Burger";
import CloseIcon from "./svg/iconSvgs/Components/Close";
import MagIcon from "./svg/iconSvgs/Components/Mag";
import NextIcon from "./svg/iconSvgs/Components/Next";
import PlayIcon from "./svg/iconSvgs/Components/Play";
import PrevIcon from "./svg/iconSvgs/Components/Prev";
import SpinnerBIcon from "./svg/iconSvgs/Components/SpinnerB";

import SearchFormA from "./Containers/HomeSearch/SearchFormA";
import SearchFormB from "./Containers/HomeSearch/SearchFormB";

import {
  WeatherDisplayLarge,
  WeatherDisplaySmallTall,
  WeatherDisplaySmallWide,
} from "./BaseComponents";
import HourlyTall from "./Containers/PageLocationHourly/Components/WeatherDisplayTall";
import HourlyWide from "./Containers/PageLocationHourly/Components/WeatherDisplayWide";
import DailyTall from "./Containers/PageLocationDaily/Components/WeatherDisplayTall";
import DailyWide from "./Containers/PageLocationDaily/Components/WeatherDisplayWide";
import HomeUserTall from "./Containers/HomeUser/Components/WeatherDisplayTall";
import HomeUserWide from "./Containers/HomeUser/Components/WeatherDisplayWide";

import { mockHourlyData } from "./_baseUiMockData";

function BaseUiTest() {
  const inputRefA = useRef<HTMLInputElement | null>(null);
  const inputRefB = useRef<HTMLInputElement | null>(null);

  const handleChangeA = () => {
    console.log("handleChange");
  };

  const handleSubmitA = () => {
    console.log("handleSubmit");
  };

  const handleChangeB = () => {
    console.log("handleChange");
  };

  const handleSubmitB = () => {
    console.log("handleSubmit");
  };

  return (
    <div className="m-8">
      <div className="mb-8">
        <SearchFormA
          handleChange={handleChangeA}
          handleSubmit={handleSubmitA}
          isSubmitDisabled={false}
          ref={inputRefA}
        />
      </div>
      <div>
        <SearchFormB
          handleChange={handleChangeB}
          handleSubmit={handleSubmitB}
          isSubmitDisabled={false}
          ref={inputRefB}
        />
      </div>
      <h2 className="text-3xl font-bold my-8">Icons</h2>
      <div className="inline-grid grid-cols-3 grid-rows-3 gap-8 mb-8 justify-center items-center">
        <BackIconC />
        <BurgerIcon />
        <CloseIcon />
        <ArrowIcon />
        <MagIcon />
        <NextIcon />
        <PlayIcon />
        <PrevIcon />
      </div>
      <div>
        <SpinnerBIcon />
      </div>
      <h2 className="text-3xl font-bold my-8">Weather Displays</h2>
      <WeatherDisplayLarge
        svgId={802}
        isDayTime={false}
        temp="57°F"
        weatherName="Clear"
        feelsLike="54°F"
        windSpeed="5 mph"
        humidity="11%"
      />
      <hr className="my-8 max-w-96" />
      <WeatherDisplaySmallTall
        mainText="Winston-Salem, NC"
        svgId={802}
        isDayTime={true}
        temp="57°F"
        weatherName="Clear"
      />
      <hr className="my-8 max-w-96" />
      <WeatherDisplaySmallWide
        mainText="Winston-Salem, NC"
        svgId={802}
        isDayTime={false}
        temp="57°F"
        weatherName="Clear"
      />
      <hr className="my-8 max-w-96" />
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
      <hr className="my-8 max-w-96" />
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
      <hr className="my-8 max-w-96" />
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
      <hr className="my-8 max-w-96" />
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
      <hr className="my-8 max-w-96" />
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
      <hr className="my-8 max-w-96" />
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
  );
}

export default BaseUiTest;
