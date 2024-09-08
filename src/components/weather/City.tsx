import useWeatherProvince from "@/hooks/useWeatherCity";
import { Button } from "@/components/ui/button";

export default function Cities({
  provinceCode,
  setCityId: setCityId,
}: {
  provinceCode: string;
  setCityId: (cityId: string) => void;
}) {
  const cities = useWeatherProvince({ provinceCode });

  return (
    <div className="grid grid-cols-12 gap-2 mt-3">
      {cities &&
        cities.map((city, index) => (
          <Button
            variant="ghost"
            key={`${city.id}-${index}`}
            onClick={() => setCityId(city.id)}
          >
            {city.name}
          </Button>
        ))}
    </div>
  );
}
