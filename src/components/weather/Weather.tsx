import useWeather from "@/hooks/useWeather";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Weather({ cityId }: { cityId: string }) {
  const weather = useWeather({ cityId });
  return (
    <div>
      {weather && (
        <>
          <Card className="mt-3">
            <CardHeader>
              <CardTitle>
                <div>{weather.location.name}</div>
              </CardTitle>
              <CardDescription>
                <div>{weather.location.path}</div>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-5 gap-3">
                <div>降水：{weather.now.precipitation}</div>
                <div>当前温度：{weather.now.temperature}</div>
                <div>气压：{weather.now.pressure}</div>
                <div>湿度：{weather.now.humidity}</div>
                <div>风向：{weather.now.windDirection}</div>
                <div>风向度：{weather.now.windDirectionDegree}</div>
                <div>风速：{weather.now.windSpeed}</div>
                <div>风级：{weather.now.windScale}</div>
              </div>
              {weather.alarm.length > 0 && (
                <div className="mt-3">
                  <div>预警信息：</div>
                  <div className="grid grid-cols-2 gap-3">
                    {weather.alarm.map((item) => {
                      return (
                        <div className="mt-3">
                          <div>{item.title}</div>
                          <div className="flex items-center gap-3">
                            <div>{item.signaltype}</div>
                            <div>{item.signallevel}</div>
                            <div>{item.effective}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter>
              <div>更新时间：{weather.lastUpdate}</div>
            </CardFooter>
          </Card>
        </>
      )}
    </div>
  );
}
