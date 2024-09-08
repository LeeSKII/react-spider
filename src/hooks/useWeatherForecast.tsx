import { useEffect, useState } from "react";

type WeatherForecast = {
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
