import useWeatherForecast from "@/hooks/useWeatherForecast";

export default function WeatherForecast({ cityId }: { cityId: string }) {
  const weatherForecasts = useWeatherForecast({ cityId });
  return (
    <div>
      {weatherForecasts &&
        weatherForecasts.map((forecast) => (
          <p key={forecast.time}>{forecast.temperature}</p>
        ))}
    </div>
  );
}
