type WeatherDisplayErrorPropsType = {
  error: string;
};

function WeatherDisplayError({ error }: WeatherDisplayErrorPropsType) {
  //

  return <div className="mb-6">{error}</div>;
}

export default WeatherDisplayError;
