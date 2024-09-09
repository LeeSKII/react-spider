import { useEffect, useState } from "react";

type HourlyWeather = {
  time: string;
  weather: string;
  temperature: string;
  precipitation: string;
  wind_speed: string;
  wind_direction: string;
  pressure: string;
  humidity: string;
  cloud_cover: string;
};

type WeatherForecast = {
  weekday: string;
  date: string;
  day_weather: string;
  day_wind: string;
  day_wind_strength: string;
  high_temp: string;
  low_temp: string;
  night_weather: string;
  night_wind: string;
  night_wind_strength: string;
  hourly_data: HourlyWeather[];
};

function useWeatherForecast({ cityId }: { cityId: string }) {
  const [weatherForecast, setWeatherForecast] = useState<
    WeatherForecast[] | null
  >();
  function getWeather() {
    if (!cityId) {
      return;
    }
    fetch(`${import.meta.env.VITE_API_URL}/weather/forecast/${cityId}`).then(
      async (response) => {
        const data = await response.json();
        setWeatherForecast(data);
      }
    );
  }
  useEffect(() => {
    getWeather();
  }, [cityId]);
  if (!cityId) {
    return null;
  }
  return weatherForecast;
}

export default useWeatherForecast;
