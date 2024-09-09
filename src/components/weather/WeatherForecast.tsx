import useWeatherForecast from "@/hooks/useWeatherForecast";

export default function WeatherForecast({ cityId }: { cityId: string }) {
  const weatherForecasts = useWeatherForecast({ cityId });
  return (
    <div className="grid grid-cols-1 gap-3 place-items-center mt-3">
      {weatherForecasts &&
        weatherForecasts.map((forecast) => (
          <div
            className="bg-white rounded-md p-3 flex gap-3"
            key={forecast.date}
          >
            <div
              key={forecast.date}
              className="flex flex-col gap-3 items-center justify-center rounded-xl border border-gray-300 p-3"
            >
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
            <div
              key={`${forecast.date}-hourly`}
              className="mt-3 grid grid-cols-8 gap-2"
            >
              {forecast.hourly_data &&
                forecast.hourly_data.map((hourlyWeather) => {
                  return (
                    <div
                      key={`${forecast.date}-${hourlyWeather.time}`}
                      className="bg-white rounded-md p-3 flex flex-col gap-3 border border-gray-300"
                    >
                      <div>时间：{hourlyWeather.time}</div>
                      <div className="flex items-center justify-center">
                        <img
                          width={40}
                          src={hourlyWeather.weather}
                          alt="weather icon"
                        />
                      </div>
                      <div>气温:{hourlyWeather.temperature}</div>
                      <div>降水:{hourlyWeather.precipitation}</div>
                      <div>风速:{hourlyWeather.wind_speed}</div>
                      <div>风向:{hourlyWeather.wind_direction}</div>
                      <div>气压:{hourlyWeather.pressure}</div>
                      <div>湿度:{hourlyWeather.humidity}</div>
                      <div>云量:{hourlyWeather.cloud_cover}</div>
                    </div>
                  );
                })}
            </div>
          </div>
        ))}
    </div>
  );
}
