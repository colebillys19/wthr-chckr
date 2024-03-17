import { WeatherDisplayLg } from './BaseComponents';

const mockData = {
  svgId: 601,
  isDayTime: false,
  temp: '57°F',
  weatherName: 'Clear',
  feelsLike: '54°F',
  windSpeed: '5 mph',
  humidity: '11%'
};

function BaseUiTest() {
  //

  return (
    <WeatherDisplayLg
      svgId={mockData.svgId}
      isDayTime={mockData.isDayTime}
      temp={mockData.temp}
      weatherName={mockData.weatherName}
      feelsLike={mockData.feelsLike}
      windSpeed={mockData.windSpeed}
      humidity={mockData.humidity}
    />
  );
}

export default BaseUiTest;
