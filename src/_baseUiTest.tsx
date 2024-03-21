import { useRef, FormEvent } from "react";

import ArrowIcon from "./svg/iconSvgs/Components/Arrow";
import BackIconC from "./svg/iconSvgs/Components/BackC";
import BurgerIcon from "./svg/iconSvgs/Components/Burger";
import CloseIcon from "./svg/iconSvgs/Components/Close";
import MagIconB from "./svg/iconSvgs/Components/MagB";
import NextIcon from "./svg/iconSvgs/Components/Next";
import PlayIcon from "./svg/iconSvgs/Components/Play";
import PrevIcon from "./svg/iconSvgs/Components/Prev";
import SpinnerBIcon from "./svg/iconSvgs/Components/SpinnerB";

import SearchForm from "./Containers/HomeSearch/Components/SearchForm";

import {
  WeatherDisplayLarge,
  WeatherDisplaySmallTall,
  WeatherDisplaySmallWide,
  TextField,
  ButtonPrimary,
  ButtonSecondary,
  LinkButton,
  Link,
} from "./BaseComponents";
import Hourly from "./Containers/PageLocationHourly/Components/WeatherDisplay";
import Daily from "./Containers/PageLocationDaily/Components/WeatherDisplay";
import HomeUser from "./Containers/HomeUser/Components/WeatherDisplay";

import { mockHourlyData } from "./_baseUiMockData";

function BaseUiTest() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("handleSubmit");
  };

  return (
    <div className="m-8">
      <div className="mb-8">
        <SearchForm
          handleChange={() => null}
          handleSubmit={handleSubmit}
          isSubmitDisabled={false}
          ref={inputRef}
        />
      </div>
      <div className="mb-8">
        <TextField
          handleChange={() => null}
          id="textfield"
          placeholder="Enter address, city, or zip"
          type="text"
        />
      </div>
      <div className="mb-8">
        <ButtonPrimary handleClick={() => null} text="Primary" isDisabled />
      </div>
      <div className="mb-8">
        <ButtonSecondary handleClick={() => null} text="Secondary" />
      </div>
      <div className="mb-8">
        <LinkButton handleClick={() => null} text="Link button" isDisabled />
      </div>
      <div>
        <Link href="#" text="Link" />
      </div>
      <h2 className="text-3xl font-bold my-8">Icons</h2>
      <div className="inline-grid grid-cols-3 grid-rows-3 gap-8 mb-8 justify-center items-center">
        <BackIconC />
        <BurgerIcon />
        <CloseIcon />
        <ArrowIcon />
        <MagIconB />
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
      <Hourly
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
      <Daily
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
      <HomeUser
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
