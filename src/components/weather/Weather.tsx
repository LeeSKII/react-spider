import useWeather from "@/hooks/useWeather";

export default function Weather({ cityId }: { cityId: string }) {
  const weather = useWeather({ cityId });
  return (
    <div>
      {weather && (
        <>
          <div>{weather.location.name}</div>
          <div>{weather.location.path}</div>
          <div>{weather.now.precipitation}</div>
          <div>{weather.now.temperature}</div>
          <div>{weather.now.pressure}</div>
          <div>{weather.now.humidity}</div>
          <div>{weather.now.windDirection}</div>
          <div>{weather.now.windDirectionDegree}</div>
          <div>{weather.now.windSpeed}</div>
          <div>{weather.now.windScale}</div>
          <div>{weather.lastUpdate}</div>
        </>
      )}
    </div>
  );
}
