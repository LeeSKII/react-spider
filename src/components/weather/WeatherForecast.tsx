import useWeatherForecast from "@/hooks/useWeatherForecast";

export default function WeatherForecast({ cityId }: { cityId: string }) {
  const weatherForecasts = useWeatherForecast({ cityId });
  return (
    <div className="grid grid-cols-7 gap-3 place-items-center mt-3">
      {weatherForecasts &&
        weatherForecasts.map((forecast) => (
          <div key={forecast.date}>
            <div>{forecast.weekday}</div>
            <div>{forecast.date}</div>
            <div>{forecast.day_weather}</div>
            <div>{forecast.day_wind}</div>
            <div>{forecast.day_wind_strength}</div>
            <div>{forecast.high_temp}</div>
            <div>{forecast.low_temp}</div>
            <div>{forecast.night_weather}</div>
            <div>{forecast.night_wind}</div>
            <div>{forecast.night_wind_strength}</div>
          </div>
        ))}
    </div>
  );
}
