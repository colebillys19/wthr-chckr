type WeatherDisplayErrorPropsType = {
  error: string;
};

function WeatherDisplayError({ error }: WeatherDisplayErrorPropsType) {
  //

  return <div className="mb-6 text-error">{error}</div>;
}

export default WeatherDisplayError;
