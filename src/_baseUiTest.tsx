import { WeatherDisplayLg, WeatherDisplayMd, WeatherDisplaySm } from "./BaseComponents";

const mockData = {
  svgId: 802,
  isDayTime: true,
  temp: "57°F",
  weatherName: "Clear",
};

function BaseUiTest() {
  //

  return (
    <>
      <div className="mt-3 ml-3">
        <WeatherDisplayLg
          svgId={mockData.svgId}
          isDayTime={mockData.isDayTime}
          temp={mockData.temp}
          weatherName={mockData.weatherName}
          feelsLike="54°F"
          windSpeed="5 mph"
          humidity="11%"
        />
      </div>
      <div className="mt-3 ml-3">
        <WeatherDisplayMd
          locationName="Winston-Salem, NC"
          svgId={mockData.svgId}
          isDayTime={mockData.isDayTime}
          temp={mockData.temp}
          weatherName={mockData.weatherName}
        />
      </div>
      <div className="mt-3 ml-3">
        <WeatherDisplaySm
          locationName="Winston-Salem, NC"
          svgId={mockData.svgId}
          isDayTime={mockData.isDayTime}
          temp={mockData.temp}
          weatherName={mockData.weatherName}
        />
      </div>
    </>
  );
}

export default BaseUiTest;
