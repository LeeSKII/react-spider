import { useEffect, useState } from "react";

type Location = {
  id: string;
  name: string;
  path: string;
};

type Weather = {
  precipitation: number;
  temperature: number;
  pressure: number;
  humidity: number;
  windDirection: string;
  windDirectionDegree: number;
  windSpeed: number;
  windScale: string;
};

type AlarmInfo = {
  id: string;
  title: string;
  signaltype: string;
  signallevel: string;
  effective: string;
  eventType: string;
  severity: string;
  type: string;
};

type WeatherData = {
  location: Location;
  now: Weather;
  alarm: AlarmInfo[];
  lastUpdate: string;
};

function useWeather({ cityId }: { cityId: string }) {
  const [weather, setWeather] = useState<WeatherData | null>();
  function getWeather() {
    if (!cityId) {
      return;
    }
    fetch(`${import.meta.env.VITE_API_URL}/weather/now/${cityId}`).then(
      async (response) => {
        const data = await response.json();
        setWeather(data.data);
      }
    );
  }
  useEffect(() => {
    getWeather();
  }, [cityId]);
  if (!cityId) {
    return null;
  }
  return weather;
}

export default useWeather;
