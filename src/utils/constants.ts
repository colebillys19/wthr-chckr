export const locationDataEmpty = {
  current: {
    dt: 0,
    sunrise: 0,
    sunset: 0,
    temp: 0,
    feels_like: 0,
    pressure: 0,
    humidity: 0,
    dew_point: 0,
    uvi: 0,
    clouds: 0,
    visibility: 0,
    wind_speed: 0,
    wind_deg: 0,
    weather: [],
  },
  daily: [],
  hourly: [],
  lat: 0,
  lon: 0,
  minutely: [],
  timezone_offset: 0,
  timezone: "",
};

export const geocoderLocationTypes = [
  "sublocality",
  "locality",
  "administrative_area_level_2",
  "administrative_area_level_1",
  "country",
];

export const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const citiesData = [
  { location: '40.7127753,-74.0059728', name: 'Manhattan, NY' },
  { location: '34.0549076,-118.242643', name: 'Los Angeles, CA' },
  { location: '41.8781136,-87.6297982', name: 'Chicago, IL' },
  { location: '32.7766642,-96.79698789999999', name: 'Dallas, TX' },
  { location: '29.7604267,-95.3698028', name: 'Houston, TX' },
  { location: '38.9059849,-77.03341790000002', name: 'Washington, DC' },
  { location: '39.9525839,-75.1652215', name: 'Philadelphia, PA' },
  { location: '33.748752,-84.38768449999999', name: 'Atlanta, GA' },
  { location: '25.7616798,-80.1917902', name: 'Miami, FL' },
  { location: '33.4483771,-112.0740373', name: 'Phoenix, AZ' },
  { location: '42.3600825,-71.0588801', name: 'Boston, MA' },
  { location: '37.7749295,-122.4194155', name: 'SF, CA' },
  { location: '42.331427,-83.0457538', name: 'Detroit, MI' },
  { location: '47.6061389,-122.3328481', name: 'Seattle, WA' },
  { location: '44.977753,-93.2650108', name: 'Minneapolis, MN' },
  { location: '39.7392358,-104.990251', name: 'Denver, CO' },
];
